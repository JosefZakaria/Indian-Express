'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const CONTENT_ID = 'content';

function scrollToContentSmooth() {
  const el = document.getElementById(CONTENT_ID);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function ScrollToContent() {
  const pathname = usePathname();
  const hasScrolled = useRef(false);

  const isHome = pathname === '/sv' || pathname === '/en';

  // Prevent browser's instant jump to #content: start at top so we can then smooth-scroll
  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !isHome) return;
    if (window.location.hash.slice(1) === CONTENT_ID) {
      window.scrollTo(0, 0);
    }
  }, [isHome, pathname]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!isHome) {
      hasScrolled.current = false;
      return;
    }

    const tryScroll = () => {
      const currentHash = window.location.hash.slice(1);
      if (currentHash === CONTENT_ID && !hasScrolled.current) {
        hasScrolled.current = true;
        // Small delay so "scroll to top" from useLayoutEffect has been applied, then smooth scroll
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            scrollToContentSmooth();
          });
        });
      }
    };

    tryScroll();
    const t1 = setTimeout(tryScroll, 100);
    const t2 = setTimeout(tryScroll, 400);

    const onHashChange = () => {
      hasScrolled.current = false;
      tryScroll();
    };
    window.addEventListener('hashchange', onHashChange);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [pathname]);

  return null;
}
