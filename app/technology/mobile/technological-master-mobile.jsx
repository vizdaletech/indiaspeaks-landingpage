import { nunito_sans } from "@/typography/font";
import * as React from "react";

function TechnologicalMasteryMobile(props) {
  return (
    <form className="items-stretch md:hidden bg-white flex max-w-[480px] w-full flex-col mx-auto px-3.5 py-8">
      <h3 className="text-black text-3xl font-bold leading-10 tracking-tight">
        Our Technological Mastery
      </h3>
      <p className="text-primary text-2xl font-bold leading-8 tracking-normal mt-7">
        Harmonic Text-to-Speech Synthesis
      </p>
      <p
        className={`text-black text-base ${nunito_sans.className} leading-6 tracking-normal mt-3`}
      >
        With Harmonic Text-to-Voice Synthesis, we at IndiaSpeaks transcend
        boundaries, turning text into a symphony of engaging voices. We bring
        information to life, making it universally accessible and engaging for
        all.
      </p>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/883b3da05821e6025ebb1e7e21c839c514171e3ecf8e8bdcb32133789397d70b?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
        className="aspect-[1.78] object-contain object-center w-full overflow-hidden mt-7"
      />
      <h3 className="text-primary text-2xl font-bold leading-8 tracking-normal mt-8">
        Efficiency Refined in Speech-to-Text
      </h3>
      <p
        className={`text-black text-base ${nunito_sans.className} leading-6 tracking-normal mt-3`}
      >
        Step into the future of efficient communication with our Speech-to-Text
        tech. Beyond transcription, it{`'`}s a mastery of speed and accuracy,
        revolutionizing spoken words into written brilliance.
      </p>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/680428c9ba233c7fd58c4cc2ca0b927ddaa6c146f68199b3640a97bc27100c23?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
        className="aspect-[1.04] object-contain object-center w-full overflow-hidden mt-7"
      />
      <h3 className="text-primary text-2xl font-bold leading-8 tracking-normal mt-8">
        Mastering the Art of Voice Cloning
      </h3>
      <p
        className={`text-black text-base ${nunito_sans.className} leading-6 tracking-normal mt-3`}
      >
        In voice cloning, our tech sets a new standard, authentically
        replicating a target individual{`'`}s voice with efficiency. Our
        innovation preserves uniqueness, ushering in the future of ethical voice
        cloning precision.
      </p>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a574ee1cdbf245f2490a50cca3ff2e640efb8826a989608d0f235a2e896a70bb?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
        className="aspect-[1.99] object-contain object-center w-full overflow-hidden mt-7"
      />
    </form>
  );
}

export default TechnologicalMasteryMobile;
