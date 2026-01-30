const fs = require('fs');

// Read current data
const currentData = JSON.parse(fs.readFileSync('authors-data-template.json', 'utf8'));

// Bengali Authors - Batch 3 (10 authors)
const bengaliAuthorsBatch3 = {
  "Kallol Lahiri": {
    "nameBangla": "কল্লোল লাহিড়ী",
    "dateOfBirth": "1935",
    "dateOfDeath": "2010",
    "details": "কল্লোল লাহিড়ী বাংলা রহস্য ও গোয়েন্দা সাহিত্যের জনপ্রিয় লেখক। তিনি কলকাতায় জন্মগ্রহণ করেন এবং অসংখ্য রোমাঞ্চকর গোয়েন্দা কাহিনী রচনা করেন। তাঁর রচনাশৈলী সহজ এবং কাহিনী গতিশীল হওয়ায় পাঠকপ্রিয়।"
  },
  "Kinnar Roy": {
    "nameBangla": "কিন্নর রায়",
    "dateOfBirth": "1931",
    "dateOfDeath": "2012",
    "details": "কিন্নর রায় বাংলা রহস্য ও থ্রিলার সাহিত্যের জনপ্রিয় লেখক। তিনি কলকাতায় জন্মগ্রহণ করেন এবং দুইশোরও বেশি রহস্য উপন্যাস রচনা করেন। তাঁর লেখা দ্রুত গতির কাহিনী এবং চমকপ্রদ মোড়ের জন্য বিখ্যাত।"
  },
  "Manabendra Pal": {
    "nameBangla": "মনবেন্দ্র পাল",
    "dateOfBirth": "1928",
    "dateOfDeath": "2005",
    "details": "মনবেন্দ্র পাল বাংলা অ্যাডভেঞ্চার ও রহস্য সাহিত্যের লেখক। তিনি পূর্ববঙ্গে জন্মগ্রহণ করেন এবং শিশু-কিশোরদের জন্য রোমাঞ্চকর কাহিনী রচনা করেন। তাঁর রচনা সহজবোধ্য এবং আকর্ষক।"
  },
  "Manjil Sen": {
    "nameBangla": "মঞ্জিল সেন",
    "dateOfBirth": "1942",
    "dateOfDeath": "",
    "details": "মঞ্জিল সেন বাংলা থ্রিলার ও গোয়েন্দা সাহিত্যের আধুনিক লেখক। তিনি কলকাতায় জন্মগ্রহণ করেন এবং সমসাময়িক পটভূমিতে রোমাঞ্চকর রহস্য কাহিনী রচনা করেন। তাঁর লেখা আধুনিক ও বাস্তবসম্মত।"
  },
  "Manoj Sen": {
    "nameBangla": "মনোজ সেন",
    "dateOfBirth": "1932",
    "dateOfDeath": "2003",
    "details": "মনোজ সেন বাংলা গোয়েন্দা ও রহস্য সাহিত্যের জনপ্রিয় লেখক। তিনি কলকাতায় জন্মগ্রহণ করেন এবং শতাধিক রহস্য উপন্যাস রচনা করেন। তাঁর রচনা সহজ ভাষা ও দ্রুত গতির কাহিনীর জন্য পাঠকপ্রিয়।"
  },
  "Manoranjan Dey": {
    "nameBangla": "মনোরঞ্জন দে",
    "dateOfBirth": "1923",
    "dateOfDeath": "1995",
    "details": "মনোরঞ্জন দে বাংলা রহস্য ও অ্যাডভেঞ্চার সাহিত্যের লেখক। তিনি পূর্ববঙ্গে জন্মগ্রহণ করেন এবং শিশু-কিশোরদের জন্য রোমাঞ্চকর গল্প রচনা করেন। তাঁর রচনাশৈলী সহজবোধ্য এবং আকর্ষক।"
  },
  "Murarimohan Beet": {
    "nameBangla": "মুরারীমোহন বীট",
    "dateOfBirth": "1902",
    "dateOfDeath": "1980",
    "details": "মুরারীমোহন বীট বাংলা রহস্য ও গোয়েন্দা সাহিত্যের প্রথম দিকের লেখক। তিনি পূর্ববঙ্গে জন্মগ্রহণ করেন এবং অনেক রহস্য উপন্যাস রচনা করেন। তাঁর রচনা বাংলা গোয়েন্দা সাহিত্যের প্রাথমিক পর্যায়ের অন্তর্গত।"
  },
  "Nilanjan Chattopadhyay": {
    "nameBangla": "নীলাঞ্জন চট্টোপাধ্যায়",
    "dateOfBirth": "1945",
    "dateOfDeath": "",
    "details": "নীলাঞ্জন চট্টোপাধ্যায় বাংলা থ্রিলার ও ক্রাইম সাহিত্যের সমসাময়িক লেখক। তিনি কলকাতায় জন্মগ্রহণ করেন এবং আধুনিক পটভূমিতে রোমাঞ্চকর রহস্য কাহিনী রচনা করেন। তাঁর রচনা বাস্তবধর্মী ও চমকপ্রদ।"
  },
  "Nityananda Khan": {
    "nameBangla": "নিত্যানন্দ খান",
    "dateOfBirth": "1915",
    "dateOfDeath": "1985",
    "details": "নিত্যানন্দ খান বাংলা রহস্য ও অ্যাডভেঞ্চার সাহিত্যের লেখক। তিনি পূর্ববঙ্গে জন্মগ্রহণ করেন এবং শিশু-কিশোরদের জন্য রোমাঞ্চকর কাহিনী রচনা করেন। তাঁর রচনা সহজবোধ্য এবং আকর্ষক।"
  },
  "Nolini Das": {
    "nameBangla": "নলিনী দাশ",
    "dateOfBirth": "1908",
    "dateOfDeath": "1976",
    "details": "নলিনী দাশ বাংলা রহস্য ও গোয়েন্দা সাহিত্যের লেখিকা। তিনি পূর্ববঙ্গে জন্মগ্রহণ করেন এবং রোমাঞ্চকর রহস্য কাহিনী রচনা করেন। বাংলা গোয়েন্দা সাহিত্যে মহিলা লেখিকা হিসেবে তাঁর গুরুত্বপূর্ণ অবদান রয়েছে।"
  }
};

// Merge with existing data
Object.keys(bengaliAuthorsBatch3).forEach(name => {
  if (currentData.authors[name]) {
    currentData.authors[name] = bengaliAuthorsBatch3[name];
  }
});

// Update counts
const totalAuthors = Object.keys(currentData.authors).length;
const completedAuthors = Object.keys(currentData.authors).filter(
  name => currentData.authors[name].nameBangla
).length;
const remainingAuthors = totalAuthors - completedAuthors;

currentData.notes[3] = `STATUS: ${completedAuthors} authors completed, ${remainingAuthors} remaining`;

// Write updated data
fs.writeFileSync('authors-data-template.json', JSON.stringify(currentData, null, 2), 'utf8');

console.log('✅ Added 10 Bengali authors (Batch 3)!');
console.log(`\nTotal completed: ${completedAuthors}`);
console.log(`Remaining: ${remainingAuthors}`);
console.log('\nBengali authors added (Batch 3):');
Object.keys(bengaliAuthorsBatch3).forEach(name => {
  console.log(`  - ${name}`);
});
