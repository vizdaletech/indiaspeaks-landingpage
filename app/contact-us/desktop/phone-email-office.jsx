import React from 'react'

const PhoneEmailOffice = () => {
  return (
    <section>
       <div className="items-stretch bg-white flex flex-col py-12 px-16 max-md:px-5">
      <div className="mb-10 center-section max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-center max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] rounded-lg max-md:w-full max-md:ml-0">
            <div className="bg-primary/10 flex grow flex-col w-full pt-3 pb-8 px-4 items-start max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8c0a03ab670bf4c8ac8af1d0717e016c22d6b0a37001c89baa8bbdbc5cfdfd?"
                className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full"
              />
              <div className="self-stretch text-primary text-3xl font-bold leading-10 whitespace-nowrap mt-6">
                Email
              </div>
              <div className="self-stretch text-black text-sm leading-5 whitespace-nowrap mt-4">
                Email us to <a href = "mailto:info@indiaspeaks.ai" className='underline '>info@indiaspeaks.ai </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] rounded-lg md:ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-primary/10 flex grow flex-col w-full pt-3 pb-8 px-4 items-start max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fac8e26ab666b45a698cdfebe074a27d13512793d9650d92cc2b0253a167aea?"
                className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full"
              />
              <div className="self-stretch text-primary text-3xl font-bold leading-10 whitespace-nowrap mt-6">
                Phone
              </div>
              <div className="self-stretch text-black text-sm leading-5 whitespace-nowrap mt-4">
                Call us at <a href = "tel:+91 70103 89351" className='underline'>+91 70103 89351</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] rounded-lg md:ml-5 max-md:w-full max-md:ml-0">
            <div className="self-stretch bg-primary/10 flex grow flex-col w-full px-4 py-3 items-start max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/619f6b61f7b2b82fcca675f8729abf804d05e164405e1b1bd4bc4c615c87b43b?"
                className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full"
              />
              <div className="self-stretch text-primary text-3xl font-bold leading-10 whitespace-nowrap mt-6">
                Office
              </div>
              <div className="self-stretch text-black text-sm leading-5 mt-4">
                Platinum Jubilee building, AC Tech Campus, <br />
                Anna University, Guindy, Chennai 600025
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default PhoneEmailOffice