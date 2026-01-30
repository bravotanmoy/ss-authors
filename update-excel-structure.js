const XLSX = require('xlsx');

// Read the Excel file
const workbook = XLSX.readFile('sunday-suspence-authors.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Update the column headers
// Column A: "Author Name Bangla"
// Column B: "Author Name English" (keep as is)
// Column C: "Author Date Of Birth" (keep as is)
// Column D: "Author Date Of Death" (fix typo)
// Column E: "Author Details" (keep as is)
// Column F: "Author photo Image Links" (keep as is)

worksheet['A1'] = { t: 's', v: 'Author Name Bangla' };
worksheet['B1'] = { t: 's', v: 'Author Name English' };
worksheet['C1'] = { t: 's', v: 'Author Date Of Birth' };
worksheet['D1'] = { t: 's', v: 'Author Date Of Death' };
worksheet['E1'] = { t: 's', v: 'Author Details' };
worksheet['F1'] = { t: 's', v: 'Author Photo Image Links' };

// Save the updated workbook
XLSX.writeFile(workbook, 'sunday-suspence-authors.xlsx');

console.log('✓ Excel structure updated successfully!');
console.log('✓ Column headers fixed:');
console.log('  - Column A: Author Name Bangla');
console.log('  - Column B: Author Name English');
console.log('  - Column C: Author Date Of Birth');
console.log('  - Column D: Author Date Of Death (typo fixed)');
console.log('  - Column E: Author Details');
console.log('  - Column F: Author Photo Image Links');
console.log('\nNext step: Fill in the authors-data-template.json file with author information.');
