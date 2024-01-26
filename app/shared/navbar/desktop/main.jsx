"use client";
import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CaretDown } from "@phosphor-icons/react";
import Image from "next/image";

import { nunito_sans } from "@/typography/font";

const Navbar = (props) => {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [yValue, setYValue] = useState(`-translate-y-full`);
  const [yInnerValue, setYInnerValue] = useState("-translate-y-full");
  const handleServiceClick = () => {
    setIsDropOpen((prev) => !prev);
  };
  const pathname = usePathname();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (!e.target.classList.contains("dropdown")) {
        setIsDropOpen(false);
      }
    });
    setIsDropOpen(false);

    document.body.addEventListener("wheel", () => {
      setIsDropOpen(false);
    });
    setYValue(`translate-y-0`);

    setTimeout(() => {
      setYInnerValue(`translate-y-0`);
    }, 1000);
  }, [pathname]);

  console.log(pathname);

  return (
    <nav
      className={`fixed ${nunito_sans.className} w-screen left-0 right-0 h-fit bg-primary text-white z-[99] ${yValue} transition-transform duration-700 ease-in-out`}
    >
      <div
        className={`hidden md:flex justify-between items-center center-section w-full gap-2 px-16 py-3.5  max-md:max-w-full max-md:flex-wrap max-md:px-5  transition-all duration-700 ease-in-out ${yInnerValue}`}
      >
        <Link href="/">
          <Image
            loading="lazy"
            src="https://res.cloudinary.com/dosjh2min/image/upload/v1704518690/indiaspeaks/main-logo_nbruvq.svg"
            height={50}
            width={100}
            className="aspect-[3.61] object-contain object-center w-[159px] overflow-hidden shrink-0 max-w-full"
          />
        </Link>
        <div className="justify-between  items-center flex max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <Link
            href="/technology"
            className={` text-base whitespace-nowrap px-4 relative py-2 rounded-sm navlink-animation navlink-careers hover:text-white z-20  border-transparent `}
          >
            Technology
          </Link>
       
          <div
            className="justify-center  relative items-center self-center flex my-auto cursor-pointer px-4  py-2 gap-3"
            onClick={handleServiceClick}
          >
            <div className="flex gap-2 items-center navlink-animation">
          <p
              
              className={`text-neutral-950 text-base whitespace-nowrap  relative rounded-sm z-20
               hover:-2 -2 border-transparent`}
            >
              Use Cases
            </p>
            <CaretDown
              size={16}
              className={`${
                isDropOpen ? `rotate-180` : `rotate-0`
              } transition-transform duration-300`}
            />
            </div>
              <div className={`w-[250px] ${isDropOpen ?  `h-34` : `h-0 `} transition-all duration-300 overflow-hidden dropdown z-[100]  bg-primary  flex flex-col items-start justify-between absolute right-0 top-[50px] text-sm`}>
                <Link
                  href="/political"
                    className={` border-transparent w-full px-6 py-3 ${isDropOpen ? `translate-y-0 opacity-1` : `-translate-y-full opacity-0`} transition-all duration-300 hover:delay-0 hover:duration-75 text-white hover:text-primary hover:bg-white`}
                >
                 AI Electoral Campign
                                 </Link>
                <Link
                  href="/news-reading"
                  className={` border-transparent w-full px-6 py-3 ${isDropOpen ? `translate-y-0 opacity-1` : `-translate-y-full opacity-0`} transition-all duration-300  hover:delay-0 hover:duration-75 text-white hover:text-primary hover:bg-white`}
                >
                 AI News Reading
                </Link>
                <Link
                  href="/rnd"
                  className={` border-transparent w-full px-6 py-3 ${isDropOpen ? `translate-y-0 opacity-1` : `-translate-y-full opacity-0`} transition-all duration-300  hover:delay-0 hover:duration-75 text-white hover:text-primary hover:bg-white`}
                >
              R & D Projects
                </Link>
              </div>
          </div>
          <Link
            href="/about"
            className={` text-base whitespace-nowrap px-4 relative py-2 rounded-sm navlink-animation navlink-about hover:text-white z-20   border-transparent `}
          >
            About Us
          </Link>

          <Link
           href = "/contact-us" 
           className="text-black text-base font-semibold whitespace-nowrap flex justify-center items-center  bg-secondary px-5 py-3  rounded-sm "
          >
            Schedule an impact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
