'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { t } from '@/lib/utils';

const deliveryHref = 'https://indianexpress.orderyoyo.com/delivery';
const bookTableHref = 'https://indianexpress.orderyoyo.com/table-reservation';
const takeawayHref = 'https://indianexpress.orderyoyo.com/takeaway';

const navItems = [
  { labelKey: 'nav.eveningMenu', href: '/evening-menu', cta: false },
  { labelKey: 'nav.dailyLunch', href: '/daily-lunch', cta: false },
  { labelKey: 'nav.weeklyLunch', href: '/weekly-lunch', cta: false },
  { labelKey: 'nav.drinkMenu', href: '/drink-menu', cta: false },
  { labelKey: 'nav.bookTable', href: bookTableHref, cta: true },
  { labelKey: 'nav.takeaway', href: takeawayHref, cta: true },
  { labelKey: 'nav.delivery', href: deliveryHref, cta: true },
  { labelKey: 'nav.catering', href: '/catering', cta: false },
  { labelKey: 'nav.aboutUs', href: '#content', cta: false },
  { labelKey: 'nav.findUs', href: '#content', cta: false },
  { labelKey: 'nav.home', href: '', cta: false },
];

type NavbarProps = {
  locale: string;
  dict: Record<string, unknown>;
};

export default function Navbar({ locale, dict }: NavbarProps) {
  const pathname = usePathname();
  const basePath = pathname?.split('/').slice(0, 2).join('/') || `/${locale}`;

  const getHref = (item: (typeof navItems)[0]) => {
    if (item.cta) return item.href;
    return `${basePath}${item.href}`;
  };

  const isHome = pathname === '/sv' || pathname === '/en';

  const scrollToContent = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `${basePath}#content`);
  };

  const otherLocale = locale === 'sv' ? 'en' : 'sv';
  const pathWithoutLocale = pathname?.replace(/^\/(en|sv)/, '') ?? '';
  const langHref = `/${otherLocale}${pathWithoutLocale || ''}`;

  return (
    <nav className="sticky top-0 z-50 w-full animate-header-in">
      <div className="overflow-x-auto scrollbar-hide">
        <ul className="flex items-center justify-center gap-1 px-4 py-3 whitespace-nowrap min-w-max mx-auto">
          {navItems.map((item) => {
            const href = getHref(item);
            const isActive = !item.cta && pathname === href;

            if (item.cta) {
              return (
                <li key={item.labelKey}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-1.5 text-lg font-medium text-burgundy/80 transition hover:text-burgundy"
                  >
                    {t(dict, item.labelKey)}
                  </a>
                </li>
              );
            }

            if (item.href === '#content' && isHome) {
              return (
                <li key={item.labelKey}>
                  <button
                    type="button"
                    className="block px-3 py-1.5 text-lg font-medium text-burgundy/80 transition hover:text-burgundy"
                    onClick={scrollToContent}
                  >
                    {t(dict, item.labelKey)}
                  </button>
                </li>
              );
            }

            return (
              <li key={item.labelKey}>
                <Link
                  href={href}
                  className={`block px-3 py-1.5 text-lg font-medium transition ${
                    isActive
                      ? 'text-burgundy underline underline-offset-4'
                      : 'text-burgundy/80 hover:text-burgundy'
                  }`}
                >
                  {t(dict, item.labelKey)}
                </Link>
              </li>
            );
          })}

          <li className="pl-2 ml-2 border-l border-burgundy/30">
            <Link
              href={langHref}
              className="block px-3 py-1.5 text-lg font-medium text-burgundy/60 transition hover:text-burgundy"
            >
              {locale === 'sv' ? 'EN' : 'SV'}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
