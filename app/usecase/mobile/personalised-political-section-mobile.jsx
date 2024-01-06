import { nunito_sans } from "@/typography/font";
import React from "react";

function PersonalisedPoliticalSectionMobile() {
  return (
    <section className="md:hidden">
    <div className="items-stretch center-section bg-violet-100 flex  w-full flex-col mx-auto pl-3 pr-5 py-6 rounded-lg">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eeb0aed248de35e84c34f73918bdcefa6b711262d1387bba193463940ec443a8?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&" className="aspect-[0.89] object-contain object-center w-full overflow-hidden" />
      <p className="text-primary text-3xl font-bold tracking-normal mt-10">Personalized Political Engagement</p>
      <p className={`${nunito_sans.className} text-black text-lg leading-7 mt-4`}>At IndiaSpeaks we foster personalized political engagement by tailoring messages and strategies to individual voter according to preferences, transforming the landscape of campaign outreach and interaction.</p>
      <p className="text-primary text-xl font-bold leading-7 mt-6">Voice Broadcasting</p>
      <p className={`text-black text-base leading-5 w-72 mt-3 ${nunito_sans.className}`}>Personalized, tailored voice campaigns from political leaders are delivered to every voter</p>
      <p className="text-primary text-xl font-bold leading-7 whitespace-nowrap mt-4">Engagement</p>
      <p className={`text-black text-base leading-5 mt-3 ${nunito_sans.className}`}>Connecting with every voter across all the social media platforms through thorough personalized.</p>
    </div>
    </section>
  );
}
export default PersonalisedPoliticalSectionMobile;