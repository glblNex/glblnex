"use client"

import React from 'react'
import Image from 'next/image'
import WaitlistForm from '../_components/WaitlistForm'
import GxSection from '../_components/GxSection'
import { Catamaran, Urbanist } from 'next/font/google'
import MainButton from '../_components/MainButton'
import SecondButton from '../_components/SecondButton'
import Link from 'next/link';
import { motion } from "motion/react"
import CTABanner from '../_components/CTABanner'

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <main className="">
      <GxSection className="h-2/5">
        <header>
          <div className="grid grid-cols-1 gap-12 text-center py-10 lg:p-40">
            <div className='grid grid-cols-1 gap-12 justify-items-center'>
              <h1 className={`lg:max-w-[100%] text-5xl lg:text-8xl font-light ${urbanist.className}`}>Advanced Data for Smarter Global Trade</h1>
              <h2 className={`lg:max-w-[60%] text-lg lg:text-xl text-light font-thin ${urbanist.className}`}> Combining diverse datasets and predictive analytics to offer deep insights, streamline logistics, and enhance operational resilience.</h2>
            </div>
            <div className='grid grid-cols-1 lg:justify-items-center'>
              <div className='grid grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-12'>
                <Link href="/started" className=''>
                  <SecondButton btn_txt='Join Waitlist' />
                </Link>
                {/* <Link href="/product" className=''>
                  <MainButton btn_txt='Learn More' />
                </Link> */}
              </div>
            </div>
          </div>
        </header>
      </GxSection>
      <GxSection>
        <div>
          <div>
            <h2 className={`mb-6 text-6xl lg:text-8xl text-center lg:text-left   font-light ${urbanist.className}`}>Powering the Future of Global Commerce with Data</h2>
            <p className='lg:max-w-[75%] text-light'>globalNex is your trusted source for high-quality, consolidated trade and logistics data. Our API empowers businesses, developers, and researchers to access real-time insights, track global trends, and streamline operations with ease.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-16'>
            <div>
              <Image
                src="images/SVG/Earth.svg"
                alt="Earth Connected"
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                width={1000}
                height={1000}
                className='rounded'
              />
              <p className={`text-lg lg:text-xl font-thin text-center mt-6 ${urbanist.className}`}>
                Comprehensive Trade Data in One Place
              </p>
            </div>
            <div>
              <Image
                src="images/SVG/Ship.svg"
                alt="Earth Connected"
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                width={1000}
                height={1000}
                className='rounded'
              />
              <p className={`text-lg lg:text-xl font-thin text-center mt-6 ${urbanist.className}`}>
                Mitigate Risks, Optimize Supply Chains
              </p>
            </div>
            <div>
              <Image
                src="images/SVG/Market.svg"
                alt="Earth Connected"
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                width={1000}
                height={1000}
                className='rounded'
              />
              <p className={`text-lg lg:text-xl font-thin text-center mt-6 ${urbanist.className}`}>
                Discover New Market Opportunities
              </p>
            </div>
          </div>
        </div>
      </GxSection>
      <GxSection>
        <h2 className={`mb-6 text-6xl lg:text-8xl text-center lg:text-left   font-light text-left ${urbanist.className}`}>Core Features</h2>
        <div className='grid grid-cols-1 gap-10 mt-16'>
          <div className='grid grid-cols-1 lg:grid-cols-2 my-4'>
            <p className={`text-xl lg:text-2xl font-thin text-left ${urbanist.className}`}>
              Real-Time and Historical Insights
            </p>
            <p className='text-left lg:text-left mt-6 lg:mt-0 lg:text-right text-light'>
              Track live trends or analyze past performance to make informed decisions.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 my-4'>
            <p className={`text-xl lg:text-2xl font-thin text-left ${urbanist.className}`}>
              Developer-Friendly API
            </p>
            <p className='text-left lg:text-left mt-6 lg:mt-0 lg:text-right text-light'>
              Seamless integration with your workflows through intuitive SDKs and documentation.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 my-4'>
            <p className={`text-xl lg:text-2xl font-thin text-left ${urbanist.className}`}>
              Comprehensive Data
            </p>
            <p className='text-left lg:text-left mt-6 lg:mt-0 lg:text-right text-light'>
              Access trade, logistics, compliance, and macroeconomic datasets in one place.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 my-4'>
            <p className={`text-xl lg:text-2xl font-thin text-left ${urbanist.className}`}>
              Predictive Analytics Ready
            </p>
            <p className='text-left lg:text-left mt-6 lg:mt-0 lg:text-right text-light'>
              Leverage high-quality data for machine learning and predictive modeling.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 my-4'>
            <p className={`text-xl lg:text-2xl font-thin text-left ${urbanist.className}`}>
              Customizable Queries
            </p>
            <p className='text-left lg:text-left mt-6 lg:mt-0 lg:text-right text-light'>
              Tailor the data to your specific needs with flexible query options.
            </p>
          </div>
        </div>
      </GxSection>
      <GxSection>
        <h2 className={`mb-6 text-6xl lg:text-8xl text-center lg:text-left   font-light text-left ${urbanist.className}`}>Built for Every Stakeholder in Global Trade</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16'>
          <div className="lex-auto group transition duration-300">
            <p className={`text-xl lg:text-2xl font-thin text-left ${urbanist.className}`}>
              Logistics Managers
              <span class="block max-w-0 group-hover:max-w-[60%] transition-all duration-500 h-0.5 bg-highlight"></span>
            </p>
            <p className='text-light mt-6'>Monitor shipment statuses in real-time, identify port congestion, and plan the most efficient shipping routes to minimize delays and costs. Get alerted about disruptions like weather, geopolitical risks, or strikes to proactively adjust operations.</p>
          </div>
          <div className="lex-auto group transition duration-300">
            <p className={`text-xl lg:text-2xl font-thin text-left ${urbanist.className}`}>
              Freight Forwarders
              <span class="block max-w-0 group-hover:max-w-[60%] transition-all duration-500 h-0.5 bg-highlight"></span>
            </p>
            <p className='text-light mt-6'>Optimize shipment planning by analyzing freight rates across different routes and carriers. Use globalNex to ensure timely deliveries while minimizing costs and improving reliability for clients.</p>
          </div>
          <div className="lex-auto group transition duration-300">
            <p className={`text-xl lg:text-2xl font-thin text-left ${urbanist.className}`}>
              Investment Analysts
              <span class="block max-w-0 group-hover:max-w-[60%] transition-all duration-500 h-0.5 bg-highlight"></span>
            </p>
            <p className='text-light mt-6'>Evaluate trade risks by analyzing global market trends and exchange rate fluctuations. Calculate duties, tariffs, and other trade costs with ease, and forecast the financial impact of supply chain disruptions or new market opportunities.</p>
          </div>
          <div className="lex-auto group transition duration-300">
            <p className={`text-xl lg:text-2xl font-thin text-left ${urbanist.className}`}>
              Manufacturers
              <span class="block max-w-0 group-hover:max-w-[60%] transition-all duration-500 h-0.5 bg-highlight"></span>
            </p>
            <p className='text-light mt-6'>Improve supply chain efficiency by tracking the availability and movement of raw materials. Optimize production schedules by forecasting demand and ensuring just-in-time inventory management to reduce costs and waste.</p>
          </div>
          <div className="lex-auto group transition duration-300">
            <p className={`text-xl lg:text-2xl font-thin text-left ${urbanist.className}`}>
              Market Researchers
              <span class="block max-w-0 group-hover:max-w-[60%] transition-all duration-500 h-0.5 bg-highlight"></span>
            </p>
            <p className='text-light mt-6'>Study global trade patterns and emerging trends to provide actionable insights for businesses and policymakers. Use globalNex’s datasets to conduct competitor analysis and identify new market opportunities.</p>
          </div>
          <div className="lex-auto group transition duration-300">
            <p className={`text-xl lg:text-2xl font-thin text-left ${urbanist.className}`}>
              Supply Chain Strategists
              <span class="block max-w-0 group-hover:max-w-[60%] transition-all duration-500 h-0.5 bg-highlight"></span>
            </p>
            <p className='text-light mt-6'>Build resilient supply chains by analyzing potential risks and diversifying vendor relationships. Use predictive data to identify emerging disruptions or bottlenecks and proactively mitigate risks.</p>
          </div>
        </div>
      </GxSection>
      <CTABanner />
    </main>
  )
}
