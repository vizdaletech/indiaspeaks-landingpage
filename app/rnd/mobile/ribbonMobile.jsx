import Link from "next/link";
import React from "react";

const RibbonMobile = () => {
  return (
    <section className="md:hidden bg-primary ">
      <div className="flex max-w-[360px] flex-col px-5 py-12 items-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cd756c9ab3b9155dda75dc1c04a1f55a061fb43bb013fd56541a0ca00fbbd85?"
          className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full mt-2.5"
        />
        <div className="text-white text-2xl font-semibold leading-9 self-stretch mt-6">
          Experience Our Innovative Voice Technology
        </div>
        <div className="text-white text-base leading-6 self-stretch mt-4">
          Connect deeply with audiences across India through our powerful.
        </div>
        <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-secondary mt-4 mb-2.5 px-5 py-2 border-solid border-secondary">
          <Link href = "/contact-us">
          Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RibbonMobile;
