import Link from 'next/link'

const Navbar = () => (
  <nav className="bg-gray-800 p-2 flex justify-between items-center">
    <Link href="/">
      <span className="text-white">Home</span>
    </Link>
    <div className="flex">
      <Link href="/about">
        <span className="text-white mr-4">About</span>
      </Link>
      <Link href="/blog">
        <span className="text-white mr-4">Blog</span>
      </Link>
      <Link href="/contact">
        <span className="text-white">Contact</span>
      </Link>
    </div>
  </nav>
)

export default Navbar
