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
        
        # Get cell values, stripping whitespace
        obj_name_cell = row_values[1].strip()      # Column B
        maturity_cell = row_values[1].strip()      # Column B (also)
        practice_text_cell = row_values[3].strip() # Column D
        total_cell = row_values[3].strip()         # Column D (Was row_values[0])

        # Check for a new Objective
        # Objectives look like "1. SOME TEXT" or "2. MORE TEXT"
        if obj_name_cell and obj_name_cell[0].isdigit() and '.' in obj_name_cell:
            current_objective_name = obj_name_cell
            # Extract the number (e.g., "1") from "1. IMPROVE ASSET VISIBILITY"
            current_objective_index = int(re.match(r"^\d+", current_objective_name).group(0))
            objectives_dict[current_objective_name] = []
        
        # Check for a Practice
        # Practices have "CTI X" in Column B and text in Column D
        elif maturity_cell.startswith('CTI') and practice_text_cell and current_objective_name:
            try:
                # The practice letter (e.g., 'a', 'b') is the first char of the text
                practice_letter = practice_text_cell.lstrip()[0]
                
                # Construct the ID: e.g., "ASSET-1-a"
                practice_id = f"{domain_nickname}-{current_objective_index}-{practice_letter}"
                
                # Max score is in Column F (index 5)
                practice_max = int(float(row_values[5]))
                
                # Create the practice data object with defaults
                practice = {
                    "id": practice_id,
                    "maturity": maturity_cell,
                    "text": practice_text_cell,
                    "max": practice_max,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
                
                objectives_dict[current_objective_name].append(practice)
            
            except (ValueError, TypeError) as e:
                print(f"Warning: Could not parse practice row {index} for '{current_objective_name}'. Text: '{practice_text_cell}'. Error: {e}")
            except Exception as e:
                print(f"Warning: An unexpected error occurred at row {index} for '{current_objective_name}'. Error: {e}")

        # Check for the end of the domain section
        elif total_cell == 'Domain Total':
            break # Stop processing this sheet

    return objectives_dict

def main(input_xlsx_path, output_js_path):
    """
    Main function to read the XLSX file, process all domain sheets,
    and write the final JS file.
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
    print(f"\nProcessing complete. Writing to {output_js_path}...")
    
    try:
        # Convert the Python dict to a pretty-printed JSON string
        json_data = json.dumps(CMM_DATA, indent=4)
        
        # Wrap the JSON in the JavaScript variable assignment
        output_content = f"""/*
 * CTI-CMM ASSESSMENT DATA FILE
 * ----------------------------
 * This file contains all the domains, objectives, and practices
 * for the CTI-CMM Assessment Tool, automatically generated from:
 * {input_xlsx_path}
 */

const CMM_DATA = {json_data};
"""
        
        with open(output_js_path, 'w', encoding='utf-8') as f:
            f.write(output_content)
            
        print("Success! JavaScript data file created.")

    except Exception as e:
        print(f"Error: Could not write output file. Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python convert_cmm_xlsx_to_js.py <input_xlsx_path> <output_js_path>")
        print("Example: python convert_cmm_xlsx_to_js.py \"CTI-CMM Assessment v1.0.xlsx\" cti-cmm-data.js")
        sys.exit(1)
        
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    main(input_file, output_file)



