"use client"
import MobileAudioGallary from "@/home/mobile/mobile-audio-gallary";
import { NEWS } from "@/shared/contents";
import React, { useState } from "react";

const HarmonyOfLanguagesMobile = () => {
  const [playerName, setPlayerName] = useState("")
  return (
    <section className="md:hidden mt-10 center-section">
      <div className="flex flex-col">
        <div className="text-primary text-3xl font-bold leading-10 self-stretch w-full">
          Harmony of
          <br />
          Languages we <br />
          support{" "}
        </div>
        <div className="text-black text-base leading-6 self-stretch w-full mt-3">
          We support multiple languages to make news more accessible for
          everyone. Check out samples of our AI reciting news in different
          languages.
        </div>
        <div className="w-full mt-6">
          {NEWS.map(data => (
            <MobileAudioGallary data = {data} key = {data.name} setPlayerName={setPlayerName} playerName = {playerName} />
          ))}
       
        </div>
        
      </div>
    </section>
  );
};

export default HarmonyOfLanguagesMobile;
