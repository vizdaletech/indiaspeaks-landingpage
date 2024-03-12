import React from 'react'
import HeroSection from './desktop/hero-section'
import MyComponent from './desktop/secondary-section'
import HeroSectionMobile from './mobile/heroSectionMobile'
import SliderMobile from './mobile/sliderMobile'
import Ribbon from './desktop/ribbon'
import RibbonMobile from './mobile/ribbonMobile'

const RndPage = () => {
  return (
    <main>
        <HeroSection/>
        <MyComponent />
        <Ribbon/>
       
        {/**Mobile responsive */}

        <HeroSectionMobile/>
        <SliderMobile/> 
        <RibbonMobile/>
    </main>
  )
}

export default RndPage