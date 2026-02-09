import { getDictionary } from '@/lib/i18n/get-dictionary';
import { t } from '@/lib/utils';
import ScrollToContent from '@/components/ScrollToContent';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv') as Record<string, unknown>;

  return (
    <>
      <ScrollToContent />
      {/* Hero: background color only, centered logo placeholder */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-baby-pink px-4">
        <div className="text-center">
          {/* Logo placeholder – replace with <Image src="/logo.png" ... /> when you have the asset */}
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">
            {t(dict, 'home.title')}
          </h1>
        </div>
      </section>

      {/* Map + Om oss; Öppettider & Kontakt under the map in left column */}
      <section id="content" className="bg-baby-pink px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl overflow-visible md:grid md:grid-cols-[1fr_auto_1fr] md:gap-0 md:items-start">
          {/* Left column: map + Öppettider & Kontakt underneath */}
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden rounded-l-xl shadow-md md:rounded-r-none">
              <iframe
                title="Indian Express 2 location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.558559483301!2d13.000651315!3d55.60596498051116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a158cd0f9705%3A0x23f1a2e2e2e2e2e2!2sMalm%C3%B6!5e0!3m2!1sen!2sse!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[240px] w-full md:min-h-[320px]"
              />
            </div>
            <div className="grid gap-6 pr-4 md:grid-cols-2 md:pr-0">
              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-800">
                  {t(dict, 'home.openingHours')}
                </h2>
                <ul className="space-y-1.5 text-gray-700">
                  <li><strong>{t(dict, 'home.hoursMonThuLabel')}</strong> {t(dict, 'home.hoursMonThuTime')}</li>
                  <li><strong>{t(dict, 'home.dayFri')}</strong> {t(dict, 'home.hoursFri')}</li>
                  <li><strong>{t(dict, 'home.daySat')}</strong> {t(dict, 'home.hoursSat')}</li>
                  <li><strong>{t(dict, 'home.daySun')}</strong> {t(dict, 'home.hoursSun')}</li>
                </ul>
              </div>
              <div>
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
          </div>

          {/* Burgundy divider (middle) */}
          <div
            className="hidden w-1 shrink-0 self-stretch min-h-[calc(100%+2rem)] -my-4 rounded-full bg-burgundy shadow-[inset_0_0_8px_rgba(0,0,0,0.12)] md:mx-6 md:block"
            aria-hidden
          />

          {/* Right column: Om oss */}
          <div className="flex flex-col justify-center p-6 md:p-8">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">
              {t(dict, 'home.aboutTitle')}
            </h2>
            <p className="mb-2 text-lg font-semibold text-gray-800">
              {t(dict, 'home.aboutHeading')}
            </p>
            <p className="mb-2 text-gray-700">{t(dict, 'home.aboutPara1')}</p>
            <p className="mb-2 text-gray-700">{t(dict, 'home.aboutPara2')}</p>
            <p className="mb-2 text-gray-700">{t(dict, 'home.aboutPara3')}</p>
            <p className="text-lg font-semibold text-gray-800">
              {t(dict, 'home.aboutWelcome')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
