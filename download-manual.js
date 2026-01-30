const fs = require('fs');
const https = require('https');
const path = require('path');

const imagesDir = 'images';

const manualDownloads = [
    {
        name: "Tusharkanti Ghosh",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Tushar_Kanti_Ghosh.jpg" 
        // Verified Public Domain
    },
    {
        name: "W. W. Jacobs",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Picture_of_W._W._Jacobs.jpg"
        // Verified Public Domain
    },
    {
        name: "Shirshendu Mukhopadhyay",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Shirshendu_Mukhopadhyay_-_Kolkata_2015-11-01_6867.JPG"
    },
    {
        name: "Himadri Kishore Dasgupta",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Himadrikishore_Dasgupta_-_Kolkata_2015-10-10_5617.JPG"
    }
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ManualFetcher/1.0'
            }
        };
        https.get(url, options, (response) => {
            if (response.statusCode !== 200) {
                fs.unlink(filepath, () => {});
                reject(new Error(`Status ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => {});
            reject(err);
        });
    });
};

const main = async () => {
    console.log(`Starting manual download for ${manualDownloads.length} authors...`);
    
    for (const item of manualDownloads) {
        const filepath = path.join(imagesDir, item.name + '.jpg');
        try {
            console.log(`Downloading ${item.name}...`);
            await downloadImage(item.url, filepath);
            console.log(`✅ Success`);
        } catch (e) {
            console.error(`❌ Failed: ${e.message}`);
        }
    }
};

main();
