import { nunito_sans } from "@/typography/font";
import * as React from "react";

function ConnectingThroughLanguagesMobile(props) {
  return (
    <section className="md:hidden text-white my-10">
        <div className="items-stretch  flex flex-col px-4 py-6 rounded-lg center-section bg-primary">
      <h1 className=" text-3xl font-bold tracking-normal">Connecting Through Languages</h1>
      <p className={`${nunito_sans.className} text-lg leading-7 mt-4`}>IndiaSpeaks introduces efficient voice technology, helping businesses and political entities forge strong connections nationwide. Specializing in Text to Speech, Speech to Text, and Voice Cloning, our platform is accessible in multiple languages and is impactful for everyone.</p>
      <div className="items-center flex justify-between gap-5 mt-7">
        <div className="items-stretch flex grow basis-[0%] flex-col my-auto">
          <div className=" text-center text-3xl font-bold leading-10 whitespace-nowrap">100+</div>
          <div className=" text-center text-base font-medium leading-6 tracking-normal whitespace-nowrap mt-3">Lives impacted</div>
        </div>
        <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
          <div className=" text-center text-3xl font-bold leading-10 whitespace-nowrap">7+</div>
          <div className=" text-center text-base font-medium leading-6 tracking-normal whitespace-nowrap mt-4">Languages covered</div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default ConnectingThroughLanguagesMobile