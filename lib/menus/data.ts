import type { Dish } from '@/lib/types';

export const LUNCH_DISHES: Dish[] = Array.from({ length: 20 }, (_, i) => ({
  id: `lunch-${i + 1}`,
  nameKey: `lunch.dish${i + 1}.name`,
  descriptionKey: `lunch.dish${i + 1}.description`,
}));
