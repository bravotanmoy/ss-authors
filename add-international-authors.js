const fs = require('fs');

// Read the current data
const currentData = JSON.parse(fs.readFileSync('authors-data-template.json', 'utf8'));

// International authors with complete biographical data
const internationalAuthors = {
  "Arthur Conan Doyle": {
    "nameBangla": "আর্থার কোনান ডয়েল",
    "dateOfBirth": "22/05/1859",
    "dateOfDeath": "07/07/1930",
    "details": "আর্থার কোনান ডয়েল একজন ব্রিটিশ লেখক এবং চিকিৎসক যিনি শার্লক হোমস গোয়েন্দা চরিত্রের স্রষ্টা। তিনি এডিনবরায় জন্মগ্রহণ করেন এবং গোয়েন্দা সাহিত্যে বিপ্লব ঘটান। শার্লক হোমস সিরিজ বিশ্বসাহিত্যের অন্যতম জনপ্রিয় গোয়েন্দা কাহিনী।"
  },
  "Edgar Allan Poe": {
    "nameBangla": "এডগার অ্যালান পো",
    "dateOfBirth": "19/01/1809",
    "dateOfDeath": "07/10/1849",
    "details": "এডগার অ্যালান পো আমেরিকান সাহিত্যের অন্যতম প্রধান রহস্য ও ভৌতিক গল্পের লেখক। তিনি বোস্টনে জন্মগ্রহণ করেন এবং আধুনিক গোয়েন্দা কাহিনীর জনক হিসেবে বিবেচিত। 'The Murders in the Rue Morgue' এবং 'The Raven' তাঁর বিখ্যাত রচনা।"
  },
  "H. P. Lovecraft": {
    "nameBangla": "এইচ. পি. লাভক্রাফ্ট",
    "dateOfBirth": "20/08/1890",
    "dateOfDeath": "15/03/1937",
    "details": "হাওয়ার্ড ফিলিপস লাভক্রাফ্ট আমেরিকান ভৌতিক এবং কসমিক হরর সাহিত্যের অন্যতম প্রধান লেখক। তিনি প্রভিডেন্সে জন্মগ্রহণ করেন এবং 'Cthulhu Mythos' সৃষ্টি করেন। তাঁর রচনা আধুনিক হরর সাহিত্যে গভীর প্রভাব ফেলেছে।"
  },
  "Arthur C. Clarke": {
    "nameBangla": "আর্থার সি. ক্লার্ক",
    "dateOfBirth": "16/12/1917",
    "dateOfDeath": "19/03/2008",
    "details": "আর্থার সি. ক্লার্ক ব্রিটিশ বৈজ্ঞানিক কল্পকাহিনীর অন্যতম শ্রেষ্ঠ লেখক এবং বিজ্ঞানী। তিনি সমারসেটে জন্মগ্রহণ করেন এবং '2001: A Space Odyssey' রচনা করেন। তিনি যোগাযোগ স্যাটেলাইট প্রযুক্তির ধারণার জনক এবং তিনটি বিখ্যাত সায়েন্স ফিকশন আইন প্রণয়ন করেন।"
  },
  "Ray Bradbury": {
    "nameBangla": "রে ব্র্যাডবারি",
    "dateOfBirth": "22/08/1920",
    "dateOfDeath": "05/06/2012",
    "details": "রে ব্র্যাডবারি আমেরিকান কল্পবিজ্ঞান ও ফ্যান্টাসি সাহিত্যের অন্যতম প্রধান লেখক। তিনি ইলিনয়েতে জন্মগ্রহণ করেন এবং 'Fahrenheit 451' ও 'The Martian Chronicles' রচনা করেন। তাঁর লেখা পঞ্চাশটিরও বেশি বই প্রকাশিত হয়েছে।"
  },
  "Charles Dickens": {
    "nameBangla": "চার্লস ডিকেন্স",
    "dateOfBirth": "07/02/1812",
    "dateOfDeath": "09/06/1870",
    "details": "চার্লস ডিকেন্স ভিক্টোরিয়ান যুগের সর্বশ্রেষ্ঠ ইংরেজ ঔপন্যাসিক এবং সমাজ সংস্কারক। তিনি পোর্টসমাউথে জন্মগ্রহণ করেন এবং 'Oliver Twist', 'A Tale of Two Cities', 'Great Expectations' রচনা করেন। তাঁর রচনা বিশ্বসাহিত্যে অমর হয়ে আছে।"
  },
  "Graham Greene": {
    "nameBangla": "গ্রাহাম গ্রিন",
    "dateOfBirth": "02/10/1904",
    "dateOfDeath": "03/04/1991",
    "details": "গ্রাহাম গ্রিন ব্রিটিশ ঔপন্যাসিক, ছোটগল্পকার এবং নাট্যকার যিনি রহস্য ও থ্রিলার সাহিত্যে পারদর্শী। তিনি বার্কহ্যামস্টেডে জন্মগ্রহণ করেন এবং 'The Third Man', 'Brighton Rock' রচনা করেন। তিনি একুশবার নোবেল পুরস্কারের জন্য মনোনীত হয়েছিলেন।"
  },
  "Henry James": {
    "nameBangla": "হেনরি জেমস",
    "dateOfBirth": "15/04/1843",
    "dateOfDeath": "28/02/1916",
    "details": "হেনরি জেমস আমেরিকান-ব্রিটিশ ঔপন্যাসিক যিনি মনস্তাত্ত্বিক বাস্তববাদের প্রবর্তক। তিনি নিউইয়র্কে জন্মগ্রহণ করেন এবং 'The Turn of the Screw', 'The Portrait of a Lady' রচনা করেন। তাঁর রচনা আধুনিক সাহিত্যে গভীর প্রভাব ফেলেছে।"
  },
  "Jim Corbett": {
    "nameBangla": "জিম করবেট",
    "dateOfBirth": "25/07/1875",
    "dateOfDeath": "19/04/1955",
    "details": "জিম করবেট ব্রিটিশ-ভারতীয় শিকারি, প্রকৃতিবিদ এবং লেখক যিনি মানুষখেকো বাঘ ও চিতাবাঘ শিকারের জন্য বিখ্যাত। তিনি নৈনিতালে জন্মগ্রহণ করেন এবং 'Man-Eaters of Kumaon' রচনা করেন। ভারতের জিম করবেট জাতীয় উদ্যান তাঁর নামে নামকরণ করা হয়েছে।"
  },
  "Ruskin Bond": {
    "nameBangla": "রাসকিন বন্ড",
    "dateOfBirth": "19/05/1934",
    "dateOfDeath": "",
    "details": "রাসকিন বন্ড ভারতীয় ইংরেজি সাহিত্যের অন্যতম জনপ্রিয় লেখক এবং শিশুসাহিত্যিক। তিনি কসৌলিতে জন্মগ্রহণ করেন এবং মুসৌরিতে বসবাস করেন। তিনি সাহিত্য অকাদেমি পুরস্কার ও পদ্মশ্রী সম্মানে ভূষিত এবং পাঁচশোরও বেশি ছোটগল্প ও উপন্যাস রচনা করেছেন।"
  },
  "Alice Perrin": {
    "nameBangla": "অ্যালিস পেরিন",
    "dateOfBirth": "1867",
    "dateOfDeath": "1934",
    "details": "অ্যালিস পেরিন ব্রিটিশ ঔপন্যাসিক যিনি ভারতীয় জীবন নিয়ে রহস্য এবং রোমান্টিক কাহিনী রচনা করেছিলেন। তিনি ভারতে জন্মগ্রহণ করেন এবং 'East of Suez', 'The Anglo-Indians' রচনা করেন। তাঁর লেখা ব্রিটিশ রাজ যুগের ভারতীয় সমাজের প্রতিচ্ছবি।"
  },
  "Francis Marion Crawford": {
    "nameBangla": "ফ্রান্সিস ম্যারিয়ন ক্রফোর্ড",
    "dateOfBirth": "02/08/1854",
    "dateOfDeath": "09/04/1909",
    "details": "ফ্রান্সিস ম্যারিয়ন ক্রফোর্ড আমেরিকান ঔপন্যাসিক যিনি ঐতিহাসিক ও ভৌতিক কাহিনীতে পারদর্শী। তিনি ইতালিতে জন্মগ্রহণ করেন এবং চল্লিশটিরও বেশি উপন্যাস রচনা করেন। 'The Upper Berth' তাঁর বিখ্যাত ভৌতিক গল্প।"
  },
  "Hector Hugh Munro (Saki)": {
    "nameBangla": "হেক্টর হিউ মুনরো (সাকি)",
    "dateOfBirth": "18/12/1870",
    "dateOfDeath": "14/11/1916",
    "details": "সাকি নামে পরিচিত হেক্টর হিউ মুনরো ব্রিটিশ ব্যঙ্গাত্মক ছোটগল্পকার। তিনি মায়ানমারে জন্মগ্রহণ করেন এবং তীক্ষ্ণ রসবোধ ও বিদ্রূপাত্মক গল্প রচনা করেন। প্রথম বিশ্বযুদ্ধে তিনি শহীদ হন।"
  },
  "Hanns Heinz Ewers": {
    "nameBangla": "হানস হাইনৎস এভার্স",
    "dateOfBirth": "03/11/1871",
    "dateOfDeath": "12/06/1943",
    "details": "হানস হাইনৎস এভার্স জার্মান লেখক যিনি ভৌতিক ও হরর সাহিত্যে বিখ্যাত। তিনি ডুসেলডর্ফে জন্মগ্রহণ করেন এবং 'Alraune', 'The Sorcerer's Apprentice' রচনা করেন। তাঁর লেখা অতিপ্রাকৃত ও মনস্তাত্ত্বিক হরর ঘরানার অন্যতম শ্রেষ্ঠ নিদর্শন।"
  },
  "Milward Kennedy": {
    "nameBangla": "মিলওয়ার্ড কেনেডি",
    "dateOfBirth": "23/07/1894",
    "dateOfDeath": "10/02/1968",
    "details": "মিলওয়ার্ড কেনেডি ব্রিটিশ রহস্য এবং গোয়েন্দা কাহিনীর লেখক। তিনি লন্ডনে জন্মগ্রহণ করেন এবং 'Detection Club'-এর সদস্য ছিলেন। তাঁর রচনা গোল্ডেন এজ অফ ডিটেক্টিভ ফিকশনের অন্তর্গত।"
  },
  "Ruth Rendell": {
    "nameBangla": "রুথ রেন্ডেল",
    "dateOfBirth": "17/02/1930",
    "dateOfDeath": "02/05/2015",
    "details": "রুথ রেন্ডেল ব্রিটিশ ক্রাইম এবং মনস্তাত্ত্বিক থ্রিলার সাহিত্যের অন্যতম শ্রেষ্ঠ লেখিকা। তিনি লন্ডনে জন্মগ্রহণ করেন এবং ইন্সপেক্টর ওয়েক্সফোর্ড সিরিজ রচনা করেন। তিনি তিনটি গোল্ড ড্যাগার পুরস্কার লাভ করেন।"
  },
  "Stacy Aumonier": {
    "nameBangla": "স্টেসি অমোনিয়ার",
    "dateOfBirth": "08/04/1877",
    "dateOfDeath": "10/02/1928",
    "details": "স্টেসি অমোনিয়ার ব্রিটিশ ছোটগল্পকার এবং চিত্রশিল্পী। তিনি লন্ডনে জন্মগ্রহণ করেন এবং তীক্ষ্ণ পর্যবেক্ষণশক্তি সম্পন্ন ছোটগল্প রচনা করেন। জন গলসওয়ার্দি তাঁকে 'ইংরেজি ভাষার অন্যতম শ্রেষ্ঠ ছোটগল্পকার' বলে অভিহিত করেছিলেন।"
  },
  "W. W. Jacobs": {
    "nameBangla": "ডব্লিউ. ডব্লিউ. জেকবস",
    "dateOfBirth": "08/09/1863",
    "dateOfDeath": "01/09/1943",
    "details": "উইলিয়াম উইমার্ক জেকবস ব্রিটিশ ছোটগল্পকার যিনি ভৌতিক ও হাস্যরসাত্মক গল্পে বিখ্যাত। তিনি লন্ডনে জন্মগ্রহণ করেন এবং 'The Monkey's Paw' তাঁর সবচেয়ে বিখ্যাত রচনা যা বিশ্বসাহিত্যের অন্যতম শ্রেষ্ঠ ভৌতিক গল্প।"
  }
};

// Merge with existing data
Object.keys(internationalAuthors).forEach(name => {
  if (currentData.authors[name]) {
    currentData.authors[name] = internationalAuthors[name];
  }
});

// Update counts in notes
const totalAuthors = Object.keys(currentData.authors).length;
const completedAuthors = Object.keys(currentData.authors).filter(
  name => currentData.authors[name].nameBangla
).length;
const remainingAuthors = totalAuthors - completedAuthors;

currentData.notes[3] = `STATUS: ${completedAuthors} authors completed, ${remainingAuthors} remaining`;

// Write updated data
fs.writeFileSync('authors-data-template.json', JSON.stringify(currentData, null, 2), 'utf8');

console.log('✅ Added 18 international authors!');
console.log(`\nTotal completed: ${completedAuthors}`);
console.log(`Remaining: ${remainingAuthors}`);
console.log('\nInternational authors added:');
Object.keys(internationalAuthors).forEach(name => {
  console.log(`  - ${name}`);
});
