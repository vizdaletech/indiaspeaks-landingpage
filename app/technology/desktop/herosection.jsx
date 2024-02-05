import { nunito_sans } from "@/typography/font";
import Image from "next/image";
import * as React from "react";

function HeroSection(props) {
  return (
    <section className=" bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1704531122/indiaspeaks/Grid_13_pcuf2t.jpg)] bg-cover hidden md:block relative">
      <div className="bg-[#FFF456] w-8 h-8 rounded-full absolute left-1/4 bottom-[30%]" />
      <div className="bg-[#FFF456] w-8 h-8 rounded-full absolute right-[30%] top-[20%]" />
      <div className="bg-[#FFF456] w-8 h-8 rounded-full absolute right-[5%] top-[10%]" />
      <div className="bg-[#FFF456] w-8 h-8 rounded-full absolute right-[5%] bottom-[10%]" />
      <div className="bg-[#55C28D] w-8 h-8 rounded-full absolute left-[5%] top-[20%]" />

      <div className="bg-[#55C28D] w-8 h-8 rounded-full absolute left-[10%] bottom-[10%]" />

      <div className="bg-[#55C28D] w-8 h-8 rounded-full absolute right-1/4 bottom-1/2" />



    <header className="flex flex-col center-section h-screen justify-center items-center">
     <div className="w-[500px] text-center">
        <h1 className="text-6xl font-bold leading-[120%]"> 
        Guiding Progress with Technology
        </h1>
        <p className={`text-lg font-normal mt-5 leading-[150%] ${nunito_sans.className}`}>
        Our approach is centered on user-driven innovation, ensuring that each technological advancement contributes to societal improvement and the continuous progress of humanity
        </p>
        </div>

        <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1704531400/indiaspeaks/Group_469_sfovrk.png" width={80} height={80} className="absolute top-[50%] right-[10%]" />
        
        <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1704531398/indiaspeaks/Group_470_bopoun.png" width={80} height={80} className="absolute top-[20%] right-[20%]" />
        
        <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1704531400/indiaspeaks/Group_468_pbtjrt.png" width={80} height={80} className="absolute bottom-[10%] right-[20%]" />
        
        <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1704531399/indiaspeaks/Group_226_zlzsce.png" width={80} height={80} className="absolute top-[20%] left-[20%]" />
        
        <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1704531399/indiaspeaks/Group_471_f8oceu.png" width={80} height={80} className="absolute top-[50%] left-[10%]" />
        
        <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1704531400/indiaspeaks/Group_467_lt0bke.png" width={80} height={80} className="absolute bottom-[10%] left-[20%]" />
    </header>
    </section>
  );
}

export default HeroSection