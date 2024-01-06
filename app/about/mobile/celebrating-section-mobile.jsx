import NunitoSans from "@/shared/typography/NunitoSans";
import * as React from "react";

function CelebratingSectionMobile(props) {
  return (
    <div className="items-stretch bg-stone-50 flex center-section md:hidden flex-col px-9 py-12">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/54753eb721b1fb312f37728ce1faa528b8998a83c2a6188d5ddf5f609698c061?"
        className="aspect-[0.9] object-contain object-center w-full overflow-hidden mt-1"
      />
      <div className="text-blue-700 text-2xl font-bold leading-8 tracking-normal mt-7">
        Celebrating Diversity where every experience matters
      </div>
      <div className="text-black text-base leading-6 tracking-normal mt-3 mb-1">
        <NunitoSans>
         At IndiaSpeaks, we embrace the strength of diversity. We foster an
        inclusive environment where individuals can connect seamlessly across
        language barriers, facilitated by our advanced voice technology.
        </NunitoSans>
      </div>
    </div>
  );
}


export default CelebratingSectionMobile