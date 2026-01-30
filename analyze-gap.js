
const fs = require('fs');
const XLSX = require('xlsx');

// Read JSON
const jsonContent = fs.readFileSync('authors-data-template.json', 'utf8');
const jsonData = JSON.parse(jsonContent);
const jsonAuthors = new Set(Object.keys(jsonData.authors));

// Read Excel
const workbook = XLSX.readFile('sunday-suspence-authors.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

console.log('Total JSON Authors:', jsonAuthors.size);
// Assuming Row 1 is header, Name is likely in column 1 (index 1) based on check-excel-data.js 
// check-excel-data.js used index 1 for name in snippet: { row: 4, name: 'Adrish Bardhan' } -> row[1] ??
// Wait, check-excel-data.js used:
// sampledAuthors = [{row:4, name: ...}]
// row = data[author.row]
// console.log(row[0]) // Bangla Name
// console.log(row[2]) // Birth
// The English Name was NOT printed from row in that check script, but used as key.
// Let's assume English Name is column 1 (index 1), Bangla name col 0.
// Let's print the header to be sure.

const header = excelData[0];
console.log('Excel Header:', header);

let excelAuthors = [];
// skip header
for (let i = 1; i < excelData.length; i++) {
    const row = excelData[i];
    if (row && row.length > 1) {
        // Assuming Column 2 (index 1) is English Name based on previous convention
        const name = row[1]; 
        if (name) excelAuthors.push(name.trim());
    }
}

console.log('Total Excel Authors:', excelAuthors.length);

const missingInJson = excelAuthors.filter(name => !jsonAuthors.has(name));
console.log('Missing in JSON:', missingInJson.length);
if (missingInJson.length > 0) {
    console.log('List of missing:', missingInJson);
}
