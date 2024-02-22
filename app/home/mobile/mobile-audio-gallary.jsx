"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MobileAudioGallary = ({ data, playerName, setPlayerName }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState();
  const [trackNumber, setTrackNumber] = useState(null);
  const [activeSlide, setActiveSlide] = useState(null);
  const audioRef1 = useRef();
  const audioRef2 = useRef();
  useEffect(() => {
    if (isAudioPlaying && trackNumber === 1) {
      audioRef1?.current?.play();
    } else {
      audioRef1?.current?.pause();
    }

    if (isAudioPlaying && trackNumber === 2) {
      audioRef2?.current?.play();
    } else {
      audioRef2?.current?.pause();
    }
  }, [isAudioPlaying, trackNumber]);
  return (
    <figure key={data.name} className="relative ">
      <Image
        src={data.image}
        width={500}
        height={500}
        className="w-full mt-5 z-20"
        alt={data.name}
      />
      <div className="absolute top-10 left-5">
        <p className="text-white font-semibold">{data.name}</p>
        <p className="text-secondary ">{data.role}</p>
      </div>
      {
        <div className="flex justify-between w-8/12 mx-auto absolute bottom-5 left-1/2 transform -translate-x-1/2">
          {
            <div className="">
              <button
                className=""
                disabled={
                  playerName !== data.name && playerName.length > 1
                    ? true
                    : false
                }
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
                    onClick={() => {
                      setIsAudioPlaying(false);
                      setPlayerName("");
                    }}
                  />
                ) : (
                  <Image
                    src="/assets/play.png"
                    width={50}
                    height={50}
                    alt="Play Button"
                    className="rounded-1/2"
                    onClick={() => {
                      setPlayerName(data.name);

                      setIsAudioPlaying(true);
                    }}
                  />
                )}
              </button>
              <audio controls={false} ref={audioRef1} loop>
                <source src={data.audio} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
          }
          {
            <div className="">
              <button
                className=""
                disabled={
                  playerName !== data.name && playerName.length > 1
                    ? true
                    : false
                }
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
                    onClick={() => {
                      setIsAudioPlaying(false);
                      setPlayerName("");
                    }}
                  />
                ) : (
                  <Image
                    src="/assets/play.png"
                    width={50}
                    height={50}
                    alt="Play Button"
                    className="rounded-1/2"
                    onClick={() => {
                      setPlayerName(data.name);

                      setIsAudioPlaying(true);
                    }}
                  />
                )}
              </button>
              <audio controls={false} ref={audioRef2} loop>
                <source src={data.audio2} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
          }
        </div>
      }
    </figure>
  );
};

export default MobileAudioGallary;
