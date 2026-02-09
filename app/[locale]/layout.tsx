import { notFound } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { locales } from '@/lib/i18n/config';
import Navbar from '@/components/Navbar';
import HeaderLogo from '@/components/HeaderLogo';
import PageTransition from '@/components/PageTransition';
import ScrollRevealObserver from '@/components/ScrollRevealObserver';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as 'en' | 'sv')) notFound();
  const dict = (await getDictionary(locale as 'en' | 'sv')) as Record<string, unknown>;
  return (
    <>
      <ScrollRevealObserver />
      <Navbar locale={locale} dict={dict} />
      <HeaderLogo locale={locale} dict={dict} />
      <main className="min-h-screen bg-baby-pink pt-28 pl-4 pr-4 pb-4">
        <PageTransition>{children}</PageTransition>
      </main>
    </>
  );
}
