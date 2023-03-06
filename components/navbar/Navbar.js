import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="bg-white p-6 flex justify-between items-center sticky top-0">
      <Link href="/">
        <span className="text-teal-400 text-3xl font-bold">Rares Sandu</span>
      </Link>

      <div className="hidden md:flex md:space-x-4">
        <Link href="/about">
          <span className="text-gray-700 text-xl hover:text-teal-400 transition duration-300">About</span>
        </Link>
        <Link href="/portfolio">
          <span className="text-gray-700 text-xl hover:text-teal-400 transition duration-300">Portfolio</span>
        </Link>
        <Link href="/blog">
          <span className="text-gray-700 text-xl hover:text-teal-400 transition duration-300">Blog</span>
        </Link>
        <Link href="/contact">
          <span className="text-gray-700 text-xl hover:text-teal-400 transition duration-300">Contact</span>
        </Link>
        <Link href="/hire">
          <button className="text-white text-xl rounded-full bg-teal-400 px-5 py-2 hover:bg-teal-500 transition duration-300">
            Hire Me
          </button>
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={() => setShowLinks(!showLinks)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {showLinks && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white py-6 px-4">
          <Link href="/about">
            <span className="block text-gray-700 text-xl my-2 hover:text-teal-400 transition duration-300">About</span>
          </Link>
          <Link href="/portfolio">
            <span className="block text-gray-700 text-xl my-2 hover:text-teal-400 transition duration-300">Portfolio</span>
          </Link>
          <Link href="/blog">
            <span className="block text-gray-700 text-xl my-2 hover:text-teal-400 transition duration-300">Blog</span>
          </Link>
          <Link href="/contact">
            <span className="block text-gray-700 text-xl my-2 hover:text-teal-400 transition duration-300">Contact</span>
          </Link>
          <Link href="/hire">
            <button className="block text-white text-xl rounded-full bg-teal-400 px-5 py-2 my-4 hover:bg-teal-500 transition duration-300">
              Hire Me
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
