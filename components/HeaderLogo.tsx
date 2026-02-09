'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type HeaderLogoProps = {
  locale: string;
  dict: Record<string, unknown>;
};

export default function HeaderLogo({ locale }: HeaderLogoProps) {
  const pathname = usePathname();
  const isHome = pathname === '/sv' || pathname === '/en';
  if (isHome) return null;

  return (
    <div key={pathname} className="fixed left-4 top-4 z-30 flex items-center animate-header-in">
      <Link
        href={`/${locale}`}
        className="block rounded-full outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-baby-pink"
      >
        <img
          src="/indian-express-logo.png"
          alt=""
          className="h-[110px] w-[110px] object-contain"
          width={104}
          height={104}
        />
      </Link>
    </div>
  );
}
