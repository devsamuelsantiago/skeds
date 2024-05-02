import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';
import { Inter } from 'next/font/google';

import '@radix-ui/themes/styles.css';
import '@/config/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Skeds',
  description: '...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class">
          <Theme>{children}</Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
