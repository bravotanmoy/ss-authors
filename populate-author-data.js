const XLSX = require('xlsx');
const fs = require('fs');

// Read the JSON data
const jsonData = JSON.parse(fs.readFileSync('authors-data-template.json', 'utf8'));
const authorsData = jsonData.authors;

// Read the Excel file
const workbook = XLSX.readFile('sunday-suspence-authors.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert to JSON to work with rows
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });

let updatedCount = 0;
let notFoundCount = 0;
const notFoundAuthors = [];

// Process each row (starting from row 2, index 1)
for (let i = 1; i < data.length; i++) {
  const englishName = data[i][1]; // Column B (index 1)
  
  if (!englishName) continue;
  
  // Look for this author in the JSON data
  if (authorsData[englishName]) {
    const authorInfo = authorsData[englishName];
    
    // Update the row
    data[i][0] = authorInfo.nameBangla || ''; // Column A - Bangla Name
    data[i][2] = authorInfo.dateOfBirth || ''; // Column C - Birth Date
    data[i][3] = authorInfo.dateOfDeath || ''; // Column D - Death Date
    data[i][4] = authorInfo.details || ''; // Column E - Details
    // Column F (index 5) - Photo Links (keep existing)
    
    updatedCount++;
  } else {
    notFoundCount++;
    notFoundAuthors.push(englishName);
  }
}

// Convert back to worksheet
const newWorksheet = XLSX.utils.aoa_to_sheet(data);

// Replace the worksheet
workbook.Sheets[sheetName] = newWorksheet;

// Save the updated workbook
XLSX.writeFile(workbook, 'sunday-suspence-authors.xlsx');

console.log('\n✓ Data population complete!');
console.log(`✓ Updated ${updatedCount} authors`);

if (notFoundCount > 0) {
  console.log(`\n⚠ Warning: ${notFoundCount} authors not found in JSON template:`);
  notFoundAuthors.slice(0, 10).forEach(name => console.log(`  - ${name}`));
  if (notFoundAuthors.length > 10) {
    console.log(`  ... and ${notFoundAuthors.length - 10} more`);
  }
  console.log('\nTip: Add these authors to authors-data-template.json and run this script again.');
}

console.log('\nNext step: Run verify-data.js to check data completeness.');
