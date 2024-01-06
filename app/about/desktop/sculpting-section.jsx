import NunitoSans from "@/shared/typography/NunitoSans";
import * as React from "react";

function SculptingSection(props) {
  return (
    <section className="hidden md:block">

    <div className="items-stretch bg-stone-50 flex flex-col center-section px-16 py-12 max-md:px-5">
      <header className="text-primary text-4xl font-bold leading-10 w-[778px] max-w-full mt-16 self-start max-md:mt-10">
        Sculpting Connectivity: The Heartbeat of IndiaSpeaks
      </header>
      <div className="text-black text-lg leading-7 w-[778px] max-w-full mt-6 self-start">
        <NunitoSans>
        At IndiaSpeaks, we catalyze connections and architect enhanced communication experiences, transcending barriers with voice technologies to boost connectivity and foster a world where every message resonates effortlessly.
        </NunitoSans>
      </div>
      <form className="mt-8 mb-10 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="bg-primary/10 rounded-lg flex grow flex-col w-full pt-3 pb-11 px-4 items-start max-md:max-w-full max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a38efe8e80773f05bc01ec20bef351337832fad31e035ebdabb65e4793e5503?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full"
                alt="Vision Image"
              />
              <div className="self-stretch text-primary text-3xl font-bold leading-10 mt-6 max-md:max-w-full">
                Vision
              </div>
              <div className="self-stretch text-black text-xl leading-8 mt-4 max-md:max-w-full">
                <NunitoSans>
                Our vision aims to redefine global communication using voice technologies. As we strive to be the vanguard in this transformative journey, our commitment is to elevate human potential across the world.
                </NunitoSans>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-primary/10 rounded-lg flex grow flex-col w-full pt-3 pb-12 px-4 items-start max-md:max-w-full max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/23d15c658a84240cae8f95a5b3829c27b68a5b2d36822dfb6e3ac8a4f8d3e1d8?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full"
                alt="Mission Image"
              />
              <div className="self-stretch text-primary text-3xl font-bold leading-10 mt-6 max-md:max-w-full">
                Mission
              </div>
              <div className="self-stretch text-black text-xl leading-8 mt-4 mb-6 max-md:max-w-full">
                <NunitoSans>
                Our vanguards stand steadfast in our mission to revolutionize communication across India's rich linguistic spectrum through the deployment of advanced AI technology.
                </NunitoSans>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </section>

  );
}

export default  SculptingSection