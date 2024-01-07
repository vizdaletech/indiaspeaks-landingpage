import { nunito_sans } from "@/typography/font";
import * as React from "react";

function TechnologicalMastery(props) {
  return (
    <div className="items-center center-section bg-white hidden md:flex flex-col py-24">
      <h2 className="text-primary text-5xl font-bold leading-[57.6px] self-center max-md:max-w-full max-md:text-4xl">
        Our Technological Mastery
      </h2>
      <div className="items-stretch bg-white self-stretch flex w-full flex-col justify-center mt-4 px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="my-3.5 max-md:max-w-full max-md:mr-1">
          <div className="gap-16 flex">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <h3 className="text-primary text-4xl font-bold leading-10 max-md:max-w-full">
                  Harmonic Text-to-Speech Synthesis
                </h3>
                <p className={`${nunito_sans.className} text-black text-lg leading-7 mt-6 w-[500px]`}>
                  With harmonic Text-to-Voice synthesis, we at IndiaSpeaks transcend boundaries, turning text into a symphony of engaging voices. We bring information to life, making it universally accessible and engaging for all.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/848d10e71d643a1a0170e3d349092e55c955551ac5d1e2763c811296a341d268?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&" alt="Efficiency Refined in Speech-to-Text" className="aspect-[1.04] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10" />
            </div>
          
          </div>
        </div>
      </div>
      <div className="items-stretch bg-white self-stretch flex w-full flex-col my-10 justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="my-3.5 max-md:max-w-full max-md:mr-1">
          <div className="gap-16 flex">
            <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
              <div className="items-stretch self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <h3 className="text-primary text-4xl font-bold leading-10 max-md:max-w-full">
                  Efficiency Refined in <br/>Speech-to-Text
                </h3>
                <p className={`${nunito_sans.className} text-black text-lg leading-7 mt-6 w-[500px]`}>
                  In voice cloning, our tech sets a new standard, authentically replicating a target individual{`'`}s voice with efficiency. Our innovation preserves uniqueness, ushering in the future of ethical voice cloning with precision.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6719c2a5ea6514fe95d4cc7a98078adbf57e84ae90a7547904c0e32c8138fe30?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&" alt="Harmonic Text-to-Speech" className="aspect-[1.77] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10" />
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch bg-white self-stretch flex w-full my-10 flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="my-3.5 max-md:max-w-full max-md:mr-1">
          <div className="gap-16 flex">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <h3 className="text-primary text-4xl font-bold w-[400px] leading-10 max-md:max-w-full">
                  Mastering the Art of Voice Cloning
                </h3>
                <p className={`text-black text-lg leading-7 mt-6 ${nunito_sans.className}`}>
                  Step into the future of efficient communication with our Speech-to-Text tech. Beyond transcription, it{`'`}s a mastery of speed and accuracy, revolutionizing spoken words into written brilliance.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b92585517ffc73b1265ee0338c67f0ccba26af33abb66dfaf8e6398c7d77373?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&" alt="Mastering the Art of Voice Cloning" className="aspect-[1.97] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologicalMastery;