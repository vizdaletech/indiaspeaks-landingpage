"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ImageSlider = ({ DATA }) => {
  const [activeSlide, setActiveSlide] = useState(DATA[0].name);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const audioRef = useRef();

  useEffect(() => {
    if (isAudioPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div className="flex gap-3 w-10/12 ">
      {DATA?.map((data) => (
        <div
          key={data.name}
          className={`${
            activeSlide === data.name ? `w-6/12` : `w-3/12`
          } h-[400px] rounded-md  relative bg-center ${
            data?.imageUrl
          } bg-cover p-3 transition-all duration-300 ease-in-out cursor-pointer`}
          onMouseEnter={() => {
            isAudioPlaying ? null : setActiveSlide(data?.name);
          }}
        >
          <div
            className={`${
              activeSlide === data.name ? `opacity-1` : `opacity-0`
            } transition-all duration-300`}
          >
            <p className="text-white font-semibold">{data?.name}</p>
            <p className="text-secondary font-medium">
              {data?.role}
            </p>
          </div>
          <div
            className={`font-semibold absolute bottom-5 text-white text-center w-full left-0 transition-all duration-300 ${
              activeSlide === data.name ? `opacity-0` : `opacity-1`
            }`}
          >
            {data?.name}
          </div>
          {activeSlide === data.name && (
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
              <button
                className=""
                onClick={() => setIsAudioPlaying((prev) => !prev)}
              >
                {isAudioPlaying ? <Image src = "/assets/pause.png" width={50} height={50} alt = "Pause Button" className="rounded-1/2" /> : <Image src = "/assets/play.png" width={50} height={50} alt = "Play Button" className="rounded-1/2" />}
              </button> 
              <audio controls={false} ref={audioRef} loop>
                <source src={data.audio} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
