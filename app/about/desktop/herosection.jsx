import NunitoSans from "@/shared/typography/NunitoSans";
import * as React from "react";

function HeroSection(props) {
  return (
    <header className="bg-primary py-24 hidden md:block">
      <div className="center-section flex flex-col pl-16 pr-20 items-start max-md:px-5">
        <h1
          className="text-white text-6xl font-bold leading-[67px] w-[730px] max-w-full mt-16 max-md:text-4xl max-md:leading-[54px] max-md:mt-10"
          aria-label="Heading"
        >
          Forging Bonds, Enriching Conversations
        </h1>
        <div
          className="text-white text-lg leading-7 w-[730px] max-w-full mt-6 mb-20 max-md:mb-10"
          aria-label="Description"
        >
          <NunitoSans>
            IndiaSpeaks passionately bridges linguistic gaps, ensuring effective
            communication and nurturing meaningful connections across the
            diverse landscape of India.
          </NunitoSans>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
