import React from "react";

function DynamicSection(props) {
  return (
    <section className="hidden md:block">
    <div className="items-stretch center-section  flex flex-col justify-center px-16 py-12">
      <header className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="items-stretch self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <h1 className="text-primary text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]" aria-label="Dynamic support from StartupTN" role="heading">Dynamic support from StartupTN</h1>
              <p className="text-black text-lg leading-7 mt-6 max-md:max-w-full">IndiaSpeaks is fueled by unwavering support from StartupTN. With a reliable commitment to innovation, we strive to connect humanity and transform the way people communicate.</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0 rounded-md overflow-hidden">
            <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95f76eb972f28c0b0b9b34b2fd3aacf1ef1df7ee50c7c0b4c29e313df7b6fd96?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95f76eb972f28c0b0b9b34b2fd3aacf1ef1df7ee50c7c0b4c29e313df7b6fd96?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95f76eb972f28c0b0b9b34b2fd3aacf1ef1df7ee50c7c0b4c29e313df7b6fd96?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95f76eb972f28c0b0b9b34b2fd3aacf1ef1df7ee50c7c0b4c29e313df7b6fd96?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/95f76eb972f28c0b0b9b34b2fd3aacf1ef1df7ee50c7c0b4c29e313df7b6fd96?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95f76eb972f28c0b0b9b34b2fd3aacf1ef1df7ee50c7c0b4c29e313df7b6fd96?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95f76eb972f28c0b0b9b34b2fd3aacf1ef1df7ee50c7c0b4c29e313df7b6fd96?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95f76eb972f28c0b0b9b34b2fd3aacf1ef1df7ee50c7c0b4c29e313df7b6fd96?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"className="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10" alt="" />
          </div>
        </div>
      </header>
    </div>
    </section>
  );
}

export default DynamicSection;