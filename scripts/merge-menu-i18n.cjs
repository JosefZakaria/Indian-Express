/**
 * One-time script: merges drink and evening menu sections into messages/sv.json and messages/en.json.
 * Run from project root: node scripts/merge-menu-i18n.cjs
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const svPath = path.join(ROOT, 'messages', 'sv.json');
const enPath = path.join(ROOT, 'messages', 'en.json');
const menuSvPath = path.join(ROOT, 'messages', 'menu-sections-sv.json');
const menuEnPath = path.join(ROOT, 'messages', 'menu-sections-en.json');

const sv = JSON.parse(fs.readFileSync(svPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const menuSv = JSON.parse(fs.readFileSync(menuSvPath, 'utf8'));
const menuEn = JSON.parse(fs.readFileSync(menuEnPath, 'utf8'));

sv.drinkMenu = { ...sv.drinkMenu, ...menuSv.drinkMenu };
sv.eveningMenu = { ...sv.eveningMenu, ...menuSv.eveningMenu };
en.drinkMenu = { ...en.drinkMenu, ...menuEn.drinkMenu };
en.eveningMenu = { ...en.eveningMenu, ...menuEn.eveningMenu };

fs.writeFileSync(svPath, JSON.stringify(sv));
fs.writeFileSync(enPath, JSON.stringify(en));
console.log('Merged menu sections into sv.json and en.json');
console.log('Run again only if you need to re-merge. You can delete scripts/merge-menu-i18n.cjs and messages/menu-sections-*.json after.');