'use client'

import React from "react";
import Link from 'next/link';
import GxSection from "./GxSection";
// import AutoTyperNL from '../_components/AutoTyperNL';
import WaitlistForm from '../_components/WaitlistForm';
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
})

export default function CTABanner() {
    return (
        <GxSection>
            <h2 className={`text-4xl lg:text-6xl font-light text-center mb-12 ${urbanist.className}`}>Join the Waitlist</h2>
            <WaitlistForm></WaitlistForm>
        </GxSection>
    )
}