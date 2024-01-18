import React from "react";

const HarmonyOfLanguagesMobile = () => {
  return (
    <section className="md:hidden mt-10">
      <div className="flex max-w-[326px] flex-col pb-2.5 px-5">
        <div className="text-primary text-3xl font-bold leading-10 self-stretch w-full">
          Harmony of
          <br />
          Languages we <br />
          support{" "}
        </div>
        <div className="text-black text-base leading-6 self-stretch w-full mt-3">
          We support multiple languages to make news more accessible for
          everyone. Check out samples of our AI reciting news in different
          languages.
        </div>
        <div className="flex-col overflow-hidden self-stretch relative flex aspect-[0.8670212765957447] w-full justify-center items-stretch mt-6 py-px">
          <img
            loading="lazy"
            srcSet="..."
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div className="relative flex w-full flex-col justify-center items-stretch">
            <span className="flex w-full flex-col items-stretch pl-4 pt-5">
              <div className="text-stone-50 text-lg font-bold leading-5">
                Tamil
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ee2ac5a405fc90112136c4d4be64df2a53bc0a7704cd34cd227c56a8a156d8c?"
                className="aspect-square object-contain object-center w-[78px] overflow-hidden max-w-full mt-64 self-end"
              />
            </span>
          </div>
        </div>
        <div className="items-stretch self-center flex w-[68px] max-w-full gap-2 mt-6 px-px">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/24f4dd1e2498ed4479dd233df8da97c91952c18779cd76f94a84ba7cae70e8ec?"
            className="aspect-[1.17] object-contain object-center w-full fill-primary overflow-hidden shrink-0 flex-1"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5093eb679ff865a100467114782436ec2fc4dafb108b637173853018a5ac49da?"
            className="aspect-square object-contain object-center w-full fill-primary overflow-hidden shrink-0 flex-1"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e198a4d674e87ce4c7b5286e85b8e6f0da5c515aa0885523a26797cd702d0ad5?"
            className="aspect-square object-contain object-center w-full fill-primary overflow-hidden shrink-0 flex-1"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a5cab1a916d7ccc7f8032ad697007d79cc0d4477207576cc1ba9d7e8ca7d136?"
            className="aspect-square object-contain object-center w-full fill-primary overflow-hidden shrink-0 flex-1"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b36a9e70c1a3a5cd19052271969b37e7943d9f70e59c2568d26f930cb9bc24a?"
            className="aspect-[1.17] object-contain object-center w-full fill-primary overflow-hidden shrink-0 flex-1"
          />
        </div>
      </div>
    </section>
  );
};

export default HarmonyOfLanguagesMobile;
