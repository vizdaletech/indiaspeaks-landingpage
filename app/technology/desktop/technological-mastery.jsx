"use client";
import { nunito_sans } from "@/typography/font";
import { useInView } from "framer-motion";
import Image from "next/image";
import * as React from "react";

function TechnologicalMastery(props) {
  const [activeRow, setActiveRow] = React.useState("one");

  const section1 = React.useRef();
  const isSection1InView = useInView(section1);

  const section2 = React.useRef();
  const isSection2InView = useInView(section2);

  const section3 = React.useRef();
  const isSection3InView = useInView(section3);

  React.useEffect(() => {
    if (isSection1InView) {
      setActiveRow("one");
    }

    if (isSection2InView) {
      setActiveRow("two");
    }
    if (isSection3InView) {
      setActiveRow("three");
    }
  }, [isSection1InView, isSection2InView, isSection3InView]);
  return (
    <section className="center-section hidden md:block my-32">
      <h2 className="text-primary text-5xl text-center font-bold leading-[57.6px] self-center max-md:max-w-full max-md:text-4xl">
        Our Technological Mastery
      </h2>
      <div className="flex relative">
        <aside className="w-6/12 flex flex-col gap-[400px] mt-24">
          <div className="items-stretch bg-white self-stretch flex w-full flex-col justify-center mt-4 px-16 py-12 max-md:max-w-full max-md:px-5">
            <div className="my-3.5 max-md:max-w-full max-md:mr-1">
              <div className="gap-16 flex">
                <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                    <h3
                      className="text-primary text-4xl font-bold leading-10 max-md:max-w-full"
                      ref={section1}
                    >
                      Harmonic Text-to-Speech Synthesis
                    </h3>
                    <p
                      className={`${nunito_sans.className} text-black text-lg leading-7 mt-6 w-[500px]`}
                    >
                      With harmonic Text-to-Voice synthesis, we at IndiaSpeaks
                      transcend boundaries, turning text into a symphony of
                      engaging voices. We bring information to life, making it
                      universally accessible and engaging for all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second images */}
          <div className="items-stretch bg-white self-stretch flex w-full flex-col my-10 justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
            <div className="my-3.5 max-md:max-w-full max-md:mr-1">
              <div className="gap-16 flex">
                <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
                  <div className="items-stretch self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                    <h3 className="text-primary text-4xl font-bold leading-10 max-md:max-w-full">
                      Efficiency Refined in <br />
                      Speech-to-Text
                    </h3>
                    <p
                      className={`text-black text-lg leading-7 mt-6 ${nunito_sans.className}`}
                      ref={section2}
                    >
                      Step into the future of efficient communication with our
                      Speech-to-Text tech. Beyond transcription, it{`'`}s a
                      mastery of speed and accuracy, revolutionizing spoken
                      words into written brilliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third images */}
          <div className="items-stretch bg-white self-stretch flex w-full my-10 flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
            <div className="my-3.5 max-md:max-w-full max-md:mr-1">
              <div className="gap-16 flex">
                <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                    <h3 className="text-primary text-4xl font-bold w-[400px] leading-10 max-md:max-w-full">
                      Mastering the Art of Voice Cloning
                    </h3>

                    <p
                      className={`${nunito_sans.className} text-black text-lg leading-7 mt-6 w-[500px]`}
                      ref={section3}
                    >
                      In voice cloning, our tech sets a new standard,
                      authentically replicating a target individual{`'`}s voice
                      with efficiency. Our innovation preserves uniqueness,
                      ushering in the future of ethical voice cloning with
                      precision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <figure className="sticky top-[30%] left-1/2 w-6/12 h-[300px] mt-20">
          <div className="relative">
            <div
              className={`flex flex-col items-stretch mx-auto w-10/12 ml-5 max-md:w-full max-md:ml-0 ${
                activeRow === "one" ? "opacity-1 z-20" : "opacity-0 -z-20"
              } transition-all duration-300 absolute top-0 left-0`}
            >
              <video
                autoPlay={true}
                loop={true}
                muted={true}
                // controls
              >
                <source
                  src="https://res.cloudinary.com/dgld9tarv/video/upload/v1730870375/India%20Speaks/TTS-2_chpwjl.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div
              className={`flex flex-col items-stretch mx-auto w-8/12  max-md:w-full max-md:ml-0 ${
                activeRow === "two" ? "opacity-1 z-20" : "opacity-0 -z-20"
              } transition-all duration-300 absolute top-0 left-1/2 transform -translate-x-1/2`}
            >
              <video
                autoPlay={true}
                loop={true}
                muted={true}
                // controls
              >
                <source
                  src="https://res.cloudinary.com/dgld9tarv/video/upload/v1730870374/India%20Speaks/STT-2_dkovif.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div
              className={`flex flex-col items-stretch mx-auto w-10/12 ml-5 max-md:w-full max-md:ml-0 ${
                activeRow === "three" ? "opacity-1 z-20" : "opacity-0 -z-20"
              } transition-all duration-300 absolute top-0 left-0`}
            >
              <video
                autoPlay={true}
                loop={true}
                muted={true}
                // controls
              >
                <source
                  src="https://res.cloudinary.com/dgld9tarv/video/upload/v1730870378/India%20Speaks/VC-2_ikeji7.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default TechnologicalMastery;

export const dummy = () => {
  return (
    <div className="items-center center-section bg-white hidden md:flex flex-col py-24">
      <h2 className="text-primary text-5xl font-bold leading-[57.6px] self-center max-md:max-w-full max-md:text-4xl">
        Our Technological Mastery
      </h2>
    </div>
  );
};
