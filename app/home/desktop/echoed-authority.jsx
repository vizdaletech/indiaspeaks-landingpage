"use client";
import NunitoSans from "@/shared/typography/NunitoSans";
import { nunito_sans } from "@/typography/font";
import Image from "next/image";
import React, { useState } from "react";

function EchoedAuthority(props) {
  const [activeSlide, setActiveSlide] = useState("stalin");

  return (
    <section className="items-stretch hidden bg-white md:flex flex-col justify-center px-11 py-12 max-md:px-5">
      <div className="px-16 py-12 center-section">
        <div className="gap-10 flex">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto pt-8 pb-12 max-md:mt-10">
              <h1 className="text-primary text-4xl font-bold leading-10">
                Echoes of our Leaders{`'`} Voices{" "}
              </h1>
              <p
                className={`text-black text-lg leading-7 mt-3 mb-32 max-md:mb-10 w-[500px] ${nunito_sans.className}`}
              >
                In the realm of electoral campaigns, receiving better attention
                from the voters can be game changing. Check out some samples we
                produced.
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-8/12 ">
            <div
              className={`${
                activeSlide === "stalin" ? `w-6/12` : `w-3/12`
              } h-[400px] rounded-md bg-[url('https://res.cloudinary.com/dosjh2min/image/upload/v1706094880/indiaspeaks/Frame_513_rb6dm2.png')] relative bg-center bg-cover p-3 transition-all duration-300 ease-in-out cursor-pointer`}
              onMouseEnter={() => setActiveSlide("stalin")}
            >
              <div
                className={`${
                  activeSlide === "stalin" ? `opacity-1` : `opacity-0`
                } transition-all duration-300`}
              >
                <p className="text-white font-semibold">M.K. Stalin</p>
                <p className="text-secondary font-medium">CM</p>
              </div>
              <div
                className={`font-semibold absolute bottom-5 text-white text-center w-full left-0 transition-all duration-300 ${
                  activeSlide === "stalin" ? `opacity-0` : `opacity-1`
                }`}
              >
                M.K. Stalin
              </div>
            </div>
            <div
              className={`${
                activeSlide === "jaya" ? `w-6/12` : `w-3/12`
              } h-[400px] rounded-md relative bg-[url('https://res.cloudinary.com/dosjh2min/image/upload/v1706094880/indiaspeaks/Frame_711_zo9m5k.png')] bg-center bg-cover p-3 transition-all duration-300 ease-in-out cursor-pointer`}
              onMouseEnter={() => setActiveSlide("jaya")}
            >
              <div
                className={`${
                  activeSlide === "jaya" ? `opacity-1` : `opacity-0`
                } transition-all duration-300`}
              >
                <p className="text-white font-semibold">J.Jayalalitha</p>
                <p className="text-secondary font-medium">Former CM</p>
              </div>
              <div
                className={`font-semibold absolute bottom-5 text-white text-center w-full left-0 transition-all duration-300 ${
                  activeSlide === "jaya" ? `opacity-0` : `opacity-1`
                }`}
              >
                J.Jayalalitha
              </div>
            </div>
            <div
              className={`${
                activeSlide === "modi" ? `w-6/12` : `w-3/12`
              } h-[400px] rounded-md relative bg-[url('https://res.cloudinary.com/dosjh2min/image/upload/v1706094881/indiaspeaks/Mask_group_iuyhwl.png')] bg-center bg-cover p-3 transition-all duration-300 ease-in-out cursor-pointer`}
              onMouseEnter={() => setActiveSlide("modi")}
            >
              <div
                className={`${
                  activeSlide === "modi" ? `opacity-1` : `opacity-0`
                } transition-all duration-300`}
              >
                <p className="text-white font-semibold">Narendra Modi</p>
                <p className="text-secondary font-medium">PM</p>
              </div>
              <div
                className={`font-semibold absolute bottom-5 text-white text-center w-full left-0 transition-all duration-300 ${
                  activeSlide === "modi" ? `opacity-0` : `opacity-1`
                }`}
              >
                Narendra Modi
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EchoedAuthority;
