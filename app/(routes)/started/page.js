'use client';

import FullForm from "@/app/_components/FullForm";
import GxSection from "@/app/_components/GxSection";
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({
    subsets: ['latin'],
    display: 'swap',
})

export default function StartedPage() {
    return (
        <main>
            <GxSection className="pt-28 lg:pt-36">
                <header className="py-6 lg:pb-10">
                    <div className="grid grid-cols-1 gap-8 justify-items-center text-center">
                        <p className="text-xs uppercase tracking-[0.2em] text-highlight font-semibold">
                            Early access
                        </p>
                        <h1 className={`lg:max-w-[75%] text-4xl lg:text-5xl font-light text-ink ${urbanist.className}`}>
                            Join the globalnex waitlist
                        </h1>
                        <h2 className={`lg:max-w-[65%] text-base lg:text-lg text-light font-light leading-relaxed ${urbanist.className}`}>
                            Be first to access the metals geo-risk analyzer — map global supply,
                            stress-test geo-shocks on your alloys, and quantify exposure before
                            disruption hits production.
                        </h2>
                    </div>
                </header>
                <div>
                    <section className="justify-items-center">
                        <FullForm />
                    </section>
                </div>
            </GxSection>
        </main>
    );
}
