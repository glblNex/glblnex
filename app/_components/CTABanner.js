'use client'

import React from "react";
import GxSection from "./GxSection";
import WaitlistForm from '../_components/WaitlistForm';
import { urbanist } from '../_style/fonts'

export default function CTABanner() {
    return (
        <GxSection>
            <div className="rounded-2xl border border-line bg-bg2 px-6 py-14 lg:px-16 lg:py-20 text-center">
                <h2 className={`text-3xl lg:text-5xl font-light text-ink mb-4 ${urbanist.className}`}>
                    Put a number on your metal risk
                </h2>
                <p className={`text-light max-w-lg mx-auto mb-10 text-base leading-relaxed ${urbanist.className}`}>
                    Join the leaders getting early access to globalNex. Quantify what supply shocks
                    do to your cost and margin, and walk into your next review with the answer.
                </p>
                <WaitlistForm />
            </div>
        </GxSection>
    )
}
