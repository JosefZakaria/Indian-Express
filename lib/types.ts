export interface Dish {
  id: string;
  nameKey: string;
  descriptionKey?: string;
}

export type Locale = 'en' | 'sv';

export interface MenuItem {
  id: string;
  nameKey: string;
  descriptionKey?: string;
  priceKey?: string;
}
