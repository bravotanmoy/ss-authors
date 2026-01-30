const XLSX = require('xlsx');

const workbook = XLSX.readFile('sunday-suspence-authors.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

console.log('Total Rows:', excelData.length);
console.log('Header:', excelData[0]);

console.log('First 5 rows:');
for(let i=1; i<6; i++) {
    console.log(JSON.stringify(excelData[i]));
}
