import * as React from "react";

function Footer(props) {
  return (
    <footer className="bg-[#212121] hidden md:block  ">
    <section className="items-stretch center-section flex flex-col px-16 py-11 max-md:px-5">
      <div className="mt-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[69%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-start max-md:max-w-full max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0b9d138ecbe6e1f1a8035de343f41cd63ea0ec6f0f38b7c5867f47d7de330d0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-[4.3] object-contain object-center w-[172px] overflow-hidden max-w-full"
                alt="Company Logo"
              />
              <p className="text-white text-sm leading-5 self-stretch mt-6 max-md:max-w-full">
                Platinum Jubilee building, AC Tech Campus, <br />
                Anna University, Guindy, Chennai 600025
              </p>
              <a
                href="tel:+917010389351"
                className="self-stretch text-white text-sm leading-5 underline mt-4 max-md:max-w-full"
              >
                +91 70103 89351
              </a>
              <a
                href="mailto:info@indiaspeaks.ai"
                className="self-stretch text-white text-sm leading-5 underline mt-4 max-md:max-w-full"
              >
                info@indiaspeaks.ai
              </a>
              <div className="items-stretch flex w-24 max-w-full gap-3 mt-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f75d0be237dc0674b15e1915b46030255a544e679d6f869cd9e723616f11c35?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                  alt="Social Media Icon"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fb4f5f9de5ed8365ef6ca9d1ac5b75f7fcb613f9507718c8b70b734e869e7b8?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                  alt="Social Media Icon"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9986f2b20094d62306406bb6caba4e4e2df6c26bb2cbd0256e8361d2274fae99?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                  alt="Social Media Icon"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex justify-between gap-5 max-md:mt-10">
              <div className="items-stretch flex grow basis-[0%] flex-col">
                <div className="text-white text-base font-semibold leading-6 whitespace-nowrap">
                  Technology
                </div>
                <div className="text-white text-base font-semibold leading-6 whitespace-nowrap mt-3">
                  About us
                </div>
                <div className="text-white text-base font-semibold leading-6 whitespace-nowrap mt-3">
                  Contact us
                </div>
              </div>
              <div className="items-stretch flex grow basis-[0%] flex-col">
                <div className="text-white text-base font-semibold leading-6 whitespace-nowrap">
                  AI News Broadcasting
                </div>
                <div className="text-white text-base font-semibold leading-6 whitespace-nowrap mt-3">
                  AI Electoral Campaign
                </div>
                <div className="text-white text-base font-semibold leading-6 whitespace-nowrap mt-3">
                  R&D Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white bg-opacity-10 flex shrink-0 h-px flex-col mt-20 max-md:max-w-full max-md:mt-10" />
      <div className="justify-between items-stretch flex w-full gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
        <div className="text-white text-sm leading-5 grow shrink basis-auto">
          © 2023 IndiaSpeaks. All rights reserved.
        </div>
        <div className="items-stretch flex justify-between gap-5">
          <a
            href="/privacy-policy"
            className="text-white text-sm leading-5 underline grow whitespace-nowrap"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-white text-sm leading-5 underline"
          >
            Terms of Service
          </a>
          <a
            href="/cookie-settings"
            className="text-white text-sm leading-5 underline grow whitespace-nowrap"
          >
            Cookies Settings
          </a>
        </div>
      </div>
    </section>
    </footer>
  );
}

export default Footer;