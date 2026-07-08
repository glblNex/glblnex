import React from "react";
import Image from 'next/image'

export default function Loading() {
    return (
        <div className='grid grid-cols-1 place-items-center gap-8 px-6 py-32 lg:py-48 text-center'>
            <Image
                src="SM-LightSVG.svg"
                alt="globalNex icon"
                sizes="100vw"
                style={{
                    width: 'auto',
                    height: '64px',
                }}
                width={30}
                height={30}
                priority
            />
            <div className="gx-spinner" role="status" aria-label="Loading" />
        </div>
    )
}
