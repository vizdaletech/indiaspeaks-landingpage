import React from 'react'
import HeroSection from './home/desktop/herosection'
import HeroSectionMobile from './home/mobile/herosection-mobile'

import ConnectingThroughLanguages from './home/desktop/connecting-through-languages'
import ConnectingThroughLanguagesMobile from './home/mobile/connecting-through-languages-mobile'
import EchoedAuthority from './home/desktop/echoed-authority'
import EchoedAuthorityMobile from './home/mobile/echoed-authority-mobile'
import ExploreOurTechnology from './home/desktop/explore-our-technology'
import ExploringOurTechnologyMobile from './home/mobile/exploring-our-technology-mobile'
import CompanyLogos from './home/desktop/company-logo'
import CompanyLogosMobile from './home/mobile/company-logo-mobile'
import ApplicationsInovations from './home/desktop/applications-innovations'
import ApplicationsInovationsMobile from './home/mobile/application-inovation-mobile'


export const metadata = {
  title : "Indiaspeaks",
  description : "Redefining communication Using Artificial Intelligence"
}

const HomePage = () => {
  return (
    <main>
      <HeroSection/>
      <ConnectingThroughLanguages/>
      <EchoedAuthority/>
      <ExploreOurTechnology/>
      <CompanyLogos/>
      <ApplicationsInovations/>


      {/* Mobile */}
      <HeroSectionMobile/>
      <ConnectingThroughLanguagesMobile/>
      <EchoedAuthorityMobile/>
      <ExploringOurTechnologyMobile/>
      <CompanyLogosMobile/>
      <ApplicationsInovationsMobile/>
      </main>
  )
}

export default HomePage