import NunitoSans from "@/shared/typography/NunitoSans";
import { nunito_sans } from "@/typography/font";
import Image from "next/image";
import * as React from "react";

const HeroSection = (props) => {
  return (
    <div className="bg-primary hidden md:flex flex-col justify-center items-stretch py-24 overflow-hidden">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c346c35f5d06ff86c95ae5288f956e78a2121900c06348da554562a1b6371fe7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c346c35f5d06ff86c95ae5288f956e78a2121900c06348da554562a1b6371fe7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c346c35f5d06ff86c95ae5288f956e78a2121900c06348da554562a1b6371fe7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c346c35f5d06ff86c95ae5288f956e78a2121900c06348da554562a1b6371fe7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c346c35f5d06ff86c95ae5288f956e78a2121900c06348da554562a1b6371fe7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c346c35f5d06ff86c95ae5288f956e78a2121900c06348da554562a1b6371fe7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c346c35f5d06ff86c95ae5288f956e78a2121900c06348da554562a1b6371fe7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c346c35f5d06ff86c95ae5288f956e78a2121900c06348da554562a1b6371fe7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
        className="absolute h-[150vh] w-full object-cover object-center inset-0"
      />
      <div className="flex-col relative flex center-section w-full items-stretch pl-16 py-12 max-md:max-w-full max-md:pl-5">
        <div className="relative mt-8 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
              <div className="text-white text-5xl font-bold leading-[67px] relative max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
                Redefining communication Using Artificial Intelligence
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
              <div
                className={`items-stretch relative flex grow flex-col max-md:max-w-full max-md:mt-10 ${nunito_sans.className}`}
              >
                <div className={`text-white text-xl leading-8`}>
                  Empowering individuals and businesses across India with our
                  suite of advanced AI solutions in speech and language
                  technology. Schedule a meeting to know more :)
                </div>
                <div className="items-stretch flex gap-4 mt-6 self-start">
                  <a href = "https://calendly.com/gomanirajan/30min" target="_blank" rel = "noreferrer" className="text-black text-lg bg-secondary font-bold leading-7  justify-center items-stretch rounded px-6 py-3">
                    Schedule an impact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-20 flex right-to-left justify-start items-start relative">
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
                      language and extend your reach.
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558044/indiaspeaks/Frame_484_cqz0ng.png"
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558043/indiaspeaks/Frame_484-3_amqebo.png"
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558043/indiaspeaks/Frame_484-1_fsyrhq.png"
                    className="w-8/12 mx-auto"
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704596049/indiaspeaks/Frame_484_1_jcry2f.png"
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
                      language and extend your reach.
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558044/indiaspeaks/Frame_484_cqz0ng.png"
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558043/indiaspeaks/Frame_484-3_amqebo.png"
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558043/indiaspeaks/Frame_484-1_fsyrhq.png"
                    className="w-8/12 mx-auto"
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704596049/indiaspeaks/Frame_484_1_jcry2f.png"
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
                      language and extend your reach.
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558044/indiaspeaks/Frame_484_cqz0ng.png"
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558043/indiaspeaks/Frame_484-3_amqebo.png"
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558043/indiaspeaks/Frame_484-1_fsyrhq.png"
                    className="w-8/12 mx-auto"
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704596049/indiaspeaks/Frame_484_1_jcry2f.png"
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
                      language and extend your reach.
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558044/indiaspeaks/Frame_484_cqz0ng.png"
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558043/indiaspeaks/Frame_484-3_amqebo.png"
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558043/indiaspeaks/Frame_484-1_fsyrhq.png"
                    className="w-8/12 mx-auto"
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704596049/indiaspeaks/Frame_484_1_jcry2f.png"
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
                      language and extend your reach.
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558044/indiaspeaks/Frame_484_cqz0ng.png"
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558043/indiaspeaks/Frame_484-3_amqebo.png"
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704558043/indiaspeaks/Frame_484-1_fsyrhq.png"
                    className="w-8/12 mx-auto"
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
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1704596049/indiaspeaks/Frame_484_1_jcry2f.png"
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
};

export default HeroSection;
