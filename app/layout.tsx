import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Indian Express 2',
  description: 'Indian Express 2 – Malmö',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-baby-pink antialiased">
        {children}
      </body>
    </html>
  );
}
