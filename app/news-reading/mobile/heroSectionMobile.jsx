import Image from 'next/image'
import React from 'react'

const HeroSectionMobile = () => {
  return (
    <section className='bg-blue/10 md:hidden'>
         <div className="justify-center center-section items-stretch  flex max-w-[360px] flex-col py-10">
      <span className="justify-center items-stretch bg-violet-100 flex flex-col py-8 rounded-2xl">
        <Image
           width = {500}
           height = {500}
           alt = "news-reading"
         src = "/assets/ai-news.png"
          className="aspect-[1.34] object-contain object-center w-full items-center overflow-hidden"
        />
        <div className="text-primary text-2xl font-bold leading-7  whitespace-nowrap mt-5">
          AI: News Broadcasting
        </div>
        <div className="text-black text-base leading-6 self-center  mt-3">
        Immerse yourself in the innovative world of AI News Broadcasting, a domain where the power of artificial intelligence is harnessed to completely transform the traditional methods of news delivery.
        </div>
      </span>
    </div>
    </section>
  )
}

export default HeroSectionMobile