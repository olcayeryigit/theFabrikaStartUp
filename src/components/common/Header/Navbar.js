"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../Logo';
import Tabs from './Tab';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 w-full  px-4 py-0 z-50 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
<Logo/>        
<Tabs/>

      
      
        <div className='flex items-center text-[#F0EDF9] group cursor-pointer w-48 transition-all duration-800'>
          
  <div className='w-3.5 h-6 '></div>
  <div className='relative arrow w-7 h-7 group-hover:left-2 transition-all duration-800'>


    <Image className='object-contain' alt='' fill src="/images/patterns/arrow-2.svg" />
  </div>
  <div className=' font-semibold text-xl items-center ms-2 group-hover:ps-2 transition-all duration-800'>Contact

</div>

        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-700 text-white space-y-x flex flex-col">
           <Link href="/" className="text-white hover:text-gray-200">About</Link>
          <Link href="/about" className="text-white hover:text-gray-200">Resources</Link>
          <Link href="/services" className="text-white hover:text-gray-200">Products</Link>
          <Link href="/contact" className="text-white hover:text-gray-200">Careers</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

