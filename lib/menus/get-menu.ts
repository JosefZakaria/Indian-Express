import { LUNCH_DISHES } from './data';
import type { Dish } from '@/lib/types';

export function getAllLunchDishes(): Dish[] {
  return LUNCH_DISHES;
}
