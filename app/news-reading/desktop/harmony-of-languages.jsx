import React from 'react'

const HarmonyOfLanguages = () => {
  return (
    <section className='hidden md:block'>
        <div className="items-stretch center-section bg-white flex flex-col justify-center px-7 py-12 max-md:px-5">
      <div className="px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
            <span className="items-stretch flex flex-col my-auto pt-8 pb-12 max-md:mt-10">
              <div className="text-primary text-4xl font-bold leading-10">
                Harmony of
                <br />
                Languages we <br />
                support{" "}
              </div>
              <div className="text-black text-lg leading-7 mt-3 mb-24 max-md:mb-10">
                We support multiple languages to make news more accessible for
                everyone. Check out samples of our AI reciting news in different
                languages.
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[66%] ml-5 max-md:w-full max-md:ml-0">
            <div className="my-auto max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
                  <div className="flex-col overflow-hidden relative flex min-h-[486px] grow justify-center items-stretch px-px max-md:max-w-full max-md:mt-7">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <span className="relative flex w-full flex-col justify-center items-stretch">
                      <div className="pl-9 pr-5 pt-12 pb-4 max-md:px-5">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                          <div className="flex flex-col items-stretch w-[76%] max-md:w-full max-md:ml-0">
                            <div className="text-stone-50 text-2xl font-bold leading-7 whitespace-nowrap mt-96 max-md:mt-10">
                              Tamil
                            </div>
                          </div>
                          <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/97d9d7827e6ade5aa9f04382cc5c9ddcc8e1f4a3d38f17bc6f5e7818288d3bc0?"
                              className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 mt-80 max-md:mt-10"
                            />
                          </div>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex-col overflow-hidden relative flex aspect-[0.39300411522633744] w-[191px] grow justify-center items-stretch max-md:mt-7">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <span className="relative text-stone-50 text-xl font-bold leading-6 whitespace-nowrap justify-center items-center pt-96 pb-12 px-16 max-md:pt-10 max-md:px-5">
                      Hindi
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex-col overflow-hidden relative flex aspect-[0.33127572016460904] w-[161px] grow justify-center items-stretch max-md:mt-7">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <span className="relative text-stone-50 text-center text-xl font-bold leading-6 whitespace-nowrap justify-center items-stretch pt-96 pb-11 px-12 max-md:pt-10 max-md:px-5">
                      English
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default HarmonyOfLanguages