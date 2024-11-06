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
      <img loading="lazy" src="/assets/ai-news.png" className="borderaspect-[1.65] object-contain object-center w-full justify-center items-center overflow-hidden mt-7" />
      <h4 className="text-primary text-2xl font-bold leading-8 w-full mt-7">
        Election campaign{" "}
      </h4>
      <p className={`text-black text-lg leading-6 w-full mt-3 ${nunito_sans.className}`}>
        Disrupting electoral communication with voice cloning{`'`}s personalized touch. Enhancing political interaction , breaking linguistic barriers effortlessly.
      </p>
      <img loading="lazy" src="/assets/voice-cloning.png" className="aspect-[1.07] object-contain object-center w-full overflow-hidden mt-6" />
      <h4 className="text-primary text-2xl font-bold leading-8 w-full mt-7">
        R&D Project
      </h4>{" "}
      <p className= {`text-black text-lg leading-6 w-full mt-3 ${nunito_sans.className}`}>
        Pioneering breakthroughs through innovative R&D at IndiaSpeaks, shaping the future of voice technology.
      </p>{" "}
      <img loading="lazy" src="/assets/rnd.png" className=" object-contain w-full items-center mt-5" />
    </section>
  );
}

export default ApplicationsInovationsMobile