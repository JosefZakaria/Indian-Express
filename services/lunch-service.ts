import { getWeekIndex, getDishesForWeek } from '@/lib/lunch-rotation';
import { getAllLunchDishes } from '@/lib/menus/get-menu';
import type { Dish } from '@/lib/types';

export function getCurrentWeekLunchDishes(date: Date = new Date()): Dish[] {
  const allDishes = getAllLunchDishes();
  const weekIndex = getWeekIndex(date);
  return getDishesForWeek(allDishes, weekIndex);
}
