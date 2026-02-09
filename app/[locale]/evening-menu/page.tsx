import { Fragment } from 'react';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { t } from '@/lib/utils';
import { EVENING_MENU_SECTIONS } from '@/lib/menus/evening-menu-data';

export default async function EveningMenuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv') as Record<string, unknown>;

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold text-gray-800">
        {t(dict, 'eveningMenu.title')}
      </h1>

      {EVENING_MENU_SECTIONS.map((section, index) => (
        <Fragment key={section.id}>
          <section className={index === 0 ? 'mb-0' : 'mb-0'}>
            <h2 className="mb-5 text-2xl font-semibold uppercase tracking-wide text-gray-800">
              {section.title}
            </h2>
            {section.note ? (
              <p className="mb-4 italic text-burgundy">{section.note}</p>
            ) : null}
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.id} className="border-b border-gray-200/80 pb-2 last:border-0 last:pb-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-lg font-semibold text-gray-800">{item.name}</span>
                    <span className="text-lg text-gray-700">{item.price} kr</span>
                  </div>
                  {item.description?.trim() ? (
                    <p className="mt-1.5 text-base text-gray-600 md:text-lg">{item.description}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
          {index < EVENING_MENU_SECTIONS.length - 1 ? (
            <div
              className="my-6 -mx-6 border-t border-burgundy"
              style={{ borderTopWidth: 1 }}
              aria-hidden
            />
          ) : (
            <div className="mt-10" />
          )}
        </Fragment>
      ))}
    </div>
  );
}
