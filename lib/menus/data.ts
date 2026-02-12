import type { Dish } from '@/lib/types';
import { TOTAL_DISHES } from '@/lib/lunch-rotation';

export const LUNCH_DISHES: Dish[] = Array.from({ length: TOTAL_DISHES }, (_, i) => ({
  id: `lunch-${i + 1}`,
  nameKey: `lunch.dish${i + 1}.name`,
  descriptionKey: `lunch.dish${i + 1}.description`,
}));
