import { getDictionary } from '@/lib/i18n/get-dictionary';
import { t } from '@/lib/utils';

export default async function FindUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv') as Record<string, unknown>;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        {t(dict, 'findUs.title')}
      </h1>
      <p className="mb-4 text-gray-700">Malmö (update with your address)</p>
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          title="Indian Express 2 map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.558559483301!2d13.000651315!3d55.60596498051116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a158cd0f9705%3A0x23f1a2e2e2e2e2e2!2sMalm%C3%B6!5e0!3m2!1sen!2sse!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
