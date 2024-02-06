import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const NewsGallary = ({ news, setPlayedName, playedName }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const audioRef = useRef();

  useEffect(() => {
    if (isAudioPlaying) {
        setPlayedName(news.name)
      audioRef.current.play();
    } else {
        setPlayedName("")
      audioRef.current.pause();
    }
  }, [isAudioPlaying]);
  return (
    <div
      className={`w-6/12 h-[400px] rounded-md ${news.imageUrl} relative bg-center bg-cover p-3 transition-all duration-300 ease-in-out cursor-pointer`}
    >
      <div
        className={`font-semibold absolute bottom-5 flex justify-between w-10/12 text-white left-1/2 -translate-x-1/2 transition-all duration-300 `}
      >
        <span>{news.name}</span>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
          <button
            className=""
            disabled = {news.name  !== playedName && playedName.length > 1 && true}
            onClick={() => setIsAudioPlaying((prev) => !prev)}
          >
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
            <source src={news.audio} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
};

export default NewsGallary;
