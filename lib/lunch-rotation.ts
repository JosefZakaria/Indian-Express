import type { Dish } from './types';

const WEEKS_IN_CYCLE = 4;
const DISHES_PER_WEEK = 5;

export function getWeekIndex(referenceDate: Date): number {
  const start = new Date('2025-01-06');
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const elapsed = referenceDate.getTime() - start.getTime();
  return Math.floor(elapsed / msPerWeek) % WEEKS_IN_CYCLE;
}

export function getDishesForWeek(allDishes: Dish[], weekIndex: number): Dish[] {
  const start = weekIndex * DISHES_PER_WEEK;
  return allDishes.slice(start, start + DISHES_PER_WEEK);
}

export { WEEKS_IN_CYCLE, DISHES_PER_WEEK };
