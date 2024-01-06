import { nunito_sans } from "@/typography/font";
import Image from "next/image";
import React from "react";

function EchoedAuthority(props) {
  return (
    <section className="items-stretch hidden bg-white md:flex flex-col justify-center px-11 py-12 max-md:px-5">
      <div className="px-16 py-12 center-section">
        <div className="gap-10 flex">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto pt-8 pb-12 max-md:mt-10">
              <h1 className="text-primary text-4xl font-bold leading-10">
                Echoed Authority: Our reproduction of leaders voices
              </h1>
              <p className={`text-black text-lg leading-7 mt-3 mb-32 max-md:mb-10 w-[500px] ${nunito_sans.className}`}>
              In the realm of electoral campaigns, receiving better attention from the voters can be game changing. Check out some samples we produced.  
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-6/12 ">
        
                <Image src = "https://res.cloudinary.com/dosjh2min/image/upload/v1704559712/indiaspeaks/stalin_1_c1c1zp.jpg" width={500} height={500} className="w-6/12 object-cover  rounded-lg"/>
                 
                    <Image width={500} height={500} src="https://res.cloudinary.com/dosjh2min/image/upload/v1704559932/indiaspeaks/jayalalitha_u6kzig.jpg"className=" rounded-lg w-3/12 object-cover bg-center" />
                    <Image width={500} height={500}  src="https://res.cloudinary.com/dosjh2min/image/upload/v1704560020/indiaspeaks/modi_qf0j1a.png" className="w-3/12 object-cover  rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default  EchoedAuthority