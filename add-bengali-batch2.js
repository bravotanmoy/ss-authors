const fs = require('fs');

// Read current data
const currentData = JSON.parse(fs.readFileSync('authors-data-template.json', 'utf8'));

// Bengali Authors - Batch 2 (10 authors)
const bengaliAuthorsBatch2 = {
  "Jagadish Gupta": {
    "nameBangla": "জগদীশ গুপ্ত",
    "dateOfBirth": "18/02/1886",
    "dateOfDeath": "30/10/1957",
    "details": "জগদীশ গুপ্ত বাংলা সাহিত্যের বিশিষ্ট ঔপন্যাসিক এবং গল্পকার। তিনি রংপুরে জন্মগ্রহণ করেন এবং সামাজিক ও মনস্তাত্ত্বিক উপন্যাস রচনায় পারদর্শী। তাঁর 'পুরীর বাহুল্য', 'বনস্পতি' ইত্যাদি বিখ্যাত রচনা এবং তিনি ভৌতিক ও রহস্য কাহিনীও রচনা করেছেন।"
  },
  "Harinarayan Chattopadhyay": {
    "nameBangla": "হরিনারায়ণ চট্টোপাধ্যায়",
    "dateOfBirth": "1865",
    "dateOfDeath": "1947",
    "details": "হরিনারায়ণ চট্টোপাধ্যায় বাংলা সাহিত্যের প্রথম দিকের গোয়েন্দা কাহিনী লেখক। তিনি কলকাতায় জন্মগ্রহণ করেন এবং রহস্য ও রোমাঞ্চকর কাহিনী রচনা করেন। তাঁর লেখা বাংলা গোয়েন্দা সাহিত্যের প্রারম্ভিক পর্যায়ের অন্যতম নিদর্শন।"
  },
  "Himadri Kishore Dasgupta": {
    "nameBangla": "হিমাদ্রিকিশোর দাশগুপ্ত",
    "dateOfBirth": "1907",
    "dateOfDeath": "1973",
    "details": "হিমাদ্রিকিশোর দাশগুপ্ত বাংলা রহস্য ও অ্যাডভেঞ্চার সাহিত্যের জনপ্রিয় লেখক। তিনি পূর্ববঙ্গে জন্মগ্রহণ করেন এবং শিশু-কিশোরদের জন্য রোমাঞ্চকর গল্প ও উপন্যাস রচনা করেন। তাঁর রচনা সহজবোধ্য এবং গতিশীল কাহিনীর জন্য পরিচিত।"
  },
  "Hiren Chattopadhyay": {
    "nameBangla": "হীরেন চট্টোপাধ্যায়",
    "dateOfBirth": "1912",
    "dateOfDeath": "1990",
    "details": "হীরেন চট্টোপাধ্যায় বাংলা শিশুসাহিত্যের জনপ্রিয় লেখক এবং রহস্য-রোমাঞ্চ কাহিনীকার। তিনি ঢাকায় জন্মগ্রহণ করেন এবং বহু অ্যাডভেঞ্চার ও গোয়েন্দা কাহিনী রচনা করেন। তাঁর রচনা শিশু-কিশোর পাঠকদের মধ্যে অত্যন্ত জনপ্রিয় ছিল।"
  },
  "Bimal Kar": {
    "nameBangla": "বিমল কর",
    "dateOfBirth": "15/02/1921",
    "dateOfDeath": "25/07/2003",
    "details": "বিমল কর বাংলা গোয়েন্দা ও রহস্য সাহিত্যের জনপ্রিয় লেখক এবং সত্যান্বেষী গোয়েন্দা চরিত্রের স্রষ্টা। তিনি কলকাতায় জন্মগ্রহণ করেন এবং তিনশোরও বেশি রহস্য উপন্যাস রচনা করেন। তাঁর লেখা সরল ভাষা ও দ্রুত গতির কাহিনীর জন্য বিখ্যাত।"
  },
  "Pracheta Gupta": {
    "nameBangla": "প্রচেতা গুপ্ত",
    "dateOfBirth": "25/03/1950",
    "dateOfDeath": "",
    "details": "প্রচেতা গুপ্ত সমসাময়িক বাংলা সাহিত্যের প্রখ্যাত লেখিকা এবং কবি। তিনি কলকাতায় জন্মগ্রহণ করেন এবং উপন্যাস, গল্প, কবিতা ও প্রবন্ধ রচনা করেন। তিনি আনন্দ পুরস্কার ও সাহিত্য অকাদেমি পুরস্কারে ভূষিত এবং নারীবাদী সাহিত্যে তাঁর গুরুত্বপূর্ণ অবদান রয়েছে।"
  },
  "Banibroto Chakraborty": {
    "nameBangla": "বণীব্রত চক্রবর্তী",
    "dateOfBirth": "1920",
    "dateOfDeath": "1985",
    "details": "বণীব্রত চক্রবর্তী বাংলা অ্যাডভেঞ্চার ও রহস্য সাহিত্যের জনপ্রিয় লেখক। তিনি পূর্ববঙ্গে জন্মগ্রহণ করেন এবং শিশু-কিশোরদের জন্য রোমাঞ্চকর কাহিনী রচনা করেন। তাঁর রচনা সহজবোধ্য এবং পাঠকপ্রিয়।"
  },
  "Bidhayak Bhattacharya": {
    "nameBangla": "বিধায়ক ভট্টাচার্য",
    "dateOfBirth": "22/11/1907",
    "dateOfDeath": "14/09/1982",
    "details": "বিধায়ক ভট্টাচার্য বাংলা কল্পবিজ্ঞান ও রহস্য সাহিত্যের অন্যতম প্রধান লেখক। তিনি কলকাতায় জন্মগ্রহণ করেন এবং বিজ্ঞানভিত্তিক রহস্য কাহিনী রচনায় পারদর্শী। তাঁর রচনা বাংলা কল্পবিজ্ঞান সাহিত্যের সমৃদ্ধিতে গুরুত্বপূর্ণ ভূমিকা পালন করেছে।"
  },
  "Achintya Kumar Sengupta": {
    "nameBangla": "অচিন্ত্যকুমার সেনগুপ্ত",
    "dateOfBirth": "1903",
    "dateOfDeath": "1976",
    "details": "অচিন্ত্যকুমার সেনগুপ্ত বাংলা সাহিত্যের জনপ্রিয় ঔপন্যাসিক এবং ঐতিহাসিক উপন্যাস লেখক। তিনি চট্টগ্রামে জন্মগ্রহণ করেন এবং 'নিশিপদ্ম', 'কল্লোল' ইত্যাদি বিখ্যাত ঐতিহাসিক উপন্যাস রচনা করেন। তাঁর রচনা ইতিহাস ও রোমান্সের সংমিশ্রণে সমৃদ্ধ।"
  },
  "Gourango Proshad Basu": {
    "nameBangla": "গৌরাঙ্গ প্রসাদ বসু",
    "dateOfBirth": "1898",
    "dateOfDeath": "1975",
    "details": "গৌরাঙ্গ প্রসাদ বসু বাংলা রহস্য ও অ্যাডভেঞ্চার সাহিত্যের লেখক। তিনি পূর্ববঙ্গে জন্মগ্রহণ করেন এবং শিশু-কিশোরদের জন্য রোমাঞ্চকর কাহিনী রচনা করেন। তাঁর রচনাশৈলী সহজ এবং কাহিনী আকর্ষক।"
  }
};

// Merge with existing data
Object.keys(bengaliAuthorsBatch2).forEach(name => {
  if (currentData.authors[name]) {
    currentData.authors[name] = bengaliAuthorsBatch2[name];
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

console.log('✅ Added 10 Bengali authors (Batch 2)!');
console.log(`\nTotal completed: ${completedAuthors}`);
console.log(`Remaining: ${remainingAuthors}`);
console.log('\nBengali authors added (Batch 2):');
Object.keys(bengaliAuthorsBatch2).forEach(name => {
  console.log(`  - ${name}`);
});
