import { getWeekIndex, getDayIndex, getWeekDishes, getDayDishes } from '@/lib/lunch-rotation';
import { getAllLunchDishes } from '@/lib/menus/get-menu';
import type { Dish } from '@/lib/types';

/**
 * Returns the full week's dishes grouped by day (Mon–Fri).
 * Result is an array of 5 arrays, each containing 6 dishes.
 */
export function getCurrentWeekLunchByDay(date: Date = new Date()): Dish[][] {
  const allDishes = getAllLunchDishes();
  const weekIndex = getWeekIndex(date);
  return getWeekDishes(allDishes, weekIndex);
}

/**
 * Returns today's 6 lunch dishes.
 * On weekends returns an empty array.
 */
export function getTodayLunchDishes(date: Date = new Date()): Dish[] {
  const dayIndex = getDayIndex(date);
  if (dayIndex < 0) return []; // weekend
  const allDishes = getAllLunchDishes();
  const weekIndex = getWeekIndex(date);
  return getDayDishes(allDishes, weekIndex, dayIndex);
}

/**
 * Returns the day-of-week index for the given date (0=Mon … 4=Fri, -1=weekend).
 */
export function getCurrentDayIndex(date: Date = new Date()): number {
  return getDayIndex(date);
}
