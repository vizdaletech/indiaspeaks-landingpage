import React from "react";

const EngagingPresentationMobile = () => {
  return (
    <section className="md:hidden">
      <div className="items-center bg-primary center-section flex max-w-xs flex-col px-4 py-7 rounded-lg">
        <div className="text-white text-3xl font-bold tracking-normal self-stretch">
          Engaging Presentation of News
        </div>
        <div className="text-white text-lg leading-6 tracking-normal self-stretch mt-4">
          Immerse yourself in news with natural modulation, which breathes life
          into articles. We focus on precision which plays a key role in
          ensuring listeners understand and resonate with the news being
          broadcast.
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/32f5b41ebfb08f813e2b5e219830fff7caeaa94f18acd2538dc9445d6f6db6ef?"
          className="aspect-square object-contain object-center w-10 overflow-hidden max-w-full mt-8 self-start"
        />
        <div className="self-stretch text-white text-2xl font-bold leading-8 whitespace-nowrap mt-3">
          Immersive
        </div>
        <div className="text-white text-base leading-6 self-stretch mt-2.5">
          Lose yourself and find the true meaning in each piece of news.
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb1030885d5ba4ec8467ef7384775c91d3652b003c761f62f6ad2ac9052556a5?"
          className="aspect-square object-contain object-center w-10 overflow-hidden max-w-full mt-7 self-start"
        />
        <div className="self-stretch text-white text-2xl font-bold leading-8 whitespace-nowrap mt-3">
          Precision{" "}
        </div>
        <div className="text-white text-base leading-6 self-stretch mt-2.5">
          Listen clearly to the accurate articulation of each word, thanks to
          our precise technology.
        </div>
      </div>
    </section>
  );
};

export default EngagingPresentationMobile;
