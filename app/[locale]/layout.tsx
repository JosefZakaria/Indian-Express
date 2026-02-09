import { notFound } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { locales } from '@/lib/i18n/config';
import Navbar from '@/components/Navbar';
import HomeLink from '@/components/HomeLink';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as 'en' | 'sv')) notFound();
  const dict = await getDictionary(locale as 'en' | 'sv') as Record<string, unknown>;
  return (
    <>
      <Navbar locale={locale} dict={dict} />
      <main className="min-h-screen bg-baby-pink">
        <div className="px-4 py-3">
          <HomeLink locale={locale} dict={dict} />
        </div>
        {children}
      </main>
    </>
  );
}
