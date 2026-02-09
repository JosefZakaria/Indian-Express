export interface EveningMenuItem {
  id: string;
  price: number | string;
  vegan?: boolean;
}

export interface EveningMenuSection {
  id: string;
  items: EveningMenuItem[];
}

export const EVENING_MENU_SECTIONS: EveningMenuSection[] = [
  {
    id: 'smaratter',
    items: [
      { id: 'papadam', price: 39, vegan: true },
      { id: 'veg-samosa', price: 75, vegan: true },
      { id: 'onion-bhaaje', price: 75 },
      { id: 'zucchini-cauliflower-pakora', price: 75, vegan: true },
      { id: 'chicken-samosa', price: 79 },
      { id: 'chicken-roll', price: 80 },
      { id: 'king-prawn-roll', price: 130 },
      { id: 'chicken-tikka', price: 99 },
      { id: 'seekh-kebab', price: 90 },
      { id: 'chicken-tikka-naan', price: 75 },
      { id: 'prawn-puri', price: 119 },
      { id: 'king-prawn', price: 125 },
    ],
  },
  {
    id: 'naan',
    items: [
      { id: 'plain-naan', price: 28, vegan: true },
      { id: 'garlic-naan', price: 35, vegan: true },
      { id: 'butter-naan', price: 35 },
      { id: 'peshwari-naan', price: 45, vegan: true },
      { id: 'butter-paneer-naan', price: 45 },
      { id: 'chilli-paneer-naan', price: 45 },
      { id: 'garlic-paneer-naan', price: 45 },
      { id: 'paratha', price: 35 },
    ],
  },
  {
    id: 'kockens-favoriter',
    items: [
      { id: 'chicken-lamb-tikka-masala', price: '180/235' },
      { id: 'butter-chicken-lamb', price: '180/235' },
      { id: 'hot-chili-chicken-lamb', price: '180/235' },
      { id: 'tandoori-chicken-lamb-masala', price: '180/235' },
      { id: 'chicken-lamb-tikka-jalfrezi', price: '180/235' },
      { id: 'chicken-lamb-tikka-karai', price: '180/235' },
      { id: 'chicken-lasuni-karai', price: 189 },
      { id: 'chicken-lamb-tikka-balti', price: '185/235' },
      { id: 'chicken-lasuni-balti', price: 189 },
    ],
  },
  {
    id: 'tandoori-sizlar',
    items: [
      { id: 'tandoori-chicken-sizlar', price: 185 },
      { id: 'chicken-tikka-sizlar', price: 185 },
      { id: 'chicken-lasuni-sizlar', price: 190 },
      { id: 'lamm-tikka-sizlar', price: 249 },
      { id: 'king-prawn-sizlar', price: 239 },
      { id: 'mix-sizlar', price: 255 },
      { id: 'seekh-kebab-sizlar', price: 190 },
    ],
  },
  {
    id: 'thali',
    items: [
      { id: 'kott-thali', price: 285 },
      { id: 'vegetarisk-thali', price: 265 },
    ],
  },
  {
    id: 'birjani',
    items: [
      { id: 'lamb-birjani', price: 205 },
      { id: 'chicken-tikka-birjani', price: 185 },
      { id: 'king-prawn-birjani', price: 239 },
    ],
  },
  {
    id: 'curries',
    items: [
      { id: 'madras', price: '170–235' },
      { id: 'vindaloo', price: '170–235' },
      { id: 'balti-curry', price: '170–235' },
      { id: 'karai-curry', price: '170–235' },
      { id: 'lime-curry', price: '170–235' },
      { id: 'rogan-josh', price: '170–235' },
      { id: 'curry-mango', price: '170–235' },
    ],
  },
  {
    id: 'king-prawn',
    items: [
      { id: 'king-prawn-karai', price: 210 },
      { id: 'king-prawn-balti', price: 225 },
      { id: 'tandoori-king-prawn-tikka-masala', price: 230 },
      { id: 'king-prawn-madras', price: 210 },
      { id: 'king-prawn-butter', price: 215 },
    ],
  },
  {
    id: 'vegetariskt',
    items: [
      { id: 'daal-makhni', price: 165 },
      { id: 'tarka-daal', price: 159, vegan: true },
      { id: 'aloo-gobi', price: 165, vegan: true },
      { id: 'sag-aloo', price: 160, vegan: true },
      { id: 'pakora-karai', price: 165, vegan: true },
      { id: 'mix-veg-karai', price: 169, vegan: true },
      { id: 'palak-paneer', price: 160 },
      { id: 'paneer-masala', price: 165 },
      { id: 'paneer-butter', price: 165 },
      { id: 'paneer-kofta', price: 169 },
    ],
  },
  {
    id: 'tillbehor',
    items: [
      { id: 'raita', price: 30 },
      { id: 'mango-chutney', price: 20 },
      { id: 'mynta-yoghurt-chutney', price: 10 },
      { id: 'mynta-koriander-chutney', price: 20 },
      { id: 'chili-lime-pickles', price: 20 },
      { id: 'extra-ris', price: 25 },
      { id: 'side-sallad', price: 30 },
      { id: 'extra-sas', price: 40 },
    ],
  },
  {
    id: 'efter-maten',
    items: [
      { id: 'gulab-jamun', price: 65 },
      { id: 'malai-kulfi', price: 75 },
      { id: 'chokladkaka', price: 75 },
      { id: 'vaniljglass', price: 65 },
    ],
  },
];
