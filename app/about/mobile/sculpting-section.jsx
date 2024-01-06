import NunitoSans from "@/shared/typography/NunitoSans";
import * as React from "react";

function SculptingSectionMobile(props) {
  return (
    <div className="items-stretch bg-white flex md:hidden center-section w-full flex-col mx-auto px-5 py-10">
      <header className="text-primary text-3xl font-bold tracking-normal">
        Sculpting Connectivity: The Heartbeat of IndiaSpeaks
      </header>
      <section className="text-black text-lg leading-7 mt-12">
        <NunitoSans>
        At IndiaSpeaks, we catalyze connections and architect enhanced
        communication experiences, transcending barriers with voice technologies
        to boost connectivity and foster a world where every message resonates
        effortlessly.
        </NunitoSans>
      </section>
      <form className="bg-primary/10 flex flex-col mt-12 px-3 py-4 rounded-lg items-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7ec5002374faa988764bcbb613258cef2fa70f9dad2ede0d82a8d4385e1b12a?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full"
          alt=""
        />
        <header className="self-stretch text-primary text-2xl font-bold leading-8 whitespace-nowrap mt-5">
          Vision
        </header>
        <section className="text-black text-base leading-6 self-stretch mt-3">
            <NunitoSans>
          Our vision aims to redefine global communication using voice
          technologies. As we strive to be the vanguard in this transformative
          journey, our commitment is to elevate human potential across the
          world.
          </NunitoSans>
        </section>
      </form>
      <form className="bg-primary/10 flex flex-col mt-12 px-3 py-4 rounded-lg items-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/604a80275f9c5f79e6b6e1055d7382faa6f9e6b831fe2d878012aabef2364900?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full"
          alt=""
        />
        <header className="self-stretch text-primary text-2xl font-bold leading-8 whitespace-nowrap mt-5">
          Mission
        </header>
        <section className="self-stretch text-black text-base leading-6 mt-3">
            <NunitoSans>
          Our vanguards stand steadfast in our mission to revolutionize
          communication across India's rich linguistic spectrum through the
          deployment of advanced AI technology.
          </NunitoSans>
        </section>
      </form>
    </div>
  );
}

export default SculptingSectionMobile