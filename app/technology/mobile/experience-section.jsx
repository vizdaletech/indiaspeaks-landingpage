import { nunito_sans } from "@/typography/font";
import Link from "next/link";
import React from "react";

function ExperienceSectionMobile(props) {
  return (
    <form className="bg-primary md:hidden py-16">
        <div className="center-section">
      <header className="header  ">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bafe14d0b5419df5bb41394fe3d0c1137b386ec0f0ec81b12ac45adbec24e315?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full mt-2.5"
          alt="Logo"
        />
      </header>
      <section className="main-content">
        <header className="header">
          <h2 className="text-white text-2xl font-semibold leading-9 self-stretch mt-6">
            Experience Our Innovative Voice Technology
          </h2>
        </header>
        <div className="text-white text-base leading-6 self-stretch mt-5">
          Connect deeply with audiences across India through our powerful.
        </div>
        <p  className="mt-8"/> 
        <Link href = "/" className={`text-black text-base border bg-secondary mt-5 border-solid border-secondary py-2 px-4 rounded-sm ${nunito_sans.className} font-semibold`}
>
            Contact
        </Link>
        {/* <Link
          href="#contact"
          className="text-black text-base border bg-secondary -mb-5 border-solid border-secondary"
        >
          Contact us
        </Link> */}
      </section>
      </div>
    </form>
  );
}
export default  ExperienceSectionMobile;