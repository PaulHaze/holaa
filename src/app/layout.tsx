import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

import '@/styles/main.scss';

// !CHANGETHIS
export const metadata: Metadata = {
  title: 'CHANGE THIS',
  description: 'CHANGE THIS',
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
