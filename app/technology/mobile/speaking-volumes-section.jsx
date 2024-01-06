import { nunito_sans } from "@/typography/font";
import * as React from "react";

function SpeakingVolumeSectionMobile(props) {
  return (
    <div className="items-stretch bg-primary mx-auto mt-10 flex max-w-xs flex-col px-4 py-6 rounded-lg md:hidden">
      <header className="text-white text-3xl font-bold tracking-normal">
        Success Unveiled: Speaking Volumes of Our Journey
      </header>

      <p className={`text-white text-lg leading-6 tracking-normal mt-4 ${nunito_sans.className}`}>
        Showcasing our dedication to innovation on display through key metrics: our tech reaching far and wide, and happy users reflecting the real impact and success of what we bring to the table.
      </p>

      <div className="text-white text-3xl font-bold leading-10 whitespace-nowrap mt-8">
        100+
      </div>
      <div className="text-white text-base leading-6 whitespace-nowrap mt-3">
        Solutions Deployed
      </div>

      <div className="text-white text-3xl font-bold leading-10 whitespace-nowrap mt-6">
        7+
      </div>
      <div className="text-white text-base leading-6 whitespace-nowrap mt-4">
        Research Breakthrough
      </div>

      <div className="text-white text-3xl font-bold leading-10 whitespace-nowrap mt-6">
        7+
      </div>
      <div className="text-white text-base leading-6 whitespace-nowrap mt-4">
        Research Breakthrough
      </div>
    </div>
  );
}

export default SpeakingVolumeSectionMobile