'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { t } from '@/lib/utils';

const ORDER_YOYO_URL = 'https://www.orderyoyo.com/';

const navItems = [
  { labelKey: 'nav.eveningMenu', href: '/evening-menu', cta: false },
  { labelKey: 'nav.dailyLunch', href: '/daily-lunch', cta: false },
  { labelKey: 'nav.weeklyLunch', href: '/weekly-lunch', cta: false },
  { labelKey: 'nav.foodMenu', href: '/food-menu', cta: false },
  { labelKey: 'nav.drinkMenu', href: '/drink-menu', cta: false },
  { labelKey: 'nav.bookTable', href: ORDER_YOYO_URL, cta: true },
  { labelKey: 'nav.takeaway', href: ORDER_YOYO_URL, cta: true },
  { labelKey: 'nav.delivery', href: ORDER_YOYO_URL, cta: true },
  { labelKey: 'nav.catering', href: '/catering', cta: false },
  { labelKey: 'nav.aboutUs', href: '/about', cta: false },
  { labelKey: 'nav.findUs', href: '/find-us', cta: false },
];

function MenuIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
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

  const langHref =
    pathname?.replace(/^\/en/, '/sv').replace(/^\/sv/, '/en') || (locale === 'sv' ? '/en' : '/sv');

  return (
    <>
      <button
        type="button"
        onClick={() => setMenuOpen((v) => !v)}
        className="fixed right-4 top-4 z-50 rounded p-2 text-gray-700 hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-300"
        aria-label={t(dict, 'nav.menu')}
        aria-expanded={menuOpen}
      >
        <MenuIcon />
      </button>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-gray-900/50"
            onClick={closeMenu}
            aria-hidden
          />
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-label={t(dict, 'nav.menu')}
            onClick={closeMenu}
          >
            <div
              className="w-full max-w-sm rounded-xl border border-pink-200 bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col py-2">
                {navItems.map((item) => (
                  <li key={item.labelKey}>
                    {item.cta ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-gray-700 hover:bg-pink-50"
                        onClick={closeMenu}
                      >
                        {t(dict, item.labelKey)}
                      </a>
                    ) : (
                      <Link
                        href={getHref(item)}
                        className="block px-4 py-3 text-gray-700 hover:bg-pink-50"
                        onClick={closeMenu}
                      >
                        {t(dict, item.labelKey)}
                      </Link>
                    )}
                  </li>
                ))}
                <li className="border-t border-pink-100 pt-2">
                  <Link
                    href={langHref}
                    className="block px-4 py-3 text-gray-600 hover:bg-pink-50"
                    onClick={closeMenu}
                  >
                    {locale === 'sv' ? 'English (EN)' : 'Svenska (SV)'}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
