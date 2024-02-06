"use client";
import { nunito_sans } from "@/typography/font";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { DATA } from "@/shared/contents";
import MobileAudioGallary from "@/home/mobile/mobile-audio-gallary";
function EchoedAuthorityMobile(props) {
  const [playerName, setPlayerName] = React.useState("")
  const swiperRef = React.useRef();
  return (
    <article className="justify-center center-section items-center bg-white flex md:hidden flex-col">
    
            {DATA.map(data => (
              <MobileAudioGallary data = {data} setPlayerName={setPlayerName} playerName={playerName}/>

            ))}
      <div className="items-stretch self-center flex w-[65px] max-w-full gap-2 mt-6 px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/173ecbaac39631cc1ba1dc71df91ed29eb7dfc5191ac3343abd1da0e98c43146?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-square object-contain object-center w-full fill-blue-700 overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/88162f9ea12f4fdc21af1413f16ba549dfc90715a2075f322fe1a6021e52898f?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-square object-contain object-center w-full fill-blue-700 overflow-hidden shrink-0-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5f7d602951cd81ed6a1c6ffdf693ba223d6d89b41a58b7f56a0320ee6f97f2f?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-[1.17] object-contain object-center w-full fill-blue-700 overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e821d8569dd82f329cd2ab7cdb3fcefc9279bcb52ec8cb5dfb39c0a7a97d19b5?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-square object-contain object-center w-full fill-blue-700 overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f761b5ee58a6788e63796a3ba6816ef18323a195055b7b5713fee5e21844be2a?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-square object-contain object-center w-full fill-blue-700 overflow-hidden shrink-0 flex-1"
        />
      </div>
      <h2 className="self-stretch text-primary text-2xl font-bold leading-8 tracking-normal w-full mt-7">
        Echoed Authority: Our reproduction of leaders’ voices
      </h2>
      <p
        className={`self-stretch text-neutral-900 text-base leading-6 tracking-normal w-full mt-5 ${nunito_sans.className}`}
      >
        In the realm of political campaigns receiving a better attention form
        the voters can be game changing.
      </p>
    </article>
  );
}

export default EchoedAuthorityMobile;
