import { roboto } from '@/typography/font'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='bg-primary/10 hidden md:block'>
           <div className="justify-center center-section items-stretch  flex flex-col">
      <div className="items-stretch flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="mt-20 mb-14 max-md:max-w-full max-md:mr-1 max-md:my-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
              <span className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className={`text-primary text-6xl font-bold leading-[67.2px] max-md:max-w-full max-md:text-4xl`}>
                  AI: News Broadcasting
                </div>
                <div className="text-neutral-700 text-lg leading-7 mt-3 max-md:max-w-full">
                  Step into the world of AI News Broadcasting, where artificial
                  intelligence completely reforms the way news is delivered. Our
                  technology engages a broad audience and ensures that the news
                  is heard and understood by everyone through life like voices
                  in various languages.
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
              <Image
                width = {500}
                height = {500}
                alt = "news-reading"
                src = "https://res.cloudinary.com/dosjh2min/image/upload/v1705581313/indiaspeaks/news-reading-hero-section_rn402w.png"
                className="aspect-[1.34] object-contain object-center w-full items-center overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default HeroSection