const XLSX = require('xlsx');

// Read the Excel file
const workbook = XLSX.readFile('sunday-suspence-authors.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert to JSON to get all author names
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

// Extract all English author names from column B
const authors = {};
for (let i = 1; i < data.length; i++) {
  const englishName = data[i][1];
  if (englishName && englishName.trim() !== '') {
    authors[englishName] = {
      "nameBangla": "",
      "dateOfBirth": "",
      "dateOfDeath": "",
      "details": ""
    };
  }
}

// Create the JSON template
const template = {
  "instructions": "Fill in the author information below. Use DD/MM/YYYY format for dates. Write Author Details in Bangla script.",
  "authors": authors,
  "notes": [
    "Use DD/MM/YYYY format for dates (e.g., '15/08/1932' for 15th August 1932)",
    "If date is unknown, leave empty or use 'N/A'",
    "Write all biographical details in Bangla script",
    "Include: birthplace, notable works, contributions, awards, death information",
    "Provide at least 2-3 sentences per author"
  ]
};

// Write to file
const fs = require('fs');
fs.writeFileSync('authors-data-template.json', JSON.stringify(template, null, 2), 'utf8');

console.log(`✓ Generated template with ${Object.keys(authors).length} authors`);
console.log('✓ File saved as: authors-data-template.json');
console.log('\nAuthor names found:');
Object.keys(authors).forEach((name, index) => {
  if (index < 10) console.log(`  ${index + 1}. ${name}`);
});
console.log(`  ... and ${Object.keys(authors).length - 10} more`);
console.log('\nNext: Fill in the author information in authors-data-template.json');
