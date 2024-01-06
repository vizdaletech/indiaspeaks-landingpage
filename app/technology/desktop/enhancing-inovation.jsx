import { nunito_sans } from "@/typography/font";
import * as React from "react";

function EnhancingInovation(props) {
  return (
    <div className="items-stretch hidden bg-white md:flex flex-col center-section justify-center px-16 py-12 max-md:px-5">
      <header className="justify-center items-stretch bg-primary flex flex-col mt-16 mb-10 px-16 py-12 rounded-xl max-md:max-w-full max-md:mr-1 max-md:mt-10 max-md:px-5">
        <div className="mx-5 my-3.5 max-md:max-w-full max-md:mr-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[63%] max-md:w-full max-md:ml-0">
              <div className="items-stretch self-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                <h1 className="text-white text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Enhancing innovation with our Ethical Technology
                </h1>
                <p className={`text-white ${nunito_sans.className} text-base leading-6 mt-6 max-md:max-w-full`}>
                  At IndiaSpeaks technology isn't just a tool, but a force for positive change – handled responsibly and ethically to elevate experiences and uplift communities.
                </p>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center flex grow flex-col py-2 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/df46785cb37368c4e66b96868a42b48f0cd6bd1862949035837f9f9525631bd2?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                  className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full self-start"
                  alt="Responsible Image"
                />
                <p className="self-stretch text-white text-xl font-bold leading-7 whitespace-nowrap mt-2">
                  Responsible
                </p>
                <p className={`self-stretch text-white text-base leading-6 mt-2 ${nunito_sans.className}`}>
                  Responsible use of technology guides our commitment to sustainable and mindful practices.
                </p>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f1b52a33da623b6fa177050fe74fafd09019ef6b01cd8e3513054baf9204cbc?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full mt-12 self-start max-md:mt-10"
                alt="Ethical Image"
              />
              <p className="self-stretch text-white text-xl font-bold leading-7 whitespace-nowrap mt-2">
                Ethical
              </p>
              <p className={`self-stretch text-white text-base leading-6 mt-2 ${nunito_sans.className}`}>
                We prioritize ethical tech use, ensuring inclusivity and effectiveness in communication.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default EnhancingInovation