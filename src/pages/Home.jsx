import { useRef } from "react";
import BannerSection from "./landing/BannerSection";
import CoreFeatures from "./landing/CoreFeatures";
import FaqSection from "./landing/FaqSection";
import Features from "./landing/Features";
import FreeTutorial from "./landing/FreeTutorial";
import PricePlan from "./landing/PricePlan";
import StartLearningBanner from "./landing/StartLearningBanner";
import WorkingProcess from "./landing/WorkingProcess";
import DesignCourse from "./landing/DesignCourse";

const Home = () => {
  const nextSectionRef = useRef(null); 

  const scrollToNextSection = () => {
    nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <BannerSection />
      <Features />
      <CoreFeatures scrollToNextSection={scrollToNextSection} />
      <DesignCourse />
      <WorkingProcess nextSectionRef={nextSectionRef} />
      <PricePlan />
      <FreeTutorial />
      <FaqSection />
      <StartLearningBanner />
    </>
  );
};

export default Home;
