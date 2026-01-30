const XLSX = require('xlsx-js-style');
const fs = require('fs');
const path = require('path');

// Read the Excel file
const workbook = XLSX.readFile('sunday-suspence-authors.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Get data as JSON
const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

const imagesDir = 'images';
let updatedCount = 0;

console.log(`Checking ${excelData.length - 1} rows for local images...`);

// Iterate rows (skip header)
for (let i = 1; i < excelData.length; i++) {
    const row = excelData[i];
    const englishName = row[1]; // Column B

    if (englishName) {
        // Construct expected local image path
        // Handle " / " in names by taking the first part or checking both?
        // auto-fetch used first part. Let's check matching file.
        // We need to match what auto-fetch saved.
        
        let imageName = englishName.replace(/[\/\\?%*:|"<>]/g, '_') + '.jpg';
        let localPath = path.join(imagesDir, imageName);
        
        if (!fs.existsSync(localPath)) {
             // Try " / " split approach from auto-fetch
             const cleanName = englishName.split(' / ')[0].trim();
             imageName = cleanName.replace(/[\/\\?%*:|"<>]/g, '_') + '.jpg';
             localPath = path.join(imagesDir, imageName);
        }

        // Check if file exists
        if (fs.existsSync(localPath)) {
            // Update Column F (index 5)
            row[5] = `images/${imageName}`;
            
            // APPLY GREEN MARK (Style)
            // We need to modify the cell object directly, not just the JSON row array.
            // The JSON array update doesn't persist style easily with sheet_to_json/aoa_to_sheet unless we use cell objects.
            // So we need to address the cell directly in the worksheet object.
            
            const cellRef = XLSX.utils.encode_cell({r: i, c: 5}); // Column F is index 5
            
            if (!worksheet[cellRef]) worksheet[cellRef] = { t: 's', v: '' }; // Create if missing
            
            worksheet[cellRef].v = `images/${imageName}`;
            worksheet[cellRef].s = {
                fill: {
                    fgColor: { rgb: "C6EFCE" } // Light Green
                },
                font: {
                    color: { rgb: "006100" } // Dark Green text
                },
                alignment: {
                     horizontal: "center"
                }
            };

            updatedCount++;
            console.log(`Matched: ${englishName} -> ${row[5]} (Marked Green)`);
        }
    }
}

// Write back
if (updatedCount > 0) {
    // We cannot use aoa_to_sheet if we want to preserve the cell updates we made to 'worksheet' directly.
    // 'worksheet' is already modified in place for the cells we touched?
    // Wait, sheet_to_json returns a copy of data? No, it returns text.
    // Modifying 'row' in excelData array does NOT modify 'worksheet' object.
    // We must ensure 'worksheet' has the updates. 
    // I added logic above to update 'worksheet[cellRef]'.
    
    // However, sheet_to_json might have missed some structure if we just rely on it for looping.
    // The loop uses excelData to find names. The update writes to 'worksheet'.
    // So we just need to write 'workbook' back.
    
    // But wait, if we used `sheet_to_json`, we didn't wipe the worksheet.
    // So 'worksheet' object still exists and we are patching it.
    // This is correct.
    
    XLSX.writeFile(workbook, 'sunday-suspence-authors.xlsx');
    console.log(`\n✅ Updated ${updatedCount} rows with image links and green marks!`);
} else {
    console.log(`\n⚠️ No matching local images found for the author names in the Excel file.`);
}
