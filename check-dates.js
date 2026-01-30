const fs = require('fs');

const data = JSON.parse(fs.readFileSync('authors-data-template.json', 'utf8'));

console.log('Authors with incomplete dates (Year only or missing):');
console.log('NAME | DOB | DOD');
console.log('--- | --- | ---');

let count = 0;
const incompleteAuthors = [];

Object.keys(data.authors).forEach(name => {
    const author = data.authors[name];
    const dob = author.dateOfBirth;
    const dod = author.dateOfDeath;

    // Check if date is 4 digits (Year only) or missing, ignoring empty string if validly alive/unknown but asking for "full date" implies we want it if it exists.
    // If DOB is just "1975", that's incomplete.
    // If expected format is DD/MM/YYYY, length should be 10.
    
    let issue = false;
    if (dob && dob.length === 4) issue = true;
    if (dod && dod.length === 4) issue = true;

    if (issue) {
        console.log(`${name} | ${dob} | ${dod}`);
        incompleteAuthors.push(name);
        count++;
    }
});

console.log(`\nTotal incomplete: ${count}`);
