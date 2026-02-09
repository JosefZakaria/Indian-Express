import { Fragment } from 'react';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { t, tOptional } from '@/lib/utils';
import { EVENING_MENU_SECTIONS } from '@/lib/menus/evening-menu-data';

export default async function EveningMenuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = (await getDictionary(locale as 'en' | 'sv')) as Record<string, unknown>;

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1
        className="mb-8 text-4xl font-bold text-gray-800 scroll-reveal"
        data-scroll-reveal
      >
        {t(dict, 'eveningMenu.title')}
      </h1>

      {EVENING_MENU_SECTIONS.map((section, index) => {
        const sectionNote = tOptional(dict, `eveningMenu.sections.${section.id}.note`);
        return (
          <Fragment key={section.id}>
            <section
              className="mb-0 scroll-reveal"
              data-scroll-reveal
            >
              <h2 className="mb-5 text-2xl font-semibold uppercase tracking-wide text-gray-800">
                {t(dict, `eveningMenu.sections.${section.id}.title`)}
              </h2>
              {sectionNote ? (
                <p className="mb-4 italic text-burgundy">{sectionNote}</p>
              ) : null}
              <ul className="space-y-2">
                {section.items.map((item) => {
                  const itemName = t(dict, `eveningMenu.sections.${section.id}.items.${item.id}.name`);
                  const itemDesc = tOptional(dict, `eveningMenu.sections.${section.id}.items.${item.id}.description`);
                  return (
                    <li key={item.id} className="border-b border-gray-200/80 pb-2 last:border-0 last:pb-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="text-lg font-semibold text-gray-800">{itemName}</span>
                        <span className="text-lg text-gray-700">{item.price} kr</span>
                      </div>
                      {itemDesc ? (
                        <p className="mt-1.5 text-base text-gray-600 md:text-lg">{itemDesc}</p>
                      ) : null}
                    </li>
                  );
                })}
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
        );
      })}
    </div>
  );
}
