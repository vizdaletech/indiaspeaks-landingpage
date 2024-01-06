import { nunito_sans } from "@/typography/font";
import * as React from "react";

function ImpactMobile(props) {
  return (
    <section className="items-stretch flex center-section w-full flex-col mx-auto py-10 md:hidden">
      <h1 className="text-primary text-3xl font-bold leading-10 tracking-tight w-full">
        Impact of using Indiaspeaks Voice cloning
      </h1>
      <div className={`${nunito_sans.className} text-black text-lg leading-7 w-full mt-6`}>
        In the realm of political campaigns receiving a better attention form the voters can be game changing.
      </div>
      <div className="bg-primary/10 flex rounded-md w-full flex-col mt-9 pl-3 pr-5 py-4 items-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab3473a2570458ce69bb769f25f0db2d41d816a5dd0cf765bd66ba34729076ae?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full"
          aria-label="Targeted Communication"
          aria-role="img"
        />
        <div className="text-primary text-2xl font-bold leading-8 tracking-normal self-stretch whitespace-nowrap mt-3">
          <a href="#" className="link">Targeted Communication</a>
        </div>
        <div className={`${nunito_sans.className} text-black text-lg leading-7 self-stretch mt-3`}>
          Analyzing data, segmenting users, and running campaigns according to their demographics.
        </div>
      </div>
      <div className="bg-primary/10 flex rounded-md w-full flex-col mt-8 pl-3 pr-5 py-4 items-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8ed2de86c8fb51eda5cdf67f7272e4075f2e297cad1fdf6804b5504de974b0a?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full"
          aria-label="Enhanced voter understanding"
          aria-role="img"
        />
        <div className="text-primary text-2xl font-bold leading-9 self-stretch mt-3">
          <a href="#" className="link">Enhanced voter understanding</a>
        </div>
        <div className={`${nunito_sans.className} text-black text-lg leading-7 self-stretch mt-3`}>
          Communicating the parties ideology, making people know more about them and increasing awareness.
        </div>
      </div>
      <div className="bg-primary/10 flex rounded-md w-full flex-col mt-8 px-4 py-4 items-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/416c42073aa6682d5eb0b9483504faabc384cc95bce82e2b8e41945ed4c4cf8c?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full"
          aria-label="Time saving"
          aria-role="img"
        />
        <div className="text-primary text-2xl font-bold leading-8 self-stretch whitespace-nowrap mt-3">
          <a href="#" className="link">Time saving</a>
        </div>
        <div className={`${nunito_sans.className} text-black text-lg leading-7 self-stretch mt-3`}>
          Communicating mass amount of audience creates a lot of room for other integral electoral operation.
        </div>
      </div>
    </section>
  );
}

export default ImpactMobile;