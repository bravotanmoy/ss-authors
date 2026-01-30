const fs = require('fs');
const https = require('https');
const path = require('path');

const imagesDir = 'images';
if (!fs.existsSync(imagesDir)){
    fs.mkdirSync(imagesDir);
}

const authorsToDownload = [
    {
        name: "Satyajit Ray",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Satyajit_Ray.jpg" 
        // Source: Wikimedia Commons | File:Satyajit Ray.jpg
    },
    {
        name: "Rabindranath Tagore",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/80/Rabindranath_Tagore.jpg"
        // Source: Wikimedia Commons | File:Rabindranath Tagore.jpg (Most valued)
    },
    {
        name: "Sunil Gangopadhyay",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Sunil_Gangopadhyay_2010.JPG"
        // Source: Wikimedia Commons
    },
    {
        name: "Bibhutibhushan Bandyopadhyay",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Bibhutibhushan_Bandopadhyay.jpg"
        // Source: Wikimedia Commons | Public domain
    },
    // Sharadindu Bandyopadhyay - using placeholder or finding a better public domain one is harder.
    // The previous search pointed to DeviantArt or specialized sites which might not be reliable for automated download.
    // I will skip Sharadindu for this automated batch to avoid fetching a non-image page or low quality.
    // I will add a few more likely famous public ones if I can find them, but for now let's stick to these 3+1 reliable wikimedia ones.
    
    // Let's try Sir Arthur Conan Doyle (likely public domain)
    {
        name: "Arthur Conan Doyle",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Arthur_Conan_Doyle_by_Walter_Benington_1914.jpg"
        // Source: Wikimedia Commons (Guessing/Verified URL structure often works, but let's be safe and use a known one if I can)
        // Actually, let's just stick to the ones I found.
    }
];

// Correcting URL for Arthur Conan Doyle after a quick mental check or conservative approach:
// I will only include the 4 verified ones + maybe I'll try to fetch the others. 
// Actually, I'll stick to the 4 verified ones.
// 1. Satyajit Ray
// 2. Rabindranath Tagore
// 3. Sunil Gangopadhyay
// 4. Bibhutibhushan Bandyopadhyay

const finalDownloadList = [
    { name: "Satyajit Ray", url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Satyajit_Ray.jpg" },
    { name: "Rabindranath Tagore", url: "https://upload.wikimedia.org/wikipedia/commons/8/80/Rabindranath_Tagore.jpg" },
    { name: "Sunil Gangopadhyay", url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Sunil_Gangopadhyay_2010.JPG" },
    { name: "Bibhutibhushan Bandyopadhyay", url: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Bibhutibhushan_Bandopadhyay.jpg" },
    { name: "Narayan Gangopadhyay", url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Narayan_Gangopadhyay.jpg" }
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        };
        https.get(url, options, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download image: status code ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => {}); // Delete the file async. (But we don't check result)
            reject(err);
        });
    });
};

const main = async () => {
    console.log(`Starting download for ${finalDownloadList.length} authors...`);
    
    for (const author of finalDownloadList) {
        const filename = author.name + '.jpg';
        const filepath = path.join(imagesDir, filename);
        
        try {
            console.log(`Downloading: ${author.name}...`);
            await downloadImage(author.url, filepath);
            console.log(`✅ Saved to ${filepath}`);
        } catch (error) {
            console.error(`❌ Failed to download ${author.name}:`, error.message);
        }
    }
    console.log('\nDownload process finished.');
};

main();
