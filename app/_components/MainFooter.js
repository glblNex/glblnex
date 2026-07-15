'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { urbanist } from '../_style/fonts'
import MainButton from './MainButton'

const EXPLORE = [
  { label: 'See sample deliverable', href: '/#demo' },
  { label: 'Alloy decomposition', href: '/#alloys' },
  { label: 'How we compare', href: '/#compare' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Get started', href: '/started' },
]

const INDUSTRIES = [
  'Defense',
  'Aerospace',
  'Automotive & EV',
  'Industrial',
  'Hardware',
  'Medical',
  'Private equity',
]

const METALS = [
  'Aluminum', 'Titanium', 'Nickel', 'Copper', 'Steel', 'Magnesium', 'Gold', 'Inconel',
]

function FooterMarquee({ items }) {
  // Repeat so each track is wider than the viewport, which prevents visible gaps on large screens
  const trackItems = Array(4).fill(items).flat()

  const Track = ({ trackId, hidden }) => (
    <div
      className="flex shrink-0 items-center whitespace-nowrap py-3"
      aria-hidden={hidden || undefined}
    >
      {trackItems.map((label, i) => (
        <span
          key={`${trackId}-${label}-${i}`}
          className={`mx-6 text-xs font-light text-ink/40 ${urbanist.className}`}
        >
          {label}
        </span>
      ))}
    </div>
  )

  return (
    <div className="gx-fade-mask overflow-hidden border-t border-line/60 gx-marquee-wrap">
      <div
        className="gx-marquee-inner flex w-max"
        style={{ '--gx-marquee-duration': '48s' }}
      >
        <Track trackId="a" />
        <Track trackId="b" hidden />
      </div>
    </div>
  )
}

export default function MainFooter() {
  return (
    <footer className="container mx-auto min-w-full mt-8">
      {/* Statement band */}
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
              Trace, audit, route, quantify. We execute the move.
            </p>
            <p className="mt-4 text-sm text-white/55 leading-relaxed max-w-lg">
              Tech-enabled managed service for manufacturers and deal teams. Hit lists, rejection
              reports, sourcing plans, and exposure figures, with experts who execute.
            </p>
          </div>
          <Link href="/started" className="shrink-0">
            <MainButton btn_txt="Get started" />
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative px-6 lg:px-24 py-12 lg:py-16 bg-bg2 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
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
              Trace shocks to specific parts. Audit surcharges. Route NPI spend. Quantify exposure
              for the board or the deal room.
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

          <div className="lg:col-span-2">
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

          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.16em] text-light font-medium mb-4">
              Built for
            </p>
            <div className="flex flex-wrap gap-2">
              {INDUSTRIES.map((ind) => (
                <span
                  key={ind}
                  className={`text-xs font-light text-ink/70 px-3 py-1.5 rounded-full border border-line bg-white ${urbanist.className}`}
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.16em] text-light font-medium mb-4">
              The stack
            </p>
            <p className="text-sm text-light leading-relaxed mb-4">
              Engine plus Expert-in-the-Loop team. Chemistry mapped, moves executed. Not another
              self-serve dashboard.
            </p>
            <div className="rounded-xl border border-line bg-white p-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-light">Your BOM</span>
                <span className="font-medium text-highlight">globalNex</span>
              </div>
              <div className="h-px bg-line" />
              <div className="flex items-center justify-between text-xs text-light">
                <span>Price feeds</span>
                <span>Supplier maps</span>
              </div>
            </div>
            <Link
              href="/llms.txt"
              className="mt-4 inline-block text-[11px] text-light hover:text-highlight transition-colors"
            >
              AI reference (llms.txt)
            </Link>
          </div>
        </div>
      </div>

      <FooterMarquee items={METALS} />

      {/* Legal */}
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
