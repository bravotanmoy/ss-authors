const XLSX = require('xlsx');

// Read the Excel file
const workbook = XLSX.readFile('sunday-suspence-authors.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert to JSON
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });

// Statistics
const stats = {
  total: 0,
  withBanglaName: 0,
  withBirthDate: 0,
  withDeathDate: 0,
  withDetails: 0,
  complete: 0
};

const missingData = {
  banglaName: [],
  birthDate: [],
  deathDate: [],
  details: []
};

// Date format validation regex (DD/MM/YYYY)
const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

// Check each row (starting from row 2, index 1)
for (let i = 1; i < data.length; i++) {
  const englishName = data[i][1]; // Column B
  
  if (!englishName) continue;
  
  stats.total++;
  
  const banglaName = data[i][0]; // Column A
  const birthDate = data[i][2]; // Column C
  const deathDate = data[i][3]; // Column D
  const details = data[i][4]; // Column E
  
  // Check Bangla name
  if (banglaName && banglaName.trim() !== '') {
    stats.withBanglaName++;
  } else {
    missingData.banglaName.push(englishName);
  }
  
  // Check birth date
  if (birthDate && birthDate.trim() !== '' && birthDate !== 'N/A') {
    stats.withBirthDate++;
    // Validate format
    if (!dateRegex.test(birthDate)) {
      console.log(`⚠ Invalid birth date format for ${englishName}: ${birthDate} (expected DD/MM/YYYY)`);
    }
  } else {
    missingData.birthDate.push(englishName);
  }
  
  // Check death date (optional - some authors may still be alive)
  if (deathDate && deathDate.trim() !== '' && deathDate !== 'N/A') {
    stats.withDeathDate++;
    // Validate format
    if (!dateRegex.test(deathDate)) {
      console.log(`⚠ Invalid death date format for ${englishName}: ${deathDate} (expected DD/MM/YYYY)`);
    }
  } else {
    missingData.deathDate.push(englishName);
  }
  
  // Check details
  if (details && details.trim() !== '') {
    stats.withDetails++;
  } else {
    missingData.details.push(englishName);
  }
  
  // Check if complete (all fields except death date which is optional)
  if (banglaName && birthDate && details) {
    stats.complete++;
  }
}

// Print report
console.log('\n═══════════════════════════════════════════════');
console.log('   DATA VERIFICATION REPORT');
console.log('═══════════════════════════════════════════════\n');

console.log(`Total Authors: ${stats.total}`);
console.log(`Complete Records: ${stats.complete} (${Math.round(stats.complete/stats.total*100)}%)\n`);

console.log('Field Coverage:');
console.log(`  ✓ Bangla Names:  ${stats.withBanglaName}/${stats.total} (${Math.round(stats.withBanglaName/stats.total*100)}%)`);
console.log(`  ✓ Birth Dates:   ${stats.withBirthDate}/${stats.total} (${Math.round(stats.withBirthDate/stats.total*100)}%)`);
console.log(`  ✓ Death Dates:   ${stats.withDeathDate}/${stats.total} (${Math.round(stats.withDeathDate/stats.total*100)}%)`);
console.log(`  ✓ Details:       ${stats.withDetails}/${stats.total} (${Math.round(stats.withDetails/stats.total*100)}%)\n`);

// Show missing data details
if (missingData.banglaName.length > 0) {
  console.log(`⚠ Missing Bangla Names (${missingData.banglaName.length}):`);
  missingData.banglaName.slice(0, 5).forEach(name => console.log(`  - ${name}`));
  if (missingData.banglaName.length > 5) {
    console.log(`  ... and ${missingData.banglaName.length - 5} more\n`);
  } else {
    console.log('');
  }
}

if (missingData.birthDate.length > 0) {
  console.log(`⚠ Missing Birth Dates (${missingData.birthDate.length}):`);
  missingData.birthDate.slice(0, 5).forEach(name => console.log(`  - ${name}`));
  if (missingData.birthDate.length > 5) {
    console.log(`  ... and ${missingData.birthDate.length - 5} more\n`);
  } else {
    console.log('');
  }
}

if (missingData.details.length > 0) {
  console.log(`⚠ Missing Details (${missingData.details.length}):`);
  missingData.details.slice(0, 5).forEach(name => console.log(`  - ${name}`));
  if (missingData.details.length > 5) {
    console.log(`  ... and ${missingData.details.length - 5} more\n`);
  } else {
    console.log('');
  }
}

console.log('═══════════════════════════════════════════════\n');

if (stats.complete === stats.total) {
  console.log('🎉 All author records are complete!');
} else {
  console.log('📝 Continue filling in the missing data using authors-data-template.json');
}
