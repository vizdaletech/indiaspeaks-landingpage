import { nunito_sans } from "@/typography/font";
import Image from "next/image";
import * as React from "react";

function PersonalisedPoliticalSection(props) {
  return (
    <section className="center-section hidden md:block">
    <form className="items-stretch bg-white flex flex-col justify-center px-16 py-12 max-md:px-5">
      <header className="bg-primary bg-opacity-10 my-3.5 px-12 rounded-2xl max-md:max-w-full max-md:mr-1 max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0">
            <div className="items-stretch self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <h1 className="text-primary text-4xl font-bold leading-10 max-md:max-w-full">
                Personalized Political Engagement
              </h1>
              <p className={`${nunito_sans.className} text-black text-lg leading-7 mt-4 max-md:max-w-full`}>
                At IndiaSpeaks we foster personalized political engagement by tailoring messages and strategies to individual voter according to preferences, transforming the landscape of campaign outreach and interaction.
              </p>
              <div className="mt-6 py-2 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch self-stretch flex flex-col max-md:mt-8">
                      <h2 className="text-primary text-3xl font-bold leading-10 whitespace-nowrap">
                        Voice Broadcasting{" "}
                      </h2>
                      <p className={`${nunito_sans.className} text-black text-lg leading-6 mt-2.5`}>
                      Delivering voice campaigns from political leaders to every voter by addressing their name                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex grow flex-col max-md:mt-8">
                      <h2 className="text-primary text-3xl font-bold leading-10 whitespace-nowrap">
                        Engagement{" "}
                      </h2>
                      <p className={`${nunito_sans.className} text-black text-lg leading-6 mt-2.5`}>
                        Engaging every voter with personalized voice messages from leaders across all social media platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1707103669/indiaspeaks/lady-with-the-finger_fgbuuz.png"
              className="aspect-[1.02] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              alt=""
            />
          </div>
        </div>
      </header>
    </form>
    </section>
  );
}

export default PersonalisedPoliticalSection;