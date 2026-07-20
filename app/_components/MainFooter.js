'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { urbanist } from '../_style/fonts'
import MainButton from './MainButton'

const EXPLORE = [
  { label: 'How it works', href: '/#how' },
  { label: 'See an example', href: '/#proof' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Send us an invoice', href: '/started' },
]

const INDUSTRIES = [
  'Defense',
  'Aerospace',
  'Automotive & EV',
  'Industrial',
  'Hardware',
  'Medical',
]

export default function MainFooter() {
  return (
    <footer className="container mx-auto min-w-full mt-8">
      <div className="relative overflow-hidden bg-ink text-white px-6 lg:px-24 py-14 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07] gx-grid"
          aria-hidden
        />
        <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-medium mb-4">
              globalNex
            </p>
            <p className={`text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.1] ${urbanist.className}`}>
              Negotiate with math. Hedge before the hike.
            </p>
            <p className="mt-4 text-sm text-white/55 leading-relaxed max-w-lg">
              Custom analysis of your raw materials and composition—so supplier hikes don’t eat
              your margin.
            </p>
          </div>
          <Link href="/started" className="shrink-0">
            <MainButton btn_txt="Send us an invoice" className="!text-xs sm:!text-sm !px-4 sm:!px-6" />
          </Link>
        </div>
      </div>

      <div className="relative px-6 lg:px-24 py-12 lg:py-16 bg-bg2 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <Image
                src="LightSVG.svg"
                alt="globalNex"
                sizes="120px"
                style={{ width: 'auto', height: '26px' }}
                width={2876}
                height={658}
              />
            </Link>
            <p className="mt-5 text-sm text-light leading-relaxed max-w-xs">
              Composition analysis that funds negotiation counters and hedge timing on metal spend.
            </p>
            <div className="mt-6 flex items-center gap-4 text-ink">
              <Link
                href="https://x.com/glblNex"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="globalNex on X"
                className="hover:text-highlight transition-colors"
              >
                <FaXTwitter size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/glblnex/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="globalNex on LinkedIn"
                className="hover:text-highlight transition-colors"
              >
                <FaLinkedinIn size={18} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.16em] text-light font-medium mb-4">
              Explore
            </p>
            <ul className="space-y-2.5">
              {EXPLORE.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink/80 hover:text-highlight transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.16em] text-light font-medium mb-4">
              Built for
            </p>
            <div className="flex flex-wrap gap-2">
              {INDUSTRIES.map((ind) => (
                <span
                  key={ind}
                  className={`text-xs font-light text-ink/70 px-3 py-1.5 border border-line bg-white ${urbanist.className}`}
                >
                  {ind}
                </span>
              ))}
            </div>
            <Link
              href="/llms.txt"
              className="mt-6 inline-block text-[11px] text-light hover:text-highlight transition-colors"
            >
              AI reference (llms.txt)
            </Link>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-24 py-5 bg-white border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-light">
        <p>© 2026 globalNex. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
          <Link className="hover:text-ink transition-colors" href="/terms">
            Terms
          </Link>
          <span>,</span>
          <Link className="hover:text-ink transition-colors" href="/privacy">
            Privacy
          </Link>
          <span>,</span>
          <Link className="hover:text-ink transition-colors" href="/cookies">
            Cookies
          </Link>
          <span>, &</span>
          <Link className="hover:text-ink transition-colors" href="/use">
            Acceptable Use
          </Link>
        </div>
      </div>
    </footer>
  )
}
