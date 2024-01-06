import HeroSection from '@/political/desktop/herosection'
import React from 'react'
import HeroSectionMobile from './mobile/herosection-mobile'
import PersonalisedPoliticalSection from './desktop/personalised-political-section'
import PersonalisedPoliticalSectionMobile from './mobile/personalised-political-section-mobile'
import EchoedAuthority from './desktop/echoed-authority'
import EchoedAuthorityMobile from './mobile/echoed-authority-mobile'
import ImpactSection from './desktop/impact'
import ImpactMobile from './mobile/impact-mobile'
import ExperienceSection from './desktop/experience-section'
import ExperienceSectionMobile from './mobile/experience-section-mobile'

const UsecasPage = () => {
  return (
    <main>
      <HeroSection />
    <PersonalisedPoliticalSection/>
    <EchoedAuthority/>
    <ImpactSection/>
    <ExperienceSection/>


      <HeroSectionMobile/>
      <PersonalisedPoliticalSectionMobile/>
      <EchoedAuthorityMobile/>
      <ImpactMobile/>
      <ExperienceSectionMobile/>
    </main>
  )
}

export default UsecasPage