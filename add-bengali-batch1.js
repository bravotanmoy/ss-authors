const fs = require('fs');

// Read current data
const currentData = JSON.parse(fs.readFileSync('authors-data-template.json', 'utf8'));

// Bengali Authors - Batch 1 (10 authors)
const bengaliAuthorsBatch1 = {
  "Rajshekhar Basu": {
    "nameBangla": "রাজশেখর বসু (পরশুরাম)",
    "dateOfBirth": "16/03/1880",
    "dateOfDeath": "27/04/1960",
    "details": "রাজশেখর বসু 'পরশুরাম' ছদ্মনামে বিখ্যাত বাংলা সাহিত্যের অন্যতম শ্রেষ্ঠ ব্যঙ্গ লেখক এবং রসায়নবিদ। তিনি বর্ধমানে জন্মগ্রহণ করেন এবং 'গড্ডলিকা', 'কজ্জলী' ইত্যাদি রচনা করেন। তিনি 'চলন্তিকা' বাংলা অভিধান সংকলন করেন এবং পদ্মভূষণ সম্মানে ভূষিত হন।"
  },
  "Prabhat Kumar Mukhopadhyay": {
    "nameBangla": "প্রভাতকুমার মুখোপাধ্যায়",
    "dateOfBirth": "02/05/1892",
    "dateOfDeath": "10/09/1935",
    "details": "প্রভাতকুমার মুখোপাধ্যায় বাংলা গোয়েন্দা সাহিত্যের অন্যতম পথিকৃৎ এবং শ্রীবিশ গোয়েন্দা চরিত্রের স্রষ্টা। তিনি কলকাতায় জন্মগ্রহণ করেন এবং বাংলা রহস্য সাহিত্যের প্রসারে গুরুত্বপূর্ণ ভূমিকা পালন করেন। তাঁর রচনা বাংলা গোয়েন্দা কাহিনীর সূচনা পর্বের অন্যতম।"
  },
  "Priyonath Mukhopadhyay": {
    "nameBangla": "প্রিয়নাথ মুখোপাধ্যায়",
    "dateOfBirth": "13/10/1855",
    "dateOfDeath": "03/05/1947",
    "details": "প্রিয়নাথ মুখোপাধ্যায় বাংলা গোয়েন্দা কাহিনীর প্রথম দিকের লেখক এবং দারোগা সাহিত্যের জনক। তিনি কলকাতায় জন্মগ্রহণ করেন এবং 'দারোগার দপ্তর' রচনা করেন যা বাংলা ভাষায় প্রথম গোয়েন্দা কাহিনী হিসেবে বিবেচিত। তিনি পুলিশ বিভাগে কর্মরত ছিলেন।"
  },
  "Sailajananda Mukhopadhyay": {
    "nameBangla": "শৈলজানন্দ মুখোপাধ্যায়",
    "dateOfBirth": "15/04/1901",
    "dateOfDeath": "22/02/1976",
    "details": "শৈলজানন্দ মুখোপাধ্যায় বাংলা রহস্য ও ভৌতিক কাহিনীর জনপ্রিয় লেখক এবং কালীকুমার গোয়েন্দা চরিত্রের স্রষ্টা। তিনি ফরিদপুরে জন্মগ্রহণ করেন এবং দুইশোটিরও বেশি রহস্য উপন্যাস রচনা করেন। তাঁর লেখা সরল ভাষা ও গতিশীল কাহিনীর জন্য জনপ্রিয়।"
  },
  "Sasthipada Chattopadhyay": {
    "nameBangla": "ষষ্ঠীপদ চট্টোপাধ্যায়",
    "dateOfBirth": "21/04/1933",
    "dateOfDeath": "08/12/2016",
    "details": "ষষ্ঠীপদ চট্টোপাধ্যায় বাংলা সাহিত্যের জনপ্রিয় ঔপন্যাসিক এবং রহস্য-রোমাঞ্চ কাহিনীর লেখক। তিনি বর্ধমানে জন্মগ্রহণ করেন এবং 'আলিবাবা', 'গণদেবতা' ইত্যাদি রচনা করেন। তিনি বাংলা ভাষায় পাঁচশোরও বেশি উপন্যাস রচনা করেছেন এবং আনন্দ পুরস্কার লাভ করেন।"
  },
  "Probodh Kumar Sanyal": {
    "nameBangla": "প্রবোধকুমার সান্যাল",
    "dateOfBirth": "05/01/1904",
    "dateOfDeath": "10/09/1985",
    "details": "প্রবোধকুমার সান্যাল বাংলা রহস্য ও গোয়েন্দা সাহিত্যের জনপ্রিয় লেখক। তিনি ঢাকায় জন্মগ্রহণ করেন এবং পঁচিশটিরও বেশি গোয়েন্দা উপন্যাস রচনা করেন। তাঁর রচনাশৈলী সহজবোধ্য এবং কাহিনী গতিশীল হওয়ায় পাঠকপ্রিয়।"
  },
  "Nirod Chandra Majumdar": {
    "nameBangla": "নীরোদচন্দ্র মজুমদার",
    "dateOfBirth": "1897",
    "dateOfDeath": "1971",
    "details": "নীরোদচন্দ্র মজুমদার বাংলা রহস্য ও অ্যাডভেঞ্চার সাহিত্যের জনপ্রিয় লেখক। তিনি পূর্ববঙ্গে জন্মগ্রহণ করেন এবং রোমাঞ্চকর গোয়েন্দা ও অ্যাডভেঞ্চার কাহিনী রচনা করেন। তাঁর লেখা শিশু-কিশোর পাঠকদের মধ্যে বিশেষভাবে জনপ্রিয় ছিল।"
  },
  "Manindra Lal Basu": {
    "nameBangla": "মনীন্দ্রলাল বসু",
    "dateOfBirth": "1901",
    "dateOfDeath": "1987",
    "details": "মনীন্দ্রলাল বসু বাংলা রহস্য ও গোয়েন্দা সাহিত্যের প্রখ্যাত লেখক। তিনি পূর্ববঙ্গে জন্মগ্রহণ করেন এবং অসংখ্য রহস্য উপন্যাস রচনা করেন। তাঁর রচনা সহজ ভাষায় লেখা এবং শিশু-কিশোরদের জন্য বিশেষভাবে উপযোগী।"
  },
  "Gajendra Kumar Mitra": {
    "nameBangla": "গজেন্দ্রকুমার মিত্র",
    "dateOfBirth": "24/10/1889",
    "dateOfDeath": "22/09/1959",
    "details": "গজেন্দ্রকুমার মিত্র বাংলা শিশুসাহিত্যের অন্যতম পথিকৃৎ এবং 'মৌচাক' পত্রিকার সম্পাদক। তিনি কলকাতায় জন্মগ্রহণ করেন এবং শিশুদের জন্য অসংখ্য রোমাঞ্চকর গল্প ও উপন্যাস রচনা করেন। তাঁর রচিত 'ঠাকুরমার ঝুলি'-র ধারায় অনেক লোককথা সংকলন করেছিলেন।"
  },
  "Balai Chand Mukhopadhyay": {
    "nameBangla": "বলাইচাঁদ মুখোপাধ্যায় (বনফুল)",
    "dateOfBirth": "19/07/1899",
    "dateOfDeath": "09/02/1979",
    "details": "বলাইচাঁদ মুখোপাধ্যায় 'বনফুল' ছদ্মনামে বিখ্যাত বাংলা সাহিত্যের অন্যতম শ্রেষ্ঠ ছোটগল্পকার এবং চিকিৎসক। তিনি বিহারে জন্মগ্রহণ করেন এবং পাঁচশোরও বেশি ছোটগল্প রচনা করেন। তিনি রবীন্দ্র পুরস্কার, সাহিত্য অকাদেমি পুরস্কার এবং পদ্মভূষণ সম্মানে ভূষিত হন।"
  }
};

// Merge with existing data
Object.keys(bengaliAuthorsBatch1).forEach(name => {
  if (currentData.authors[name]) {
    currentData.authors[name] = bengaliAuthorsBatch1[name];
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

console.log('✅ Added 10 Bengali authors (Batch 1)!');
console.log(`\nTotal completed: ${completedAuthors}`);
console.log(`Remaining: ${remainingAuthors}`);
console.log('\nBengali authors added (Batch 1):');
Object.keys(bengaliAuthorsBatch1).forEach(name => {
  console.log(`  - ${name}`);
});
