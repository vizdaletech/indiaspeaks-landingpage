import { nunito_sans } from "@/typography/font";
import Image from "next/image";
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
          Harness the power of Voice Cloning and Connect deeply with every voter through personalized, multilingual communication.
          </p>{" "}
          <Image width={500} height={500} src="https://res.cloudinary.com/dosjh2min/image/upload/v1706420772/indiaspeaks/Frame_547_tfqo3z.png" className="aspect-[1.08] object-contain object-center w-full overflow-hidden mt-4" />
        </header>
      </header>
    </form>
    </section>
  );
}

export default  HeroSectionMobile