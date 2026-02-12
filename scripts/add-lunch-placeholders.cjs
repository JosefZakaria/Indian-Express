/**
 * One-time script: adds 120 lunch dish placeholders + day names to sv.json and en.json.
 * Run from project root: node scripts/add-lunch-placeholders.cjs
 */
const fs = require('fs');
const path = require('path');

const svPath = path.join(__dirname, '..', 'messages', 'sv.json');
const enPath = path.join(__dirname, '..', 'messages', 'en.json');

const sv = JSON.parse(fs.readFileSync(svPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

const dayNamesSv = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag'];
const dayNamesEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// Add day names
sv.lunch = sv.lunch || {};
en.lunch = en.lunch || {};

sv.lunch.days = {};
en.lunch.days = {};
for (let d = 0; d < 5; d++) {
  sv.lunch.days[d] = dayNamesSv[d];
  en.lunch.days[d] = dayNamesEn[d];
}

// Weekend message
sv.lunch.weekendMessage = 'Ingen lunch idag – välkommen tillbaka på måndag!';
en.lunch.weekendMessage = 'No lunch today – welcome back on Monday!';

// Add 120 dish placeholders
for (let i = 1; i <= 120; i++) {
  const week = Math.ceil(i / 30);
  const dayInWeek = Math.ceil(((i - 1) % 30 + 1) / 6);
  const dishInDay = ((i - 1) % 6) + 1;

  const svKey = `dish${i}`;
  const svDayName = dayNamesSv[dayInWeek - 1];

  if (!sv.lunch[svKey]) {
    sv.lunch[svKey] = {
      name: `Vecka ${week} ${svDayName} Rätt ${dishInDay}`,
      description: `Beskrivning för vecka ${week} ${svDayName} rätt ${dishInDay}`
    };
  }

  const enDayName = dayNamesEn[dayInWeek - 1];
  if (!en.lunch[svKey]) {
    en.lunch[svKey] = {
      name: `Week ${week} ${enDayName} Dish ${dishInDay}`,
      description: `Description for week ${week} ${enDayName} dish ${dishInDay}`
    };
  }
}

// Also add flat keys for backward compat (the t() helper uses getNested)
// Not needed since we use nested lunch.dish1.name path — skip flat keys

// Clean up old flat keys (lunch.dish1.name etc at root level)
for (let i = 1; i <= 20; i++) {
  delete sv[`lunch.dish${i}.name`];
  delete sv[`lunch.dish${i}.description`];
  delete en[`lunch.dish${i}.name`];
  delete en[`lunch.dish${i}.description`];
}

fs.writeFileSync(svPath, JSON.stringify(sv, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));

console.log('Added 120 lunch dish placeholders + day names to sv.json and en.json');
console.log('Old flat lunch.dishN.* keys at root level have been cleaned up.');
