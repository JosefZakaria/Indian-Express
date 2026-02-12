import type { Dish } from './types';

export const WEEKS_IN_CYCLE = 4;
export const DAYS_PER_WEEK = 5; // Mon–Fri
export const DISHES_PER_DAY = 6;
export const DISHES_PER_WEEK = DAYS_PER_WEEK * DISHES_PER_DAY; // 30
export const TOTAL_DISHES = WEEKS_IN_CYCLE * DISHES_PER_WEEK; // 120

/** Returns which week in the 4-week cycle the given date falls in (0–3). */
export function getWeekIndex(referenceDate: Date): number {
  const start = new Date('2025-01-06');
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const elapsed = referenceDate.getTime() - start.getTime();
  return Math.floor(elapsed / msPerWeek) % WEEKS_IN_CYCLE;
}

/** Returns the day-of-week index: 0 = Monday … 4 = Friday. Returns -1 on weekends. */
export function getDayIndex(referenceDate: Date): number {
  const jsDay = referenceDate.getDay(); // 0=Sun, 1=Mon … 6=Sat
  if (jsDay === 0 || jsDay === 6) return -1; // weekend
  return jsDay - 1; // Mon=0, Tue=1, Wed=2, Thu=3, Fri=4
}

/** Returns all 30 dishes for a given week, as an array of 5 day-groups (6 dishes each). */
export function getWeekDishes(allDishes: Dish[], weekIndex: number): Dish[][] {
  const weekStart = weekIndex * DISHES_PER_WEEK;
  const days: Dish[][] = [];
  for (let day = 0; day < DAYS_PER_WEEK; day++) {
    const dayStart = weekStart + day * DISHES_PER_DAY;
    days.push(allDishes.slice(dayStart, dayStart + DISHES_PER_DAY));
  }
  return days;
}

/** Returns the 6 dishes for a specific day within a specific week. */
export function getDayDishes(allDishes: Dish[], weekIndex: number, dayIndex: number): Dish[] {
  const start = weekIndex * DISHES_PER_WEEK + dayIndex * DISHES_PER_DAY;
  return allDishes.slice(start, start + DISHES_PER_DAY);
}
