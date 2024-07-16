import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

import '@/styles/global.scss';

export const metadata: Metadata = {
  title: 'HOLAA',
  description: 'A demo movie app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-base-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
