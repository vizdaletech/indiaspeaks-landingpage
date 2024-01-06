import NunitoSans from "@/shared/typography/NunitoSans";
import React from "react";

function DynamicSectionMobile(props) {
  return (
    <form className="items-stretch bg-white flex center-section md:hidden flex-col py-12">
      <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f68f15c0d9c94d4636159f0e96aa889eb69a56ec936befed1011d581dfd385b0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f68f15c0d9c94d4636159f0e96aa889eb69a56ec936befed1011d581dfd385b0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f68f15c0d9c94d4636159f0e96aa889eb69a56ec936befed1011d581dfd385b0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f68f15c0d9c94d4636159f0e96aa889eb69a56ec936befed1011d581dfd385b0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f68f15c0d9c94d4636159f0e96aa889eb69a56ec936befed1011d581dfd385b0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f68f15c0d9c94d4636159f0e96aa889eb69a56ec936befed1011d581dfd385b0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f68f15c0d9c94d4636159f0e96aa889eb69a56ec936befed1011d581dfd385b0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f68f15c0d9c94d4636159f0e96aa889eb69a56ec936befed1011d581dfd385b0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"className="aspect-square object-contain object-center rounded-lg w-full overflow-hidden" />
      <h2 className="text-primary text-3xl font-bold  leading-10 tracking-tight mt-7">
        Dynamic support from StartupTN
      </h2>
      <div className="text-black text-lg leading-7 mt-7">
        <NunitoSans>
        IndiaSpeaks, fueled by unwavering support from StartupTN, is at the forefront of redefining communication across
        the diverse landscape of India. With a reliable commitment to innovation, we strive to connect communities,
        transforming the way people communicate and share ideas nationwide.
        </NunitoSans>
      </div>
    </form>
  );
}

export default DynamicSectionMobile