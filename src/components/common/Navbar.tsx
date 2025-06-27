'use client';
import Link from 'next/link';
import { IoMdHome, IoMdMenu, IoMdClose } from 'react-icons/io';
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex p-2 justify-between items-center bg-white sticky top-0 z-50">
        <div className="flex items-center">
          <p className="font-bold">HK</p>
        </div>

        {/* Hamburger/Close Menu Icon */}
        <button className="md:hidden" onClick={toggleMenu}>
            <IoMdMenu className="w-8 h-8" />
        </button>

        {/* Desktop Navigation Menu (visible on large screens) */}
        <nav className="hidden md:flex space-x-6">
          <Link href="" className="mx-2">
            <IoMdHome />
          </Link>
          <Link href="#about" className="mx-2">
            <span>01.</span> About
          </Link>
          <Link href="#skills" className="mx-2">
            <span>02.</span> Expertise
          </Link>
          <Link href="#work" className="mx-2">
            <span>03.</span> Work
          </Link>
          <Link href="#resume" className="mx-2">
            <span>04.</span> Experience
          </Link>
          <Link href="#contact" className="mx-2">
            <span>05.</span> Contact
          </Link>
        </nav>
      </header>

      {/* Mobile Navigation Menu (toggled when hamburger is clicked) */}
      <div
        className={`md:hidden fixed top-0 right-0 w-2/3 h-full bg-white z-[9999] p-8 shadow-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'hidden'
        }`}
      >
        <div className="flex justify-end">
            <button onClick={toggleMenu} className='align'> 
                <IoMdClose className="w-8 h-8" />
            </button>
        </div>
        <ul className="flex flex-col space-y-4 pt-10 text-center mx-auto">
          <Link href="" className="mx-auto">
          <IoMdHome className="w-6 h-6 align-center text-red-500" />
            Home
          </Link>
          <Link href="#about" className="mx-2">
            <span className='block text-red-500'>01.</span> About
          </Link>
          <Link href="#skills" className="mx-2">
            <span className='block text-red-500'>02.</span> Expertise
          </Link>
          <Link href="#work" className="mx-2">
            <span className='block text-red-500'>03.</span> Work
          </Link>
          <Link href="#resume" className="mx-2">
            <span className='block text-red-500'>04.</span> Experience
          </Link>
          <Link href="#contact" className="mx-2">
            <span className='block text-red-500'>05.</span> Contact
          </Link>
        </ul>
      </div>
    </>
  );
}