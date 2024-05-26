import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import Logo from '@/components/Logo';
import { cn } from '@/lib/utils';
import Navigation from '@/components/header';
import { Josefin_Sans } from 'next/font/google';

// const fontSans = FontSans({
//   subsets: ['latin'],
//   variable: '--font-sans',
// });

const JosefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
});

export const metadata = {
  title: {
    title: '%s The wild oasis',
    default: 'Welcome / The Wild Oasis',
  },
  desctiption:
    'A luxurious cabin hotel, Located in the heart of the italian Dolomite',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={` ${JosefinSans.className} min-h-screen bg-primary-900  text-primary-50`}
      >
        <header className=' m-4 border-b flex flex-row justify-between items-center'>
          <Logo />
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}
