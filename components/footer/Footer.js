import Link from 'next/link';

const Footer = () => (
<footer className="bg-black text-white p-6 flex justify-between items-center">
  <span className="text-teal-400 text-3xl font-bold">Rares Sandu</span>
  <div className="text-gray-700 text-xl">
    <span className="mx-4 hover:text-teal-400 transition duration-300">
      <Link href="/">Home</Link>
    </span>
    <span>Made with ❤ by Rares</span>
  </div>
</footer>

);

export default Footer;
