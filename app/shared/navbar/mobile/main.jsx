"use client";
import { useEffect, useState } from "react";
import Hamburger from "./hamburger";
import DropDown from "./dropDown";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { nunito_sans } from "@/typography/font";

const links = [
  {
    link: "technology",
    content: "Technology",
  },
  {
    link: "campaign",
    content: "Campaign",
  },
  {
    link: "about",
    content: "About us",
  },
  {
    link : "usecase",
    content : "Use case"
  }
];

const NavbarMobile = () => {
  const [isClicked, setIsclicked] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsclicked(false);
  }, [pathname]);
  return (
    <header
      className={`block md:hidden bg-primary text-white  fixed top-0 left-0 w-screen z-50 ${nunito_sans.className}`}
    >
      <nav className="flex justify-between items-center center-section h-[60px]">
        <Link href="/" className="w-fit">
          <Image
            width={30}
            height={20}
            src="https://res.cloudinary.com/dosjh2min/image/upload/v1704518690/indiaspeaks/main-logo_nbruvq.svg"
            className="w-8/12 h-auto"
          />
        </Link>
        <Hamburger isClicked={isClicked} setIsclicked={setIsclicked} />
      </nav>
      <DropDown isClicked={isClicked} links={links} />
    </header>
  );
};

export default NavbarMobile;
