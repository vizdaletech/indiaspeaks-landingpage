import { nunito_sans } from "@/typography/font";
import Image from "next/image";
import * as React from "react";

function HeroSection(props) {
  return (
    <section className="bg-blue-50  bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1704531122/indiaspeaks/Grid_13_pcuf2t.jpg)] bg-cover hidden md:block ">
    <header className="flex flex-col center-section h-screen justify-center items-center">
     <div className="w-[500px] text-center">
        <h1 className="text-6xl font-bold leading-[120%]"> 
        Guiding Progress with Technology
        </h1>
        <p className={`text-lg font-normal mt-5 leading-[150%] ${nunito_sans.className}`}>
        Our approach focuses on user-centered innovation, ensuring that every technological advancement contributes to social betterment and the continuous progress of humanity.
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