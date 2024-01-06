import { nunito_sans } from "@/typography/font";
import * as React from "react";

function ConnectingThroughLanguages(props) {
  return (
    <section className="hidden md:flex items-stretch bg-white  flex-col justify-center px-16 py-12 max-md:px-5">
      <div className="center-section justify-center items-stretch bg-primary flex flex-col my-5 px-16 py-12 rounded-xl">
        <div className=" justify-center mx-5 my-3.5">
          <div className="gap-5 flex">
            <div className="flex flex-col items-stretch w-[84%]">
              <div className="titles items-stretch self-stretch flex flex-col">
                <h1 className="text-white text-5xl font-bold leading-[58px] ">Connecting Through<br />Languages</h1>
                <p className={`text-white text-lg leading-7 mt-3 max-md:max-w-full ${nunito_sans.className}`}> IndiaSpeaks introduces efficient voice technology, helping businesses and political entities forge strong connections nationwide. Specializing in Text to Speech, Speech to Text, and Voice Cloning, our platform is accessible in multiple languages and is impactful for everyone. </p>
              </div>
            </div>
            <div className="stats flex flex-col items-stretch w-[16%] ml-5 max-md:w-full max-md:ml-0">
              <div className="impact-stats justify-center items-center self-stretch flex grow flex-col py-2 max-md:mt-10">
                <div className="text-white text-center text-5xl font-bold leading-[57.6px] whitespace-nowrap max-md:text-4xl">100+</div>
                <p className="text-white text-center text-xl leading-8 whitespace-nowrap mt-2">Lives impacted</p>
                <div className="language-stats self-stretch text-white text-center text-5xl font-bold leading-[57.6px] whitespace-nowrap mt-12 max-md:text-4xl max-md:mt-10">7+</div>
                <p className="self-stretch text-white text-xl leading-8 whitespace-nowrap mt-2">Languages covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default  ConnectingThroughLanguages