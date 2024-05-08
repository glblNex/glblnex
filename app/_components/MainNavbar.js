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
              <Link href="/">
                <Image
                  src="DarkSVG.svg"
                  alt="globalnex Full Logo"
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
            <div className='flex items-center justify-self-center gap-12'>
              <Link className="flex-auto hover:underline hover:decoration-highlight" href="/about">
                About
              </Link>
              <Link className="flex-auto hover:underline hover:decoration-highlight" href="/whyus">
                Why Us
              </Link>
              <Link className="flex-auto hover:underline hover:decoration-highlight" href="/services">
                Our Services
              </Link>
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
                  alt="globalnex Full Logo"
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
            <Link className="self-center" href="/about">
              About
            </Link>
            <Link className="self-center" href="/whyus">
              Why Us
            </Link>
            <Link className="self-center" href="/services">
              Our Services
            </Link>
            <Link href="/started" className='self-center'>
              <MainButton btn_txt='Get Started' />
            </Link>
          </div> : null}
        </div>
      </div>
    </nav>
  )
}