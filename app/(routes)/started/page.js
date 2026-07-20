'use client';

import FullForm from "@/app/_components/FullForm";
import GxSection from "@/app/_components/GxSection";
import { urbanist } from "@/app/_style/fonts";

export default function StartedPage() {
    return (
        <main>
            <GxSection className="pt-28 lg:pt-36">
                <header className="pb-10">
                    <div className="grid grid-cols-1 gap-6 justify-items-center text-center">
                        <p className="text-xs uppercase tracking-[0.2em] text-highlight font-semibold">
                            First step
                        </p>
                        <h1 className={`lg:max-w-[75%] text-4xl lg:text-5xl font-light text-ink ${urbanist.className}`}>
                            Send us your last supplier invoice or BOM.
                        </h1>
                        <h2 className={`lg:max-w-[60%] text-base lg:text-lg text-light font-light leading-relaxed ${urbanist.className}`}>
                            Custom composition analysis so you can negotiate pricing and hedge
                            increases. No clean data required.
                        </h2>
                    </div>
                </header>
                <section className="flex justify-center">
                    <FullForm />
                </section>
            </GxSection>
        </main>
    );
}
