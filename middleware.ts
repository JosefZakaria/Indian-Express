import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from '@/lib/i18n/config';

const staticExtensions = /\.(png|jpg|jpeg|gif|svg|ico|webp|woff2?|ttf|eot)(\?.*)?$/i;

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Let static assets (e.g. /indian-express-logo.png) be served from public without redirect
  if (staticExtensions.test(pathname)) {
    return NextResponse.next();
  }

  const pathnameLocale = pathname.split('/')[1];
  if (locales.includes(pathnameLocale as 'en' | 'sv')) {
    return NextResponse.next();
  }

  const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
