"use client";
import { Envelope, Phone } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

function Footer(props) {
  return (
    <footer className="bg-[#212121] hidden md:block  ">
      <section className="items-stretch center-section flex flex-col px-16 py-11 max-md:px-5">
        <div className="mt-8 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[69%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-start max-md:max-w-full max-md:mt-10">
                <Link href="/">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0b9d138ecbe6e1f1a8035de343f41cd63ea0ec6f0f38b7c5867f47d7de330d0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="aspect-[4.3] object-contain object-center w-[172px] overflow-hidden max-w-full"
                    alt="Company Logo"
                  />
                </Link>
                <p className="text-white text-sm leading-5 self-stretch mt-6 max-md:max-w-full">
                  Platinum Jubilee building, AC Tech<br />Campus, 
                  Anna University, Guindy,<br />Chennai 600025
                </p>

                
              </div>
            </div>
            <div className="flex borderflex-col items-stretch w-[40%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex justify-between gap-5 max-md:mt-10">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <Link
                    href="/technology"
                    className="text-white text-base font-semibold leading-6 whitespace-nowrap"
                  >
                    Technology
                  </Link>
                  <Link
                    href="/about"
                    className="text-white text-base font-semibold leading-6 whitespace-nowrap mt-3"
                  >
                    About us
                  </Link>
                  <Link
                    href="/contact-us"
                    className="text-white text-base font-semibold leading-6 whitespace-nowrap mt-3"
                  >
                    Contact us
                  </Link>
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <Link
                    href="/usecase"
                    className="text-white text-base font-semibold leading-6 whitespace-nowrap mb-3"
                  >
                  AI News Broadcasting
                  </Link>
                  <Link
                    href="/news-reading"
                    className="text-white text-base font-semibold leading-6 whitespace-nowrap"
                  >
                    AI Electoral Campaign
                  </Link>

                  <Link
                    href="/rnd"
                    className="text-white text-base font-semibold leading-6 whitespace-nowrap mt-3"
                  >
                   Technological Forge
                  </Link>
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <p
                    href="/usecase"
                    className="text-white text-base font-semibold leading-6 whitespace-nowrap mb-3"
                  >
                  +91 70103 89351
                  </p>
                  <Link
                    href="/news-reading"
                    className="text-white text-base font-semibold leading-6 whitespace-nowrap"
                  >
                   info@indiaspeaks.ai
                  </Link>

                  {/* <Link
                    href="/rnd"
                    className="text-white text-base font-semibold leading-6 whitespace-nowrap mt-3"
                  >
                   Technological Forge
                  </Link> */}
                  <div className="items-center flex max-w-full gap-3 mt-4">
                  
                  <a
                    href="tel:+917010389351"
                    className="self-stretch text-white text-sm leading-5 underline max-md:max-w-full"
                  >
                    <Phone size={32} weight="fill" />
                  </a>
                  <a
                    href="mailto:info@indiaspeaks.ai"
                    className="self-stretch text-white text-sm leading-5 underline max-md:max-w-full"
                  >
                    <Envelope size={32} weight="fill" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/indiaspeaks-research-labs/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9986f2b20094d62306406bb6caba4e4e2df6c26bb2cbd0256e8361d2274fae99?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                      alt="Social Media Icon"
                    />
                  </a>
                </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white bg-opacity-10 flex shrink-0 h-px flex-col mt-20 max-md:max-w-full max-md:mt-10" />
        <div className="justify-between items-stretch flex w-full gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
          <div className="text-white text-sm leading-5 grow shrink basis-auto">
            © {new Date().getFullYear()} IndiaSpeaks. All rights reserved.
          </div>
          <a
            href="https://www.vizdale.com"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <Image
              src="/assets/powered-by-vizdale.png"
              width={200}
              height={50}
            />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
