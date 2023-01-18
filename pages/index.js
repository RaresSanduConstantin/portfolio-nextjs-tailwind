import { Inter } from '@next/font/google';
import DefaultLayout from '../components/layout/DefaultLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="h-10">
      <h1 className='text-3xl font-bold underline'>Hello World!</h1>
    </main>
  );
}
