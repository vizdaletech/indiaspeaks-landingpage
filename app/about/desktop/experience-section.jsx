import NunitoSans from "@/shared/typography/NunitoSans";
import React from "react";

const ExperienceSection = () => {
  return (
    <section className="bg-primary  py-24 ">
      <div className="center-section flex flex-col gap-5 justify-center items-center">
        <h3 className="text-2xl text-white md:text-center  md:text-5xl font-bold md:w-[600px] md:leading-tight">
          Experience Our Innovative Voice Technology
        </h3>
        <div className="text-white md:w-[550px] text-base md:text-lg">
          <NunitoSans>
            Connect deeply with audiences across India through our powerful.
          </NunitoSans>
        </div>
        <NunitoSans>
          <a
            href="https://calendly.com/gomanirajan/30min"
            target="_blank"
            rel="noreferrer"
            className="text-black text-base font-semibold whitespace-nowrap flex justify-center items-center  bg-secondary px-5 py-3 md:w-fit rounded-sm "
          >
            Schedule an impact
          </a>
        </NunitoSans>
      </div>
    </section>
  );
};

export default ExperienceSection;
