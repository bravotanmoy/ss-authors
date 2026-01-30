const fs = require('fs');
const XLSX = require('xlsx');

// Read JSON
const jsonContent = fs.readFileSync('authors-data-template.json', 'utf8');
const jsonData = JSON.parse(jsonContent);

// Read Excel
const workbook = XLSX.readFile('sunday-suspence-authors.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Get data as array of arrays
const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

console.log(`Processing ${excelData.length - 1} rows...`);

let updatedCount = 0;
let missingInJson = 0;

// Update data (skip header row 0)
for (let i = 1; i < excelData.length; i++) {
    const row = excelData[i];
    // English Name is in Column 1 (index 1) based on previous analysis
    const englishName = row[1];

    if (englishName && jsonData.authors[englishName]) {
        const authorData = jsonData.authors[englishName];
        
        // Col 0: Bangla Name
        row[0] = authorData.nameBangla || "";
        // Col 2: DOB
        row[2] = authorData.dateOfBirth || "";
        // Col 3: DOD
        row[3] = authorData.dateOfDeath || "";
        // Col 4: Details
        row[4] = authorData.details || "";

        updatedCount++;
    } else {
        if (englishName) {
            console.log(`Warning: Author '${englishName}' not found in JSON`);
            missingInJson++;
        }
    }
}

// Write back to sheet
const newWorksheet = XLSX.utils.aoa_to_sheet(excelData);
workbook.Sheets[sheetName] = newWorksheet;
XLSX.writeFile(workbook, 'sunday-suspence-authors.xlsx');

console.log(`\n✅ Update Complete!`);
console.log(`Updated: ${updatedCount} authors`);
console.log(`Missing in JSON: ${missingInJson}`);
