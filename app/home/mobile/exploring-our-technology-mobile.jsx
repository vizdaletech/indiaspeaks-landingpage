import { nunito_sans } from "@/typography/font";
import React from "react";

const ExploringOurTechnologyMobile = () => {
  return (
    <section className="center-section block md:hidden py-24">
      <h2 className="text-black text-3xl font-bold leading-10 tracking-tight w-full">
        Explore Our Technological Mastery
      </h2>
      <div>
        <div>
          <figure className=" justify-between bg-secondary w-fit flex gap-2 mt-6 px-5 py-1.5 rounded-[40px] items-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a695078d572fbe6bdaf61e3966bd4109bd55231f1fcd66a0488e328b6c31be90?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
              aria-role="presentation"
              alt=""
            />
            <p className="text-neutral-900 text-base leading-6">Empower</p>
          </figure>
        </div>
        <h3 className="text-neutral-900 text-2xl font-bold leading-8 w-full mt-3">
          Transforming Text Into Symphony
        </h3>
        <p
          className={`text-black text-lg leading-7 w-full mt-4 ${nunito_sans.className}`}
        >
          Adding a new dimension to text, making it more engaging and inclusive.
          Experience the magic of accurate text to speech, in multiple Indian
          languages, offering numerous applications across various sectors.
        </p>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/370fb723118a21a9270d34da10085fe0491c8ee1f193e41c40aac20e690bf010?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-[1.65] object-contain object-center w-full overflow-hidden"
          alt="Image"
        />
      </div>
      <div>
        <div>
          <figure className=" justify-between bg-secondary w-fit flex gap-2 mt-6 px-5 py-1.5 rounded-[40px] items-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0111e48d7f0a9a58700cf3dae01fa1bf938c3c16ce2819219c1d7edb3d29d385?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
              aria-role="presentation"
              alt=""
            />
            <p className="text-neutral-900 text-base leading-6">Tailerd</p>
          </figure>
        </div>
        <h3 className="text-neutral-900 text-2xl font-bold leading-8 w-full mt-3">
          Personalized Voice Experiences{" "}
        </h3>
        <p
          className={`text-black text-lg leading-7 w-full mt-4 ${nunito_sans.className}`}
        >
          Welcome the future with our revolutionary voice cloning technology,
          where personalization meets innovation. Authentic recreation of voices
        </p>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dosjh2min/image/upload/v1704524430/indiaspeaks/peronalised-voice-illustration_thj7ol.svg"
          className="aspect-[1.65] object-contain object-center w-full overflow-hidden"
          alt="Image"
        />
      </div>
      <div>
        <div>
          <figure className=" justify-between bg-secondary w-fit flex gap-2 mt-6 px-5 py-1.5 rounded-[40px] items-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7374a6b7e3d38a108bd73dcc0aa92d99375a86b01657f5a7f70c41548ae917fa?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
              aria-role="presentation"
              alt=""
            />
            <p className="text-neutral-900 text-base leading-6">Inovative</p>
          </figure>
        </div>
        <h3 className="text-neutral-900 text-2xl font-bold leading-8 w-full mt-3">
          Transcribing Speech Into Narration{" "}
        </h3>
        <p
          className={`text-black text-lg leading-7 w-full mt-4 ${nunito_sans.className}`}
        >
          Welcome the future with our revolutionary voice cloning technology,
          where ethical voice replicas resonate with individuality. Achieve
          exceptional level of personal connectivity and keep your audience
          engaged.{" "}
        </p>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dosjh2min/image/upload/v1704525640/indiaspeaks/transcribing-speech_ocscxy.svg"
          className="aspect-[1.65] object-contain object-center w-full overflow-hidden"
          alt="Image"
        />
      </div>
    </section>
  );
};

export default ExploringOurTechnologyMobile;
