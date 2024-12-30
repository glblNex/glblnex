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
            <GxSection className="h-1/5">
                <header className="py-10 lg:pt-20 lg:pb-10">
                    <div className="grid grid-cols-1 gap-12 justify-items-center text-center">
                        <h1 className={`lg:max-w-[75%] text-4xl lg:text-6xl font-light ${urbanist.className}`}>Join the GlobalNex Waitlist</h1>
                        <h2 className={`lg:max-w-[75%] text-lg lg:text-xl text-light font-thin ${urbanist.className}`}> Be part of the revolution in global trade intelligence. Early access to cutting-edge analytics, AI-driven insights, and powerful tools awaits you.</h2>
                    </div>
                </header>
                <div>
                    <section className="justify-items-center">
                        <FullForm></FullForm>
                    </section>
                </div>
            </GxSection>
            <GxSection className="h-full">
                <br></br>
            </GxSection>
        </main>
    );
}