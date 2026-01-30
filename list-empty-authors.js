const fs = require('fs');

const data = JSON.parse(fs.readFileSync('authors-data-template.json', 'utf8'));
const empty = Object.keys(data.authors).filter(name => !data.authors[name].nameBangla);

console.log(`\nAuthors still needing data (${empty.length} total):\n`);
console.log('='.repeat(50));

empty.forEach((name, i) => {
  console.log(`${(i+1).toString().padStart(2)}. ${name}`);
});

console.log('\n' + '='.repeat(50));
console.log(`\nCompleted: ${Object.keys(data.authors).length - empty.length}`);
console.log(`Remaining: ${empty.length}`);
console.log(`Total: ${Object.keys(data.authors).length}`);
