import { nunito_sans } from "@/typography/font";
import * as React from "react";

function EnhancingInovationMobile(props) {
  return (
    <section className="items-stretch bg-primary md:hidden flex max-w-[338px] center-section rounded-md flex-col px-6 py-6">
      <h4 className="text-white text-3xl font-bold leading-10 tracking-tight">
        Harness the Potential of Ethical Technology
      </h4>
      <p className={`text-white ${nunito_sans.className} text-base leading-6 tracking-normal mt-5`}>
        At IndiaSpeaks technology isn't just a tool, but a force for positive change – handled
        responsibly and ethically to elevate experiences and uplift communities.
      </p>
      <div className="items-stretch flex justify-between gap-5 mt-5">
        <div className="items-center flex grow basis-[0%] flex-col">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/232a840523a6d1ff48897ae5126c97c52a84debbbc7b7cfcec2e24b24040fd6d?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
            className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full"
            alt="Responsible"
          />
          <p className="self-stretch text-white text-center text-xl font-bold leading-7 whitespace-nowrap mt-3">
            Responsible
          </p>
          <p className={`text-white text-center text-base leading-6 self-stretch ${nunito_sans.className} mt-3`}>
            Responsible use of technology guides our commitment to sustainable and mindful practices.
          </p>
        </div>
        <div className="items-center flex grow basis-[0%] flex-col pb-3.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dfeb2c51c5c53902b80586696492a4f36bb929e1e7d46a1059d1d139c6affa7?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
            className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full"
            alt="Ethical"
          />
          <p className="self-stretch text-white text-center text-xl font-bold leading-7 whitespace-nowrap mt-4">
            Ethical
          </p>
          <p className={`text-white text-center text-base leading-6 self-stretch ${nunito_sans.className} mt-3`}>
            We prioritize ethical tech use, ensuring inclusivity and effectiveness in communication.
          </p>
        </div>
      </div>
    </section>
  );
}

export default EnhancingInovationMobile