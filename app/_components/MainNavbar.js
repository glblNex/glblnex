'use client'

import React from "react";
import Link from 'next/link';
import Image from 'next/image'
import MainButton from './MainButton'
import Hamburger from "./Hamburger";
import { useEffect, useState } from "react";

export default function MainNavbar() {
  const [burgerOn, setBurger] = useState(false);

  function toggleBurger() {
    setBurger(!burgerOn);
  }

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    // Attach the event listener
    window.addEventListener("scroll", handleScroll);
    // Remove the event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="container mx-auto min-w-full z-40">
      <div className={`fixed top-0 left-0 right-0 px-10 lg:px-24 py-3 z-40 transition-all duration-500 ${isScrolled ? "backdrop-blur-xl backdrop-brightness-75 shadow-l shadow-black" : ""}`}>
        {/* Desktop */}
        <div className='hidden lg:block '>
          <div className='grid grid-cols-3 gap-x-3.5 justify-stretch content-center'>
            <div className='flex items-center justify-self-start'>
              <Link href="/" className="cursor-pointer">
                <Image
                  src="DarkSVG.svg"
                  alt="globalNex Full Logo"
                  sizes="10vw"
                  style={{
                    width: 'auto',
                    height: '30px',
                  }}
                  width={2876}
                  height={658}
                />
              </Link>
            </div>
            <div className='flex items-center justify-self-center gap-12 underline-offset-4 transition-all duration-500 ease-in-out'>
              {/* <Link className="flex-auto group transition duration-300" href="/product">
                Product
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-highlight"></span>
              </Link>
              <Link className="lex-auto group transition duration-300" href="/resources">
                Resources
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-highlight"></span>
              </Link>
              <Link className="lex-auto group transition duration-300" href="/company">
                Company
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-highlight"></span>
              </Link> */}
            </div>
            <div className='flex items-center justify-self-end'>
              <Link href="/started" className=''>
                <MainButton btn_txt='Get Started' />
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className='block lg:hidden'>
          <div className='grid grid-cols-2 gap-x-3.5 justify-stretch content-center'>
            <div className='flex items-center justify-self-start'>
              <Link href="/">
                <Image
                  src="DarkSVG.svg"
                  alt="globalNex Full Logo"
                  sizes="100vw"
                  style={{
                    width: 'auto',
                    height: '30px',
                  }}
                  width={2876}
                  height={658}
                />
              </Link>
            </div>
            <div className='flex items-center justify-self-end'>
              <div onClick={toggleBurger}><Hamburger burgeron={burgerOn} /></div>
            </div>
          </div>
          {burgerOn ? <div className='grid grid-cols-1 auto-rows-auto gap-y-8 py-6 my-4 justify-items-center content-center bg-bg'>
            {/* <Link className="self-center" href="/solutions">
              Product
            </Link>
            <Link className="self-center" href="/resources">
              Resources
            </Link>
            <Link className="self-center" href="/company">
              Company
            </Link> */}
            <Link href="/started" className='self-center'>
              <MainButton btn_txt='Get Started' />
            </Link>
          </div> : null}
        </div>
      </div>
    </nav>
  )
}