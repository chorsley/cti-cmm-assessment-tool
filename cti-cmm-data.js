/*
 * CTI-CMM ASSESSMENT DATA FILE
 * ----------------------------
 * This file contains all the domains, objectives, and practices
 * for the CTI-CMM Assessment Tool, automatically generated from:
 * /Users/ch/Downloads/CTI-CMM Assessment v1.0.xlsx
 */

const CMM_DATA = {
    "domains": [
        {
            "id": "ASSET",
            "name": "nan",
            "nickname": "ASSET",
            "max": 54
        },
        {
            "id": "THREAT",
            "name": "nan",
            "nickname": "THREAT",
            "max": 96
        },
        {
            "id": "RISK",
            "name": "nan",
            "nickname": "RISK",
            "max": 51
        },
        {
            "id": "ACCESS",
            "name": "nan",
            "nickname": "ACCESS",
            "max": 48
        },
        {
            "id": "SITUATION",
            "name": "nan",
            "nickname": "SITUATION",
            "max": 39
        },
        {
            "id": "RESPONSE",
            "name": "nan",
            "nickname": "RESPONSE",
            "max": 78
        },
        {
            "id": "THIRD-PARTIES",
            "name": "nan",
            "nickname": "THIRD-PARTIES",
            "max": 93
        },
        {
            "id": "FRAUD",
            "name": "nan",
            "nickname": "FRAUD",
            "max": 81
        },
        {
            "id": "WORKFORCE",
            "name": "nan",
            "nickname": "WORKFORCE",
            "max": 69
        },
        {
            "id": "ARCHITECTURE",
            "name": "nan",
            "nickname": "ARCHITECTURE",
            "max": 54
        },
        {
            "id": "PROGRAM",
            "name": "nan",
            "nickname": "PROGRAM",
            "max": 72
        }
    ],
    "objectives": {
        "ASSET": {
            "1. IMPROVE ASSET VISIBILITY": [
                {
                    "id": "ASSET-1-a",
                    "maturity": "CTI 1",
                    "text": "a. Assets are accurately inventoried and classified and CTI team members have access to appropriate systems to understand the organization\u2019s tech stack.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "ASSET-1-b",
                    "maturity": "CTI 2",
                    "text": "b. Alerts about previously unidentified assets are delivered in a timely manner to identify and remediate risk of exposure.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "ASSET-1-d",
                    "maturity": "CTI 3",
                    "text": "d. Intelligence regularly includes prescriptive threat analysis and recommendations to support asset discovery and risk assessments.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "2. SAFEGUARD ASSETS": [
                {
                    "id": "ASSET-2-a",
                    "maturity": "CTI 1",
                    "text": "a. CTI team members maintain an understanding of \u201ccrown jewels assets\u201d informed based on potential to disrupt business operations and cyber threat landscape trends. This prioritization is\u00a0based on their targeting, criticality, vulnerability, and potential impact in case of attack or exposure.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "ASSET-2-b",
                    "maturity": "CTI 2",
                    "text": "b. Intelligence supports proactive risk mitigation efforts by providing contextualized insights, predictive assessments, and alerting about threats and vulnerabilities that could affect priority assets.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "ASSET-2-c",
                    "maturity": "CTI 3",
                    "text": "c. Intelligence includes prescriptive threat analysis and recommendations to protect current and pre-deployed assets and change configurations based on the threat environment.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "3. ACCELERATE DETECTION OF ASSET-RELATED THREATS": [
                {
                    "id": "ASSET-3-a",
                    "maturity": "CTI 1",
                    "text": "a. CTI team members maintain regular visibility into changes in the cyber threat landscape, triaging intelligence sources to determine relevance and relative impact of newly discovered threat campaigns and vulnerabilities to organizational assets.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "ASSET-3-c",
                    "maturity": "CTI 2",
                    "text": "c. Alert dissemination is integrated into repeatable workflows for ASSET domain triage and rapid response, advancing early detection warnings for priority assets.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "ASSET-3-f",
                    "maturity": "CTI 3",
                    "text": "f. Continuous monitoring is extended to include all assets across each tier level.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ]
        },
        "THREAT": {
            "1. Enhance Attack Prevention and Preparedness": [
                {
                    "id": "THREAT-1-a",
                    "maturity": "CTI1",
                    "text": "a. Indicators of compromise/behavior/attack (IoC/B/As) are collected from external threat reports and delivered to security operations teams in a mostly ad hoc manner (e.g., over email) to support prevention and blocking.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "THREAT-1-c",
                    "maturity": "CTI2",
                    "text": "c. IoC/B/As are collected from external feeds (usually segmented by specific types of threats, e.g., phishing hosts, botnets, command-and-control (C2) hosts) and delivered directly to security technologies (e.g., security information and event management (SIEM) or firewall solutions) in a mostly automated fashion.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "THREAT-1-g",
                    "maturity": "CTI3",
                    "text": "g. IoC/B/As are collected at scale from external feeds covering most types of threats (e.g., phishing infrastructure, botnets, C2 hosts) and delivered directly to relevant security technologies automatically.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "2. Improve Detection Engineering": [
                {
                    "id": "THREAT-2-a",
                    "maturity": "CTI1",
                    "text": "a. Alerts about adversaries actively posing potential threats to the organization are delivered in a mostly ad hoc manner to support new detection logic.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "THREAT-2-b",
                    "maturity": "CTI2",
                    "text": "b. Threat profiling is routinely developed to support gap analysis activities and prioritize detection controls based on relevant threats against the organization.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "THREAT-2-d",
                    "maturity": "CTI3",
                    "text": "d. Threat modeling is routinely developed to identify and contextualize priority threats relevant to the organization.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "3. Enhance Threat Hunting": [
                {
                    "id": "THREAT-3-a",
                    "maturity": "CTI1",
                    "text": "a. Alerts about emerging atomic indicators are provided to generate awareness and reactive hunt operations at least in an ad hoc manner with minimal contextualization using open sources.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "THREAT-3-c",
                    "maturity": "CTI2",
                    "text": "c. Threat hunt operations are routinely informed by intelligence about threat actor TTPs and behaviors, contextualized using open and commercial sources.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "THREAT-3-e",
                    "maturity": "CTI3",
                    "text": "e. RFIs are issued and fulfilled to provide context for new, original threat hunting hypotheses/abstracts (see the TaHiTI Threat Hunting Methodology for further details).",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "4. Inform Offensive Security Operations": [
                {
                    "id": "THREAT-4-a",
                    "maturity": "CTI1",
                    "text": "a. Alerts about emerging tactics, techniques, and exploit campaigns are tested in an ad hoc manner with limited contextualization using open sources.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "THREAT-4-b",
                    "maturity": "CTI2",
                    "text": "b. Insights about novel techniques, procedures, and technical exploits, typically derived from open or commercial sources, are provided regularly to inform relevant offensive security operations.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "THREAT-4-d",
                    "maturity": "CTI3",
                    "text": "d. Alerts about new and emerging attack procedures and technical exploits are delivered regularly and typically contain enough context to enable precise recreation of observed behaviors.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "5. Improve Patch Prioritization": [
                {
                    "id": "THREAT-5-a",
                    "maturity": "CTI1",
                    "text": "a. Alerts are provided in an ad hoc manner for critical vulnerabilities that are experiencing viral popularity in mainstream open sources.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "THREAT-5-b",
                    "maturity": "CTI2",
                    "text": "b. Vulnerability management is consistently informed in a repeatable manner for critical and high vulnerabilities that are seeing viral popularity in mainstream open and cybercriminal underground sources.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "THREAT-5-d",
                    "maturity": "CTI3",
                    "text": "d. Patch management is consistently driven by routine CTI products that prescribe key patches or mitigations that need to be implemented based on the probability of exploitation against the enterprise.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ]
        },
        "RISK": {
            "1. Align CTI Practices to Risk Management Strategies": [
                {
                    "id": "RISK-1-a",
                    "maturity": "CTI1",
                    "text": "a. The organization\u2019s risk management strategy and framework are understood, at least in a basic manner.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "RISK-1-c",
                    "maturity": "CTI2",
                    "text": "c. CTI practices are initially aligned to the organization\u2019s risk management strategy and framework at least in an ad hoc manner, focused on translating insights to risk in limited CTI processes.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "RISK-1-f",
                    "maturity": "CTI3",
                    "text": "f. CTI practices are aligned and synchronized with a risk framework adopted by the organization, such as NIST 800-30 and the NIST Cybersecurity Framework.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "2. Improve Risk Decisions, Assessments, and Controls": [
                {
                    "id": "RISK-2-a",
                    "maturity": "CTI1",
                    "text": "a. Threats are identified, analyzed, and triaged for response at least in an ad hoc manner and mostly independent of the organization\u2019s risk management strategy.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "RISK-2-d",
                    "maturity": "CTI2",
                    "text": "d. A process for integrating CTI into risk assessments is created and used to inform basic risk controls and mitigations efforts.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "RISK-2-g",
                    "maturity": "CTI3",
                    "text": "g. CTI practices proactively advise and inform risk mitigation and management strategies across the organization, including risk scenario planning and simulation exercises. (see SITUATION)",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ]
        },
        "ACCESS": {
            "1. Accelerate Remediation of Identity-Related Threats": [
                {
                    "id": "ACCESS-1-a",
                    "maturity": "CTI1",
                    "text": "a. Alerts about leaked or compromised credentials and identities from open and commercial sources are delivered at least in an ad hoc manner.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "ACCESS-1-c",
                    "maturity": "CTI2",
                    "text": "c. Alert dissemination is integrated into repeatable and automated workflows for ACCESS domain rapid triage and response.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "ACCESS-1-e",
                    "maturity": "CTI3",
                    "text": "e. Continuous monitoring is extended to identity-related threats posed by third parties. (see THIRD-PARTIES)",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "2. Fortify Identity and Access Protection": [
                {
                    "id": "ACCESS-2-a",
                    "maturity": "CTI1",
                    "text": "a. The CTI program maintains basic awareness and monitoring of identity-related threats to logical and physical access controls \u2014 including vulnerability exploitations and security control configurations \u2014 that lead to immediate COAs.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "ACCESS-2-c",
                    "maturity": "CTI2",
                    "text": "c. The CTI program maintains a comprehensive understanding of identity-related threats to logical and physical access controls relevant to the organization\u2019s high risk assets. (see ASSET and RISK)",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "ACCESS-2-f",
                    "maturity": "CTI3",
                    "text": "f. Insights regularly inform the creation of threat scenarios and simulations to test, validate, and adjust authentication and access controls and mitigations. (see THREAT)",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ]
        },
        "SITUATION": {
            "1. Maintain Comprehensive Understanding of the Cyber Threat Landscape (CTL)": [
                {
                    "id": "SITUATION-1-a",
                    "maturity": "CTI1",
                    "text": "a. Situational awareness alerts and updates are collected from open, closed, and commercial sources.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "SITUATION-1-d",
                    "maturity": "CTI2",
                    "text": "d. A systematic process, such as the one described in the ENISA Cybersecurity Threat Landscape Methodology, is implemented to routinely produce CTLs.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "SITUATION-1-j",
                    "maturity": "CTI3",
                    "text": "j. CTL scope is extended to include deliverables that regularly provide prescriptive intelligence to inform long-term strategic decision-making and align with risk reduction strategies. (see RISK)",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ]
        },
        "RESPONSE": {
            "1. Strengthen Pre-Incident Preparedness": [
                {
                    "id": "RESPONSE-1-a",
                    "maturity": "CTI1",
                    "text": "a. Event and incident data is collected and correlated with external open and commercial sources to rapidly detect and remediate threats in an automated manner.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "RESPONSE-1-c",
                    "maturity": "CTI2",
                    "text": "c. Events detected by the IR team are regularly enriched with CTI insights into the threat actor, TTPs, enriching IOCs and context to improve response efficacy.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "RESPONSE-1-e",
                    "maturity": "CTI3",
                    "text": "e. CTI insights include threat landscape assessments and prescriptive recommendations to enable proactive detection controls and event response prioritization. (see SITUATION)",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "2. Improve Incident Analysis and Response": [
                {
                    "id": "RESPONSE-2-a",
                    "maturity": "CTI1",
                    "text": "a. Incident details are reviewed and mapped to a cyber kill chain or related industry framework (e.g., Lockheed Martin\u2019s Cyber Kill, MITRE ATT&CK, the Diamond Model of Intrusion Analysis, etc.), and findings are shared in real time to the IR team.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "RESPONSE-2-c",
                    "maturity": "CTI2",
                    "text": "c. Manual research and pivoting on TTPs and IoCs is being conducted to contextualize incidents and improve remediation.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "RESPONSE-2-f",
                    "maturity": "CTI3",
                    "text": "f. Incident IoCs and related intelligence are ingested into a threat intelligence platform (TIP), using automation that maintains mapping verbosity to industry frameworks within the TIP\u2019s ontology. This empowers orchestration to existing security controls for added enrichmennt and actions by appropriate controls teams.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "3. Enhance Post-Incident Recovery and Continuity of Operations": [
                {
                    "id": "RESPONSE-3-a",
                    "maturity": "CTI1",
                    "text": "a. Incident findings, lessons learned, and improvement opportunities are captured within an internal knowledge base or ticket. Post-morterms are discussed internally and briefed to leadership on an ad hoc basis.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "RESPONSE-3-c",
                    "maturity": "CTI2",
                    "text": "c. Incident findings, lessons learned, and improvement opportunities are captured within an internal knowledge base or ticket. Post-morterms are discussed internally and briefed to leadership on an ad hoc basis.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "RESPONSE-3-i",
                    "maturity": "CTI3",
                    "text": "i. Metrics are established and tuned based on decisions made from Incident post-mortems and related leadership actions.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ]
        },
        "THIRD-PARTIES": {
            "1. Accelerate Detection of Third-Party Threats": [
                {
                    "id": "THIRD-PARTIES-1-a",
                    "maturity": "CTI1",
                    "text": "a. A variety of intelligence sources are employed to detect third-party compromise of suppliers.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "THIRD-PARTIES-1-c",
                    "maturity": "CTI2",
                    "text": "c. Intelligence about threats against third parties regularly includes contextualization to identify and reduce risks posed by current threats.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "THIRD-PARTIES-1-g",
                    "maturity": "CTI3",
                    "text": "g. Specalized third-party risk management (TPRM) tooling is used to catalog, monitor, and record changes to vendor risk ratings based on the threat environment.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "2. Mitigate Third-Party Risk Exposure": [
                {
                    "id": "THIRD-PARTIES-2-a",
                    "maturity": "CTI1",
                    "text": "a. Selected personnel are assigned to monitor and triage potential third-party exposures involving top-tier vendors.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "THIRD-PARTIES-2-d",
                    "maturity": "CTI2",
                    "text": "d. Evaluate potential suppliers cybersecurity practices, recommend internal risk mitigations, nad if a supplier is determiend to introduce an unacceptable level of risk, use alternative suppliers.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "THIRD-PARTIES-2-h",
                    "maturity": "CTI3",
                    "text": "h. Monitoring is extended to include all vendors across each tier level.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "3. Improve Time to Response": [
                {
                    "id": "THIRD-PARTIES-3-a",
                    "maturity": "CTI1",
                    "text": "a. Contracts are available and include Third-Party main contacts and communication channels.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "THIRD-PARTIES-3-b",
                    "maturity": "CTI2",
                    "text": "b. Playbooks and SLAs are documented and Playbooks are updated after each incident.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "THIRD-PARTIES-3-e",
                    "maturity": "CTI3",
                    "text": "e. The type of data hosted by Third-Party is documented.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ]
        },
        "FRAUD": {
            "1. Mitigate Financial Fraud": [
                {
                    "id": "FRAUD-1-a",
                    "maturity": "CTI1",
                    "text": "a. To combat exploitation and threat actor targeting, social media and open source sites are reviewed for posts of compromised customer credentials, gift cards, coupon scams, and credit cards in a mostly ad hoc manner to support mitigation or prevention of fraudulent activity.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "FRAUD-1-e",
                    "maturity": "CTI2",
                    "text": "e. Integration of ISAC and peer sharing into the organization's processes is done in a mostly ad-hoc manner.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "FRAUD-1-i",
                    "maturity": "CTI3",
                    "text": "i. Proactive tracking of fraud actor infrastructure and membership in private chat channels is done through automated collections and tooling.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "2. Improve Brand Impersonation Protection": [
                {
                    "id": "FRAUD-2-a",
                    "maturity": "CTI1",
                    "text": "a. Manual intelligence collection and analysis is done ad hoc for adversary targeting including brand impersonation on corporate domains, and social media accounts impersonating corporate brands and individuals.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "FRAUD-2-e",
                    "maturity": "CTI2",
                    "text": "e. Automation is used to detect malvertising campaigns and SEO poisoning for disruption actions.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "FRAUD-2-i",
                    "maturity": "CTI3",
                    "text": "i. The CTI team provides actionable intelligence for implementation of canary tokens on AWS keys, sensitive documents, hostnames and URL\u2019s (web app exposed) to detect unwanted access or attempts to access.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "3. Enhance Account Takeover Protection": [
                {
                    "id": "FRAUD-3-a",
                    "maturity": "CTI1",
                    "text": "a. The CTI team tracks forums, sites, and threat actors associated with fraud and abuse targeting their brand(s) to facilitate customer ATO attacks.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "FRAUD-3-c",
                    "maturity": "CTI2",
                    "text": "c. The CTI team provides intelligence to drive the creation of fraud specific automation and detections for anomalous customer sign-ins and sessions indicating potential ATO activity.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "FRAUD-3-e",
                    "maturity": "CTI3",
                    "text": "e. The CTI team provides intelligence on likely threat activity to aid in the implementation of honeypots, canary tokens, honey accounts, etc. to improve detection of malicious use of customer credentials.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ]
        },
        "WORKFORCE": {
            "1. Support and Safeguard Human Resources Practices": [
                {
                    "id": "WORKFORCE-1-a",
                    "maturity": "CTI1",
                    "text": "a. CTI insights are regularly used to inform cybersecurity awareness and skills assessment strategies.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "WORKFORCE-1-c",
                    "maturity": "CTI2",
                    "text": "c. On a periodic basis, CTI provides inputs to personnel vetting/screening procedures to inform hiring decisions and to minimize potential insider threat risks.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "WORKFORCE-1-e",
                    "maturity": "CTI3",
                    "text": "e. Personnel vetting procedures are tailored to individual positions based on risk analysis (see RISK) of the job role and the organization\u2019s threat profile. (see THREAT)",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "2. Support Development of Training and Education Assets": [
                {
                    "id": "WORKFORCE-2-a",
                    "maturity": "CTI1",
                    "text": "a. Working relationships with the teams handling development and delivery of workforce training/education have been developed and engagement occurs on at least an ad hoc basis.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "WORKFORCE-2-d",
                    "maturity": "CTI2",
                    "text": "d. Security policy guidance, such as data protection and secure communication practices, is regularly reviewed by the CTI program \u2014 as are IR findings and other security reporting \u2014 to determine alignment of training/education initiatives with observed threat activity.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "WORKFORCE-2-h",
                    "maturity": "CTI3",
                    "text": "h. CTI insights are used to assist with tailoring cybersecurity awareness activities to individual job roles as appropriate for the organization\u2019s threat profile. (see THREAT)",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "3. Support Cybersecurity Management in Workforce Development Efforts": [
                {
                    "id": "WORKFORCE-3-a",
                    "maturity": "CTI1",
                    "text": "a. Workforce development efforts are understood by the CTI program and it provides management with inputs as requested.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "WORKFORCE-3-b",
                    "maturity": "CTI2",
                    "text": "b. The effort to identify high-risk job roles and support management in developing workforce-centric mitigation strategies is led by the CTI program.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "WORKFORCE-3-d",
                    "maturity": "CTI3",
                    "text": "d. The CTI program is intimately familiar with workforce management operations and has developed proficiency at pairing content with delivery mechanisms to help optimize impact.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ]
        },
        "ARCHITECTURE": {
            "1. Inform Architecture Strategy to Improve Infrastructure Resilience": [
                {
                    "id": "ARCHITECTURE-1-a",
                    "maturity": "CTI1",
                    "text": "a. Organizational cybersecurity architecture strategy is understood by the CTI team and support is provided on at least an ad hoc basis.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "ARCHITECTURE-1-c",
                    "maturity": "CTI2",
                    "text": "c. The CTI program regularly advises on gaps in cybersecurity architecture based on threat landscape trends. (see THREAT)",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "ARCHITECTURE-1-f",
                    "maturity": "CTI3",
                    "text": "f. The CTI program continuously informs cybersecurity architecture transformation, ensuring proactive adjustments to counter evolving threats through a bidirectional feedback loop. (see SITUATION and RISK)",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "2. Support Prioritization of Cybersecurity Initiatives": [
                {
                    "id": "ARCHITECTURE-2-a",
                    "maturity": "CTI1",
                    "text": "a. Recommendations are provided on at least an ad hoc basis for cybersecurity architecture initiatives based upon the organization\u2019s threat landscape. (see THREAT)",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "ARCHITECTURE-2-c",
                    "maturity": "CTI2",
                    "text": "c. The CTI team leverages the Asset Inventory system and CMDB to help advise on newly discovered vulnerabilities, determine potential impact, and provide focused insights.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "ARCHITECTURE-2-f",
                    "maturity": "CTI3",
                    "text": "f. The CTI program maintains awareness of key cybersecurity architecture initiatives and proactively prepares inputs.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "3. Drive CTI Tools and Infrastructure Integration": [
                {
                    "id": "ARCHITECTURE-3-a",
                    "maturity": "CTI1",
                    "text": "a. Use of CTI tools across the organization is ad hoc and largely stand-alone. CTI tools are used almost exclusively for research and correlation.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "ARCHITECTURE-3-c",
                    "maturity": "CTI2",
                    "text": "c. CTI tools and infrastructure are integrated with monitoring and Incident Response platforms such as SOAR, SIEM, firewall, proxy, intrusion prevention system (IPS), web application firewall (WAF), or endpoint detection and response (EDR) solutions \u2014 to enhance and automate prevention and detection processes. (see RESPONSE)",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "ARCHITECTURE-3-e",
                    "maturity": "CTI3",
                    "text": "e. CTI tools and infrastructure are used to support implementation of ML models for anomaly detection, behavioral analytics, and threat prediction.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ]
        },
        "PROGRAM": {
            "1. Integrate and Align CTI Program Strategy": [
                {
                    "id": "PROGRAM-1-a",
                    "maturity": "CTI1",
                    "text": "a. The organization has a CTI program strategy, which may or may not align to the organization\u2019s greater cybersecurity program and is managed in an ad hoc manner. CTI program strategic documentation is incomplete and/or not up to date.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "PROGRAM-1-b",
                    "maturity": "CTI2",
                    "text": "b. The CTI program strategy defines goals, objectives, and metrics for the organization\u2019s CTI activities along with the structure and organization of the program. Clear maturity milestones are established.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "PROGRAM-1-e",
                    "maturity": "CTI3",
                    "text": "e. The CTI program strategy is updated periodically and according to defined triggers, such as business changes, or changes to the risk and threat profile.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "2. Maintain and Improve CTI Program": [
                {
                    "id": "PROGRAM-2-a",
                    "maturity": "CTI1",
                    "text": "a. Senior management with proper authority provides support for the CTI program, at least in an ad hoc or informal manner.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "PROGRAM-2-b",
                    "maturity": "CTI2",
                    "text": "b. The CTI program is established according to the organization\u2019s overall cybersecurity program strategy.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "PROGRAM-2-g",
                    "maturity": "CTI3",
                    "text": "g. CTI program activities are periodically reviewed and improved upon to ensure they align with and support the cybersecurity program strategy.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ],
            "3. Support Cybersecurity Management in Program Alignment Efforts": [
                {
                    "id": "PROGRAM-3-a",
                    "maturity": "CTI1",
                    "text": "a. No practice at CTI1.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "PROGRAM-3-b",
                    "maturity": "CTI2",
                    "text": "b. Documented procedures are established, followed, and maintained for activities in the PROGRAM domain.",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                },
                {
                    "id": "PROGRAM-3-e",
                    "maturity": "CTI3",
                    "text": "e. Up-to-date policies or other organizational directives define requirements for activities in the PROGRAM domain and CTI program documentation is \u201cliving documents.\u201d",
                    "max": 3,
                    "score": 0,
                    "targetScore": 0,
                    "impact": 1,
                    "loe": 1,
                    "evidence": "",
                    "poc": "",
                    "targetDate": "",
                    "notes": ""
                }
            ]
        }
    }
};
