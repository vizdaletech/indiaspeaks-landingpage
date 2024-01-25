"use client";

import gsap, {ScrollTrigger} from "gsap/all";
import React, { useEffect, useRef } from "react";

const Slider = () => {
  const section = useRef();
  const box = useRef();
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    let rndctx = gsap.context(() => {
      // mm.add("(min-width : 1000px)", () => {

      //   tl.to(box.current, { ease: "power1.easeIn", xPercent: -79 }, 0.01);
      // });

      mm.add("(min-width : 700px)", () => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: section.current,
            // markers: true,
            pin: true,
            start: "100px 100px",
            end: () => "+=" + box?.current?.offsetWidth + "px",
            scrub: 1,
          },
        });

        tl.to(box.current, { ease: "power1.easeIn", xPercent: -75.5 }, 0.05);
      });

    });

    return () => rndctx?.revert();
  }, []);
  return (
    <section className="hidden md:block overflow-x-hidden" ref = {section}>
      <div className="flex w-[400vw]" ref = {box}>
        <div className="items-stretch center-section w-[100vw] bg-white flex flex-col justify-center px-16 py-12 max-md:px-5">
          <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
                <span className="items-stretch self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="text-black text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    Enhancing Call Centre Excellence
                  </div>
                  <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                    Elevating customer service with AI-driven insights and voice
                    technologies, transforming call centers into hubs of
                    personalized, efficient interaction. Streamlinig operations
                    while significantly improving user engagement and
                    satisfaction.
                  </div>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/aced8a2aac612aced7082bcacdf7498bc3c9fec7e0d19fba4a5add1352e5ae9f?"
                  className="aspect-[0.96] object-contain object-center w-full justify-end items-center overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="items-stretch center-section w-[100vw] bg-white flex flex-col justify-center px-16 py-12 max-md:px-5">
          <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
                <span className="items-stretch self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="text-black text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    Rediscovering the Author's Voice in Audiobooks
                  </div>{" "}
                  <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                    Immerse yourself in literature with our voice technology,
                    turning written words into authentic, engaging audio
                    narratives that capture the author's essence. Experience
                    stories as they were meant to be told, with every emotion
                    and nuance intact.
                  </div>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8a70622d71d66678cc41210eaf9a8d8f39719456955f09f82190f6ee23661aa?"
                  className="aspect-[0.96] object-contain object-center w-full justify-center items-center overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="items-stretch center-section w-[100vw] bg-white flex flex-col justify-center px-16 py-12 max-md:px-5">
          <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
                <span className="items-stretch self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="text-black text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    Breaking Language Barriers AI Dubbing
                  </div>
                  <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                    Disrupting entertainment with AI dubbing, seamlessly
                    adapting content across languages while preserving the
                    original's emotional depth and nuance. Bridge cultural gaps
                    and bring global audiences closer to authentic storytelling.
                  </div>
                </span>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb8105b0b7cccf02a49c2e49ec7e7d0a8ed1e5e928f0727e3c08b79f75b7a49e?"
                  className="aspect-[0.96] object-contain object-center w-full items-center overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="items-center center-section w-[100vw] bg-white flex flex-col justify-center px-16 py-12 max-md:px-5">
          <div className="w-full max-w-[1266px] mt-52 mb-32 max-md:max-w-full max-md:my-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <span className="items-stretch self-stretch flex flex-col mt-11 max-md:max-w-full max-md:mt-10">
                  <div className="text-black text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    Assisting mankind <br />
                    With Tech
                  </div>
                  <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                    Empowering individual through innovative assistive
                    technologies, utilizing AI to enhance communication and
                    accessibility in daily life. Break down barriers and open up
                    a world of possibilities for inclusive interaction.
                  </div>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="flex-col overflow-hidden relative flex min-h-[276px] grow justify-center px-16 py-12 items-start max-md:max-w-full max-md:mt-9 max-md:px-5">
                  <img
                    loading="lazy"
                    src= "https://res.cloudinary.com/dosjh2min/image/upload/v1705986944/indiaspeaks/Frame_631_wa0ycl.png"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/db6fa927bf91188525a67d66cfdaccbcba2366e7b182f66c97418671557bcd36?"
                    className="aspect-[4] object-contain object-center w-2 stroke-[2.44px] stroke-black overflow-hidden max-w-full ml-36 mt-16 mb-20 max-md:ml-2.5 max-md:my-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
