'use client'

import React from "react";
import Link from 'next/link';
import Image from 'next/image'
import MainButton from './MainButton'
import { SiLinkedin, SiInstagram, SiX } from "react-icons/si";


export default function MainFooter() {
    return (
        <nav className="container mx-auto min-w-full z-40">
            <div className="relative bottom-0 left-0 right-0 px-10 lg:px-24 py-12 z-39 bg-bg2 text-bg">
                <div className='grid grid-cols-6 max-md:grid-cols-1 gap-x-6 max-md:gap-y-8 justify-between justify-items-stretch content-start'>
                    <div className='max-md:justify-self-center content-center'>
                        <Link href="/">
                            <Image
                                src="SM - LightSVG.svg"
                                alt="globalnex Icon Logo"
                                sizes="100vw"
                                style={{
                                    width: '30px',
                                    height: '30px',
                                }}
                                width={30}
                                height={30}
                            />
                        </Link>
                    </div>
                    <div className='max-md:hidden'></div>
                    <div className='max-md:hidden'></div>
                    <div className='grid items-top justify-between justify-items-stretch gap-6 content-start justify-self-end max-md:justify-self-center'>
                        <Link className="hover:underline hover:decoration-highlight" href="/about">
                            about
                        </Link>
                    </div>
                    <div className='grid items-top justify-between justify-items-stretch gap-6 content-start justify-self-end max-md:justify-self-center'>
                        <Link className="hover:underline hover:decoration-highlight" href="/whyus">
                            why us
                        </Link>
                    </div>
                    <div className='grid items-top justify-between justify-items-stretch gap-6 content-start justify-self-end max-md:justify-self-center'>
                        <Link className="hover:underline hover:decoration-highlight" href="/services">
                            services
                        </Link>
                    </div>
                </div>
                <div className='mt-16 grid grid-cols-3 max-md:grid-cols-1 gap-x-6 max-md:gap-y-8 items-end text-light'>
                    <div className='justify-self-center text-center md:justify-self-start md:text-left'>
                        <p>Powered by <Link className='font-semibold hover:underline hover:decoration-highlight' href='https://nauvis.co/'>NAUVIS</Link>.</p>
                        <p>© 2024 globalNex. All rights reserved.</p>
                    </div>
                    <div className='justify-self-center'>
                        <Link className="hover:underline hover:decoration-highlight" href="/terms">
                            Terms
                        </Link>
                        <span>, </span>
                        <Link className="hover:underline hover:decoration-highlight" href="/privacy">
                            Privacy
                        </Link>
                        <span>, </span>
                        <Link className="hover:underline hover:decoration-highlight" href="/cookies">
                            Cookies
                        </Link>
                        <span>, & </span>
                        <Link className="hover:underline hover:decoration-highlight" href="/use">
                            Acceptable Use
                        </Link>
                    </div>
                    <div className='flex flex-row justify-self-end max-md:justify-self-center'>
                        <Link href="https://x.com/glblNex" target="_blank" className='ml-6'><SiX /></Link>
                        <Link href="https://www.linkedin.com/company/nauvis/" target="_blank" className='ml-6'><SiLinkedin /></Link>
                        <Link href="https://www.instagram.com/Nauvis.Co/" target="_blank" className='ml-6'><SiInstagram /></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}