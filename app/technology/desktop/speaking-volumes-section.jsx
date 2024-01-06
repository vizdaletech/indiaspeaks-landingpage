import { nunito_sans } from "@/typography/font";
import React from "react";

function SpeakingSection(props) {
  return (
    <section className="justify-center center-section hidden items-stretch self-stretch bg-primary md:flex flex-col px-16 py-12 rounded-xl max-md:px-5">
      <div className="mx-5 my-3.5 max-md:max-w-full max-md:mr-2.5 max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[71%] max-md:w-full max-md:ml-0">
            <div className="items-stretch self-stretch flex flex-col max-md:max-w-full max-md:mt-10">
              <h1 className="text-white text-5xl font-medium leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Speaking Volumes of Our Journey
              </h1>
              <p className = {`${nunito_sans.className} text-white text-xl leading-8 mt-3 max-md:max-w-full`}>
                Showcasing our dedication to innovation on display through key metrics: our tech reaching far and wide, and happy users reflecting the real impact and success of what we bring to the table.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[29%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col py-2 max-md:mt-10">
              <h2 className="text-white text-5xl font-bold leading-[57.6px] whitespace-nowrap max-md:text-4xl">
                13+
              </h2>
              <div className="text-white text-base leading-6 whitespace-nowrap mt-2">
                Solutions Deployed
              </div>
              <h2 className="text-white text-5xl font-bold leading-[57.6px] whitespace-nowrap mt-7 max-md:text-4xl">
                100+
              </h2>
              <div className="text-white text-base leading-6 whitespace-nowrap mt-2">
                Research Breakthroughs
              </div>
              <h2 className="text-white text-5xl font-bold leading-[57.6px] whitespace-nowrap mt-7 max-md:text-4xl">
                80%
              </h2>
              <div className="text-white text-base leading-6 whitespace-nowrap mt-2">
                User Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpeakingSection;