import NunitoSans from "@/shared/typography/NunitoSans";
import React from "react";

function HeroSectionMobile(props) {
  return (
    <div className="bg-primary flex flex-col items-center pl-4 pr-6 pt-2.5 pb-12 md:hidden">
      <header className="items-stretch center-section bg-primary self-stretch flex flex-col mt-20 mb-12">
        <h1 className="text-white text-3xl font-bold tracking-tight">
          Forging Bonds, Enriching Conversations
        </h1>
        <div className="text-white text-base leading-6 mt-3">
            <NunitoSans>
          IndiaSpeaks passionately bridges linguistic gaps, ensuring effective communication and nurturing meaningful connections across the diverse landscape of India.
          </NunitoSans>
        </div>
      </header>
    </div>
  );
}

export default HeroSectionMobile;