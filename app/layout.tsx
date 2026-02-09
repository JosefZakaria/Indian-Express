import type { Metadata } from 'next';
import { Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: 'Indian Express',
  description: 'Indian Express – Malmö',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cormorant.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-baby-pink font-serif antialiased">
        {children}
      </body>
    </html>
  );
}
