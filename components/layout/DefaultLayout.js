import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: 'Rares Sand - Developer, Writer, Creator and Freelancer',
    description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`,
    image: '/rares.jpeg',
    type: 'website',
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Rares Sandu' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>
      <main className='dark:bg-gray-800 w-full'>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
