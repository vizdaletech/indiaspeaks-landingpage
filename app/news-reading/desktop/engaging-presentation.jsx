import React from 'react'

const EngagingPresentation = () => {
  return (
    <section className='hidden md:block'>
        <div className="items-stretch center-section bg-white flex flex-col justify-center px-16 py-12 max-md:px-5">
      <div className="justify-center items-stretch bg-primary flex flex-col mt-16 mb-10 px-16 py-12 rounded-xl max-md:mr-1 max-md:mt-10 max-md:px-5">
        <div className="mx-5 my-3.5 pb-2 max-md:mr-2.5 max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[80%] max-md:w-full max-md:ml-0">
              <span className="items-stretch self-stretch flex flex-col max-md:mt-10">
                <div className="text-white text-5xl font-bold leading-[57.6px] max-md:text-4xl">
                  Engaging Presentation of News
                </div>
                <div className="text-white text-lg leading-7 mt-6 max-md:max-w-full">
                  Immerse yourself in news with natural modulation, which
                  breathes life into articles. We focus on precision which plays
                  a key role in ensuring listeners understand and resonate with
                  the news being broadcast.
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[29%] ml-5 max-md:w-full max-md:ml-0">
              <span className="items-start self-stretch flex grow flex-col mt-2 py-2.5 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1ee1a711f2f5388c5dabe49bdf3545665c0b3548ecfe31b8fe0918b1201aca3?"
                  className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full self-start"
                />
                <div className="text-white text-xl font-bold leading-7 self-stretch whitespace-nowrap mt-3.5">
                  Immersive
                </div>
                <div className="text-white text-base leading-6 self-stretch mt-5">
                  Lose yourself and find the true meaning in each piece of news.
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebb0ca1125e40ccbf431d9d6f016361c16f1368b788ad02db4caf64750d22947?"
                  className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full mt-7 self-start"
                />
                <div className="text-white text-xl font-bold leading-7 self-stretch whitespace-nowrap mt-3.5">
                  Precision{" "}
                </div>
                <div className="text-white text-base leading-6 self-stretch mt-5">
                  Listen clearly to the accurate articulation of each word,
                  thanks to our precise technology.
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default EngagingPresentation