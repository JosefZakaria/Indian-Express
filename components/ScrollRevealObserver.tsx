'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const REVEAL_CLASS = 'is-visible';
const REVEAL_SELECTOR = '[data-scroll-reveal]';

export default function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll(REVEAL_SELECTOR);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(REVEAL_CLASS);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
