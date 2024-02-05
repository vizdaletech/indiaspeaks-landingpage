import { nunito_sans } from "@/typography/font";
import * as React from "react";

function ImpactSection(props) {
  return (
    <section className="hidden md:block">
    <div className="items-stretch center-section bg-white flex flex-col px-16 py-12 max-md:px-5">
      <header className="self-center text-primary text-center text-5xl font-bold leading-[58px] max-w-[600px] mt-8 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Impact of using IndiaSpeaks Voice cloning
      </header>
      <div className={`self-center text-black text-center text-xl leading-8 max-w-[600px] mt-6 max-md:max-w-full  ${nunito_sans.className}`}>
        In the realm of political campaigns, receiving better attention form the voters can be game changing.{" "}
      </div>
      <div className="justify-center mt-8 mb-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="bg-primary/10 flex grow flex-col w-full pl-4 pr-20 pt-7 pb-12 rounded-lg items-start max-md:mt-6 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fef599d73a45dc047dda628e3ac36748742ad02f8dff6f925594456edca4942?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full"
              />
              <div className="text-primary text-3xl font-bold leading-9 self-stretch  mt-3.5 max-md:mr-1.5">
                Targeted Communication{" "}
              </div>
              <p className={`text-black text-base leading-6 self-stretch w-full my-3.5 max-md:mr-1.5 ${nunito_sans.className}`}>
                Analyzing data, segmenting users, and running campaigns specific to their demographics.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-primary/10 flex grow flex-col w-full pl-5 pr-20 py-7 rounded-lg items-start max-md:max-w-full max-md:mt-6 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee6a5a1c7c51d233402312685550521047fb64f97b66bddfecb289607cbb3823?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full"
              />
              <div className="text-primary text-3xl font-bold leading-9 max-w-[277px] mt-3.5">
              Understanding our leaders
              </div>
              <p className={` ${nunito_sans.className} text-black text-base leading-6 w-full max-w-full mt-3.5`}>
              Communicating the parties ideology, to ensure the voters clearly understand the schemes and benefits.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-primary/10 flex grow flex-col w-full pl-5 pr-20 pt-7 pb-12 rounded-lg items-start max-md:max-w-full max-md:mt-6 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a7af23ec40d558b688b358bffce95f7ad8980b9edc730ed3ecbbd91166ef7e?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-[1.03] object-contain object-center w-8 justify-center items-center overflow-hidden max-w-full"
              />
              <div className="text-primary text-3xl font-bold leading-9  mt-3.5">
                Time saving{" "}
              </div>
              <p className={`text-black  ${nunito_sans.className} text-base leading-6 w-full max-w-full mt-3.5 mb-4`}>
                Communicating with a mass audience creates a lot of room for other integral electoral operations.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default ImpactSection;