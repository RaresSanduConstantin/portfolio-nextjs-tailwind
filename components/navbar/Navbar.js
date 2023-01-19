import Link from 'next/link';

const Navbar = () => (
  <nav className='bg-black p-5 flex justify-between items-center sticky top-0'>
    <Link href='/'>
      <span className='text-white text-xl my-10 mx-10'>Home</span>
    </Link>
    <div className='flex'>
      <Link href='/about'>
        <span className='text-white text-xl my-10 mx-10 px-1 py-1'>About</span>
      </Link>
      <Link href='/portfolio'>
        <span className='text-white text-xl my-10 mx-10 px-1 py-1'>Portfolio</span>
      </Link>
      <Link href='/blog'>
        <span className='text-white text-xl my-10 mx-10 px-1 py-1'>Blog</span>
      </Link>
      <Link href='/contact'>
        <span className='text-white text-xl my-10 mx-10 px-1 py-1'>Contact</span>
      </Link>
      <Link href='/hire'>
        <button className='text-white text-xl rounded-sm bg-teal-400 px-5 py-1 mr-10'>
          Hire Me
        </button>
      </Link>
    </div>
  </nav>
);

export default Navbar;
