# Sunday Suspense Authors - Data Entry Guide

This project contains tools to help you populate Bengali author information in
the Excel file `sunday-suspence-authors.xlsx`.

## 📋 Project Overview

**Total Authors:** 82 Bengali literary authors\
**Excel File:** `sunday-suspence-authors.xlsx`

The Excel file has been updated with the following columns:

- **Column A:** Author Name Bangla (বাংলা নাম)
- **Column B:** Author Name English
- **Column C:** Author Date Of Birth (DD/MM/YYYY)
- **Column D:** Author Date Of Death (DD/MM/YYYY)
- **Column E:** Author Details (বাংলায় জীবনী)
- **Column F:** Author Photo Image Links

## 🚀 Quick Start

### Step 1: Fill in Author Data

Open `authors-data-template.json` and fill in the author information:

```json
{
    "Abhinandan Banerjee": {
        "nameBangla": "অভিনন্দন ব্যানার্জী",
        "dateOfBirth": "15/08/1932",
        "dateOfDeath": "19/10/2015",
        "details": "অভিনন্দন ব্যানার্জী একজন বিখ্যাত বাংলা লেখক ছিলেন। তিনি কলকাতায় জন্মগ্রহণ করেন এবং রহস্য গল্পের জন্য সুপরিচিত ছিলেন।"
    }
}
```

### Step 2: Import Data to Excel

Run the population script:

```bash
node populate-author-data.js
```

This will import all data from `authors-data-template.json` into the Excel file.

### Step 3: Verify Data Completeness

Check your progress:

```bash
node verify-data.js
```

This will show you:

- How many authors have complete data
- Which fields are missing for which authors
- Data format validation errors

## 📝 Data Format Requirements

### Bangla Names (Author Name Bangla)

- Use proper Bangla script: বাংলা
- Example: "সুনীল গঙ্গোপাধ্যায়" for "Sunil Gangopadhyay"

### Dates (Birth & Death)

- **Format:** DD/MM/YYYY
- **Examples:**
  - `15/08/1932` (15th August 1932)
  - `19/10/2015` (19th October 2015)
- **Unknown dates:** Leave empty or use "N/A"

### Author Details (বাংলায় জীবনী)

- Write in Bangla script only
- Include:
  - জন্মস্থান (Birthplace)
  - উল্লেখযোগ্য কাজ (Notable works)
  - অবদান (Contributions)
  - পুরস্কার (Awards)
  - মৃত্যু সম্পর্কিত তথ্য (Death information, if applicable)
- **Minimum:** 2-3 sentences per author

## 🛠️ Available Scripts

| Script                      | Purpose                                               |
| --------------------------- | ----------------------------------------------------- |
| `update-excel-structure.js` | ✅ Already run - Fixed column headers                 |
| `generate-template.js`      | ✅ Already run - Created template with all 82 authors |
| `populate-author-data.js`   | Import data from JSON to Excel                        |
| `verify-data.js`            | Check data completeness and format                    |

## 📊 Current Status

Run `node verify-data.js` to see the current completion status.

**Expected output:**

- Total Authors: 82
- Fields to fill: Bangla Names, Birth Dates, Death Dates, Details

## ✅ Workflow

1. **Edit** `authors-data-template.json` with author information
2. **Run** `node populate-author-data.js` to import to Excel
3. **Verify** with `node verify-data.js`
4. **Repeat** steps 1-3 until all data is complete

## 📌 Tips

- You can fill in the JSON template gradually (doesn't need to be all at once)
- Run `populate-author-data.js` as many times as you want - it will update the
  Excel file each time
- Use `verify-data.js` frequently to track your progress
- The scripts will tell you which authors are still missing data

## 🎯 Goal

Fill in complete information for all 82 Bengali authors!

---

**Need help?** Check the `implementation_plan.md` in the brain folder for
detailed information.
