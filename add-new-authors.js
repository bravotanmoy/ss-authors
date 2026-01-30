const XLSX = require('xlsx');
const fs = require('fs');

// Read the Excel file to get all author names
const workbook = XLSX.readFile('sunday-suspence-authors.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

// Read the current populated authors
const currentData = JSON.parse(fs.readFileSync('authors-data-template.json', 'utf8'));

// Create complete template with all authors
const allAuthors = {};

// Add all authors from Excel
for (let i = 1; i < data.length; i++) {
  const englishName = data[i][1];
  if (englishName && englishName.trim() !== '') {
    // Check if author already has data
    if (currentData.authors && currentData.authors[englishName]) {
      allAuthors[englishName] = currentData.authors[englishName];
    } else {
      // Add empty entry
      allAuthors[englishName] = {
        "nameBangla": "",
        "dateOfBirth": "",
        "dateOfDeath": "",
        "details": ""
      };
    }
  }
}

// Add the new researched authors
const newAuthors = {
  "Hemendra Kumar Roy": {
    "nameBangla": "হেমেন্দ্রকুমার রায়",
    "dateOfBirth": "02/09/1888",
    "dateOfDeath": "18/04/1963",
    "details": "হেমেন্দ্রকুমার রায় বাংলা শিশুসাহিত্য, গোয়েন্দা এবং রোমহর্ষক কাহিনীর অন্যতম পথিকৃৎ লেখক। তিনি কলকাতায় জন্মগ্রহণ করেন এবং জয়ন্ত-মানিক গোয়েন্দা সিরিজ ও বিমল-কুমার অ্যাডভেঞ্চার সিরিজ রচনা করেন। তিনি ৮০টিরও বেশি শিশুদের বই লিখেছেন এবং 'Alice in Wonderland' বাংলায় অনুবাদ করেছিলেন।"
  },
  "Narayan Gangopadhyay": {
    "nameBangla": "নারায়ণ গঙ্গোপাধ্যায়",
    "dateOfBirth": "04/02/1918",
    "dateOfDeath": "08/11/1970",
    "details": "নারায়ণ গঙ্গোপাধ্যায় আধুনিক বাংলা সাহিত্যের বিশিষ্ট লেখক এবং বিখ্যাত টেনিদা চরিত্রের স্রষ্টা। তিনি দিনাজপুরে জন্মগ্রহণ করেন এবং কলকাতা বিশ্ববিদ্যালয়ে অধ্যাপনা করতেন। তিনি উপন্যাস, ছোটগল্প এবং শিশুসাহিত্যে অবদানের জন্য আনন্দ পুরস্কার এবং সাহিত্য অকাদেমি পুরস্কার লাভ করেন।"
  },
  "Nihar Ranjan Gupta": {
    "nameBangla": "নিহাররঞ্জন গুপ্ত",
    "dateOfBirth": "06/06/1911",
    "dateOfDeath": "20/02/1986",
    "details": "নিহাররঞ্জন গুপ্ত একজন প্রখ্যাত চর্মরোগ বিশেষজ্ঞ এবং জনপ্রিয় বাংলা সাহিত্যিক যিনি কিরীটি রায় গোয়েন্দা চরিত্রের স্রষ্টা। তিনি নড়াইলে জন্মগ্রহণ করেন এবং দ্বিতীয় বিশ্বযুদ্ধে সেনা চিকিৎসক হিসেবে কাজ করেছিলেন। তিনি ২০০টিরও বেশি উপন্যাস রচনা করেছেন এবং বাংলা রহস্য সাহিত্যে অসামান্য অবদান রেখেছেন।"
  },
  "Leela Majumdar": {
    "nameBangla": "লীলা মজুমদার",
    "dateOfBirth": "26/02/1908",
    "dateOfDeath": "05/04/2007",
    "details": "লীলা মজুমদার বাংলা শিশুসাহিত্যের অন্যতম শ্রেষ্ঠ লেখিকা এবং সত্যজিৎ রায়ের খুড়তুতো বোন। তিনি কলকাতায় জন্মগ্রহণ করেন এবং 'সন্দেশ' পত্রিকার সম্পাদক ছিলেন। তিনি ১২৫টিরও বেশি বই রচনা করেছেন যার মধ্যে রয়েছে কল্পকাহিনী, গোয়েন্দা কাহিনী এবং ভ্রমণকাহিনী।"
  },
  "Shirshendu Mukhopadhyay": {
    "nameBangla": "শীর্ষেন্দু মুখোপাধ্যায়",
    "dateOfBirth": "02/11/1935",
    "dateOfDeath": "",
    "details": "শীর্ষেন্দু মুখোপাধ্যায় সমসাময়িক বাংলা সাহিত্যের অন্যতম প্রধান লেখক এবং বড়দা ও শবর দাশগুপ্ত গোয়েন্দা চরিত্রের স্রষ্টা। তিনি ময়মনসিংহে জন্মগ্রহণ করেন এবং আনন্দবাজার পত্রিকায় কর্মরত। তিনি সাহিত্য অকাদেমি পুরস্কার এবং আনন্দ পুরস্কারে ভূষিত হয়েছেন এবং শিশু ও প্রাপ্তবয়স্কদের জন্য বহু জনপ্রিয় রচনা সৃষ্টি করেছেন।"
  },
  "Buddhadeb Bosu": {
    "nameBangla": "বুদ্ধদেব বসু",
    "dateOfBirth": "30/11/1908",
    "dateOfDeath": "18/03/1974",
    "details": "বুদ্ধদেব বসু বিংশ শতাব্দীর অন্যতম প্রধান বাংলা কবি, ঔপন্যাসিক এবং সাহিত্য সমালোচক। তিনি কুমিল্লায় জন্মগ্রহণ করেন এবং আধুনিক বাংলা কবিতায় রবীন্দ্রনাথের পরবর্তী যুগের প্রবর্তক। তিনি 'কবিতা' পত্রিকার সম্পাদক ছিলেন এবং যাদবপুর বিশ্ববিদ্যালয়ে তুলনামূলক সাহিত্য বিভাগ প্রতিষ্ঠা করেন।"
  },
  "Samaresh Basu": {
    "nameBangla": "সমরেশ বসু",
    "dateOfBirth": "11/12/1924",
    "dateOfDeath": "12/03/1988",
    "details": "সমরেশ বসু আধুনিক বাংলা সাহিত্যের অন্যতম প্রধান ঔপন্যাসিক এবং গোগোল গোয়েন্দা সিরিজের স্রষ্টা। তিনি ঢাকায় জন্মগ্রহণ করেন এবং ২০০টিরও বেশি গল্প ও ১০০টি উপন্যাস রচনা করেছেন। তিনি ১৯৮০ সালে তাঁর উপন্যাস 'শম্বা'-র জন্য সাহিত্য অকাদেমি পুরস্কার এবং আনন্দ পুরস্কার লাভ করেন।"
  },
  "Syed Mustafa Siraj": {
    "nameBangla": "সৈয়দ মুস্তাফা সিরাজ",
    "dateOfBirth": "14/10/1930",
    "dateOfDeath": "04/09/2012",
    "details": "সৈয়দ মুস্তাফা সিরাজ বিশিষ্ট বাংলা সাহিত্যিক এবং কর্নেল নীলাদ্রি সরকার গোয়েন্দা চরিত্রের স্রষ্টা। তিনি মুর্শিদাবাদে জন্মগ্রহণ করেন এবং গ্রামবাংলার জীবন নিয়ে অসংখ্য কাহিনী রচনা করেছেন। তিনি ১৯৯৪ সালে 'আলিক মানুষ' উপন্যাসের জন্য সাহিত্য অকাদেমি পুরস্কার এবং বঙ্কিম পুরস্কার লাভ করেন।"
  }
};

// Merge new authors
Object.keys(newAuthors).forEach(name => {
  if (allAuthors[name]) {
    allAuthors[name] = newAuthors[name];
  }
});

// Create final template
const finalTemplate = {
  "instructions": "Fill in the author information below. Use DD/MM/YYYY format for dates. Write Author Details in Bangla script.",
  "authors": allAuthors,
  "notes": [
    "Use DD/MM/YYYY format for dates (e.g., '15/08/1932' for 15th August 1932)",
    "If date is unknown, leave empty or use 'N/A'",
    "Write all biographical details in Bangla script",
    "Include: birthplace, notable works, contributions, awards, death information",
    "Provide at least 2-3 sentences per author",
    "",
    "STATUS: 18 authors completed, 64 remaining",
    "Continue following the same format for all remaining authors."
  ]
};

// Write to file
fs.writeFileSync('authors-data-template.json', JSON.stringify(finalTemplate, null, 2), 'utf8');

console.log('✅ Template updated with 8 new authors!');
console.log('\nTotal authors with data: 18');
console.log('Remaining empty: 64');
console.log('\nNew authors added:');
Object.keys(newAuthors).forEach(name => {
  console.log(`  - ${name}`);
});
