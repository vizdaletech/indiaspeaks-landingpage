import React from 'react'

const HeroSection = () => {
  return (
    <section className='bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1705589348/indiaspeaks/54_bkbogi.jpg)] bg-cover hidden md:block '>
            <div className=" flex flex-col justify-center items-stretch center-section py-24">
      <div className="overflow-hidden w-full px-11 py-12 max-md:max-w-full max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
            <span className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-neutral-900 text-6xl font-bold leading-[67.2px] max-md:max-w-full max-md:text-4xl">
                Technological Forge
              </div>
              <div className="text-neutral-700 text-lg leading-7 mt-6 max-md:max-w-full">
                Witness our incredible feats as we progress through with our
                innovative research in the field of voice technology. Our
                dedicated team ventures into untested waters, refining
                algorithms and taking natural language processing forward.
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d82b1fca68091924acb06e919180013495976bbb5026dac548a3fc978f5ef816?"
              className=" object-contain object-center w-full justify-center items-center"
            />
          </div>
        </div>
      </div>
    </div>

    </section>
  )
}

export default HeroSection