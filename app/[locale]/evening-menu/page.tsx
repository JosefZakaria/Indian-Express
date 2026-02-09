import { getDictionary } from '@/lib/i18n/get-dictionary';
import { t } from '@/lib/utils';

export default async function EveningMenuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv') as Record<string, unknown>;

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        {t(dict, 'eveningMenu.title')}
      </h1>
      <p className="text-gray-700">Add your evening menu items here.</p>
    </div>
  );
}
