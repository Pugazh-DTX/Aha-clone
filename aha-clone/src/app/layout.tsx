import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/layout/footer/footer';
import Header from '@/components/layout/header/header';
import AppProvider from '@/components/providers/AppProvider';

export const metadata: Metadata = {
  title: 'Watch Movies, Web Series, TV Shows, Live TV Channels - aha',
  description: 'Watch Movies, Web Series, TV Shows, Live TV Channels - aha',
  icons: {
    icon: '/Assets/logo.svg',
    shortcut: '/Assets/logo.svg',
    apple: '/Assets/logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
