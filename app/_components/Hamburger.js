'use client'

import React from "react";

export default function Hamburger(props) {
    const isOpen = props.burgeron;

    return (
        <div>
            <div className="flex flex-col justify-center items-center cursor-pointer">
                <span className={`bg-ink block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-ink block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-ink block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
        </div>
    );
}
