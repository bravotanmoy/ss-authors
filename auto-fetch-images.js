const fs = require('fs');
const https = require('https');
const path = require('path');
const { URL } = require('url');

const authorsData = require('./authors-data-template.json').authors;
const imagesDir = 'images';

if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AuthorImageFetcher/1.0'
            }
        };
        https.get(url, options, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                // follow redirect
                downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
                return;
            }
            if (response.statusCode !== 200) {
                file.close();
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

const fetchHtml = (url) => {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AuthorImageFetcher/1.0'
            }
        };
        https.get(url, options, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302) {
                fetchHtml(res.headers.location).then(resolve).catch(reject);
                return;
            }
            if (res.statusCode === 404) {
                resolve(null); // Not found
                return;
            }
            if (res.statusCode !== 200) {
                resolve(null); // Other error
                return;
            }
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', (err) => reject(err));
    });
};

const extractOgImage = (html) => {
    if (!html) return null;
    const match = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
    if (match && match[1]) {
        return match[1];
    }
    return null;
};

const getWikiImage = async (name, lang = 'en') => {
    const pageName = name.replace(/ /g, '_');
    const url = `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(pageName)}`;
    // console.log(`Checking ${url}...`);
    try {
        const html = await fetchHtml(url);
        if (!html) return null;
        
        let imageUrl = extractOgImage(html);
        if (imageUrl) {
            // Wikipedia generic images to ignore
            if (imageUrl.includes('Wikipedia-logo') || imageUrl.includes('Flag_of') || imageUrl.includes('Wiktionary')) {
                return null;
            }
            return imageUrl;
        }
    } catch (e) {
        console.error(`Error fetching ${url}: ${e.message}`);
    }
    return null;
};

const main = async () => {
    const authors = Object.keys(authorsData);
    console.log(`Processing ${authors.length} authors...`);
    let downloaded = 0;
    let skipped = 0;
    let failed = 0;

    for (const author of authors) {
        // Clean name (remove slashes, take first part if multiple)
        // Actually the keys in JSON like "Aveek Sarkar / Avik Sarkar" might be tricky.
        // Let's use the first part for the filename and search.
        const cleanName = author.split(' / ')[0].trim();
        const filename = `${author.replace(/[\/\\?%*:|"<>]/g, '_')}.jpg`; // Sanitize filename
        const filepath = path.join(imagesDir, filename);

        if (fs.existsSync(filepath)) {
            // console.log(`⏩ Skipping ${author} (Exists)`);
            skipped++;
            continue;
        }

        console.log(`🔍 Searching: ${cleanName}...`);
        
        let imageUrl = await getWikiImage(cleanName, 'en');
        if (!imageUrl && authorsData[author].nameBangla) {
            // Try Bengali Wiki
            console.log(`   Trying Bengali Wiki for ${authorsData[author].nameBangla}...`);
            imageUrl = await getWikiImage(authorsData[author].nameBangla, 'bn');
        }

        if (imageUrl) {
            console.log(`   Found: ${imageUrl}`);
            try {
                await downloadImage(imageUrl, filepath);
                console.log(`   ✅ Downloaded`);
                downloaded++;
            } catch (e) {
                console.error(`   ❌ Failed download: ${e.message}`);
                failed++;
            }
        } else {
            console.log(`   ⚠️ Image not found on Wikipedia.`);
            failed++;
        }
        
        // Be nice to Wikipedia
        await new Promise(r => setTimeout(r, 500));
    }

    console.log(`\nSummary:`);
    console.log(`Existing: ${skipped}`);
    console.log(`Downloaded: ${downloaded}`);
    console.log(`Not Found/Failed: ${failed}`);
};

main();
