const XLSX = require('xlsx');
const workbook = XLSX.readFile('sunday-suspence-authors.xlsx'); // Use correct filename
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(worksheet);

const author = data.find(r => r["Author Name English"] === "Tusharkanti Ghosh");
console.log(JSON.stringify(author, null, 2));
