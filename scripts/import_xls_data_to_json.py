import sys
import pandas as pd
import json
import re

import sys
import pandas as pd
import json
import re

def parse_domain_sheet(domain_df, domain_nickname):
    """
    Parses the DataFrame of a single "Domain X" sheet and extracts all
    objectives and their associated practices.
    """
    objectives_dict = {}
    current_objective_name = None
    current_objective_index = 0
    
    # --- FIX: Added state variable to track maturity ---
    current_maturity_string = "CTI-Unknown"
    
    # Find the header row by looking for 'SCORE' in the 5th column (index 4)
    # We search from row 3 (index 2) onwards
    try:
        # Convert column 4 to string, strip whitespace, and find 'SCORE'
        score_col_as_str = domain_df.iloc[2:, 4].astype(str).str.strip()
        header_row_index = domain_df.iloc[2:][score_col_as_str == 'SCORE'].index[0]
    except IndexError:
        print(f"Error: Could not find header row (looking for 'SCORE') in sheet for domain '{domain_nickname}'. Skipping sheet.")
        return {}

    # Iterate through all rows *after* the header
    for index, row in domain_df.iloc[header_row_index + 1:].iterrows():
        # Convert row to list of strings, handling NaNs
        row_values = [str(cell) if pd.notna(cell) else "" for cell in row]
        
        # Get cell values
        obj_name_cell = row_values[1].strip()      # Column B
        maturity_cell = row_values[2].strip()      # Column C
        practice_cell = row_values[3].strip()      # Column D
        max_cell = row_values[5].strip()           # Column F

        # --- 1. Check if this is a "Subtotal" or "Domain Total" row ---
        if "Subtotal" in practice_cell or "Domain Total" in practice_cell:
            current_objective_name = None # Reset
            current_maturity_string = "CTI-Unknown" # --- FIX: Reset state ---
            continue # Skip this row

        # --- 2. Check if this row is a new OBJECTIVE ---
        elif obj_name_cell and not practice_cell and not max_cell:
            current_objective_name = obj_name_cell
            current_objective_index += 1
            current_maturity_string = "CTI-Unknown" # --- FIX: Reset state ---
            
            obj_id = f"{domain_nickname}-{current_objective_index}"
            
            # Clean the objective name (remove "1. ", "2. ", etc.)
            cleaned_name = re.sub(r'^\d+\.\s*', '', current_objective_name).strip()
            
            if current_objective_name not in objectives_dict:
                objectives_dict[current_objective_name] = {
                    "id": obj_id,
                    "name": cleaned_name,
                    "practices": []
                }

        # --- 3. Check if this row is a PRACTICE ---
        elif practice_cell and max_cell.isdigit() and current_objective_name:
            
            # --- FIX: Logic to track and reuse maturity level ---
            practice_maturity_num = re.sub(r'[^\d]', '', maturity_cell) # Gets number from Col C
            
            if practice_maturity_num:
                # A new maturity is specified (e.g., "CTI 1"), update the state
                current_maturity_string = f"CTI{practice_maturity_num}"
            else:
                # Column C is blank, reuse the last known maturity state
                # If no state was ever set, it will be "CTI-Unknown"
                pass 
            # --- End of Fix ---
            
            # Extract the letter (a, b, c) from the practice text
            practice_letter_match = re.match(r'^([a-z])\.\s+', practice_cell)
            practice_letter = practice_letter_match.group(1) if practice_letter_match else 'x'
            
            # Create a unique practice ID
            practice_id = f"{domain_nickname}-{current_objective_index}-{practice_letter}"
            
            practice_obj = {
                "id": practice_id,
                "maturity": current_maturity_string, # --- FIX: Use state variable ---
                "text": practice_cell,
                "max": int(max_cell),
                "score": 0,
                "targetScore": 0,
                "impact": 1,
                "loe": 1,
                "evidence": "",
                "poc": "",
                "targetDate": "",
                "notes": ""
            }
            
            # Add the practice to the *current* objective
            if current_objective_name in objectives_dict:
                objectives_dict[current_objective_name]["practices"].append(practice_obj)
            else:
                print(f"Warning: Found practice for unknown objective '{current_objective_name}'. Skipping.")

        # --- 4. Check if this is a blank row ---
        elif not obj_name_cell and not practice_cell:
            pass # It's a blank row, do nothing, keep current state
            
    return objectives_dict

def main(input_xlsx_path, output_json_path):
    """
    Main function to read the XLSX file, process all domain sheets,
    and write the final JSON file.
    """
    print(f"Loading workbook: {input_xlsx_path}")
    try:
        xls = pd.ExcelFile(input_xlsx_path)
    except FileNotFoundError:
        print(f"Error: Input file not found at {input_xlsx_path}")
        sys.exit(1)
    except Exception as e:
        print(f"Error: Could not load Excel file. Ensure 'openpyxl' is installed. Error: {e}")
        sys.exit(1)

    CMM_DATA = {"domains": [], "objectives": {}}
    
    # Find all sheet names that start with "Domain "
    domain_sheets = [s for s in xls.sheet_names if s.startswith('Domain ')]
    
    # Sort sheets by the domain number (e.g., "Domain 1", "Domain 2", ...)
    try:
        domain_sheets.sort(key=lambda s: int(s.split(' ')[1].split(' ')[0]))
    except Exception as e:
        print(f"Warning: Could not perfectly sort domain sheets. Processing in default order. Error: {e}")

    print(f"Found {len(domain_sheets)} domain sheets to process...")

    for sheet_name in domain_sheets:
        try:
            # Extract nickname from sheet name, e.g., "Domain 1 - ASSET" -> "ASSET"
            domain_nickname = sheet_name.split(' - ')[-1].strip()
            print(f"Processing sheet: '{sheet_name}' (Domain: {domain_nickname})")
            
            # Load the specific sheet (header=None to load all rows as data)
            domain_df = pd.read_excel(xls, sheet_name=sheet_name, header=None)
            
            # --- 1. Get Domain Info (for the `domains` array) ---
            
            # Domain full name is in row 4 (index 3), column A (index 0)
            # Convert to string first, then strip
            domain_full_name = str(domain_df.iloc[3, 0]).strip()
            
            # Find the "Domain Total" row to get the max score
            # Search in Column D (index 3)
            # Convert column 3 to string, strip whitespace, and find 'Domain Total'
            total_col_as_str = domain_df[3].astype(str).str.strip() # Changed from domain_df[0]
            total_row_df = domain_df[total_col_as_str == 'Domain Total']
            if total_row_df.empty:
                print(f"Warning: Could not find 'Domain Total' row in '{sheet_name}'. Skipping domain.")
                continue
                
            # Max score is in Column F (index 5) of that row
            # Convert to float first (in case it's "54.0") then to int
            domain_max = int(float(total_row_df.iloc[0, 5])) # Changed from iloc[0, 2]
            
            # Add to the `domains` list
            CMM_DATA["domains"].append({
                "id": domain_nickname,
                "name": domain_full_name,
                "nickname": domain_nickname,
                "max": domain_max
            })
            
            # --- 2. Parse Objectives and Practices ---
            domain_objectives = parse_domain_sheet(domain_df, domain_nickname)
            CMM_DATA["objectives"][domain_nickname] = domain_objectives

        except Exception as e:
            print(f"Error: Failed to process sheet '{sheet_name}'. Error: {e}")

    # --- 3. Write the output file ---
    print(f"\nProcessing complete. Writing to {output_json_path}...")
    
    try:
        # Convert the Python dict to a pretty-printed JSON string
        json_data = json.dumps(CMM_DATA, indent=4)
        
        with open(output_json_path, 'w', encoding='utf-8') as f:
            f.write(json_data)
            
        print("Success! JSON data file created.")

    except Exception as e:
        print(f"Error: Could not write output file. Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python convert_cmm_xlsx_to_json.py <input_xlsx_path> <output_json_path>")
        print("Example: python convert_cmm_xlsx_to_json.py \"CTI-CMM Assessment v1.0.xlsx\" cti-cmm-data.json")
        sys.exit(1)
        
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    main(input_file, output_file)



