import React from "react";

const SliderMobile = () => {
  return (
    <section className="md:hidden">
      <div className="items-stretch flex max-w-[480px] w-full flex-col mx-auto">
        <div className="justify-center items-stretch bg-white flex w-full flex-col px-5 py-10">
          <div className="justify-center items-stretch bg-white flex flex-col rounded-2xl">
            <video autoPlay={true} loop={true}>
              <source
                src="https://res.cloudinary.com/dosjh2min/video/upload/v1706250375/indiaspeaks/Call_Centre_qnjh06.mp4"
                type="video/mp4"
              />
            </video>

            <div className="text-neutral-900 text-2xl font-bold leading-7 mt-5">
              Enhancing Call Centre Excellence
            </div>
            <div className="text-black text-lg leading-7 mt-3">
              Elevating customer service with AI-driven insights and voice
              technologies, transforming call centers into hubs of personalized,
              efficient interaction. Streamlinig operations while significantly
              improving user engagement and satisfaction.
            </div>
          </div>
        </div>
        <div className="justify-center items-stretch bg-white flex w-full flex-col mt-6 px-5 py-12">
          <div className="justify-center items-center bg-white flex flex-col mt-10 mb-9 rounded-2xl">
            <video autoPlay={true} loop={true}>
              <source
                src="https://res.cloudinary.com/dosjh2min/video/upload/v1706250599/indiaspeaks/Audio_Book_hh7gyp.mp4"
                type="video/mp4"
              />
            </video>
            <div className="self-stretch text-neutral-900 text-2xl font-bold leading-7 mt-5">
              Rediscovering the Author's Voice in Audiobooks
            </div>{" "}
            <div className="self-stretch text-black text-lg leading-7 mt-3">
              Immerse yourself in literature with our voice technology, turning
              written words into authentic, engaging audio narratives that
              capture the author's essence. Experience stories as they were
              meant to be told, with every emotion and nuance intact.
            </div>
          </div>
        </div>
        <div className="justify-center items-stretch bg-white flex w-full flex-col mt-6 px-5 py-1">
          <div className="justify-center items-stretch bg-white flex flex-col py-8 rounded-2xl">
          <video autoPlay = {true} loop = {true} >
                  <source src = "https://res.cloudinary.com/dosjh2min/video/upload/v1706250690/indiaspeaks/Dubbing_p6ulw3.mp4"
                  type="video/mp4"
                  />
                </video>
            <div className="text-neutral-900 text-2xl font-bold leading-7 mt-5">
              Breaking Language Barriers AI Dubbing
            </div>
            <div className="text-black text-lg leading-7 mt-3">
              Disrupting entertainment with AI dubbing, seamlessly adapting
              content across languages while preserving the original's emotional
              depth and nuance. Bridge cultural gaps and bring global audiences
              closer to authentic storytelling.
            </div>
          </div>
        </div>{" "}
        <div className="justify-center items-stretch bg-white flex w-full flex-col mt-6 px-5 py-12">
          <div className="justify-center items-stretch bg-white flex flex-col mt-2.5 mb-2.5 pt-10 rounded-2xl">
            <video autoPlay={true} loop={true}>
              <source
                src="https://res.cloudinary.com/dosjh2min/video/upload/v1707205745/indiaspeaks/RandD/Assistive_Tech_rfkhbd.mp4"
                type="video/mp4"
              />
            </video>
            <div className="text-neutral-900 text-2xl font-bold leading-7 mt-14">
              Breaking Language Barriers AI Dubbing
            </div>{" "}
            <div className="text-black text-lg leading-7 mt-3">
              Disrupting entertainment with AI dubbing, seamlessly adapting
              content across languages while preserving the original's emotional
              depth and nuance. Bridge cultural gaps and bring global audiences
              closer to authentic storytelling.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderMobile;
