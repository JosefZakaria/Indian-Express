export function getNested(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce((acc: unknown, key) => (acc as Record<string, unknown>)?.[key], obj);
}

export function t(dict: Record<string, unknown>, key: string): string {
  const value = getNested(dict, key);
  return typeof value === 'string' ? value : key;
}

/** Returns the translated string or empty string if key is missing (for optional fields like note/description). */
export function tOptional(dict: Record<string, unknown>, key: string): string {
  const value = getNested(dict, key);
  return typeof value === 'string' ? value : '';
}
