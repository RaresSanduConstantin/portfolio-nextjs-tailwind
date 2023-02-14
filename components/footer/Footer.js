import Link from 'next/link';

const Footer = () => (
  <footer className='bg-gray-900 text-white p-4 grid grid-cols-2 content-end text-center'>
    <span className='text-start'>
      <Link href='/'>
        <span className='text-white text-base my-10 mx-10 px-1 py-1'>Home</span>
      </Link>
    </span>
    <span className='text-end mr-10'>
      <p>Made with love by Rares</p>
    </span>
  </footer>
);

export default Footer;
