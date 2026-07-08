import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import MainButton from '../_components/MainButton'

export const metadata = {
  title: 'Server Error',
  description: 'An unexpected error occurred on globalNex.',
  robots: { index: false, follow: false },
}

export default function Custom505() {
    return (
        <div className='grid grid-cols-1 place-items-center gap-8 px-6 py-32 lg:py-48 text-center'>
            <Image
                src="SM-LightSVG.svg"
                alt="globalNex icon"
                sizes="100vw"
                style={{
                    width: 'auto',
                    height: '72px',
                }}
                width={30}
                height={30}
            />
            <div>
              <p className='text-sm uppercase tracking-widest text-error font-semibold mb-3'>
                500
              </p>
              <h1 className='text-4xl lg:text-5xl font-light text-ink'>
                Something went wrong
              </h1>
              <p className='text-light mt-4 max-w-md mx-auto text-sm lg:text-base'>
                This seems to be on our end. Please try again in a moment.
              </p>
            </div>
            <Link href="/">
              <MainButton btn_txt="Back to home" />
            </Link>
        </div>
    )
}
