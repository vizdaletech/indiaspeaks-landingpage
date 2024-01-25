import React from 'react'

const RedefiningCommunication = () => {
  return (
    <section className='bg-primary/10 md:bg-transparent'>
         <div className="items-stretch center-section  flex flex-col justify-center px-16 py-12 max-md:px-5">
      <div className="md:bg-primary/10 mt-16 mb-10 pr-20 py-8 rounded-2xl max-md:max-w-full max-md:mr-1 max-md:mt-10 max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src = "https://res.cloudinary.com/dosjh2min/image/upload/v1705937325/indiaspeaks/Group_425_xalvav.png"
              className="aspect-[1.27] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-primary text-6xl font-bold leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Redefining communication with Ethical Technology
              </div>
              <div className="text-neutral-900 text-lg leading-7 mt-6 max-md:max-w-full">
                Empowering individuals and businesses across India with our
                suite of advanced AI solutions in speech and language
                technology.{" "}
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default RedefiningCommunication