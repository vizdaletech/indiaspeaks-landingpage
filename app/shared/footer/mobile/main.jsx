import * as React from "react";

function FooterMobile(props) {
  return (
    <footer className="bg-[#212121] md:hidden">
    <div className="justify-center center-section items-stretch  flex  flex-col">
      <div className="items-center  flex w-full flex-col px-5 py-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5886c658927c0010198fd8a1ec5c25bb0d453a946e2f99bb6aa12bcb6aa4869a?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-[4.2] object-contain object-center w-[172px] overflow-hidden max-w-full self-start"
          alt=""
        />
        <p className="self-stretch text-white text-base leading-7 whitespace-nowrap mt-4">AIC, Anna University, Guindy Chennai 91</p>
        <p className="text-white text-base leading-7 self-stretch mt-1.5">+91 70103 89351</p>
        <p className="text-white text-base leading-7 self-stretch mt-1.5">info@indiaspeaks.ai</p>
        <div className="items-stretch flex w-24 max-w-full gap-3 mt-1.5 self-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/28c5f1d9ca05b230650d19f019b4656c32f5c78a4b9ae7000d783376ceeaf7fb?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
            alt=""
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cce8f30c40b5d5f2ce192fb5caf046a56a93cc060be8cfe35bf801e9ceea616?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
            alt=""
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed3f40f14765686e4eb6b739370ce0f37ee26f5612ba3a8a3fc18344e618c265?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
            alt=""
          />
        </div>
        <h3 className="text-white text-base font-semibold leading-6 self-stretch mt-8">AI News Broadcasting</h3>
        <h3 className="text-white text-base font-semibold leading-6 self-stretch mt-5">AI Electoral Campaign</h3>
        <h3 className="text-white text-base font-semibold leading-6 self-stretch mt-5">R&D Projects</h3>
        <h3 className="text-white text-base font-semibold leading-6 self-stretch mt-5">Technology</h3>
        <h3 className="text-white text-base font-semibold leading-6 self-stretch mt-5">About us</h3>
        <h3 className="text-white text-base font-semibold leading-6 self-stretch mt-5">Contact us</h3>
        <p className="text-white text-sm leading-5 self-stretch mt-8">&copy; 2023 IndiaSpeaks. All rights reserved.</p>
      </div>
    </div>
    </footer>
  );
}

export default FooterMobile