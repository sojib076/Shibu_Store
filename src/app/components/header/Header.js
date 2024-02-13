// Header.js
'use client'
import Link from "next/link";
import { useEffect, useState } from "react";



const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    setIsScrolled(window.pageYOffset > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);
  return (
    <header className={isScrolled ? 'header scrolled p-4' : 'header p-4'}>

      <div className="container mx-auto flex justify-between items-center">
        <div className='w-1/2'>
        <h1 className="text-2xl font-semibold">Your Logo</h1>
        </div>
        <div className='w-1/2'>
          <ul className="flex space-x-4 justify-evenly">
      
          <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link href="#" className="hover:text-gray-300">Services</Link></li>
            <li><Link href="#" className="hover:text-gray-300">Contact</Link></li>
            <li><Link href="#" className={isScrolled ? 'hover:text-gray-300 bg-white px-4 py-2 rounded-sm text-black ' : 'hover:text-gray-300 bg-black px-4 py-2 rounded-sm text-white'}>Sign up </Link></li>
                     
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
