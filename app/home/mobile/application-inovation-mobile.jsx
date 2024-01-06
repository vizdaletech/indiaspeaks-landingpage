import { nunito_sans } from "@/typography/font";
import React from "react";

function ApplicationsInovationsMobile(props) {
  return (
    <section className="items-stretch flex center-section md:hidden flex-col pt-6 pb-3">
      <h4 className="text-primary text-3xl font-bold leading-10 w-full">
        Applications and Innovations
      </h4>
      <h4 className="text-primary text-2xl font-bold leading-8 w-full mt-7">
        AI News Reading
      </h4>
      <p className= {`text-black text-lg leading-6 w-full mt-3 ${nunito_sans.className}`}>
        Transforming news delivery through AI voices for a dynamic, accessible experience. Your news, spoken naturally, keeping you informed effortlessly.
      </p>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/97228be5b8fdc4f18c4b99283bda443b128018ff35110c9e3a323777a8c1a2df?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&" className="aspect-[1.65] object-contain object-center w-full justify-center items-center overflow-hidden mt-7" />
      <h4 className="text-primary text-2xl font-bold leading-8 w-full mt-7">
        Election campaign{" "}
      </h4>
      <p className={`text-black text-lg leading-6 w-full mt-3 ${nunito_sans.className}`}>
        Disrupting electoral communication with voice cloning's personalized touch. Enhancing political interaction , breaking linguistic barriers effortlessly.
      </p>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3aa5d7cabd661b71535f24e48d5f70c69b0d2f76685090af5bca02444028308?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&" className="aspect-[1.07] object-contain object-center w-full overflow-hidden mt-6" />
      <h4 className="text-primary text-2xl font-bold leading-8 w-full mt-7">
        R&D Project
      </h4>{" "}
      <p className= {`text-black text-lg leading-6 w-full mt-3 ${nunito_sans.className}`}>
        Pioneering breakthroughs through innovative R&D at IndiaSpeaks, shaping the future of voice technology.
      </p>{" "}
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd134c0bec9d3488b58d10873f89b988df1678ed7f0cb8dc8cf0a89d1a4fc7c4?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&" className=" object-contain w-full items-center mt-5" />
    </section>
  );
}

export default ApplicationsInovationsMobile