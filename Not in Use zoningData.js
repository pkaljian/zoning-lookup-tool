const zones = ["OSP", "AG", "RR", "R1", "R2", "R3", "R4", "R5", "MU1A", "MU1B", "MU1C", "MU2", "C1", "C2", "BP", "I", "CF", "T4", "T5", "T6", "T6-O", "D1", "D2", "D3", "D4"];

const landUses = ["Adult Day Program", "Bank, Financial Services", "Park"];

const zoningData = {
  "Adult Day Program": {
    "OSP": "Not Permitted", "AG": "Not Permitted", "RR": "Not Permitted", "R1": "Not Permitted",
    "R2": "Not Permitted", "R3": "Not Permitted", "R4": "Not Permitted", "R5": "Not Permitted",
    "MU1A": "CUP", "MU1B": "CUP", "MU1C": "CUP", "MU2": "P", "C1": "P", "C2": "P", "BP": "P",
    "I": "Not Permitted", "CF": "CUP", "T4": "Not Permitted", "T5": "Not Permitted",
    "T6": "Not Permitted", "T6-O": "Not Permitted", "D1": "Not Permitted", "D2": "Not Permitted",
    "D3": "Not Permitted", "D4": "Not Permitted"
  },
  "Bank, Financial Services": {
    "OSP": "Not Permitted", "AG": "Not Permitted", "RR": "Not Permitted", "R1": "Not Permitted",
    "R2": "Not Permitted", "R3": "Not Permitted", "R4": "Not Permitted", "R5": "Not Permitted",
    "MU1A": "P", "MU1B": "P", "MU1C": "Not Permitted", "MU2": "P", "C1": "P", "C2": "P", "BP": "P",
    "I": "Not Permitted", "CF": "Not Permitted", "T4": "P", "T5": "P", "T6": "P", "T6-O": "P",
    "D1": "P", "D2": "Not Permitted", "D3": "Not Permitted", "D4": "P"
  },
  "Park": {
    "OSP": "P", "AG": "P", "RR": "P", "R1": "P", "R2": "P", "R3": "P", "R4": "P", "R5": "P",
    "MU1A": "P", "MU1B": "P", "MU1C": "P", "MU2": "P", "C1": "P", "C2": "P", "BP": "P", "I": "P",
    "CF": "P", "T4": "Not Permitted", "T5": "Not Permitted", "T6": "Not Permitted",
    "T6-O": "Not Permitted", "D1": "Not Permitted", "D2": "Not Permitted", "D3": "Not Permitted",
    "D4": "Not Permitted"
  }
};
