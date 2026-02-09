import type { Locale } from './config';

export async function getDictionary(locale: Locale): Promise<Record<string, unknown>> {
  const dict = await import(`@/messages/${locale}.json`);
  return dict.default as Record<string, unknown>;
}
