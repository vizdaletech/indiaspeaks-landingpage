import React from "react";
import HeroSection from "./desktop/heroSection";
import HeroSectionMobile from "./mobile/heroSectionMobile";
import EngagingPresentation from "./desktop/engaging-presentation";
import EngagingPresentationMobile from "./mobile/engaging-presentation-mobile";
import HarmonyOfLanguages from "./desktop/harmony-of-languages";
import HarmonyOfLanguagesMobile from "./mobile/harmony-of-languages-mobile";
import EfficiencyOfAi from "./desktop/efficiency-of-ai";
import EfficiencyOfAiMobile from "./mobile/efficiency-of-ai-mobile";
import ExperienceOur from "./desktop/experience-our";
import ExperienceOurMobile from "./mobile/experience-our-mobile";

const NewsReadingPage = () => {
  return (
    <main>
      <HeroSection />
      <EngagingPresentation />
      <HarmonyOfLanguages />
      <EfficiencyOfAi/>
    <ExperienceOur/>
      {/* Mobile */}
      <HeroSectionMobile />
      <EngagingPresentationMobile />
      <HarmonyOfLanguagesMobile />
      <EfficiencyOfAiMobile/>
      <ExperienceOurMobile/>
    </main>
  );
};

export default NewsReadingPage;
