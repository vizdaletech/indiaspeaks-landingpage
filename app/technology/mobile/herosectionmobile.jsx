import { nunito_sans } from "@/typography/font";
import * as React from "react";

function HeroSectionMobile(props) {
  return (
    <div className="bg-blue-50 h-screen md:hidden flex max-w-[360px] flex-col justify-center items-stretch relative">
     <div className="absolute top-1/2 left-1/2 transform z-20 -translate-x-1/2 -translate-y-1/2 text-center center-section">
        <h1 className="text-3xl font-bold leading-[120%]"> 
        Guiding Progress with Technology
        </h1>
        <p className={`text-base font-normal mt-5 leading-[150%] ${nunito_sans}`}>
        Our approach is centered on user-driven innovation, ensuring that each technological advancement contributes to societal improvement and the continuous progress of humanity
        </p>
        </div>
      <header className="flex-col overflow-hidden relative flex aspect-[0.5217391304347826] w-full items-stretch py-0.5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/206c18f37fbfd5964b031c580c49fa1dd6a587f8708d58dc003f4e2a14bde742?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/206c18f37fbfd5964b031c580c49fa1dd6a587f8708d58dc003f4e2a14bde742?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/206c18f37fbfd5964b031c580c49fa1dd6a587f8708d58dc003f4e2a14bde742?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/206c18f37fbfd5964b031c580c49fa1dd6a587f8708d58dc003f4e2a14bde742?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/206c18f37fbfd5964b031c580c49fa1dd6a587f8708d58dc003f4e2a14bde742?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/206c18f37fbfd5964b031c580c49fa1dd6a587f8708d58dc003f4e2a14bde742?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/206c18f37fbfd5964b031c580c49fa1dd6a587f8708d58dc003f4e2a14bde742?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/206c18f37fbfd5964b031c580c49fa1dd6a587f8708d58dc003f4e2a14bde742?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative flex w-full items-stretch justify-between gap-0 px-5">
          <div className="flex basis-[0%] flex-col self-start items-start">
            <div className="flex w-[9px] shrink-0 h-2 flex-col ml-4 rounded-[50%]" />
            <div className="self-stretch flex shrink-0 h-2 flex-col mt-60 rounded-[50%]" />
          </div>
          <div className="flex grow basis-[0%] flex-col mt-20 self-start items-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6abf9da7e0775efc3221afe989b731e95f42cbbea761676c47bd2e3c014b33ae?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="aspect-square object-contain object-center w-[47px] overflow-hidden max-w-full"
            />
            <div className="flex w-3.5 shrink-0 h-2 flex-col rounded-[50%] self-end" />
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-5 pr-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebe0c319d842236a6b023e9aa8efec94f399d4e5e51fa985ebef29f8c22d01cc?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="aspect-square object-contain object-center w-[47px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="flex w-2 shrink-0 h-2 flex-col mt-8 rounded-[50%] self-end" />
          </div>
          <div className="flex w-[35px] max-w-full flex-col items-center mt-32 self-end">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/435807b7ccf33f79964ed0cba9a79c070bfa9fd3a9872ebfe43271f4e9443b1b?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="aspect-[0.74] object-contain object-center w-full overflow-hidden"
            />
            <div className="self-stretch flex shrink-0 h-2 flex-col mt-32 rounded-[50%]" />
          </div>
        </div>
      </header>
      
      <div className="relative flex justify-between gap-5 mt-32 items-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-stretch justify-between gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd46908f6d91b92acfb521acdd5d4d0d0e660fcfef840f6e0b7944e70608032a?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="aspect-[0.74] object-contain object-center w-[35px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="flex w-2 shrink-0 h-2 flex-col mt-2 rounded-[50%] self-start" />
          </div>
          <div className="self-center flex w-2 shrink-0 h-2 flex-col mt-20 rounded-[50%]" />
        </div>
        <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
          <div className="flex flex-col pl-20 items-end">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/614d7bd1131d3ebfa69acd7407f5073d638ba7b67f571b15fda49dca5a59ffb4?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="aspect-square object-contain object-center w-[47px] overflow-hidden max-w-full"
            />
            <div className="self-stretch flex w-full shrink-0 h-2 flex-col mt-5 rounded-[50%]" />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/55551e4089be3521f5f1dbffcc7d9b0fcb078857e4f79bd99a73aff52d7bb9cd?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
            className="aspect-square object-contain object-center w-[47px] overflow-hidden max-w-full mt-11 self-start"
          />
          <div className="flex w-2 shrink-0 h-2 flex-col mr-2.5 mt-4 rounded-[50%] self-end" />
        </div>
      </div>
      <div className="bg-[#FFF456] w-4 h-4 rounded-full absolute left-1/4 bottom-[30%]" />
      <div className="bg-[#FFF456] w-4 h-4 rounded-full absolute right-[30%] top-[20%]" />
      <div className="bg-[#FFF456] w-4 h-4 rounded-full absolute right-[5%] top-[10%]" />
      <div className="bg-[#FFF456] w-4 h-4 rounded-full absolute right-[5%] bottom-[10%]" />
      <div className="bg-[#55C28D] w-4 h-4 rounded-full absolute left-[5%] top-[20%]" />

      <div className="bg-[#55C28D] w-4 h-4 rounded-full absolute left-[10%] bottom-[10%]" />

      <div className="bg-[#55C28D] w-4 h-4 rounded-full absolute right-1/4 bottom-1/2" />
    </div>
  );
}

export default HeroSectionMobile