"use client"
import { Envelope, Phone } from "@phosphor-icons/react";
import Link from "next/link";
import * as React from "react";

function FooterMobile(props) {
  return (
    <footer className="bg-[#212121] md:hidden">
      <div className="justify-center center-section items-stretch  flex  flex-col">
        <div className="items-center  flex w-full flex-col px-5 py-10">
          <Link href="/" className="block mr-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5886c658927c0010198fd8a1ec5c25bb0d453a946e2f99bb6aa12bcb6aa4869a?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="aspect-[4.2] object-contain object-center w-[172px] overflow-hidden max-w-full self-start"
              alt=""
            />
          </Link>
          <p className="self-stretch text-white text-base leading-7 whitespace-nowrap mt-4">
          Platinum Jubilee building, AC Tech Campus, <br/>
Anna University, Guindy, Chennai 600025
          </p>
          <a
            href="tel:+917010389351"
            className="text-white text-base leading-7 self-stretch mt-1.5"
          >
            <Phone size={32} weight="fill" color = "white" />


          </a>
          <a
            href="mailto:info@indiaspeaks.ai"
            className="text-white text-base leading-7 self-stretch mt-1.5"
          >
           <Envelope size={32} weight="fill" />
          </a>
          <div className="items-stretch flex w-10 max-w-full gap-3 mt-1.5 self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed3f40f14765686e4eb6b739370ce0f37ee26f5612ba3a8a3fc18344e618c265?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
              className="aspect-square object-contain object-center w-2/12 overflow-hidden shrink-0 flex-1"
              alt=""
            />
          </div>
          <Link
            href="/usecase"
            className="text-white text-base font-semibold leading-6 self-stretch mt-8"
          >
            AI Electoral Campaign
          </Link>

          <Link
            href="/news-reading" className="text-base text-white font-semibold leading-6 self-stretch mt-5">
            AI News Broadcasting
          </Link>
          <Link href = "/rnd" className=" text-base text-white font-semibold leading-6 self-stretch mt-5">
            R&D Projects
          </Link>
          <Link
            href="/technology"
            className="text-white text-base font-semibold leading-6 self-stretch mt-5"
          >
            Technology
          </Link>
          <Link
            href="/about"
            className="text-white text-base font-semibold leading-6 self-stretch mt-5"
          >
            About us
          </Link>
          <a
            href="https://calendly.com/gomanirajan/30min"
            target="_blank"
            rel="noreferrer"
            className="text-white text-base font-semibold leading-6 self-stretch mt-5"
          >
            Contact us
          </a>
          <p className="text-white text-sm leading-5 self-stretch mt-8">
            &copy; 2023 IndiaSpeaks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterMobile;
