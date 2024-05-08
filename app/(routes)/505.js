import React from "react";
import Image from 'next/image'

export default function Custom505() {
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
                500 - Server-Side Error
            </h1>
            <p className='text-l text-light lg:text-xl'>
                This seems to be on our end, we'll figure it out soon.
            </p>
        </div>
    )
}