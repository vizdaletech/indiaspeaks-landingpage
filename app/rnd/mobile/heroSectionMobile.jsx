import React from 'react'

const HeroSectionMobile = () => {
  return (
    <section className=' bg-pimary/10 md:hidden'>
    <div className="justify-center center-section items-stretchflex max-w-[360px] flex-col px-5 py-10">
      <div className="justify-center items-stretch  flex flex-col py-8 rounded-2xl">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5e12cd51eb08cc740f13d28d3de416947451b21185e15e0e8a3b73a60bdd14a?"
          className="aspect-[1.33] object-contain object-center w-full justify-center items-center overflow-hidden"
        />
        <div className="text-blue-700 text-2xl font-bold leading-7 whitespace-nowrap mt-5">
          Technological Forge
        </div>
        <div className="text-black text-lg leading-7 mt-3">
          Witness our incredible feats as we progress through with our
          innovative research in the field of voice technology. Our dedicated
          team ventures into untested waters, refining algorithms and taking
          natural language processing forward.
        </div>
      </div>
    </div>
    </section>
  )
}

export default HeroSectionMobile