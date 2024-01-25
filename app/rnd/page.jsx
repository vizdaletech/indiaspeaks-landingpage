import React from 'react'
import HeroSection from './desktop/hero-section'
import Slider from './desktop/slider'
import HeroSectionMobile from './mobile/heroSectionMobile'
import SliderMobile from './mobile/sliderMobile'
import Ribbon from './desktop/ribbon'
import RibbonMobile from './mobile/ribbonMobile'

const RndPage = () => {
  return (
    <main>
        <HeroSection/>
        <Slider/>
        <Ribbon/>

        {/* Mobile */}
        <HeroSectionMobile/>
        <SliderMobile/>
        <RibbonMobile/>
    </main>
  )
}

export default RndPage