"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MobileAudioGallary = ({ data, playerName, setPlayerName }) => {
    const [isAudioPlaying, setIsAudioPlaying] = useState()
    const audioRef = useRef();

    useEffect(() => {
        if(isAudioPlaying){
            setPlayerName(data.name)
            audioRef?.current?.play()
        }
        else{
            setPlayerName("")

            audioRef?.current?.pause()
        }
    },[isAudioPlaying])
  return (
    <figure key={data.name} className="relative">
      <Image
        src={data.image}
        width={500}
        height={500}
        className="w-full mt-5 z-20"
        alt = {data.name}
      />
<div className="absolute top-10 left-5">
    <p className="text-white font-semibold">{data.name}</p>
    <p className="text-secondary ">{data.role}</p>
</div>
   {<div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <button className="" disabled = {playerName !== data.name &&  playerName.length > 1 ? true : false} onClick={() => {
            setIsAudioPlaying((prev) => !prev)
       }}>
          {isAudioPlaying ? (
            <Image
              src="/assets/pause.png"
              width={50}
              height={50}
              alt="Pause Button"
              className="rounded-1/2"
            />
          ) : (
            <Image
              src="/assets/play.png"
              width={50}
              height={50}
              alt="Play Button"
              className="rounded-1/2"
            />
          )}
        </button>
        <audio controls={false} ref={audioRef} loop>
          <source src={data.audio} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </div>}

    </figure>
  );
};

export default MobileAudioGallary;
