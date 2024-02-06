import { nunito_sans } from "@/typography/font";
import Image from "next/image";
import * as React from "react";

function HeroSection
(props) {
  return (
    <section className="bg-primary py-24 hidden md:block">
    <div className="center-section flex flex-col justify-center items-stretch">
      <div className="overflow-hidden w-full px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <h1 className="text-white text-6xl font-bold leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Innovating Electoral Campaigns{" "}
              </h1>
              <p className={`text-white text-lg leading-7 mt-6 max-md:max-w-full ${nunito_sans.className}`}>
              Harness the power of Voice Cloning and Connect deeply with every voter through personalized, multilingual communication.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1706420772/indiaspeaks/Frame_547_tfqo3z.png"
              className="aspect-[1.12] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default HeroSection