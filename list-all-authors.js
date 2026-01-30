const XLSX = require('xlsx');

// Read the Excel file
const workbook = XLSX.readFile('sunday-suspence-authors.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert to JSON to get all author names
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

// Extract all English author names from column B
console.log('All authors in the Excel file:\n');
for (let i = 1; i < data.length; i++) {
  const englishName = data[i][1];
  if (englishName && englishName.trim() !== '') {
    console.log(`${i}. ${englishName}`);
  }
}

console.log(`\nTotal: ${data.length - 1} authors`);
