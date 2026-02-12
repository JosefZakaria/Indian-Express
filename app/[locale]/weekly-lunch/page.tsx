import { getDictionary } from '@/lib/i18n/get-dictionary';
import { getCurrentWeekLunchByDay } from '@/services/lunch-service';
import LunchList from '@/components/LunchList';
import { t } from '@/lib/utils';

export default async function WeeklyLunchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = (await getDictionary(locale as 'en' | 'sv')) as Record<string, unknown>;
  const weekByDay = getCurrentWeekLunchByDay();

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1
        className="mb-8 text-4xl font-bold text-gray-800 scroll-reveal"
        data-scroll-reveal
      >
        {t(dict, 'lunch.weeklyTitle')}
      </h1>

      {weekByDay.map((dayDishes, dayIndex) => (
        <section key={dayIndex} className="mb-8 scroll-reveal" data-scroll-reveal>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            {t(dict, `lunch.days.${dayIndex}`)}
          </h2>
          <LunchList dishes={dayDishes} dict={dict} />
        </section>
      ))}
    </div>
  );
}
