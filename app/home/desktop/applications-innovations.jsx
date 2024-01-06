import { nunito_sans } from "@/typography/font";
import Image from "next/image";
import * as React from "react";

function ApplicationsInovations(props) {
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
        <form className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col py-6 max-md:max-w-full max-md:mt-10">
              <div className="border-l-4 border-primary justify-center items-stretch flex flex-col pl-8 max-md:max-w-full max-md:pl-5">
                <p className="text-primary text-2xl font-bold leading-8 max-md:max-w-full">
                  AI News Reading
                </p>
                <div>
                <p className={`text-neutral-700 text-lg leading-7 mt-3 max-md:max-w-full ${nunito_sans.className}`}>
                  Transforming news delivery through AI voices for a dynamic, accessible experience. Your news, spoken naturally, keeping you informed effortlessly.
                </p>
                <a href="#" className="text-primary text-base font-semibold leading-6 underline mt-3 max-md:max-w-full">
                  Learn more
                </a>
                </div>
              </div>
              <header className="text-primary text-2xl font-bold leading-8 justify-center items-stretch mt-10 pl-8 max-md:max-w-full max-md:pl-5">
                Election campaign{" "}
              </header>
              <header className="text-primary text-2xl font-bold leading-8 justify-center items-stretch mt-10 pl-8 max-md:max-w-full max-md:pl-5">
                R&D Project
              </header>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center items-stretch flex grow flex-col w-full px-5 py-7 rounded-xl max-md:max-w-full max-md:mt-10">
            <Image src= "https://res.cloudinary.com/dosjh2min/image/upload/v1704527003/indiaspeaks/Frame_590_bma5tp.svg" width = {400} height = {500} className = "w-full" />
            </div>
          </div>
        </form>
      </div>
    </div>
    </section>
  );
}

export default  ApplicationsInovations