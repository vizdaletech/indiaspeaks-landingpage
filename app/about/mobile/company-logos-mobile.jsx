import Image from "next/image";
import * as React from "react";

function CompanyLogosMobile(props) {
  return (
    <section className="center-section  items-center flex md:hidden flex-col" role="form">
      <h3 className="text-neutral-900 text-center text-xl font-semibold leading-6 tracking-normal w-[290px]"> 
        Trusted by industry-leading companies around the globe 
      </h3>

      <div className="grid grid-cols-2 mt-10">
    <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1707287108/indiaspeaks/Frame_138_nqhpjf.png" width={500} height={500} className="w-10/12 " />
    <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1707287107/indiaspeaks/Frame_133_lgx6f6.png" width={500} height={500} className="w-10/12 " />
    <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1707287108/indiaspeaks/Frame_139_mugirf.png" width={500} height={500} className="w-10/12 " />
    <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1707287107/indiaspeaks/Frame_134_rtpmni.png" width={500} height={500} className="w-10/12 " />
    <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1707287107/indiaspeaks/Frame_140_nmitl4.png" width={500} height={500} className="w-10/12 " />
    <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1707287107/indiaspeaks/Frame_135_lcndxf.png" width={500} height={500} className="w-10/12 " />
    <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1707287107/indiaspeaks/Frame_141_e5xhf4.png" width={500} height={500} className="w-10/12 " />
    <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1707287108/indiaspeaks/Frame_137_r1gqd0.png" width={500} height={500} className="w-10/12 " />
    <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1707287108/indiaspeaks/Frame_142_cijyqv.png" width={500} height={500} className="w-10/12 " />
    <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1707287108/indiaspeaks/Frame_136_bgx4oj.png" width={500} height={500} className="w-10/12 " />
    <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1707287107/indiaspeaks/Frame_143_juovkv.png" width={500} height={500} className="w-10/12 " />
      </div>
    </section>
  );
}

export default  CompanyLogosMobile