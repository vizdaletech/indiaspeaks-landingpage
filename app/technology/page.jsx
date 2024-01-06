import React from "react";
import HeroSection from "@/technology/desktop/herosection";
import HeroSectionMobile from "@/technology/mobile/herosectionmobile";
import SpeakingSection from "./desktop/speaking-volumes-section";
import SpeakingVolumeSectionMobile from "./mobile/speaking-volumes-section";
import TechnologicalMastery from "./desktop/technological-mastery";
import TechnologicalMasteryMobile from "./mobile/technological-master-mobile";
import EnhancingInovation from "./desktop/enhancing-inovation";
import EnhancingInovationMobile from "./mobile/enhancing-inovation-mobile";
import EnablingEffective from "./desktop/enabling-effective";
import EnablingEffectiveMobile from "./mobile/enabling-effect-mobile";
import ExperienceSection from "./desktop/experience-seciotn";
import ExperienceSectionMobile from "./mobile/experience-section";

const TechnologyPage = () => {
  return (
    <main>
      <HeroSection />
      <SpeakingSection />
      <TechnologicalMastery/>
      <EnhancingInovation/>
      <EnablingEffective/>
      <ExperienceSection/>

      <HeroSectionMobile />
      <SpeakingVolumeSectionMobile/>
      <TechnologicalMasteryMobile/>
      <EnhancingInovationMobile/>
      <EnablingEffectiveMobile/>
      <ExperienceSectionMobile/>
    </main>
  );
};

export default TechnologyPage;
