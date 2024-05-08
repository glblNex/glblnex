import React from "react";
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className='grid grid-cols-1 place-items-center gap-12 p-48 text-center'>
            <Image
                src="SM - DarkSVG.svg"
                alt="globalnex Icon Logo"
                sizes="100vw"
                style={{
                    width: 'auto',
                    height: '100px',
                }}
                width={30}
                height={30}
            />
            <p className='text-l text-light lg:text-xl'>
                Looks like we ran into some kind of problem.
            </p>
            <h1 className='text-6xl lg:text-10xl'>
                404 - Page Not Found
            </h1>
            <p className='text-l text-light lg:text-xl'>
                We're still working on our website, we appreciate your patience!
            </p>
        </div>
    )
}