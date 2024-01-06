import NunitoSans from "@/shared/typography/NunitoSans";
import * as React from "react";

function CelebratingSection(props) {
  return (
    <div className="items-stretch bg-stone-50 md:flex flex-col justify-center px-16 py-12 max-md:px-5 center-section hidden">
      <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="items-stretch self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-black text-4xl font-bold leading-10 max-md:max-w-full">
                Celebrating Diversity where every experience matters
              </div>
              <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                <NunitoSans>
                 At IndiaSpeaks, we embrace the strength of diversity. We foster
                an inclusive environment where individuals can connect
                seamlessly across language barriers, facilitated by our advanced
                voice technology.
                </NunitoSans>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/204b7375b9795e5b894953f1d9ee64d91b1ae153869537829d633afa59c26a64?"
              className="aspect-[0.96] object-contain object-center w-full justify-center items-center overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


export default CelebratingSection
