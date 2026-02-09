export interface DrinkMenuItem {
  id: string;
  price: number | string;
}

export interface DrinkMenuSection {
  id: string;
  items: DrinkMenuItem[];
}

export const DRINK_MENU_SECTIONS: DrinkMenuSection[] = [
  {
    id: 'alkoholfritt',
    items: [
      { id: 'cola-mix', price: 40 },
      { id: 'juice-mix', price: 40 },
      { id: 'mango-lassi', price: 50 },
      { id: 'vegan-mango-lassi', price: 50 },
      { id: 'redbull', price: 65 },
    ],
  },
  {
    id: 'alkoholfri-ol',
    items: [
      { id: 'heineken-0', price: 55 },
      { id: 'ship-ipa-0', price: 59 },
    ],
  },
  {
    id: 'cider-ol-fat',
    items: [
      { id: 'briska', price: '66/76' },
      { id: 'norrlands-guld', price: '66/76' },
      { id: 'heineken-fat', price: '72/82' },
      { id: 'krusovice', price: '76/87' },
      { id: 'ship-ipa-fat', price: '81/92' },
      { id: '1664-blanc', price: '74/84' },
      { id: 'eriksberg', price: '72/82' },
    ],
  },
  {
    id: 'cider-ol-flaska',
    items: [
      { id: 'briska-blabar', price: 72 },
      { id: 'carlsberg-hof', price: 60 },
      { id: 'sol', price: 70 },
      { id: 'sitting-bulldog', price: 72 },
      { id: 'ginger-joe', price: 79 },
      { id: 'daura-damm', price: 75 },
      { id: 'tuborg-guld', price: 80 },
      { id: 'mariestads', price: 80 },
      { id: 'old-ox', price: 89 },
      { id: 'paulaner', price: 85 },
      { id: 'kingfisher', price: 67 },
      { id: 'cobra', price: 109 },
      { id: 'smirnoff-ice', price: 79 },
    ],
  },
  {
    id: 'rott',
    items: [
      { id: 'maximo-tinto', price: '85/359' },
      { id: 'la-primizia', price: '95/395' },
      { id: 'valpolicella', price: '–/445' },
    ],
  },
  {
    id: 'vitt',
    items: [
      { id: 'maximo-blanco', price: '85/359' },
      { id: 'mehrlein-riesling', price: '95/395' },
    ],
  },
  {
    id: 'rose',
    items: [
      { id: 'barefoot-white-zinfandel', price: '85/359' },
      { id: 'santiago-assinatura', price: '95/395' },
    ],
  },
  {
    id: 'whiskey-rom-cognac',
    items: [
      { id: 'jameson', price: 26 },
      { id: 'famous-grouse', price: 26 },
      { id: 'jim-beam', price: 26 },
      { id: 'jack-daniels', price: 28 },
      { id: 'black-label', price: 30 },
      { id: 'gronstedt-monopole', price: 30 },
      { id: 'laphroaig', price: 32 },
      { id: 'macallan', price: 37 },
      { id: 'zacapa', price: 37 },
      { id: 'diplomatico', price: 37 },
    ],
  },
];
