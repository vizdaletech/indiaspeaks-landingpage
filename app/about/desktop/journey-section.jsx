import { DATA } from "@/shared/contents";
import ImageSlider from "@/shared/image-slider";
import NunitoSans from "@/shared/typography/NunitoSans";
import Image from "next/image";
import React from "react";

const JourneySection = () => {
  return (
    <section>
      <div className="center-section py-24">
        <h2 className="text-3xl md:text-5xl text-primary font-bold  leading-tight md:leading-snug text-center">
          Journey through Innovation
        </h2>
        <div className="text-base md:text-lg leading-snug text-center md:w-[500px] mx-auto mt-5">
          <NunitoSans>
            Explore the milestones that define IndiaSpeaks{`'`}s remarkable
            journey of innovation and transformation.
          </NunitoSans>
        </div>
        <section className="mt-24 flex flex-col gap-[80px]">
          <article className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 items-start relative">
            <Image
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545702/indiaspeaks/Content_tepuvi.svg"
              width={500}
              height={500}
              className="absolute left-[17%] hidden md:block transform translate-x-full -top-[8%] w-20 h-[650px]"
            />
            <div className="text-lg md:text-3xl mt-5 text-primary font-bold w-full md:w-3/12 leading-snug text-left md:text-center relative">
              Feb 2019
            </div>
            <figure className="md:w-8/12 w-full">
              <figcaption className="text-lg leading-snug mb-5 md:mt-5">
                Commenced our journey in hostel rooms, sparking a visionary
                quest.
              </figcaption>
              <Image
                src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545529/indiaspeaks/image_27_giv4pt.jpg"
                width={500}
                height={500}
                className="w-full md:w-10/12 rounded-lg"
              />
            </figure>
          </article>
          <article className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 items-start relative">
            <Image
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545702/indiaspeaks/Content_tepuvi.svg"
              width={500}
              height={500}
              className="absolute left-[17%] hidden md:block transform translate-x-full -top-[8%] w-20 h-[650px]"
            />
            <div className="text-lg md:text-3xl mt-5 text-primary font-bold w-full md:w-3/12 leading-snug text-left md:text-center relative">
              Jan 2022
            </div>
            <figure className="md:w-8/12 w-full">
              <figcaption className="text-lg leading-snug mb-5 md:mt-5">
                Diligently gathered pivotal voice recognition data, laying the
                groundwork.{" "}
              </figcaption>
              <Image
                src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545962/indiaspeaks/Frame_600_laqhtt.jpg"
                width={500}
                height={500}
                className="w-full md:w-10/12 rounded-lg"
              />
            </figure>
          </article>
          <article className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 items-start relative">
            <Image
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545702/indiaspeaks/Content_tepuvi.svg"
              width={500}
              height={500}
              className="absolute left-[17%] hidden md:block transform translate-x-full -top-[8%] w-20 h-[650px]"
            />
            <div className="text-lg md:text-3xl mt-5 text-primary font-bold w-full md:w-3/12 leading-snug text-left md:text-center relative">
              Feb 2020
            </div>
            <figure className="md:w-8/12 w-full">
              <figcaption className="text-lg leading-snug mb-5 md:mt-5">
                Engineered the voice recognition system, heralding a
                technological breakthrough.{" "}
              </figcaption>
              {/* <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1704545969/indiaspeaks/Frame_603_oamdxj.jpg" width={500} height={500} className="w-full md:w-10/12 rounded-lg"/> */}
              <video controls className="w-full md:w-10/12 rounded-lg">
                <source
                  src="https://res.cloudinary.com/dosjh2min/video/upload/v1704590963/indiaspeaks/PC_-_Voice_reg_uy3nfc.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </figure>
          </article>
          <article className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 items-start relative">
            <Image
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545702/indiaspeaks/Content_tepuvi.svg"
              width={500}
              height={500}
              className="absolute left-[17%] hidden md:block transform translate-x-full -top-[8%] w-20 h-[650px]"
            />
            <div className="text-lg md:text-3xl mt-5 text-primary font-bold w-full md:w-3/12 leading-snug text-left md:text-center relative">
              June 2021{" "}
            </div>
            <figure className="md:w-8/12 w-full">
              <figcaption className="text-lg leading-snug mb-5 md:mt-5">
                Developed our first application in the field of speech
                recognition - The Grocery App{" "}
              </figcaption>
              <video controls className="w-full md:w-10/12 rounded-lg">
                <source
                  src="https://res.cloudinary.com/dosjh2min/video/upload/v1704590971/indiaspeaks/Grocerry_-_IS_go9c7e.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </figure>
          </article>
          <article className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 items-start relative">
            <Image
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545702/indiaspeaks/Content_tepuvi.svg"
              width={500}
              height={500}
              className="absolute left-[17%] hidden md:block transform translate-x-full -top-[8%] w-20 h-[650px]"
            />
            <div className="text-lg md:text-3xl mt-5 text-primary font-bold w-full md:w-3/12 leading-snug text-left md:text-center relative">
              Jan 2022
            </div>
            <figure className="md:w-8/12 w-full">
              <figcaption className="text-lg leading-snug mb-5 md:mt-5">
                Secured incubation at the esteemed SID - IISC, acknowledging our
                potential and excellence.{" "}
              </figcaption>
              <Image
                src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545962/indiaspeaks/Frame_616_ufbbzz.jpg"
                width={500}
                height={500}
                className="w-full md:w-10/12 rounded-lg"
              />
            </figure>
          </article>
          <article className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 items-start relative">
            <Image
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545702/indiaspeaks/Content_tepuvi.svg"
              width={500}
              height={500}
              className="absolute left-[17%] hidden md:block transform translate-x-full -top-[8%] w-20 h-[650px]"
            />
            <div className="text-lg md:text-3xl mt-5 text-primary font-bold w-full md:w-3/12 leading-snug text-left md:text-center relative">
              Jan 2022
            </div>
            <figure className="md:w-8/12 w-full">
              <figcaption className="text-lg leading-snug mb-5 md:mt-5">
                Selected in DPOIC for Distress Call Handling Problem Statement
                and received the runners up award.{" "}
              </figcaption>
              <Image
                src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545961/indiaspeaks/Frame_616-1_mooueg.jpg"
                width={500}
                height={500}
                className="w-full md:w-10/12 rounded-lg"
              />
            </figure>
          </article>
          <article className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 items-start relative">
            <Image
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545702/indiaspeaks/Content_tepuvi.svg"
              width={500}
              height={500}
              className="absolute left-[17%] hidden md:block transform translate-x-full -top-[8%] w-20 h-[650px]"
            />
            <div className="text-lg md:text-3xl mt-5 text-primary font-bold w-full md:w-3/12 leading-snug text-left md:text-center relative">
              March 2022
            </div>
            <figure className="md:w-8/12 w-full">
              <figcaption className="text-lg leading-snug mb-5 md:mt-5">
                Shortlisted among the top start ups from India for Voice-tech
                summit and Dubai-expo.{" "}
              </figcaption>
              <Image
                src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545969/indiaspeaks/Frame_603_oamdxj.jpg"
                width={500}
                height={500}
                className="w-full md:w-10/12 rounded-lg"
              />
            </figure>
          </article>
          <article className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 items-start relative">
            <Image
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545702/indiaspeaks/Content_tepuvi.svg"
              width={500}
              height={500}
              className="absolute left-[17%] hidden md:block transform translate-x-full -top-[8%] w-20 h-[650px]"
            />
            <div className="text-lg md:text-3xl mt-5 text-primary font-bold w-full md:w-3/12 leading-snug text-left md:text-center relative">
              Feb 2023{" "}
            </div>
            <figure className="md:w-8/12 w-full">
              <figcaption className="text-lg leading-snug mb-5 md:mt-5">
                Honoured to engage on a project with DRDO, show{" "}
              </figcaption>
              <Image
                src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545960/indiaspeaks/Frame_620_etkct1.jpg"
                width={500}
                height={500}
                className="w-full md:w-10/12 rounded-lg"
              />
            </figure>
          </article>
          <article className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 items-start relative">
            <Image
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545702/indiaspeaks/Content_tepuvi.svg"
              width={500}
              height={500}
              className="absolute left-[17%] hidden md:block transform translate-x-full -top-[8%] w-20 h-[650px]"
            />
            <div className="text-lg md:text-3xl mt-5 text-primary font-bold w-full md:w-3/12 leading-snug text-left md:text-center relative">
              July 2023{" "}
            </div>
            <figure className="md:w-8/12 w-full">
              <figcaption className="text-lg leading-snug mb-5 md:mt-5">
                Developed the voice model for News reading in the Tamil
                language.{" "}
              </figcaption>
              <Image
                src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545961/indiaspeaks/transcribing-speech_dcmrzf.svg"
                width={500}
                height={500}
                className="w-full md:w-10/12 rounded-lg"
              />
            </figure>
          </article>
          <article className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 items-start relative">
            <Image
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545702/indiaspeaks/Content_tepuvi.svg"
              width={500}
              height={500}
              className="absolute left-[17%] hidden md:block transform translate-x-full -top-[8%] w-20 h-[650px]"
            />
            <div className="text-lg md:text-3xl mt-5 text-primary font-bold w-full md:w-3/12 leading-snug text-left md:text-center relative">
              Oct 2023{" "}
            </div>
            <figure className="md:w-8/12 w-full">
              <figcaption className="text-lg leading-snug mb-5 md:mt-5">
                Developed text to speech recolonization for multiple languages.{" "}
              </figcaption>
              <Image
                src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545958/indiaspeaks/Frame_623_j56boo.jpg"
                width={500}
                height={500}
                className="w-full md:w-10/12 rounded-lg"
              />
            </figure>
          </article>
          <article className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 items-start relative">
            <Image
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704545702/indiaspeaks/Content_tepuvi.svg"
              width={500}
              height={500}
              className="absolute left-[17%] hidden md:block transform translate-x-full -top-[8%] w-20 h-[650px]"
            />
            <div className="text-lg md:text-3xl mt-5 text-primary font-bold w-full md:w-3/12 leading-snug text-left md:text-center relative">
              Dec 2023{" "}
            </div>
            <figure className="ml-48  w-full">
              <figcaption className="text-lg leading-snug mb-5 md:mt-5">
                Deploying the our integral use case, Voice cloning for political
                campaigns.{" "}
              </figcaption>
             <ImageSlider DATA = {DATA}/>
            </figure>
          </article>
        </section>
      </div>
    </section>
  );
};

export default JourneySection;
