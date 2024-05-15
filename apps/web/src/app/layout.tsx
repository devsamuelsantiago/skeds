import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';
import { Inter } from 'next/font/google';
import { UserProvider } from '@/common/providers/user-provider';
import '@radix-ui/themes/styles.css';
import '@/config/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

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
    <html lang="pt-br">
      <body className={inter.variable} suppressHydrationWarning>
        <UserProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Theme>{children}</Theme>
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
