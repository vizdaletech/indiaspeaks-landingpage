import NunitoSans from "@/shared/typography/NunitoSans";
import { nunito_sans } from "@/typography/font";
import React from "react";

function HeroSectionMobile(props) {
  return (
    <div className="py-24 bg-primary md:hidden overflow-hidden">
     <div className="items-stretch flex center-section w-full flex-col mx-auto pl-2">
      <h1 className="text-white text-3xl font-bold tracking-tight">
        Redefining communication Using Artificial Intelligence
      </h1>
      <p className={`${nunito_sans.className} text-white text-base leading-6 tracking-normal mt-5`}>
        Empowering individuals and businesses across India with our suite of
        advanced AI solutions in speech and language technology. Schedule a
        meeting to know more :)
      </p>
      <a
        href = "https://calendly.com/gomanirajan/30min" target="_blank" rel = "noreferrer"
        className="text-black bg-secondary rounded-sm text-center text-base font-medium leading-6 tracking-normal whitespace-nowrap items-center bg-amber-300 justify-center mt-8 px-16 py-3"
      >
        Schedule an impact
      </a>
      <div className=" mt-20 flex right-to-left-mobile justify-start items-start relative">
          <div className="flex mx-[12px]">
            <div className="flex flex-col gap-5">
              <div className=" w-[350px]">
                <div className="items-stretch bg-white flex flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/48dd72aa854ea64c3bb801f0b2de715325c03b53ca26d771a645660f77154e17?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Cultural Connection
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5 mb-1.5">
                    <NunitoSans>
                      Connect with the culture of your audience. Shape genuine
                      relationships that transcend linguistic boundaries.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="  w-[350px]">
                <div className="items-stretch bg-white  flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/59b665611c007b4357319bf50d9ae033552d42f07862107f5fe46055e3776dfa?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-center whitespace-nowrap mt-8">
                    Multilingual Support
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Effortlessly speak to your audience in your preferred
                      language and ex your reach.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px] mx-5 ">
                <div className="items-stretch bg-white flex flex-col px-4 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/069d7e4e74b94ddabc74aff8823c4d98d6f56076e512edf2d937023eb667f01f?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Unparalleled Precision
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Capture the true essence of your voice with our precise
                      technology, to deliver the results you deserve.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="w-[350px] mx-5">
                <div className="items-center bg-white flex flex-col px-4 py-7 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3879695cf76914ef0427d0bcf98b9a2477a680b86f00e8ade5f17d7588b88351?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-7/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-stretch whitespace-nowrap mt-7">
                    Personalized Interaction
                  </div>
                  <div className="text-black text-center text-base leading-5 self-stretch mt-2.5 mb-2">
                    <NunitoSans>
                      Voice solutions that accurately mimic the target{`'`}s voice,
                      for a personalized touch.{" "}
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px]">
                <div className="items-stretch bg-white flex flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/sand-clock.png"
                    className="w-7/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Time Saving{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5 mb-1.5">
                    <NunitoSans>
                      Use your time efficiently and get things done faster
                      through our automated voice solutions.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="  w-[350px]">
                <div className="items-stretch bg-white  flex-col px-8 py-[30px] rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/hand-shake.png"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-center whitespace-nowrap mt-8">
                    Engage beyond Boundaries
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Boost your engagement with our powerful voice experience
                      and connect to the wider range of audience.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px] mx-5 ">
                <div className="items-stretch bg-white flex flex-col px-4 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/dollar-circle.png"                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Cost Effective{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Reduce your costs and experience effective communication
                      by using automated AI voice technology.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="w-[350px] mx-5">
                <div className="items-center bg-white flex flex-col px-4 py-7 rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/potrait-frame.png"
                    className="w-6/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-stretch whitespace-nowrap mt-7">
                    Seamless Content Creation
                  </div>
                  <div className="text-black text-center text-base leading-5 self-stretch mt-2.5 mb-2">
                    <NunitoSans>
                      Constantly engage with your audience in a seamless manner
                      by generating relevant content.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px]">
                <div className="items-stretch bg-white flex flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558043/indiaspeaks/Frame_484-2_j7jxpu.png"
                    className="w-7/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Diverse Narratives{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5 mb-1.5">
                    <NunitoSans>
                      Communicate to a diverse audience with our inclusive voice
                      tech ensuring your message is heard by everyone.{" "}
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="  w-[350px]">
                <div className="items-stretch bg-white  flex-col px-8 py-[30px] rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558044/indiaspeaks/Frame_484-5_swhm7l.png"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-center whitespace-nowrap mt-8">
                    Voice Preservation{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Uncover the experience of lost voices with voice
                      preservation. Impact the future with echoes of the past.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-[12px]">
            <div className="flex flex-col gap-5">
              <div className=" w-[350px]">
                <div className="items-stretch bg-white flex flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/48dd72aa854ea64c3bb801f0b2de715325c03b53ca26d771a645660f77154e17?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Cultural Connection
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5 mb-1.5">
                    <NunitoSans>
                      Connect with the culture of your audience. Shape genuine
                      relationships that transcend linguistic boundaries.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="  w-[350px]">
                <div className="items-stretch bg-white  flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/59b665611c007b4357319bf50d9ae033552d42f07862107f5fe46055e3776dfa?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-center whitespace-nowrap mt-8">
                    Multilingual Support
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Effortlessly speak to your audience in your preferred
                      language and ex your reach.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px] mx-5 ">
                <div className="items-stretch bg-white flex flex-col px-4 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/069d7e4e74b94ddabc74aff8823c4d98d6f56076e512edf2d937023eb667f01f?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Unparalleled Precision
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Capture the true essence of your voice with our precise
                      technology, to deliver the results you deserve.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="w-[350px] mx-5">
                <div className="items-center bg-white flex flex-col px-4 py-7 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3879695cf76914ef0427d0bcf98b9a2477a680b86f00e8ade5f17d7588b88351?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-7/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-stretch whitespace-nowrap mt-7">
                    Personalized Interaction
                  </div>
                  <div className="text-black text-center text-base leading-5 self-stretch mt-2.5 mb-2">
                    <NunitoSans>
                      Voice solutions that accurately mimic the target{`'`}s voice,
                      for a personalized touch.{" "}
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px]">
                <div className="items-stretch bg-white flex flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/sand-clock.png"
                    className="w-7/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Time Saving{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5 mb-1.5">
                    <NunitoSans>
                      Use your time efficiently and get things done faster
                      through our automated voice solutions.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="  w-[350px]">
                <div className="items-stretch bg-white  flex-col px-8 py-[30px] rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/hand-shake.png"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-center whitespace-nowrap mt-8">
                    Engage beyond Boundaries
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Boost your engagement with our powerful voice experience
                      and connect to the wider range of audience.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px] mx-5 ">
                <div className="items-stretch bg-white flex flex-col px-4 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/dollar-circle.png"                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Cost Effective{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Reduce your costs and experience effective communication
                      by using automated AI voice technology.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="w-[350px] mx-5">
                <div className="items-center bg-white flex flex-col px-4 py-7 rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/potrait-frame.png"
                    className="w-6/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-stretch whitespace-nowrap mt-7">
                    Seamless Content Creation
                  </div>
                  <div className="text-black text-center text-base leading-5 self-stretch mt-2.5 mb-2">
                    <NunitoSans>
                      Constantly engage with your audience in a seamless manner
                      by generating relevant content.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px]">
                <div className="items-stretch bg-white flex flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558043/indiaspeaks/Frame_484-2_j7jxpu.png"
                    className="w-7/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Diverse Narratives{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5 mb-1.5">
                    <NunitoSans>
                      Communicate to a diverse audience with our inclusive voice
                      tech ensuring your message is heard by everyone.{" "}
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="  w-[350px]">
                <div className="items-stretch bg-white  flex-col px-8 py-[30px] rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558044/indiaspeaks/Frame_484-5_swhm7l.png"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-center whitespace-nowrap mt-8">
                    Voice Preservation{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Uncover the experience of lost voices with voice
                      preservation. Impact the future with echoes of the past.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-[12px]">
            <div className="flex flex-col gap-5">
              <div className=" w-[350px]">
                <div className="items-stretch bg-white flex flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/48dd72aa854ea64c3bb801f0b2de715325c03b53ca26d771a645660f77154e17?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Cultural Connection
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5 mb-1.5">
                    <NunitoSans>
                      Connect with the culture of your audience. Shape genuine
                      relationships that transcend linguistic boundaries.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="  w-[350px]">
                <div className="items-stretch bg-white  flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/59b665611c007b4357319bf50d9ae033552d42f07862107f5fe46055e3776dfa?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-center whitespace-nowrap mt-8">
                    Multilingual Support
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Effortlessly speak to your audience in your preferred
                      language and ex your reach.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px] mx-5 ">
                <div className="items-stretch bg-white flex flex-col px-4 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/069d7e4e74b94ddabc74aff8823c4d98d6f56076e512edf2d937023eb667f01f?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Unparalleled Precision
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Capture the true essence of your voice with our precise
                      technology, to deliver the results you deserve.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="w-[350px] mx-5">
                <div className="items-center bg-white flex flex-col px-4 py-7 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3879695cf76914ef0427d0bcf98b9a2477a680b86f00e8ade5f17d7588b88351?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-7/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-stretch whitespace-nowrap mt-7">
                    Personalized Interaction
                  </div>
                  <div className="text-black text-center text-base leading-5 self-stretch mt-2.5 mb-2">
                    <NunitoSans>
                      Voice solutions that accurately mimic the target{`'`}s voice,
                      for a personalized touch.{" "}
                    </NunitoSans>
                  </div>
                </div>
              </div>{}
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px]">
                <div className="items-stretch bg-white flex flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/sand-clock.png"
                    className="w-7/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Time Saving{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5 mb-1.5">
                    <NunitoSans>
                      Use your time efficiently and get things done faster
                      through our automated voice solutions.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="  w-[350px]">
                <div className="items-stretch bg-white  flex-col px-8 py-[30px] rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/hand-shake.png"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-center whitespace-nowrap mt-8">
                    Engage beyond Boundaries
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Boost your engagement with our powerful voice experience
                      and connect to the wider range of audience.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px] mx-5 ">
                <div className="items-stretch bg-white flex flex-col px-4 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/dollar-circle.png"                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Cost Effective{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Reduce your costs and experience effective communication
                      by using automated AI voice technology.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="w-[350px] mx-5">
                <div className="items-center bg-white flex flex-col px-4 py-7 rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/potrait-frame.png"
                    className="w-6/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-stretch whitespace-nowrap mt-7">
                    Seamless Content Creation
                  </div>
                  <div className="text-black text-center text-base leading-5 self-stretch mt-2.5 mb-2">
                    <NunitoSans>
                      Constantly engage with your audience in a seamless manner
                      by generating relevant content.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px]">
                <div className="items-stretch bg-white flex flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558043/indiaspeaks/Frame_484-2_j7jxpu.png"
                    className="w-7/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Diverse Narratives{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5 mb-1.5">
                    <NunitoSans>
                      Communicate to a diverse audience with our inclusive voice
                      tech ensuring your message is heard by everyone.{" "}
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="  w-[350px]">
                <div className="items-stretch bg-white  flex-col px-8 py-[30px] rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558044/indiaspeaks/Frame_484-5_swhm7l.png"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-center whitespace-nowrap mt-8">
                    Voice Preservation{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Uncover the experience of lost voices with voice
                      preservation. Impact the future with echoes of the past.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-[12px]">
            <div className="flex flex-col gap-5">
              <div className=" w-[350px]">
                <div className="items-stretch bg-white flex flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/48dd72aa854ea64c3bb801f0b2de715325c03b53ca26d771a645660f77154e17?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Cultural Connection
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5 mb-1.5">
                    <NunitoSans>
                      Connect with the culture of your audience. Shape genuine
                      relationships that transcend linguistic boundaries.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="  w-[350px]">
                <div className="items-stretch bg-white  flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/59b665611c007b4357319bf50d9ae033552d42f07862107f5fe46055e3776dfa?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-center whitespace-nowrap mt-8">
                    Multilingual Support
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Effortlessly speak to your audience in your preferred
                      language and ex your reach.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px] mx-5 ">
                <div className="items-stretch bg-white flex flex-col px-4 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/069d7e4e74b94ddabc74aff8823c4d98d6f56076e512edf2d937023eb667f01f?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Unparalleled Precision
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Capture the true essence of your voice with our precise
                      technology, to deliver the results you deserve.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="w-[350px] mx-5">
                <div className="items-center bg-white flex flex-col px-4 py-7 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3879695cf76914ef0427d0bcf98b9a2477a680b86f00e8ade5f17d7588b88351?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-7/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-stretch whitespace-nowrap mt-7">
                    Personalized Interaction
                  </div>
                  <div className="text-black text-center text-base leading-5 self-stretch mt-2.5 mb-2">
                    <NunitoSans>
                      Voice solutions that accurately mimic the target{`'`}s voice,
                      for a personalized touch.{" "}
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px]">
                <div className="items-stretch bg-white flex flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/sand-clock.png"
                    className="w-7/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Time Saving{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5 mb-1.5">
                    <NunitoSans>
                      Use your time efficiently and get things done faster
                      through our automated voice solutions.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="  w-[350px]">
                <div className="items-stretch bg-white  flex-col px-8 py-[30px] rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/hand-shake.png"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-center whitespace-nowrap mt-8">
                    Engage beyond Boundaries
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Boost your engagement with our powerful voice experience
                      and connect to the wider range of audience.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px] mx-5 ">
                <div className="items-stretch bg-white flex flex-col px-4 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/dollar-circle.png"                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Cost Effective{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Reduce your costs and experience effective communication
                      by using automated AI voice technology.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="w-[350px] mx-5">
                <div className="items-center bg-white flex flex-col px-4 py-7 rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/potrait-frame.png"
                    className="w-6/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-stretch whitespace-nowrap mt-7">
                    Seamless Content Creation
                  </div>
                  <div className="text-black text-center text-base leading-5 self-stretch mt-2.5 mb-2">
                    <NunitoSans>
                      Constantly engage with your audience in a seamless manner
                      by generating relevant content.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px]">
                <div className="items-stretch bg-white flex flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558043/indiaspeaks/Frame_484-2_j7jxpu.png"
                    className="w-7/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Diverse Narratives{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5 mb-1.5">
                    <NunitoSans>
                      Communicate to a diverse audience with our inclusive voice
                      tech ensuring your message is heard by everyone.{" "}
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="  w-[350px]">
                <div className="items-stretch bg-white  flex-col px-8 py-[30px] rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558044/indiaspeaks/Frame_484-5_swhm7l.png"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-center whitespace-nowrap mt-8">
                    Voice Preservation{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Uncover the experience of lost voices with voice
                      preservation. Impact the future with echoes of the past.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-[12px]">
            <div className="flex flex-col gap-5">
              <div className=" w-[350px]">
                <div className="items-stretch bg-white flex flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/48dd72aa854ea64c3bb801f0b2de715325c03b53ca26d771a645660f77154e17?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Cultural Connection
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5 mb-1.5">
                    <NunitoSans>
                      Connect with the culture of your audience. Shape genuine
                      relationships that transcend linguistic boundaries.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="  w-[350px]">
                <div className="items-stretch bg-white  flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/59b665611c007b4357319bf50d9ae033552d42f07862107f5fe46055e3776dfa?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-center whitespace-nowrap mt-8">
                    Multilingual Support
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Effortlessly speak to your audience in your preferred
                      language and ex your reach.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px] mx-5 ">
                <div className="items-stretch bg-white flex flex-col px-4 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/069d7e4e74b94ddabc74aff8823c4d98d6f56076e512edf2d937023eb667f01f?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Unparalleled Precision
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Capture the true essence of your voice with our precise
                      technology, to deliver the results you deserve.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="w-[350px] mx-5">
                <div className="items-center bg-white flex flex-col px-4 py-7 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3879695cf76914ef0427d0bcf98b9a2477a680b86f00e8ade5f17d7588b88351?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="w-7/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-stretch whitespace-nowrap mt-7">
                    Personalized Interaction
                  </div>
                  <div className="text-black text-center text-base leading-5 self-stretch mt-2.5 mb-2">
                    <NunitoSans>
                      Voice solutions that accurately mimic the target{`'`}s voice,
                      for a personalized touch.{" "}
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px]">
                <div className="items-stretch bg-white flex flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/sand-clock.png"
                    className="w-7/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Time Saving{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5 mb-1.5">
                    <NunitoSans>
                      Use your time efficiently and get things done faster
                      through our automated voice solutions.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="  w-[350px]">
                <div className="items-stretch bg-white  flex-col px-8 py-[30px] rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/hand-shake.png"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-center whitespace-nowrap mt-8">
                    Engage beyond Boundaries
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Boost your engagement with our powerful voice experience
                      and connect to the wider range of audience.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px] mx-5 ">
                <div className="items-stretch bg-white flex flex-col px-4 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/dollar-circle.png"                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Cost Effective{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Reduce your costs and experience effective communication
                      by using automated AI voice technology.
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="w-[350px] mx-5">
                <div className="items-center bg-white flex flex-col px-4 py-7 rounded-3xl">
                  <img
                    loading="lazy"
                    src="/assets/potrait-frame.png"
                    className="w-6/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-stretch whitespace-nowrap mt-7">
                    Seamless Content Creation
                  </div>
                  <div className="text-black text-center text-base leading-5 self-stretch mt-2.5 mb-2">
                    <NunitoSans>
                      Constantly engage with your audience in a seamless manner
                      by generating relevant content.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" w-[350px]">
                <div className="items-stretch bg-white flex flex-col px-8 py-6 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558043/indiaspeaks/Frame_484-2_j7jxpu.png"
                    className="w-7/12 mx-auto"
                  />
                  <div className="text-black text-xl font-bold leading-8 self-center whitespace-nowrap mt-7">
                    Diverse Narratives{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5 mb-1.5">
                    <NunitoSans>
                      Communicate to a diverse audience with our inclusive voice
                      tech ensuring your message is heard by everyone.{" "}
                    </NunitoSans>
                  </div>
                </div>
              </div>
              <div className="  w-[350px]">
                <div className="items-stretch bg-white  flex-col px-8 py-[30px] rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558044/indiaspeaks/Frame_484-5_swhm7l.png"
                    className="w-8/12 mx-auto"
                  />
                  <div className="text-black text-xl text-center font-bold leading-8 self-center whitespace-nowrap mt-8">
                    Voice Preservation{" "}
                  </div>
                  <div className="text-black text-center text-base leading-5 mt-2.5">
                    <NunitoSans>
                      Uncover the experience of lost voices with voice
                      preservation. Impact the future with echoes of the past.
                    </NunitoSans>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionMobile;