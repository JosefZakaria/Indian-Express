import { getDictionary } from '@/lib/i18n/get-dictionary';
import { t } from '@/lib/utils';
import Link from 'next/link';

export default async function BookTablePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv') as Record<string, unknown>;

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 text-center">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        {t(dict, 'bookTable.title')}
      </h1>
      <p className="mb-6 text-gray-700">Book your table via OrderYoyo.</p>
      <Link
        href="https://indianexpress.orderyoyo.com/table-reservation"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full bg-rose-600 px-6 py-3 font-medium text-white hover:bg-rose-700"
      >
        {t(dict, 'nav.bookTable')}
      </Link>
    </div>
  );
}
