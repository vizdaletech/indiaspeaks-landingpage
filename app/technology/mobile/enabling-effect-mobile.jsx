import React from "react";
import EnablingEffective from "../desktop/enabling-effective";
import { nunito_sans } from "@/typography/font";

function EnablingEffectiveMobile(props) {
  return (
    <form className="items-stretch center-section bg-white md:hidden flex w-full flex-col mx-auto py-10">
      <h4 className="text-primary text-center text-3xl font-bold leading-10">
        Enabling Effective Communication across Industries
      </h4>
      <p
        className={`text-black text-center text-base leading-6  ${nunito_sans.className} mt-5`}
      >
        Dedicated to dismantling language barriers, IndiaSpeaks facilitates
        seamless communication across a spectrum of industries. With our
        technology, we ensure clarity and precision, ensuring every voice is not
        just heard but truly understood.
      </p>
      <div className="justify-center items-center flex flex-col mt-12  py-4">
        <h4 className="text-primary text-2xl font-bold leading-8 whitespace-nowrap">
          Entertainment
        </h4>
        <p
          className={`self-stretch text-black text-center text-base leading-6 ${nunito_sans.className} mt-1`}
        >
          Revolutionizing the Entertainment Industry with Voice Technology
          Solutions
        </p>
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className={`mt-5 w-full mx-auto duration-300 rounded-md`}
        >
          <source src="/assets/entertainment.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="justify-center items-center  flex flex-col py-8">
        <h4 className="text-primary text-2xl font-bold leading-8 whitespace-nowrap">
          Journalism
        </h4>
        <p
          className={`self-stretch text-black text-center text-base leading-6 ${nunito_sans.className} mt-1`}
        >
          Transforming Journalism with Cutting-Edge Voice Technology Solutions
        </p>
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className={`mt-5 w-full mx-auto duration-300 rounded-md`}
        >
          <source src="/assets/journalism.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="justify-center items-center flex flex-col py-9">
        <h4 className="text-primary text-2xl font-bold leading-8 whitespace-nowrap">
          Marketing
        </h4>
        <p
          className={`self-stretch text-black text-center text-base leading-6 ${nunito_sans.className} mt-1`}
        >
          Empowering Marketing Activities with Advanced Voice Technology
          Solutions
        </p>
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className={`mt-5 w-full mx-auto duration-300 rounded-md`}
        >
          <source src="/assets/marketing-video.mp4" type="video/mp4" />
        </video>
      </div>
    </form>
  );
}

export default EnablingEffectiveMobile;
