"use client"
import { nunito_sans } from "@/typography/font";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

function ApplicationsInovations(props) {

    const [activeTab, setActiveTab] = React.useState(1)

  return (
    <section className="bg-primary/10 hidden md:block">
    <div className="center-section items-stretch flex flex-col px-20 py-12 max-md:px-5">
      <h4 className="self-center text-primary text-center text-5xl font-bold leading-[57.6px] mt-4 max-md:max-w-full max-md:text-4xl">
        Applications and Innovations
      </h4>
      <p className="self-center text-neutral-700 text-center text-lg leading-7 mt-2 max-md:max-w-full">
        Fast and efficient AI-powered voice technology solutions
      </p>
      <div className="justify-end mt-20 mb-14 max-md:max-w-full max-md:my-10">
        <form className="gap-5 flex  max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col gap-8 py-6 max-md:max-w-full max-md:mt-10">
              <div className={`border-l-4 ${activeTab === 1 ?  ` border-primary` : `border-transparent`} justify-center items-stretch flex flex-col pl-8  cursor-pointer`} onClick={() => setActiveTab(1)}>
                <p className="text-primary text-2xl font-bold leading-8 max-md:max-w-full">
                  AI News Reading
                </p>
                <div className={`${activeTab === 1 ? `h-32 opacity-1` : `h-0 overflow-hidden opacity-0`} transition-all duration-300`}>
                <p className={`text-neutral-700 text-lg leading-7 mt-3 max-md:max-w-full  ${nunito_sans.className}`}>
                  Transforming news delivery through AI voices for a dynamic, accessible experience. Your news, spoken naturally, keeping you informed effortlessly.
                </p>
                <Link href="/news-reading" className="text-primary text-base font-semibold leading-6 underline mt-3 max-md:max-w-full">
                  Learn more
                </Link>
                </div>
              </div>
              <div className={`border-l-4 ${activeTab === 2 ?  ` border-primary` : `border-transparent`} justify-center items-stretch flex flex-col pl-8  cursor-pointer`} onClick={() => setActiveTab(2)}>
                <p className="text-primary text-2xl font-bold leading-8 max-md:max-w-full">
                Voice Cloning - Election campaign 
                </p>
                <div className={`${activeTab === 2 ? `h-32 opacity-1` : `h-0 overflow-hidden opacity-0`} transition-all duration-300`}>
                <p className={`text-neutral-700 text-lg leading-7 mt-3 max-md:max-w-full ${nunito_sans.className}`}>
                Disrupting electoral communication with voice cloning{`'`}s personalized touch. Enhancing political interaction , breaking linguistic barriers effortlessly.
                </p>
                <Link href="/political" className="text-primary text-base font-semibold leading-6 underline mt-3 max-md:max-w-full">
                  Learn more
                </Link>
                </div>
              </div>
              <div className={`border-l-4 ${activeTab === 3 ?  ` border-primary` : `border-transparent`} justify-center items-stretch flex flex-col pl-8  cursor-pointer`} onClick={() => setActiveTab(3)}>
                <p className="text-primary text-2xl font-bold leading-8 max-md:max-w-full">
                R&D Project
                </p>
                <div className={`${activeTab === 3 ? `h-32 opacity-1` : `h-0 overflow-hidden opacity-0`} transition-all duration-300`}>
                <p className={`text-neutral-700 text-lg leading-7 mt-3 max-md:max-w-full ${nunito_sans.className}`}>
                Pioneering breakthroughs through innovative R&D at IndiaSpeaks, shaping the future of voice technology.
                </p>
                <Link href="/rnd" className="text-primary text-base font-semibold leading-6 underline mt-3 max-md:max-w-full">
                  Learn more
                </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center items-stretch flex grow flex-col w-full px-5 py-7 rounded-xl max-md:max-w-full max-md:mt-10 relative">
            <Image src= "https://res.cloudinary.com/dosjh2min/image/upload/v1706420773/indiaspeaks/Frame_590_quckqz.png" width = {400} height = {500} className = {`w-11/12 absolute top-0 left-0 right-0 bottom-0 ${activeTab === 1 ? `opacity-1 z-20` : `opacity-0 -z-10`} transition-all duration-300`} />
            <Image src= "https://res.cloudinary.com/dosjh2min/image/upload/v1706420772/indiaspeaks/Frame_547_tfqo3z.png" width = {400} height = {500} className = {`w-11/12 absolute top-0 left-0 right-0 bottom-0 ${activeTab === 2 ? `opacity-1 z-20` : `opacity-0 -z-10`} transition-all duration-300`} />
            <Image src= "https://res.cloudinary.com/dosjh2min/image/upload/v1706420773/indiaspeaks/Frame_590-1_vpxbws.png" width = {400} height = {500} className = {`w-11/12 absolute top-0 left-0 right-0 bottom-0 ${activeTab === 3 ? `opacity-1 z-20` : `opacity-0 -z-10`} transition-all duration-300`} />
            </div>
          </div>
        </form>
      </div>
    </div>
    </section>
  );
}

export default  ApplicationsInovations