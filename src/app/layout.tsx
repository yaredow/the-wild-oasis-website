import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import Logo from '@/components/Logo';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '../../public/components/theme-provider';
import Navigation from '@/components/header';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'The wild oasis',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-primary-900  text-primary-50  font-sans antialiased',
          fontSans.variable
        )}
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
