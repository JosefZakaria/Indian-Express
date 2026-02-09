'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { t } from '@/lib/utils';

type HomeLinkProps = {
  locale: string;
  dict: Record<string, unknown>;
};

export default function HomeLink({ locale, dict }: HomeLinkProps) {
  const pathname = usePathname();
  const isHome = pathname === '/sv' || pathname === '/en';
  if (isHome) return null;

  return (
    <Link
      href={`/${locale}`}
      className="inline-flex items-center gap-2.5 font-serif text-xl text-burgundy no-underline outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-baby-pink"
    >
      <span className="text-2xl leading-none" aria-hidden>←</span>
      <span className="border-b border-transparent pb-0.5 transition-colors hover:border-burgundy">
        {t(dict, 'nav.home')}
      </span>
    </Link>
  );
}
