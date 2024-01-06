import { nunito_sans } from "@/typography/font";
import React from "react";

function HeroSectionMobile(props) {
  return (
    <div className="py-24 bg-primary md:hidden">
     <div className="items-stretch flex center-section w-full flex-col mx-auto pl-2">
      <h1 className="text-white text-3xl font-bold tracking-tight">
        Redefining communication Using Artificial Intelligence
      </h1>
      <p className={`${nunito_sans.className} text-white text-base leading-6 tracking-normal mt-5`}>
        Empowering individuals and businesses across India with our suite of
        advanced AI solutions in speech and language technology. Schedule a
        meeting to know more :)
      </p>
      <a
        href="#schedule"
        className="text-black bg-secondary rounded-sm text-center text-base font-medium leading-6 tracking-normal whitespace-nowrap items-center bg-amber-300 justify-center mt-8 px-16 py-3"
      >
        Schedule an impact
      </a>
      <div
        className="items-stretch bg-white z-[1] mt-5 flex mt-0 flex-col px-8 py-7 rounded-2xl self-start"
        action=""
        method="post"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/970c1c738bb44c51bc926cdc4eb2e5392cb790ecacce7a5c20f137831e03f5e0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-[1.14] object-contain object-center w-[174px] overflow-hidden self-center max-w-full"
          alt="Cultural Connection"
        />
        <label className="text-black text-lg font-bold leading-5 self-center whitespace-nowrap mt-6">
          Cultural Connection
        </label>
        <div className="text-black text-center text-sm leading-4 mt-2">
          Connect with the culture of your audience. Shape genuine relationships
          that transcend linguistic boundaries.
        </div>
      </div>
      <div
        className="items-stretch bg-white flex flex-col mt-8 p-8 rounded-2xl self-start"
        action=""
        method="post"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b5bfff15c17f2fa5ecb773f4275a153dc48ac649a9481d749582e9e1bd8346a?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-[2.8] object-contain object-center w-[165px] items-center overflow-hidden self-center max-w-full"
          alt="Multilingual Support"
        />
        <label className="text-black text-lg font-bold leading-5 self-center whitespace-nowrap mt-6">
          Multilingual Support
        </label>
        <div className="text-black text-center text-sm leading-4 mt-2">
          Speak to your audience in the language you want effortlessly, to extend
          your reach.
        </div>
      </div>
      </div>
    </div>
  );
}

export default HeroSectionMobile;