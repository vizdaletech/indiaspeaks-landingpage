"use client"

import { nunito_sans } from "@/typography/font";
import { PencilLine } from "@phosphor-icons/react";
import Image from "next/image";
import * as React from "react";

function ExploreOurTechnology(props) {
  return (
    <section className="center-section hidden md:block">
        <h2 className="text-5xl font-bold text-center">Explore Our Technological Mastery</h2>
    <div className="justify-center px-16 py-10 max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
          <div className="self-stretch flex flex-col my-auto pr-10 items-start max-md:max-w-full max-md:mt-10 max-md:pr-5">
            <div className="justify-center bg-secondary flex gap-2 px-3 py-1.5 rounded-[40px] items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/559cd6685bbe07b07e5f338e95786254e39d478525ed5fd4e04f2a497b72e985?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                aria-label="Logo"
              />
              <div className="text-black text-base leading-6 self-stretch grow whitespace-nowrap">
                Empower
              </div>
            </div>
            <h1 className="text-black text-5xl font-bold leading-[58px] self-stretch mt-4 w-[415px] max-md:text-4xl max-md:leading-[54px]">
              Transforming Text Into Symphony
            </h1>
            <p className={`text-black text-lg leading-7 self-stretch mt-6 max-md:max-w-full ${nunito_sans.className}`}>
              Adding a new dimension to text, making it more engaging and inclusive.
              Experience the magic of accurate text to speech, in multiple Indian
              languages, offering numerous applications across various sectors.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
          <div className="justify-center items-stretch flex grow flex-col w-full px-5 py-7 rounded-xl max-md:max-w-full max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bef7566b01d2729e5a72fcdc59a49ce2c2f2524e76f21f09d49bb9e7e78a296b?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="aspect-[1.64] object-contain object-center w-full overflow-hidden max-md:max-w-full"
              aria-label="Image"
            />
          </div>
        </div>
      </div>
    </div>
    
    {/* Second images */}
    <div className="center-section mt-24">
      <div className="header">
        <div className="gap-5 flex">
          <div className="flex flex-col items-start w-[51%]">
            <div
              className="voice-experience bg-secondary flex gap-2 px-3 py-1.5 rounded-[40px] items-start"
              role="link"
              aria-label="Voice Experience"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0111e48d7f0a9a58700cf3dae01fa1bf938c3c16ce2819219c1d7edb3d29d385?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-square object-contain object-center w-[22px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                alt="Voice Experience"
              />
              <div className="text-neutral-900 text-base leading-6 self-stretch grow whitespace-nowrap">
                Tailored
              </div>
            </div>
            <h1 className="title text-black text-5xl font-bold leading-[58px] mt-4">
              Personalized Voice Experiences
            </h1>
            <p className={`description text-black text-lg leading-7 self-stretch mt-6 ${nunito_sans.className}`}>
              Welcome the future with our revolutionary voice cloning technology, where personalization meets innovation.
              Authentic recreation of voices ensures personalization everywhere from digital assistants to customer service.
              <br />
            </p>
          </div>
          <div className="flex flex-col items-stretch">
            <div className="container justify-center flex flex-col w-full pl-16 pr-5 py-12 rounded-xl items-end">
              <div className="box flex flex-col items-stretch mt-6 mb-11 pb-6 rounded">
               <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1704524430/indiaspeaks/peronalised-voice-illustration_thj7ol.svg" width={500} height={500} className="w-full"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Third images */}

    <div className="items-stretch flex flex-col justify-center px-16 py-12 max-md:px-5">
      <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
            <div className="self-stretch flex flex-col my-auto pr-9 items-start max-md:max-w-full max-md:mt-10 max-md:pr-5">
              <div
                className="justify-center bg-secondary flex gap-2 px-3 py-1.5 rounded-[40px] items-start"
                aria-label="Innovative"
                role="button"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7374a6b7e3d38a108bd73dcc0aa92d99375a86b01657f5a7f70c41548ae917fa?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                  alt="logo"
                  className="aspect-square object-contain object-center w-[22px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                />
                <a
                  href="#"
                  className="text-neutral-900 text-base leading-6 self-stretch grow whitespace-nowrap"
                  role="button"
                >
                  Innovative
                </a>
              </div>
              <h1 className="text-black text-5xl font-bold leading-[58px] self-stretch mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Transcribing Speech <br /> Into Narration{" "}
              </h1>
              <p className={`text-black text-lg leading-7 self-stretch mt-6 max-md:max-w-full ${nunito_sans.className}`}>
                Tap into the complete potential of your words to improve accessibility and documentation with our
                precise speech to text technology. Reflecting the true essence of human speech, this is beyond mere
                transcription.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
          <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1704524922/indiaspeaks/transcribing-speech_vlhh1e.svg" width={500} height={500} className="w-full"/>
          </div>
        </div>
      </div>
    </div>

    </section>
  );
}

export default ExploreOurTechnology