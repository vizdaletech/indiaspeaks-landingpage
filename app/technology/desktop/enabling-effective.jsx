"use client";
import { nunito_sans } from "@/typography/font";
import React, { useState } from "react";

function EnablingEffective(props) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="items-center bg-violet-100 hidden  center-section bg-opacity-30 md:flex flex-col px-16 py-12 max-md:px-5">
      <h2 className="text-primary text-center text-5xl font-bold leading-[58px] self-center max-w-[730px] mt-16 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
        Enabling Effective Communication across Industries
      </h2>
      <p
        className={`self-center ${nunito_sans.className} text-black text-center text-lg leading-7 max-w-[684px] mt-6 max-md:max-w-full`}
      >
        Dedicated to breaking language barriers, IndiaSpeaks enables seamless
        communication across industries. Our technology ensures clarity and{" "}
        <br /> precision, ensuring every voice is truly understood.
      </p>
      <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div
            className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0 cursor-pointer"
            onClick={() => setActiveTab(1)}
          >
            <div className={`justify-center items-center ${activeTab === 1 && `border-b-primary border-b-[5px]`} bg-white flex grow flex-col w-full px-6 py-4  border-solid max-md:max-w-full max-md:px-5`}>
              <header className="text-primary text-3xl font-bold leading-10 whitespace-nowrap">
                Entertainment
              </header>
              <div
                className={`${nunito_sans.className} self-stretch text-black text-center text-base leading-6 mt-1`}
              >
                Revamping entertainment with voice technology, adding to the
                immersive experiences.
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0 cursor-pointer"
            onClick={() => setActiveTab(2)}
          >
            <div className={`justify-center items-center ${activeTab === 2 && `border-b-[5px] border-b-primary`} bg-white flex grow flex-col w-full px-6 py-4 border-solid max-md:max-w-full max-md:px-5`}>
              <header className="text-primary text-3xl font-bold leading-10 whitespace-nowrap">
                Journalism
              </header>
              <p
                className={`${nunito_sans.className} self-stretch text-black text-center text-base leading-6 mt-1`}
              >
                Reshaping journalism, amplifying storytelling with engaging
                narratives.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0 cursor-pointer"
            onClick={() => setActiveTab(3)}
          >
            <div className={`justify-center items-center ${activeTab === 3 && `border-b-[5px] border-b-primary`} bg-white flex grow flex-col w-full px-6 py-4  border-solid max-md:max-w-full max-md:px-5`}>
              <header className="text-primary text-3xl font-bold leading-10 whitespace-nowrap">
                Marketing
              </header>
              <p
                className={`${nunito_sans.className} self-stretch text-black text-center text-base leading-6 mt-1`}
              >
                Elevating marketing by incorporating persuasive and engaging
                dimensions with voice tech.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[500px] w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/300b5258bb6f7f9f23917eb6fe14fe828effecf89b45f7526cbe3239492ffcc7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/300b5258bb6f7f9f23917eb6fe14fe828effecf89b45f7526cbe3239492ffcc7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/300b5258bb6f7f9f23917eb6fe14fe828effecf89b45f7526cbe3239492ffcc7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/300b5258bb6f7f9f23917eb6fe14fe828effecf89b45f7526cbe3239492ffcc7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/300b5258bb6f7f9f23917eb6fe14fe828effecf89b45f7526cbe3239492ffcc7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/300b5258bb6f7f9f23917eb6fe14fe828effecf89b45f7526cbe3239492ffcc7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/300b5258bb6f7f9f23917eb6fe14fe828effecf89b45f7526cbe3239492ffcc7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/300b5258bb6f7f9f23917eb6fe14fe828effecf89b45f7526cbe3239492ffcc7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className={`aspect-[1.41] object-contain object-center w-5/12 overflow-hidden self-center max-w-full mt-36 mb-28 max-md:my-10 absolute top-[30%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            activeTab === 1 ? `opacity-1` : `opacity-0`
          } transition-all duration-300`}
        />

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f429f19bb5089e18894beb42b1958655b42c53debadae3282608cc69b6a496ad?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className={`aspect-[1.78] object-contain object-center justify-center items-center  self-stretch mt-16 mb-10 w-8/12 mx-auto z-50 absolute top-[30%] left-1/2 transform -translate-x-1/2 transition-all duration-300 -translate-y-1/2 ${
            activeTab === 2 ? `opacity-1` : `opacity-0`
          }`}
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa192067497f5e821913521033ed37e865d01c070a8c0b6859d978f007eab210?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className={`aspect-[1.78] object-contain object-center justify-center items-center  self-stretch mt-16 mb-10 w-8/12 mx-auto z-50 absolute top-[30%] left-1/2 transform -translate-x-1/2 transition-all duration-300 -translate-y-1/2 ${
            activeTab === 3 ? `opacity-1` : `opacity-0`
          }`}
          alt="Communication"
        />
      </div>
    </div>
  );
}

export default EnablingEffective;
