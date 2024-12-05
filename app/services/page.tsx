import Approach from "@/components/Approach";
import BenefitsCard from "@/components/services/BenefitsCard";
import Hero from "@/components/services/Hero";
import TechStack from "@/components/services/TechStack";
import SuccessSwiper from "@/components/SuccessSwiper";
import ThoughtsWithAccordion from "@/components/ThoughtsWithAccordion";

const Services= ({searchParams}:any) => {
  return (
    <>
      <Hero service={searchParams}/>
      <TechStack />
      <BenefitsCard service={searchParams}/>
      <Approach />
      <SuccessSwiper />
      <ThoughtsWithAccordion />
    </>
  );
};

export default Services;
