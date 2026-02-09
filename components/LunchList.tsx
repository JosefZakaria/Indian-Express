import type { Dish } from '@/lib/types';
import { t } from '@/lib/utils';

type Props = {
  dishes: Dish[];
  dict: Record<string, unknown>;
};

export default function LunchList({ dishes, dict }: Props) {
  return (
    <ul className="space-y-4">
      {dishes.map((d) => (
        <li key={d.id} className="rounded-lg bg-white/80 p-4 shadow-sm">
          <h3 className="font-semibold text-gray-800">
            {t(dict, d.nameKey)}
          </h3>
          {d.descriptionKey && (
            <p className="mt-1 text-sm text-gray-600">
              {t(dict, d.descriptionKey)}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
