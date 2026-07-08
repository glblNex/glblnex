'use client'

import React from "react";
import Link from 'next/link';
import Image from 'next/image'
import { SiLinkedin, SiX } from "react-icons/si";

export default function MainFooter() {
    return (
        <footer className="container mx-auto min-w-full">
            <div className="relative bottom-0 left-0 right-0 px-6 lg:px-24 py-14 bg-bg2 text-ink border-t border-line">
                <div className='grid grid-cols-6 max-md:grid-cols-1 gap-x-6 max-md:gap-y-8 justify-between justify-items-stretch content-start'>
                    <div className='max-md:justify-self-center content-center'>
                        <Link href="/">
                            <Image
                                src="SM-LightSVG.svg"
                                alt="globalnex Icon Logo"
                                sizes="10vw"
                                style={{
                                    width: '30px',
                                    height: 'auto',
                                }}
                                width={2876}
                                height={658}
                            />
                        </Link>
                    </div>
                    <div className='col-span-3 max-md:hidden'>
                        <p className='text-light max-w-md text-sm leading-relaxed'>
                            Metals scenario analysis for the alloys manufacturers depend on. Decompose
                            composition, stress-test shocks, and quantify cost and availability impact.
                        </p>
                    </div>
                    <div className='max-md:hidden'></div>
                    <div className='max-md:hidden'></div>
                </div>
                <div className='mt-14 grid grid-cols-3 max-md:grid-cols-1 gap-x-6 max-md:gap-y-6 items-end text-light text-sm'>
                    <div className='justify-self-center text-center md:justify-self-start md:text-left'>
                        <p>© 2026 globalNex. All rights reserved.</p>
                    </div>
                    <div className='justify-self-center'>
                        <Link className="hover:text-ink transition-colors" href="/terms">Terms</Link>
                        <span>, </span>
                        <Link className="hover:text-ink transition-colors" href="/privacy">Privacy</Link>
                        <span>, </span>
                        <Link className="hover:text-ink transition-colors" href="/cookies">Cookies</Link>
                        <span>, & </span>
                        <Link className="hover:text-ink transition-colors" href="/use">Acceptable Use</Link>
                    </div>
                    <div className='flex flex-row justify-self-end max-md:justify-self-center text-ink'>
                        <Link href="https://x.com/glblNex" target="_blank" className='ml-6 hover:text-highlight transition-colors'><SiX /></Link>
                        <Link href="https://www.linkedin.com/company/glblnex/" target="_blank" className='ml-6 hover:text-highlight transition-colors'><SiLinkedin /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
