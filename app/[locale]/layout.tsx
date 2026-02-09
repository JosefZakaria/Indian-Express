import { notFound } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { locales } from '@/lib/i18n/config';
import Navbar from '@/components/Navbar';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as 'en' | 'sv')) notFound();
  const dict = await getDictionary(locale as 'en' | 'sv');
  return (
    <>
      <Navbar locale={locale} dict={dict} />
      <main className="min-h-screen bg-baby-pink">{children}</main>
    </>
  );
}
