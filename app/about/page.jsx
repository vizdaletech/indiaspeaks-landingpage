import React from 'react'
import HeroSection from './desktop/herosection'
import HeroSectionMobile from './mobile/herosection-mobile'
import SculptingSection from './desktop/sculpting-section'
import SculptingSectionMobile from './mobile/sculpting-section'
import DynamicSection from './desktop/dynamic-section'
import DynamicSectionMobile from './mobile/dynamic-section-mobile'
import JourneySection from './desktop/journey-section'
import TeamSection from './desktop/team-section'
import TeamSectionMobile from './mobile/team-section-mobile'
import CelebratingSection from './desktop/celebrating-section'
import CelebratingSectionMobile from './mobile/celebrating-section-mobile'
import CompanyLogos from './desktop/company-logos'
import CompanyLogosMobile from './mobile/company-logos-mobile'
import JoinOurTeam from './desktop/join-our-team'
import ExperienceSection from './desktop/experience-section'

const AboutPage = () => {
  return (
    <main>
      <HeroSection/>
      <SculptingSection/>
      <DynamicSection/>

      <HeroSectionMobile/>
      <SculptingSectionMobile/>
      <DynamicSectionMobile/>

      <JourneySection/>
      <TeamSection/>
      <TeamSectionMobile/>

      <CelebratingSection/>
      <CelebratingSectionMobile/>

      <CompanyLogos/>
      <CompanyLogosMobile/>

    <JoinOurTeam/>
    <ExperienceSection/>
    </main>
  )
}

export default AboutPage