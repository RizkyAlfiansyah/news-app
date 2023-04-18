import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 bg-white">
      <header className="w-full flex justify-between items-center">
        <h1 className="text-4xl font-bold text-blue-900">NEWS Updates</h1>
      </header>
    </main>
  );
}
