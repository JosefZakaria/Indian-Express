import { getDictionary } from '@/lib/i18n/get-dictionary';
import { t } from '@/lib/utils';

export default async function CateringPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv') as Record<string, unknown>;

  return (
    <div
      className="mx-auto max-w-2xl px-4 py-12 md:py-16 scroll-reveal"
      data-scroll-reveal
    >
      <h1 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
        {t(dict, 'catering.title')}
      </h1>
      <p className="mb-1 text-xl italic text-gray-800 md:text-2xl">
        {t(dict, 'catering.heading1')}
      </p>
      <p className="mb-6 text-lg italic text-gray-800 md:text-xl">
        {t(dict, 'catering.heading2')}
      </p>
      <p className="mb-4 text-gray-700">
        {t(dict, 'catering.para1')}
      </p>
      <p className="mb-6 text-gray-700">
        {t(dict, 'catering.para2')}
      </p>
      <p className="mb-8 text-xl italic text-gray-800 md:text-2xl">
        {t(dict, 'catering.cta')}
      </p>
      <div className="border-t border-gray-200 pt-6">
        <h2 className="mb-3 text-xl font-semibold text-gray-800">
          {t(dict, 'home.contactTitle')}
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>{t(dict, 'home.address')}:</strong> Möllevångstorget 4, 214 24 Malmö</li>
          <li><strong>{t(dict, 'home.phone')}:</strong> 073-570 81 26</li>
          <li><strong>{t(dict, 'home.email')}:</strong>{' '}
            <a href="mailto:info@indianexpress.se" className="text-gray-700 underline hover:text-gray-900">
              {t(dict, 'home.emailAddress')}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
