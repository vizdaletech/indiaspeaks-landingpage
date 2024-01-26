import { NEWS } from '@/shared/contents'
import ImageSlider from '@/shared/image-slider'
import React from 'react'

const HarmonyOfLanguages = () => {
  return (
    <section className='hidden md:block'>
        <div className="items-stretch center-section bg-white flex flex-col justify-center px-7 py-12 max-md:px-5">
      <div className="px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <span className="items-stretch flex flex-col my-auto pt-8 pb-12 max-md:mt-10">
              <div className="text-primary text-4xl font-bold leading-10">
                Harmony of
                <br />
                Languages we <br />
                support{" "}
              </div>
              <div className="text-black text-lg leading-7 mt-3 mb-24 max-md:mb-10">
                We support multiple languages to make news more accessible for
                everyone. Check out samples of our AI reciting news in different
                languages.
              </div>
            </span>
          </div>
          <div className='w-10/12 flex justify-end'>
          <ImageSlider DATA = {NEWS} />
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default HarmonyOfLanguages