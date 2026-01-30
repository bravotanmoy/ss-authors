const fs = require('fs');
const path = require('path');
const authorsData = require('./authors-data-template.json').authors;

const imagesDir = 'images';
const missing = [];
const authors = Object.keys(authorsData);

console.log(`Checking ${authors.length} authors for images...`);

authors.forEach(name => {
    // Logic from update-excel-images.js
    let imageName = name.replace(/[\/\\?%*:|"<>]/g, '_') + '.jpg';
    let localPath = path.join(imagesDir, imageName);
    
    if (!fs.existsSync(localPath)) {
            // Try " / " split approach
            const cleanName = name.split(' / ')[0].trim();
            imageName = cleanName.replace(/[\/\\?%*:|"<>]/g, '_') + '.jpg';
            localPath = path.join(imagesDir, imageName);
    }

    if (!fs.existsSync(localPath)) {
        missing.push(name);
    }
});

console.log(`\nMissing Images for ${missing.length} authors:`);
const missingObj = missing.map(name => ({name}));
fs.writeFileSync('missing_authors.json', JSON.stringify(missingObj, null, 2));
console.log('Saved to missing_authors.json');
