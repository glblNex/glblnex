"use client"

import React from 'react';
import WaitlistForm from '../_components/WaitlistForm';

export default function Home() {
  return (
    <main className="">
      <section className='relative overflow-hidden pb-10 md:pb-14 mb-10 h-screen px-10 lg:px-24'>
        <div className='absolute inset-0'>
          <video
            src='https://y2etwt0sktcajnaj.public.blob.vercel-storage.com/webvideo.mp4'
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            disablePictureInPicture
            className="op-dim object-cover object-center w-full h-full"
          ></video>
        </div>
        <div className='relative flex flex-col justify-end h-full'>
          <h1 className='mb-10 text-6xl lg:text-10xl px-wrapper-mobile lg:px-wrapper-desktop lg:mt-0 md:w-9/12 lg:w-8/12 2xl:w-7/12 hidden-br hidden-br--xl'>
            Global Trade Intelligence
          </h1>
          <p className='text-l text-light lg:text-xl px-wrapper-mobile lg:px-wrapper-desktop lg:mt-0 mb-2 lg:mb-7 md:w-9/12 lg:w-8/12 2xl:w-7/12 hidden-br hidden-br--xl'>
            Unlocking Global Trade Insights with Data and AI
          </p>
        </div>
      </section>
      <section className='mb-12 py-10 lg:py-16 px-10 lg:px-24'>
        <div className="grid grid-cols-1 gap-12 h-96 items-center">
          <h3 className='text-2xl text-center font-light'>Interested?</h3>
          <h2 className='text-6xl text-center font-semibold'>Join the Waitlist.</h2>
          <div className='justify-items-center'><WaitlistForm alignSelf={"center"} /></div>
        </div>
      </section>
    </main>
  )
}
