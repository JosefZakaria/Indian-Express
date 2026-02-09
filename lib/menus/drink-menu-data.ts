export interface DrinkMenuItem {
  id: string;
  name: string;
  description: string;
  price: number | string;
}

export interface DrinkMenuSection {
  id: string;
  title: string;
  note?: string;
  items: DrinkMenuItem[];
}

export const DRINK_MENU_SECTIONS: DrinkMenuSection[] = [
  {
    id: 'alkoholfritt',
    title: 'ALKOHOLFRITT',
    items: [
      {
        id: 'cola-mix',
        name: 'Cola | Cola zero | Fanta | Sprite | Pepsi Max',
        description: '',
        price: 40,
      },
      {
        id: 'juice-mix',
        name: 'Juice | Mango | Passion | Tranbär | Apelsin',
        description: '',
        price: 40,
      },
      {
        id: 'mango-lassi',
        name: 'Mango lassi - yoghurt | mangopure',
        description: '',
        price: 50,
      },
      {
        id: 'vegan-mango-lassi',
        name: 'Vegan Mango Lassi - havregurt | mangopure | mangojuice',
        description: '',
        price: 50,
      },
      {
        id: 'redbull',
        name: 'Redbull, 25 cl',
        description: '',
        price: 65,
      },
    ],
  },
  {
    id: 'alkoholfri-ol',
    title: 'ALKOHOLFRI ÖL',
    items: [
      {
        id: 'heineken-0',
        name: 'Heineken, 33 cl',
        description: '',
        price: 55,
      },
      {
        id: 'ship-ipa-0',
        name: 'A Ship Full of IPA, 33 cl',
        description: '',
        price: 59,
      },
    ],
  },
  {
    id: 'cider-ol-fat',
    title: 'CIDER/ÖL PÅ FAT',
    note: '40cl | 50cl',
    items: [
      {
        id: 'briska',
        name: 'Briska päroncider, 4,5 %',
        description: '',
        price: '66/76',
      },
      {
        id: 'norrlands-guld',
        name: 'Norrlands Guld, 5,3 %',
        description: '',
        price: '66/76',
      },
      {
        id: 'heineken-fat',
        name: 'Heineken, 5,0 %',
        description: '',
        price: '72/82',
      },
      {
        id: 'krusovice',
        name: 'Krusovice, 5,0 %',
        description: '',
        price: '76/87',
      },
      {
        id: 'ship-ipa-fat',
        name: 'A Ship Full of IPA, 5,8 %',
        description: '',
        price: '81/92',
      },
      {
        id: '1664-blanc',
        name: '1664 blanc, 5,0 %',
        description: '',
        price: '74/84',
      },
      {
        id: 'eriksberg',
        name: 'Eriksberg Karaktär, 5,4 %',
        description: '',
        price: '72/82',
      },
    ],
  },
  {
    id: 'cider-ol-flaska',
    title: 'CIDER/ÖL PÅ FLASKA',
    items: [
      { id: 'briska-blabar', name: 'Briska, blåbär hallon, 33 cl', description: '', price: 72 },
      { id: 'carlsberg-hof', name: 'Carlsberg Hof, 33 cl', description: '', price: 60 },
      { id: 'sol', name: 'Sol, 33 cl', description: '', price: 70 },
      { id: 'sitting-bulldog', name: 'Sitting Bulldog IPA, 33 cl', description: '', price: 72 },
      { id: 'ginger-joe', name: 'Ginger Joe, 33 cl', description: '', price: 79 },
      { id: 'daura-damm', name: 'Daura Damm, glutenfri, 33 cl', description: '', price: 75 },
      { id: 'tuborg-guld', name: 'Tuborg Guld, 50 cl', description: '', price: 80 },
      { id: 'mariestads', name: 'Mariestads Export, 50 cl', description: '', price: 80 },
      { id: 'old-ox', name: 'Old Ox, 50 cl', description: '', price: 89 },
      { id: 'paulaner', name: 'Paulaner, 50 cl', description: '', price: 85 },
      { id: 'kingfisher', name: 'Kingfisher, indisk, 33 cl', description: '', price: 67 },
      { id: 'cobra', name: 'Cobra, indisk, 66 cl', description: '', price: 109 },
      { id: 'smirnoff-ice', name: 'Smirnoff Ice, 27,5 cl', description: '', price: 79 },
    ],
  },
  {
    id: 'rott',
    title: 'RÖTT',
    note: '',
    items: [
      {
        id: 'maximo-tinto',
        name: 'Maximo Tinto, Spanien',
        description:
          'Medelfylligt, ganska mjukt vin med mogna tanniner och toner av mynta, lakrits, röda bär som hallon och jordgubbar.',
        price: '85/359',
      },
      {
        id: 'la-primizia',
        name: 'La primizia Vino Rosso, Italien',
        description:
          'Lätt, bärigt med mjuk strävhet och uppiggande syrlighet. Vi bjuds på skogshallon, jordgubbskompott och körsbär i likör samt pinjenöt, ceder, körsbärskärna och kanel i avslutet.',
        price: '95/395',
      },
      {
        id: 'valpolicella',
        name: 'Valpolicella Ripasso, Italien',
        description:
          'Medelfylligt vin med smak av mörk frukt, choklad och lite mandel. Vinet har silkiga tanniner och lång aningens het eftersmak.',
        price: '–/445',
      },
    ],
  },
  {
    id: 'vitt',
    title: 'VITT',
    note: '',
    items: [
      {
        id: 'maximo-blanco',
        name: 'Maximo Blanco, Spanien',
        description:
          'Torrt, lätt vin med en aptitretande frisk syra med fruktig smak och inslag av citrus och lite mineral.',
        price: '85/359',
      },
      {
        id: 'mehrlein-riesling',
        name: 'Mehrlein Riesling Dry, Tyskland',
        description:
          'Klassisk riesling med frisk smak av citrus, gröna äpplen, grapefrukt, persika och mineraler.',
        price: '95/395',
      },
    ],
  },
  {
    id: 'rose',
    title: 'ROSÉ',
    note: '',
    items: [
      {
        id: 'barefoot-white-zinfandel',
        name: 'Barefoot White Zinfandel, USA',
        description:
          'Frisk och härlig smak av mosade jordgubbar, hallon, solmogna päron och saftig ananas. Ett mycket fruktigt vin med viss sötma och krispigt avslut.',
        price: '85/359',
      },
      {
        id: 'santiago-assinatura',
        name: 'Santiago Assinatura de Familia, Portugal',
        description:
          'Frisk och sötfruktig med en lätt sprits. Inslag av söta jordgubbar, hallon och röda vinbär med en behaglig sötma och läskande syra. Passar till lite kryddiga rätter av fisk eller kyckling.',
        price: '95/395',
      },
    ],
  },
  {
    id: 'whiskey-rom-cognac',
    title: 'WHISKEY | ROM | COGNAC',
    items: [
      { id: 'jameson', name: 'Jameson', description: '', price: 26 },
      { id: 'famous-grouse', name: 'Famous Grouse', description: '', price: 26 },
      { id: 'jim-beam', name: 'Jim Beam', description: '', price: 26 },
      { id: 'jack-daniels', name: 'Jack Daniels', description: '', price: 28 },
      { id: 'black-label', name: 'Black Label', description: '', price: 30 },
      { id: 'gronstedt-monopole', name: 'Grönstedt Monopole', description: '', price: 30 },
      { id: 'laphroaig', name: 'Laphroaig', description: '', price: 32 },
      { id: 'macallan', name: 'Macallan', description: '', price: 37 },
      { id: 'zacapa', name: 'Zacapa', description: '', price: 37 },
      { id: 'diplomatico', name: 'Diplomatico', description: '', price: 37 },
    ],
  },
];
