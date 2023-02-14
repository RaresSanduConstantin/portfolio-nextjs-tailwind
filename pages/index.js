import { Inter } from '@next/font/google';
import DefaultLayout from '../components/layout/DefaultLayout';
import Hero from '../components/hero/Hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="h-screen">
      <Hero />
    </main>
  );
}
