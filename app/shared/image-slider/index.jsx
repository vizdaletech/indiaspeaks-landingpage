"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ImageSlider = ({ DATA }) => {
  const [activeSlide, setActiveSlide] = useState(DATA[0].name);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const [trackNumber, setTrackNumber] = useState(null);

  const audioRef1 = useRef();
  const audioRef2 = useRef();

  useEffect(() => {
    if (isAudioPlaying && trackNumber === 1) {
      audioRef1.current.play();
    } else {
      audioRef1.current.pause();
    }

    if (isAudioPlaying && trackNumber === 2) {
      audioRef2.current.play();
    } else {
      audioRef2.current.pause();
    }
  }, [isAudioPlaying, trackNumber]);

  return (
    <div className="flex gap-3 w-10/12 ">
      {DATA?.map((data) => (
        <div
          key={data.name}
          className={`${
            activeSlide === data.name ? `w-6/12` : `w-3/12`
          } h-[400px] rounded-md  relative bg-center ${
            data?.imageUrl
          } bg-cover p-3 transition-all duration-300 ease-in-out hover:scale-110 hover:z-20`}
          onMouseEnter={() => {
            isAudioPlaying ? null : setActiveSlide(data?.name);
          }}
        >
          {activeSlide !== data.name && isAudioPlaying && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 rounded-md"></div>
          )}
          <div
            className={`${
              activeSlide === data.name ? `opacity-1` : `opacity-0`
            } transition-all duration-300`}
          >
            <p className="text-white font-semibold">{data?.name}</p>
            <p className="text-secondary font-medium">{data?.role}</p>
          </div>
          <div
            className={`font-semibold absolute bottom-5 text-white text-center w-full left-0 transition-all duration-300 ${
              activeSlide === data.name ? `opacity-0` : `opacity-1`
            }`}
          >
            {data?.name}
          </div>
          {activeSlide === data.name && (
            <div className="absolute bottom-5 flex justify-between w-8/12 left-1/2 transform -translate-x-1/2">
              <div>
                <button
                  className=""
                  onClick={() => {
                    setTrackNumber(1);
                  }}
                >
                  {isAudioPlaying && trackNumber === 1 ? (
                    <Image
                      src="/assets/pause.png"
                      width={50}
                      height={50}
                      alt="Pause Button"
                      className="rounded-1/2"
                      onClick={() => setIsAudioPlaying(false)}
                    />
                  ) : (
                    <Image
                      src="/assets/play.png"
                      width={50}
                      height={50}
                      alt="Play Button"
                      className="rounded-1/2"
                      onClick={() => setIsAudioPlaying(true)}
                    />
                  )}
                </button>
                <audio controls={false} ref={audioRef1} loop>
                  <source src={data.audio} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>{" "}
              </div>{" "}
              <div>
                <button
                  className=""
                  onClick={() => {
                    setTrackNumber(2);
                  }}
                >
                  {isAudioPlaying && trackNumber === 2 ? (
                    <Image
                      src="/assets/pause.png"
                      width={50}
                      height={50}
                      alt="Pause Button"
                      className="rounded-1/2"
                      onClick={() => setIsAudioPlaying(false)}
                    />
                  ) : (
                    <Image
                      src="/assets/play.png"
                      width={50}
                      height={50}
                      alt="Play Button"
                      className="rounded-1/2"
                      onClick={() => setIsAudioPlaying(true)}
                    />
                  )}
                </button>
                <audio controls={false} ref={audioRef2} loop>
                  <source src={data.audio2} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>{" "}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
