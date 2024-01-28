"use client"
import React, { useState } from 'react'

const ImageSlider = ({DATA}) => {
    const [activeSlide, setActiveSlide] = useState(DATA[0].name);

    return (
    <div className="flex gap-3 w-10/12 ">
    {
      DATA?.map(data => (
        <div
        key = {data.name}
        className={`${
          activeSlide === data.name ? `w-6/12` : `w-3/12`
        } h-[400px] rounded-md  relative bg-center ${data?.imageUrl} bg-cover p-3 transition-all duration-300 ease-in-out cursor-pointer`}
        onMouseEnter={() => setActiveSlide(data?.name)}
      >
        <div
          className={`${
            activeSlide === data.name ? `opacity-1` : `opacity-0`
          } transition-all duration-300`}
        >
          <p className="text-white font-semibold">{data.name || data.name}</p>
          <p className="text-secondary font-medium">{data.role || data.role}</p>
        </div>
        <div
          className={`font-semibold absolute bottom-5 text-white text-center w-full left-0 transition-all duration-300 ${
            activeSlide === data.name ? `opacity-0` : `opacity-1`
          }`}
        >
          {data.name || data.name}
        </div>
      </div>
      ))
    }
  </div>
  )
}

export default ImageSlider