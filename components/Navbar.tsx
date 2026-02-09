'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { t } from '@/lib/utils';

const ORDER_YOYO_URL = 'https://indianexpress.orderyoyo.com/';

const navItems = [
  { labelKey: 'nav.eveningMenu', href: '/evening-menu', cta: false },
  { labelKey: 'nav.dailyLunch', href: '/daily-lunch', cta: false },
  { labelKey: 'nav.weeklyLunch', href: '/weekly-lunch', cta: false },
  { labelKey: 'nav.drinkMenu', href: '/drink-menu', cta: false },
  { labelKey: 'nav.bookTable', href: ORDER_YOYO_URL, cta: true },
  { labelKey: 'nav.takeaway', href: ORDER_YOYO_URL, cta: true },
  { labelKey: 'nav.delivery', href: ORDER_YOYO_URL, cta: true },
  { labelKey: 'nav.catering', href: '/catering', cta: false },
  { labelKey: 'nav.aboutUs', href: '#content', cta: false },
  { labelKey: 'nav.findUs', href: '#content', cta: false },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-6 w-7 flex-col justify-center">
      <span
        className={`block h-0.5 w-full rounded-full bg-current transition-all duration-200 ${
          open ? 'translate-y-[7px] rotate-45' : ''
        }`}
      />
      <span
        className={`mt-2 block h-0.5 w-6 rounded-full bg-current transition-all duration-200 ${
          open ? 'opacity-0 scale-x-0' : ''
        }`}
      />
      <span
        className={`mt-2 block h-0.5 w-full rounded-full bg-current transition-all duration-200 ${
          open ? '-translate-y-[7px] -rotate-45' : ''
        }`}
      />
    </span>
  );
}

type NavbarProps = {
  locale: string;
  dict: Record<string, unknown>;
};

export default function Navbar({ locale, dict }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const basePath = pathname?.split('/').slice(0, 2).join('/') || `/${locale}`;

  const getHref = (item: (typeof navItems)[0]) => {
    if (item.cta) return item.href;
    return `${basePath}${item.href}`;
  };

  const closeMenu = () => setMenuOpen(false);

  const isHome = pathname === '/sv' || pathname === '/en';
  const scrollToContent = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `${basePath}#content`);
  };

  const otherLocale = locale === 'sv' ? 'en' : 'sv';
  const pathWithoutLocale = pathname?.replace(/^\/(en|sv)/, '') ?? '';
  const langHref = `/${otherLocale}${pathWithoutLocale || ''}`;

  return (
    <>
      <button
        type="button"
        onClick={() => setMenuOpen((v) => !v)}
        className="fixed right-5 top-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-burgundy/90 text-white shadow-lg transition hover:bg-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2 focus:ring-offset-baby-pink"
        aria-label={t(dict, 'nav.menu')}
        aria-expanded={menuOpen}
      >
        <MenuIcon open={menuOpen} />
      </button>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-gray-900/60 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden
          />
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            role="dialog"
            aria-label={t(dict, 'nav.menu')}
            onClick={closeMenu}
          >
            <nav
              className="flex flex-col items-center gap-1 text-center font-serif tracking-wide"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-0.5">
                {navItems.map((item) => (
                  <li key={item.labelKey}>
                    {item.cta ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-6 py-3 text-xl font-medium text-white/95 transition hover:text-white hover:underline underline-offset-4"
                        onClick={closeMenu}
                      >
                        {t(dict, item.labelKey)}
                      </a>
                    ) : item.href === '#content' && isHome ? (
                      <button
                        type="button"
                        className="block w-full px-6 py-3 text-xl font-medium text-white/95 transition hover:text-white hover:underline underline-offset-4 text-center"
                        onClick={scrollToContent}
                      >
                        {t(dict, item.labelKey)}
                      </button>
                    ) : (
                      <Link
                        href={getHref(item)}
                        className="block px-6 py-3 text-xl font-medium text-white/95 transition hover:text-white hover:underline underline-offset-4"
                        onClick={closeMenu}
                      >
                        {t(dict, item.labelKey)}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <span className="my-3 h-px w-12 bg-white/40" aria-hidden />
              <Link
                href={langHref}
                className="block px-6 py-2 text-lg text-white/90 transition hover:text-white hover:underline underline-offset-4"
                onClick={closeMenu}
              >
                {locale === 'sv' ? 'English (EN)' : 'Svenska (SV)'}
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
