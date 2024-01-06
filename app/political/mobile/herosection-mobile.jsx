import { nunito_sans } from "@/typography/font";
import * as React from "react";

function HeroSectionMobile(props) {
  return (
    <section className=" bg-primary pt-20 md:hidden">
    <form className="flex center-section flex-col items-stretch ">
      <header className="items-stretch flex flex-col mt-4 pr-2 pb-3">
        <header className="items-stretch bg-blue-700 z-[1] flex mt-0 flex-col pb-2.5">
          <h1 className="text-white text-3xl font-bold tracking-tight">
            Innovating Electoral Campaigns{" "}
          </h1>
          <p className={`text-white text-base leading-6 mt-3 ${nunito_sans.className}`}>
            Harnessing the power of Voice Cloning to bring our leaders election campaign&apos;s message to life. Connect deeply with every voter through personalized, multilingual communication, ensuring your vision resonates across the entire electorate.
          </p>{" "}
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a25734904036777f6af07c2cc334827e9864f2c1756f10b68083b3faf7382d13?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&" className="aspect-[1.08] object-contain object-center w-full overflow-hidden mt-4" />
        </header>
      </header>
    </form>
    </section>
  );
}

export default  HeroSectionMobile