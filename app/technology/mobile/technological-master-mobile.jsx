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
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        className="my-10"
        // controls
      >
        <source
          src="https://res.cloudinary.com/dosjh2min/video/upload/v1706334431/indiaspeaks/TTS_jjs9ue.mp4"
          type="video/mp4"
        />
      </video>
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
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        className="my-10"
        // controls
      >
        <source
          src="https://res.cloudinary.com/dosjh2min/video/upload/v1707105558/indiaspeaks/STT_1_qsef30.mp4"
          type="video/mp4"
        />
      </video>
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
      <video
                autoPlay={true}
                loop={true}
                muted={true}
                className="my-10"
                // controls
              >
                <source
                  src="https://res.cloudinary.com/dosjh2min/video/upload/v1706335053/indiaspeaks/VC_2_dimfp2.mp4"
                  type="video/mp4"
                />
              </video>
    </form>
  );
}

export default TechnologicalMasteryMobile;
