const XLSX = require('xlsx');

const workbook = XLSX.readFile('sunday-suspence-authors.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert to JSON to see the data
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

console.log('Column Names:', data[0]);
console.log('\nFirst few rows:');
data.slice(0, 5).forEach((row, index) => {
    console.log(`Row ${index}:`, row);
});

console.log('\nTotal rows:', data.length);
