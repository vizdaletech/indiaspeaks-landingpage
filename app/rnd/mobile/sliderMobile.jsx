import React from 'react'

const SliderMobile = () => {
  return (
    <section className='md:hidden'>
    <div className="items-stretch flex max-w-[480px] w-full flex-col mx-auto">
    <div className="justify-center items-stretch bg-white flex w-full flex-col px-5 py-10">
      <div className="justify-center items-stretch bg-white flex flex-col rounded-2xl">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7042214de39d34d75f611d9429f494fea3d704ae8fc18e5a3aeb97f672dc6770?"
          className="aspect-[1.21] object-contain object-center w-full overflow-hidden"
        />
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
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec510d8fd7e3d4f5ca6bfc86a29b81e02eaac61b5649a2deb3d37deb4deefb7c?"
          className="aspect-[1.7] object-contain object-center w-full overflow-hidden max-w-[290px]"
        />
        <div className="self-stretch text-neutral-900 text-2xl font-bold leading-7 mt-5">
          Rediscovering the Author's Voice in Audiobooks
        </div>{" "}
        <div className="self-stretch text-black text-lg leading-7 mt-3">
          Immerse yourself in literature with our voice technology, turning
          written words into authentic, engaging audio narratives that capture
          the author's essence. Experience stories as they were meant to be
          told, with every emotion and nuance intact.
        </div>
      </div>
    </div>
    <div className="justify-center items-stretch bg-white flex w-full flex-col mt-6 px-5 py-1">
      <div className="justify-center items-stretch bg-white flex flex-col py-8 rounded-2xl">
        <img
          loading="lazy"
          src = "https://res.cloudinary.com/dosjh2min/image/upload/v1705986943/indiaspeaks/Frame_516_a3l3hs.png"
          className="aspect-[1] object-contain object-center w-8/12 mx-auto overflow-hidden"
        />
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
        <img
          loading="lazy"
          src = "https://res.cloudinary.com/dosjh2min/image/upload/v1705986944/indiaspeaks/Frame_631_wa0ycl.png"
          className="aspect-[2.22] object-contain object-center w-full overflow-hidden "
        />{" "}
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
  )
}

export default SliderMobile