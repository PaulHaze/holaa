import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import localFont from 'next/font/local';
import { Dosis, Jost, Big_Shoulders_Display } from 'next/font/google';

import { NavBar } from '@/components/header';
import { UiProvider } from '@/context/UiContext';

import '@/styles/global.scss';

//#region FONTS
const lowball = localFont({
  src: [
    {
      path: '../assets/fonts/lowball-neue/LowballNeueThin-2OM6o.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/lowball-neue/LowballNeueExtraLight-vmBpL.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/lowball-neue/LowballNeueLight-BWlAw.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/lowball-neue/LowballNeueRegular-rglJB.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/lowball-neue/LowballNeueMedium-8MmAn.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/lowball-neue/LowballNeueSemiBold-MVv5P.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/lowball-neue/LowballNeueBold-w18A6.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  adjustFontFallback: false,
  display: 'swap',
  variable: '--heading-font',
  preload: false,
});

const dosisBody = Dosis({
  subsets: ['latin'],
  variable: '--body-font',
  display: 'swap',
  adjustFontFallback: false,
  preload: false,
});

const jost = Jost({
  subsets: ['latin'],
  variable: '--jost-font',
  display: 'swap',
  adjustFontFallback: false,
  preload: false,
});

const bigShouldersDisplay = Big_Shoulders_Display({
  subsets: ['latin'],
  variable: '--bigShoulder-font',
  display: 'swap',
  adjustFontFallback: false,
  preload: false,
});
//#endregion

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
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="robots" content="noindex, follow" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="favicon.ico" sizes="any" />
      <body
        className={`${lowball.variable} ${dosisBody.variable} ${jost.variable} ${bigShouldersDisplay.variable} bg-base-100`}
      >
        <ThemeProvider>
          <UiProvider>
            <NavBar />
            {children}
          </UiProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
