'use client'

import React from "react";
import GxSection from "./GxSection";
import WaitlistForm from '../_components/WaitlistForm';
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
})

export default function CTABanner() {
    return (
        <GxSection>
            <div className="rounded-2xl border border-line bg-bg2 px-6 py-12 lg:px-16 lg:py-16 text-center">
                <h2 className={`text-3xl lg:text-5xl font-light text-ink mb-4 ${urbanist.className}`}>
                    Get early access to globalNex
                </h2>
                <p className={`text-light max-w-lg mx-auto mb-10 text-sm lg:text-base ${urbanist.className}`}>
                    Join the waitlist for metals scenario analysis — stress-test the alloys you
                    buy and quantify supply risk before disruption hits production.
                </p>
                <WaitlistForm />
            </div>
        </GxSection>
    )
}
