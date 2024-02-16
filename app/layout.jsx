"use client";
import "./globals.css";
import { roboto } from "@/typography/font";
import Navbar from "./shared/navbar/desktop/main";
import NavbarMobile from "./shared/navbar/mobile/main";
import Footer from "./shared/footer/desktop/main";
import FooterMobile from "./shared/footer/mobile/main";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function RootLayout({ children }) {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false)
    },6000) 
  },[])

  return (
    <html lang="en">
      <body className={roboto.className}>
        {showLoading ? (
          <figure className="h-screen w-full flex justify-center items-center bg-primary">
            <Image src = {`https://res.cloudinary.com/dosjh2min/image/upload/v1708066678/indiaspeaks/Loading_Animation_jhj4ki.gif?${new Date().getTime()}`} width={500} height={500} />
          </figure>
        ) : (
          <>
            <Navbar />
            <NavbarMobile />
            <main>{children}</main>
            <Footer />
            <FooterMobile />
          </>
        )}
      </body>
    </html>
  );
}
