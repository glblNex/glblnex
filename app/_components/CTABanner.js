'use client'

import React from "react";
import GxSection from "./GxSection";
import WaitlistForm from '../_components/WaitlistForm';
import { urbanist } from '../_style/fonts'

export default function CTABanner() {
    return (
        <GxSection>
            <div className="rounded-2xl border border-line bg-bg2 px-6 py-14 lg:px-16 lg:py-20 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-highlight font-semibold mb-4">
                    Selective engagements
                </p>
                <h2 className={`text-3xl lg:text-5xl font-light text-ink mb-4 ${urbanist.className}`}>
                    Tell us where material risk breaks your operation
                </h2>
                <p className={`text-light max-w-xl mx-auto mb-10 text-base leading-relaxed ${urbanist.className}`}>
                    Surcharge audit, geo exposure, NPI sourcing, supply redirect, or deal diligence.
                    Hand us your BOM or purchase data. We map chemistry and deliver the move.
                </p>
                <WaitlistForm />
            </div>
        </GxSection>
    )
}
