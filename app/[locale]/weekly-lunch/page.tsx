import { getDictionary } from '@/lib/i18n/get-dictionary';
import { getCurrentWeekLunchDishes } from '@/services/lunch-service';
import LunchList from '@/components/LunchList';
import { t } from '@/lib/utils';

export default async function WeeklyLunchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv') as Record<string, unknown>;
  const dishes = getCurrentWeekLunchDishes();

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        {t(dict, 'lunch.weeklyTitle')}
      </h1>
      <LunchList dishes={dishes} dict={dict} />
    </div>
  );
}
