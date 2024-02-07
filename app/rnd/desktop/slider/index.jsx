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
            start: "100px 150px",
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
    <section className="hidden md:block overflow-x-hidden  overflow-hidden " ref = {section}>
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
              <div className="flex flex-col items-stretch w-4/12 ml-5 max-md:w-full max-md:ml-0">
                <video autoPlay = {true} loop = {true} >
                  <source src = "https://res.cloudinary.com/dosjh2min/video/upload/v1706250375/indiaspeaks/Call_Centre_qnjh06.mp4"
                  type="video/mp4"
                  />
                </video>
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
              <div className="flex flex-col items-stretch w-4/12 ml-5 max-md:w-full max-md:ml-0">
              <video autoPlay = {true} loop = {true} >
                  <source src = "https://res.cloudinary.com/dosjh2min/video/upload/v1706250599/indiaspeaks/Audio_Book_hh7gyp.mp4"
                  type="video/mp4"
                  />
                </video>
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
                    Breaking Language Barriers <br/> AI Dubbing
                  </div>
                  <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                    Disrupting entertainment with AI dubbing, seamlessly
                    adapting content across languages while preserving the
                    original's emotional depth and nuance. Bridge cultural gaps
                    and bring global audiences closer to authentic storytelling.
                  </div>
                </span>
              </div>{" "}
              <div className="flex flex-col items-stretch w-4/12 ml-5 max-md:w-full max-md:ml-0">
              <video autoPlay = {true} loop = {true} >
                  <source src = "https://res.cloudinary.com/dosjh2min/video/upload/v1706250690/indiaspeaks/Dubbing_p6ulw3.mp4"
                  type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center center-section w-[100vw] bg-white flex flex-col justify-centerpx-16 py-12 max-md:px-5">
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
              <div className="flex flex-col items-stretch w-7/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="flex-col overflow-hidden relative flex grow justify-center px-16 py-12 items-start max-md:max-w-full max-md:mt-9 max-md:px-5">
                <video autoPlay = {true} loop = {true} >
                  <source src = "https://res.cloudinary.com/dosjh2min/video/upload/v1707205745/indiaspeaks/RandD/Assistive_Tech_rfkhbd.mp4"
                  type="video/mp4"
                  />
                </video>
                  
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
