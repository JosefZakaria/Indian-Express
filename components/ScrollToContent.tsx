'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const CONTENT_ID = 'content';

export default function ScrollToContent() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isHome = pathname === '/sv' || pathname === '/en';
    const hash = window.location.hash.slice(1);
    if (isHome && hash === CONTENT_ID) {
      const id = setTimeout(() => {
        const el = document.getElementById(CONTENT_ID);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
      return () => clearTimeout(id);
    }
  }, [pathname]);

  return null;
}
