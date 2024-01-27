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
            <div
              className={`justify-center items-center ${
                activeTab === 1 && `border-b-primary border-b-[5px]`
              } bg-white flex grow flex-col w-full px-6 py-4  border-solid max-md:max-w-full max-md:px-5`}
            >
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
            <div
              className={`justify-center items-center ${
                activeTab === 2 && `border-b-[5px] border-b-primary`
              } bg-white flex grow flex-col w-full px-6 py-4 border-solid max-md:max-w-full max-md:px-5`}
            >
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
            <div
              className={`justify-center items-center ${
                activeTab === 3 && `border-b-[5px] border-b-primary`
              } bg-white flex grow flex-col w-full px-6 py-4  border-solid max-md:max-w-full max-md:px-5`}
            >
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
      <div className="h-screen w-full relative">
        <video
          // autoPlay={true}
          // loop={true}
          muted = {true}
          controls
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full mx-auto duration-300 ${
            activeTab === 1 ? `opacity-1 z-20` : `opacity-0 -z-20`
          }`}
        > 
          <source
            src="https://res.cloudinary.com/dosjh2min/video/upload/v1706251574/indiaspeaks/Media_pc2ej0.mp4"
            type="video/mp4"
          />
        </video>

        <video
          // autoPlay={true}
          // loop={true}
          muted = {true}

          controls
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full mx-auto duration-300 ${
            activeTab === 2 ? `opacity-1 z-20` : `opacity-0 -z-20`
          }`}
        > 
          <source
            src="https://res.cloudinary.com/dosjh2min/video/upload/v1706333654/indiaspeaks/Marketing.mp4_swlenk.mp4"
            type="video/mp4"
          />
        </video>
        <video
          // autoPlay={true}
          // loop={true}
          muted = {true}
          controls
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full mx-auto duration-300 ${
            activeTab === 3 ? `opacity-1 z-20` : `opacity-0 -z-20`
          }`}
        > 
          <source
            src="https://res.cloudinary.com/dosjh2min/video/upload/v1706334135/indiaspeaks/Journalism_f6aemh.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      
    </div>
  );
}

export default EnablingEffective;
