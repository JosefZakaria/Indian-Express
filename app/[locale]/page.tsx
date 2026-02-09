import { getDictionary } from '@/lib/i18n/get-dictionary';
import { t } from '@/lib/utils';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv') as Record<string, unknown>;

  return (
    <>
      {/* Hero: background color only, centered logo placeholder */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-baby-pink px-4">
        <div className="text-center">
          {/* Logo placeholder – replace with <Image src="/logo.png" ... /> when you have the asset */}
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">
            {t(dict, 'home.title')}
          </h1>
        </div>
      </section>

      {/* Two columns: map left, info right */}
      <section className="bg-baby-pink px-4 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:gap-12">
          {/* Left: map */}
          <div className="overflow-hidden rounded-xl shadow-md">
            <iframe
              title="Indian Express 2 location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.558559483301!2d13.000651315!3d55.60596498051116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a158cd0f9705%3A0x23f1a2e2e2e2e2e2!2sMalm%C3%B6!5e0!3m2!1sen!2sse!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[280px] w-full md:min-h-[380px]"
            />
          </div>

          {/* Right: about + opening hours + contact */}
          <div className="flex flex-col justify-center space-y-8 rounded-xl bg-white/80 p-6 shadow-sm md:p-8">
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-gray-800">
                {t(dict, 'home.aboutTitle')}
              </h2>
              <p className="text-gray-700">{t(dict, 'home.aboutText')}</p>
            </div>
            <div>
              <h2 className="mb-3 text-xl font-semibold text-gray-800">
                {t(dict, 'home.openingHours')}
              </h2>
              <p className="text-gray-700">{t(dict, 'home.hoursValue')}</p>
            </div>
            <div>
              <h2 className="mb-3 text-xl font-semibold text-gray-800">
                {t(dict, 'home.contactTitle')}
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>{t(dict, 'home.address')}:</strong> Malmö (fill in your address)</li>
                <li><strong>{t(dict, 'home.phone')}:</strong> (fill in your phone)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
