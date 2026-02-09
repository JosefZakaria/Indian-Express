export interface EveningMenuItem {
  id: string;
  name: string;
  description: string;
  price: number | string;
  vegan?: boolean;
}

export interface EveningMenuSection {
  id: string;
  title: string;
  note?: string;
  items: EveningMenuItem[];
}

export const EVENING_MENU_SECTIONS: EveningMenuSection[] = [
  {
    id: 'smaratter',
    title: 'SMÅRÄTTER',
    items: [
      {
        id: 'papadam',
        name: 'Papadam, vegansk',
        description: 'Krispigt linsbröd | mango chutney',
        price: 39,
        vegan: true,
      },
      {
        id: 'veg-samosa',
        name: 'Veg Samosa, vegansk',
        description: 'Grönsaksfyllda degknyten | rödkålssallad | tamarind och chili chutney',
        price: 75,
        vegan: true,
      },
      {
        id: 'onion-bhaaje',
        name: 'Onion Bhaaje',
        description:
          'Friterade lök fritters med en massa härliga örter och kryddor | rödkålssallad | chutney på mynta koriander chili och yoghurt',
        price: 75,
      },
      {
        id: 'zucchini-cauliflower-pakora',
        name: 'Zucchini & Cauliflower Pakora, vegansk',
        description:
          'Friterad zucchini och blomkål i kryddig smet | rödkålssallad | koriander | tamarind och chilichutney',
        price: 75,
        vegan: true,
      },
      {
        id: 'chicken-samosa',
        name: 'Chicken Samosa',
        description: 'Två styck kycklingfyllda smördegsknyten | rödkålssallad | mynta- yoghurt chutney',
        price: 79,
      },
      {
        id: 'chicken-roll',
        name: 'Chicken Roll',
        description:
          'Smörstekt paratha | tandoorigrillad kycklingfilé | lök | paprika | rödkålssallad | aioli',
        price: 80,
      },
      {
        id: 'king-prawn-roll',
        name: 'King Prawn Roll',
        description: 'Smörstekt paratha | smörstekta tigerräkor | lök | paprika | rödkålssallad | aioli',
        price: 130,
      },
      {
        id: 'chicken-tikka',
        name: 'Chicken Tikka',
        description:
          'Smörstekt tandoorigrillad kycklingfilé | lök | paprika. Serveras på gjutjärnspanna',
        price: 99,
      },
      {
        id: 'seekh-kebab',
        name: 'Seekh kebab',
        description:
          'Nötfärs marinerat i lök, vitlök, ingefära och indiska kryddor. Serveras med sallad, mynta, korianderchutney',
        price: 90,
      },
      {
        id: 'chicken-tikka-naan',
        name: 'Chicken Tikka Naan',
        description:
          'Naan fylld med tandoorigrillad kycklingfilé | potatis | chili | koriander | chutney på mynta koriander chili och yoghurt',
        price: 75,
      },
      {
        id: 'prawn-puri',
        name: 'Prawn Puri',
        description:
          'Kryddiga svarta tigerräkor | lök | paprika | smörstekt paratha | mynta och yoghurt chutney',
        price: 119,
      },
      {
        id: 'king-prawn',
        name: 'King Prawn',
        description:
          'Grillade svarta tigerräkor | lök | paprika. Serveras på het gjutjärnspanna',
        price: 125,
      },
    ],
  },
  {
    id: 'naan',
    title: 'NAAN - TRADITIONELLT INDISKT BRÖD',
    items: [
      {
        id: 'plain-naan',
        name: 'Plain Naan, vegansk',
        description: '',
        price: 28,
        vegan: true,
      },
      {
        id: 'garlic-naan',
        name: 'Garlic Naan, med vitlök vegansk',
        description: '',
        price: 35,
        vegan: true,
      },
      {
        id: 'butter-naan',
        name: 'Butter Naan, med ghee',
        description: '',
        price: 35,
      },
      {
        id: 'peshwari-naan',
        name: 'Peshwari Naan, med mandel och kokosnöt vegansk',
        description: '',
        price: 45,
        vegan: true,
      },
      {
        id: 'butter-paneer-naan',
        name: 'Butter Paneer Naan, med paneer och ghee',
        description: '',
        price: 45,
      },
      {
        id: 'chilli-paneer-naan',
        name: 'Chilli paneer Naan, med paneer och chili',
        description: '',
        price: 45,
      },
      {
        id: 'garlic-paneer-naan',
        name: 'Garlic Paneer Naan, med paneer och vitlök',
        description: '',
        price: 45,
      },
      {
        id: 'paratha',
        name: 'Paratha, stekt i smör',
        description: '',
        price: 35,
      },
    ],
  },
  {
    id: 'kockens-favoriter',
    title: 'KOCKENS FAVORITER',
    note: 'Alla huvudrätter serveras med pulaoris',
    items: [
      {
        id: 'chicken-lamb-tikka-masala',
        name: 'Chicken/Lamb Tikka Masala, mild',
        description:
          'Tandoorigrillad kycklingfilé/lammfilé | smör | grädde | kokos | mandel | russin',
        price: '180/235',
      },
      {
        id: 'butter-chicken-lamb',
        name: 'Butter Chicken/Lamb, stark',
        description:
          'Tandoorigrillad kycklingfilé/lammfilé | smör | tomat | grädde | koriander',
        price: '180/235',
      },
      {
        id: 'hot-chili-chicken-lamb',
        name: 'Hot Chili Chicken/Lamb, söt stark',
        description:
          'Tandoorigrillad kycklingfilé/lammfilé | chili | lök | paprika | koriander | sweet chilisås',
        price: '180/235',
      },
      {
        id: 'tandoori-chicken-lamb-masala',
        name: 'Tandoori Chicken/Lamb Masala, stark',
        description:
          'Tandoorigrillad kycklingfilé eller lamm | yoghurt | tomat | lök | paprika | koriander',
        price: '180/235',
      },
      {
        id: 'chicken-lamb-tikka-jalfrezi',
        name: 'Chicken/Lamb Tikka Jalfrezi, mycket stark',
        description:
          'Tandoorigrillad kycklingfilé/lammfilé | lök | paprika| chili | koriander',
        price: '180/235',
      },
      {
        id: 'chicken-lamb-tikka-karai',
        name: 'Chicken/Lamb Tikka Karai, medium stark',
        description:
          'Tandoorigrillad lammfilé i marinad på vitlök i gryta med färska kryddor | lök | paprika | tomat | ingefära | koriander. Serveras på het gjutjärnspanna',
        price: '180/235',
      },
      {
        id: 'chicken-lasuni-karai',
        name: 'Chicken Lasuni Karai, medium stark',
        description:
          'Tandoorigrillad kycklingfilé i marinad på vitlök i gryta med färska kryddor | lök | paprika | tomat | ingefära | koriander. Serveras på het gjutjärnspanna',
        price: 189,
      },
      {
        id: 'chicken-lamb-tikka-balti',
        name: 'Chicken/Lamb Tikka Balti, stark',
        description:
          'Tandoorigrillad kycklingfilé med baltipaste | grädde | ingefära | vitlök | tomat | koriander | lök | paprika | potatis.',
        price: '185/235',
      },
      {
        id: 'chicken-lasuni-balti',
        name: 'Chicken Lasuni Balti, stark',
        description:
          'Tandoorigrillad kycklingfilé i marinad på vitlök i krämig gryta med baltipaste | grädde | ingefära | vitlök | tomat| koriander | lök | paprika | potatis',
        price: 189,
      },
    ],
  },
  {
    id: 'tandoori-sizlar',
    title: 'TANDOORI SIZLAR',
    note:
      'Marinerat sedan grillat i lerugn | stekt i smör | lök | paprika. Serveras på het gjutjärnspanna. Serveras med tomat och sweet chilisås. Medium stark.',
    items: [
      {
        id: 'tandoori-chicken-sizlar',
        name: 'Tandoori Chicken - kycklingfilé',
        description: '',
        price: 185,
      },
      {
        id: 'chicken-tikka-sizlar',
        name: 'Chicken Tikka Sizlar - kycklingfilé',
        description: '',
        price: 185,
      },
      {
        id: 'chicken-lasuni-sizlar',
        name: 'Chicken lasuni Sizlar - vitlöksmarinerad kycklingfilé',
        description: '',
        price: 190,
      },
      {
        id: 'lamm-tikka-sizlar',
        name: 'Lamm Tikka Sizlar - lammfilé',
        description: '',
        price: 249,
      },
      {
        id: 'king-prawn-sizlar',
        name: 'King Prawn Sizlar - svarta tigerräkor',
        description: '',
        price: 239,
      },
      {
        id: 'mix-sizlar',
        name: 'Mix Sizlar - kycklingfilé | lammfilé | svarta tigerräkor',
        description: '',
        price: 255,
      },
      {
        id: 'seekh-kebab-sizlar',
        name: 'Seekh Kebab',
        description:
          'Nötfärs marinerat i lök, vitlök, ingefära och indiska kryddor. Serveras med mynta, korianderchutney och sizlarsås.',
        price: 190,
      },
    ],
  },
  {
    id: 'thali',
    title: 'THALI',
    note: 'Traditionell tallrik med tre olika rätter. Naan | Papadam | Sallad | Gulab Jamun',
    items: [
      {
        id: 'kott-thali',
        name: 'Kött Thali',
        description: 'Kockens val av lamm, biff och kyckling. Mild, medium och stark.',
        price: 285,
      },
      {
        id: 'vegetarisk-thali',
        name: 'Vegetarisk Thali',
        description: 'Kockens val av grönsaker och paneer. Mild, medium och stark.',
        price: 265,
      },
    ],
  },
  {
    id: 'birjani',
    title: 'BIRJANI',
    note:
      'Risrätt med färska kryddor | örter | koriander | lök | paprika. Serveras med chutney på mynta koriander chili och yoghurt. Medium stark.',
    items: [
      {
        id: 'lamb-birjani',
        name: 'Lamb Birjani - stekt lammfilé',
        description: '',
        price: 205,
      },
      {
        id: 'chicken-tikka-birjani',
        name: 'Chicken Tikka Birjani - grillad kycklingfilé',
        description: '',
        price: 185,
      },
      {
        id: 'king-prawn-birjani',
        name: 'King Prawn Birjani - grillade svarta tigerräkor',
        description: '',
        price: 239,
      },
    ],
  },
  {
    id: 'curries',
    title: 'CURRIES',
    note:
      'Kycklingfilé 175 kr | Paneer 175 kr | Tofu 170 kr | Biff 189 kr | Lammstek 199 kr | Grillad lammfilé 235 kr',
    items: [
      {
        id: 'madras',
        name: 'Madras, mycket stark',
        description: 'Sydindisk gryta | soltorkad chili | koriander | citron',
        price: '170–235',
      },
      {
        id: 'vindaloo',
        name: 'Vindaloo, extremt stark',
        description: 'Husets starkaste gryta | soltorkad chili | Vindaloo paste | koriander',
        price: '170–235',
      },
      {
        id: 'balti-curry',
        name: 'Balti, stark',
        description:
          'Krämig gryta med baltipaste | grädde | ingefära | vitlök | tomat | koriander | lök | paprika | potatis',
        price: '170–235',
      },
      {
        id: 'karai-curry',
        name: 'Karai, medium stark',
        description:
          'Gryta med färska kryddor | lök | paprika | tomat | ingefära | koriander. Serveras på het gjutjärnspanna',
        price: '170–235',
      },
      {
        id: 'lime-curry',
        name: 'Lime Curry, medium stark',
        description: 'Gryta med färska limeblad | citron | lök | paprika | kokosmjölk',
        price: '170–235',
      },
      {
        id: 'rogan-josh',
        name: 'Rogan Josh, medium stark',
        description: 'Gryta med tomat | yoghurt | lök | paprika',
        price: '170–235',
      },
      {
        id: 'curry-mango',
        name: 'Curry Mango, medium stark',
        description: 'Krämig gryta med färsk mango | grädde | smör',
        price: '170–235',
      },
    ],
  },
  {
    id: 'king-prawn',
    title: 'KING PRAWN - SVARTA TIGERRÄKOR',
    items: [
      {
        id: 'king-prawn-karai',
        name: 'King Prawn Karai, medium stark',
        description:
          'Gryta med färska kryddor | lök | paprika | tomat | ingefära | koriander. Serveras på het gjutjärnspanna',
        price: 210,
      },
      {
        id: 'king-prawn-balti',
        name: 'King Prawn Balti, stark',
        description:
          'Krämig gryta med baltipaste | grädde | ingefära | vitlök | tomat| koriander | lök | paprika | potatis',
        price: 225,
      },
      {
        id: 'tandoori-king-prawn-tikka-masala',
        name: 'Tandoori King Prawn Tikka Masala, mild',
        description: 'Tandoorigrillade svarta tigerräkor | smör | grädde | kokos | mandel | russin',
        price: 230,
      },
      {
        id: 'king-prawn-madras',
        name: 'King Prawn Madras, mycket stark',
        description: 'Sydindisk gryta | soltorkad chili | koriander | citron',
        price: 210,
      },
      {
        id: 'king-prawn-butter',
        name: 'King Prawn Butter, stark',
        description: 'Tandoorigrillade svarta tigerräkor | smör | tomat | grädde | koriander',
        price: 215,
      },
    ],
  },
  {
    id: 'vegetariskt',
    title: 'VEGETARISKT',
    items: [
      {
        id: 'daal-makhni',
        name: 'Daal Makhni, medium stark',
        description: 'Svarta linser i smör | grädde | tomat | koriander',
        price: 165,
      },
      {
        id: 'tarka-daal',
        name: 'Tarka Daal, medium stark vegansk',
        description: 'Stekta gula linser | vitlök | koriander',
        price: 159,
        vegan: true,
      },
      {
        id: 'aloo-gobi',
        name: 'Aloo Gobi, medium stark vegansk',
        description: '',
        price: 165,
        vegan: true,
      },
      {
        id: 'sag-aloo',
        name: 'Sag Aloo, medium stark vegansk',
        description: 'Spenat | potatis | färska kryddor | koriander',
        price: 160,
        vegan: true,
      },
      {
        id: 'pakora-karai',
        name: 'Pakora Karai, medium stark vegansk',
        description:
          'Friterad zucchini & blomkål | lök | paprika | tomat. Serveras på gjutjärnspanna',
        price: 165,
        vegan: true,
      },
      {
        id: 'mix-veg-karai',
        name: 'Mix Veg Karai, medium stark vegansk',
        description:
          'Säsongens grönsaker | lök | paprika | curry. Currygryta med potatis | blomkål | lök | paprika | koriander',
        price: 169,
        vegan: true,
      },
      {
        id: 'palak-paneer',
        name: 'Palak Paneer, medium stark',
        description: 'Spenat | hemgjord paneer | smör | koriander. Veganskt alternativ: tofu',
        price: 160,
      },
      {
        id: 'paneer-masala',
        name: 'Paneer Masala, mild',
        description: 'Hemgjord paneer | smör | grädde | kokos | mandel | russin. Alternativ: tofu',
        price: 165,
      },
      {
        id: 'paneer-butter',
        name: 'Paneer Butter, stark',
        description: 'Hemgjord paneer | smör | tomat | grädde| koriander. Alternativ: tofu',
        price: 165,
      },
      {
        id: 'paneer-kofta',
        name: 'Paneer Kofta, medium stark',
        description: 'Kryddiga hemgjorda spenatbollar fyllda med paneer i currysås',
        price: 169,
      },
    ],
  },
  {
    id: 'tillbehor',
    title: 'TILLBEHÖR',
    items: [
      {
        id: 'raita',
        name: 'Raita',
        description: '',
        price: 30,
      },
      {
        id: 'mango-chutney',
        name: 'Mango chutney | tamarind - chili chutney',
        description: '',
        price: 20,
      },
      {
        id: 'mynta-yoghurt-chutney',
        name: 'Mynta - yoghurt chutney',
        description: '',
        price: 10,
      },
      {
        id: 'mynta-koriander-chutney',
        name: 'Mynta - koriander chutney',
        description: '',
        price: 20,
      },
      {
        id: 'chili-lime-pickles',
        name: 'Chili pickles | Lime pickles',
        description: '',
        price: 20,
      },
      {
        id: 'extra-ris',
        name: 'Extra ris',
        description: '',
        price: 25,
      },
      {
        id: 'side-sallad',
        name: 'Side sallad',
        description: 'Rödkål | koriander | morot | citron',
        price: 30,
      },
      {
        id: 'extra-sas',
        name: 'Extra sås',
        description: 'Masala - mild | Curry - medium stark | Madras - stark',
        price: 40,
      },
    ],
  },
  {
    id: 'efter-maten',
    title: 'EFTER MATEN',
    items: [
      {
        id: 'gulab-jamun',
        name: 'Gulab Jamun',
        description: 'Friterad degboll i rosensirap | vaniljglass | bär',
        price: 65,
      },
      {
        id: 'malai-kulfi',
        name: 'Malai Kulfi',
        description: 'Med grädde | pistage | kardemumma | kanel',
        price: 75,
      },
      {
        id: 'chokladkaka',
        name: 'Chokladkaka',
        description: 'Med vaniljglass | bär',
        price: 75,
      },
      {
        id: 'vaniljglass',
        name: 'Vaniljglass',
        description: 'Med Nutella | hallon | mynta',
        price: 65,
      },
    ],
  },
];
