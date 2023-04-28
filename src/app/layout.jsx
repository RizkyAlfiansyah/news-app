import { Button, Input } from '@/components/atoms';
import './globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import instance from '@/lib/axios';
import Link from 'next/link';

export const metadata = {
  title: 'News App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative flex min-h-screen flex-col items-center justify-start lg:gap-4 gap-3 bg-slate-100 overflow-x-hidden">
        <header className="w-full flex xl:justify-center justify-start items-center py-4 shadow-md bg-white">
          <Link href="/">
            <h1 className="xl:w-[1280px] lg:text-4xl text-2xl font-bold text-blue-900 px-2">
              NEWS Updates
            </h1>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
