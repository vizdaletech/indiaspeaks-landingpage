import { nunito_sans } from "@/typography/font";
import * as React from "react";

function ExperienceSection(props) {
  return (
    <section className="bg-primary hidden md:block">
      <header className="header items-stretch center-section flex flex-col justify-center px-16 py-6 max-md:px-5">
        <div className="nav flex items-center">
       
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/27069f062cc4bc8ad69e007bf2f758160152e5695cca037799d2bc178dd448e1?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="logo aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full my-auto"
              alt="Logo"
            />
          <nav className="nav-items items-stretch flex justify-between gap-5 px-4 py-3 w-full">
            <div className="items-center flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
              <div className="text-container  flex grow basis-[0%] flex-col max-md:max-w-full">
                <h1 className="title-text text-white text-3xl font-semibold leading-10 max-md:max-w-full">
                  Experience Our Innovative Voice Technology
                </h1>
                <p className={`subtitle-text text-white text-base leading-6 max-md:max-w-full ${nunito_sans.className}`}>
                  Connect deeply with audiences across India through our
                  powerful.
                </p>
              </div>
             
            </div>
            <div className={`button-container text-black text-base leading-6 whitespace-nowrap justify-end items-stretch  ml-auto bg-secondary self-center my-auto px-5 py-2 border-solid border-secondary ${nunito_sans.className} font-bold`}>
                <button
                  type="button"
                  aria-label="Contact Us"
                  className="contact-button"
                >
                  Contact us
                </button>
              </div>
          </nav>
        </div>
      </header>
    </section>
  );
}

export default  ExperienceSection