import Link from 'next/link'
import React from 'react'

const ExperienceOur = () => {
  return (
    <section className='bg-primary hidden md:block '>
           <div className="items-stretch center-section flex flex-col justify-center px-16 py-6 max-md:px-5">
      <div className="items-stretch flex justify-between gap-5 px-4 py-3 max-md:max-w-full max-md:flex-wrap max-md:mr-1">
        <div className="items-center flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/515205395383d63c50917deed14597b143c690097173f9c8dd5c7caa792c42af?"
            className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <span className="items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
            <div className="text-white text-3xl font-semibold leading-10 max-md:max-w-full">
              Experience our Innovative Voice Technology
            </div>
            <div className="text-white text-base leading-6 max-md:max-w-full">
              Connect deeply with audiences across India through our powerful
              voice tech.
            </div>
          </span>
        </div>
        <Link href = "/contact" className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-secondary self-center my-auto px-5 py-2 border-solid border-secondary">
          Contact us
        </Link>
      </div>
    </div>
    </section>
    )
}

export default ExperienceOur