import { nunito_sans } from "@/typography/font";
import * as React from "react";

const HeroSection = (props) => {
  return (
    <div className="bg-primary hidden md:flex flex-col justify-center items-stretch py-24 overflow-hidden">
         <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c346c35f5d06ff86c95ae5288f956e78a2121900c06348da554562a1b6371fe7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c346c35f5d06ff86c95ae5288f956e78a2121900c06348da554562a1b6371fe7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c346c35f5d06ff86c95ae5288f956e78a2121900c06348da554562a1b6371fe7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c346c35f5d06ff86c95ae5288f956e78a2121900c06348da554562a1b6371fe7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c346c35f5d06ff86c95ae5288f956e78a2121900c06348da554562a1b6371fe7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c346c35f5d06ff86c95ae5288f956e78a2121900c06348da554562a1b6371fe7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c346c35f5d06ff86c95ae5288f956e78a2121900c06348da554562a1b6371fe7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c346c35f5d06ff86c95ae5288f956e78a2121900c06348da554562a1b6371fe7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="absolute h-[150vh] w-full object-cover object-center inset-0"
        />
      <div className="flex-col overflow-hidden relative flex center-section w-full items-stretch pl-16 py-12 max-md:max-w-full max-md:pl-5">
       
        <div className="relative mt-8 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
              <div className="text-white text-5xl font-bold leading-[67px] relative max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
                Redefining communication Using Artificial Intelligence
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
              <div className={`items-stretch relative flex grow flex-col max-md:max-w-full max-md:mt-10 ${nunito_sans.className}`}>
                <div className={`text-white text-xl leading-8 max-md:max-w-full`}>
                  Empowering individuals and businesses across India with our
                  suite of advanced AI solutions in speech and language
                  technology. Schedule a meeting to know more :)
                </div>
                <div className="items-stretch flex gap-4 mt-6 self-start">
                  <div className="text-black text-lg bg-secondary font-bold leading-7  justify-center items-stretch rounded px-6 py-3">
                    Schedule an impact
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative items-stretch flex justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="items-stretch bg-white flex grow basis-[0%] flex-col px-10 py-12 rounded-3xl max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/118838a0613f8e10fe3cc75a86d36e791ec7b80dd556a6892128745e8484b9e2?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="aspect-[1.13] object-contain object-center w-[220px] overflow-hidden self-center max-w-full"
            />
            <div className="text-black text-2xl font-bold leading-8 self-center whitespace-nowrap mt-7">
              Cultural Connection
            </div>
            <div className="text-black text-center text-base leading-5 mt-2.5 mb-1.5">
               Connect with the culture of your audience. Shape genuine
              relationships that transcend linguistic boundaries.
            </div>
          </div>
          <div className="items-stretch bg-white flex grow basis-[0%] flex-col px-10 py-10 rounded-3xl self-start max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eac28e6e4e679ac8721f6ca67d4c174fd72f654ae52d2a997f46c3facb3f96ac?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="aspect-[2.82] object-contain object-center w-[209px] justify-center items-center overflow-hidden self-center max-w-full"
            />
            <div className="text-black text-2xl font-bold leading-8 self-center whitespace-nowrap mt-7">
              Unparalleled precision
            </div>
            <div className="text-black text-center text-base leading-5 mt-2.5">
              Capture the true essence of your voice with our precise
              technology, to deliver the results you deserve.
            </div>
          </div>
          <div className="items-stretch bg-white flex grow basis-[0%] flex-col px-10 py-12 rounded-3xl max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/08fff164405ad707354ab5e22873f704348406753b7f8670e104496cf788b341?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="aspect-[1.07] object-contain object-center w-52 overflow-hidden self-center max-w-full"
            />
            <div className="text-black text-2xl font-bold leading-8 self-center whitespace-nowrap mt-7">
              Time Saving
            </div>
            <div className="text-black text-center text-base leading-5 mt-2.5 mb-1.5">
              Get things done faster with automated voice solutions, allowing
              you to use your time efficiently.
            </div>
          </div>
          <div className="bg-white flex basis-[0%] flex-col pl-10 py-12 rounded-3xl self-start items-end max-md:pl-5">
            <div className="text-black text-2xl font-bold leading-8 mt-24 max-md:mt-10">
              Cost Effective
            </div>
            <div className="text-black text-center text-base leading-5 self-stretch mt-2.5">
              Reduce your costs by automated AI voice technology. Experience
              efficient and affordable communication
            </div>
          </div>
        </div>
        <div className="relative flex justify-between gap-5 items-end max-md:max-w-full max-md:flex-wrap -mt-28">
          <div className="items-stretch bg-white flex grow basis-[0%] flex-col mt-32 px-10 py-10 rounded-3xl max-md:mt-10 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1bf7812a81aba504959ee479ca8f220de902d229cb718267ed3eea150cef4dd?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="aspect-[2.81] object-contain object-center w-52 items-center overflow-hidden self-center max-w-full"
            />
            <div className="text-black text-2xl font-bold leading-8 self-center whitespace-nowrap mt-8">
              Multilingual Support
            </div>
            <div className="text-black text-center text-base leading-5 mt-2.5">
              Speak to your audience in the language you want effortlessly, to
              extend your reach.
            </div>
          </div>
          <div className="items-center bg-white self-stretch flex grow basis-[0%] flex-col px-10 py-12 rounded-3xl max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cf3b7014b39f4a09e702876c27d02451731d3c68d35cc25b8d72c8589423698?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="aspect-[1.08] object-contain object-center w-[180px] justify-center items-center overflow-hidden max-w-full"
            />
            <div className="text-black text-2xl font-bold leading-8 self-stretch whitespace-nowrap mt-7">
              Personalized Interaction
            </div>
            <div className="text-black text-center text-base leading-5 self-stretch mt-2.5 mb-2">
               Voice solutions with a personalised touch. Your words, our
              innovation, a conversation like no other.
            </div>
          </div>
          <div className="items-center bg-white flex grow basis-[0%] flex-col mt-28 px-10 py-10 rounded-3xl max-md:mt-10 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/06dcfcbf8554487c5d8e3848f22bc6ff1da18c3ac72c8f42e6f580d4fefa8110?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="aspect-[2.81] object-contain object-center w-52 justify-center items-center overflow-hidden max-w-full"
            />
            <div className="text-black text-2xl font-bold leading-8 self-stretch whitespace-nowrap mt-8">
              Engage Beyond Boundries
            </div>
            <div className="text-black text-center text-base leading-5 self-stretch mt-2.5">
              Boost your engagement with our powerful voice experience. Connect
              to the bigger audience, and deliver information effectively.
            </div>
          </div>
          <div className="bg-white self-stretch flex basis-[0%] flex-col pl-10 py-12 rounded-3xl items-end max-md:pl-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/66bb56fcfd478a6c7ebac32c439dd702eca0edf8c822c7952cb28b512bbf85a6?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/66bb56fcfd478a6c7ebac32c439dd702eca0edf8c822c7952cb28b512bbf85a6?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66bb56fcfd478a6c7ebac32c439dd702eca0edf8c822c7952cb28b512bbf85a6?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/66bb56fcfd478a6c7ebac32c439dd702eca0edf8c822c7952cb28b512bbf85a6?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/66bb56fcfd478a6c7ebac32c439dd702eca0edf8c822c7952cb28b512bbf85a6?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66bb56fcfd478a6c7ebac32c439dd702eca0edf8c822c7952cb28b512bbf85a6?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/66bb56fcfd478a6c7ebac32c439dd702eca0edf8c822c7952cb28b512bbf85a6?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/66bb56fcfd478a6c7ebac32c439dd702eca0edf8c822c7952cb28b512bbf85a6?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="aspect-[0.2] object-contain object-center w-9 overflow-hidden max-w-full mt-1.5"
            />
            <div className="text-black text-2xl font-bold leading-8 self-stretch mt-7">
              Seamless Content Creation
            </div>
            <div className="text-black text-center text-base leading-5 w-[289px] ml-2.5 mt-2.5 mb-2 self-start">
              Create lasting impact with your audience by generating relevant
              content in a seamless manner.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default HeroSection