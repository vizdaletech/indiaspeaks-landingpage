import Image from "next/image";
import * as React from "react";

function CompanyLogosMobile(props) {
  return (
    <section className="center-section  items-center flex md:hidden flex-col" role="form">
      <h3 className="text-neutral-900 text-center text-xl font-semibold leading-6 tracking-normal w-[290px]"> 
        Trusted by industry-leading companies around the globe 
      </h3>

    <Image src = "/assets/company-logos.png" width={500} height={500} className="w-10/12 mt-5 mx-auto" />
    </section>
  );
}

export default  CompanyLogosMobile