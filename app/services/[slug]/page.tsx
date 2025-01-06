import Approach from "@/components/Approach";
import Header from "@/components/Header";
import BenefitsCard from "@/components/services/BenefitsCard";
import Hero from "@/components/services/Hero";
import TechStack from "@/components/services/TechStack";
import SuccessSwiper from "@/components/SuccessSwiper";
import ThoughtsWithAccordion from "@/components/ThoughtsWithAccordion";
import logo from "@/assets/bluenewlogo2024.png";

import mobilenavopen from "@/assets/bluemobilenavopen.svg"
import mobilenavclose from "@/assets/bluemobilenavclose.svg"
import servicesData from "@/public/services/data.json"
import { Metadata } from "next";
import NoPage from "@/app/not-found";



export const metadata: Metadata = {
  title: "Services | Pienteger®",
  description: "Discover the wide range of services offered by Pienteger® – innovative solutions tailored to your needs.",
};


const Services= ({params}:any) => {

  const customBorder = {
    borderBottom: '0.5px solid',
    borderImageSource: 'linear-gradient(90deg, rgba(0, 51, 229, 0) 0%, rgba(0, 51, 229, 0.5) 100%)',
    borderImageSlice: 1
  }

  const { slug } = params;
  const service = servicesData.find((service: any) => service.slug === slug);

  if(!service) return <NoPage/>;
  

return (
    <>
      <header className='flex-init bg-[#F0F7FF] sticky top-0 z-[999]'>
        <Header primaryColor="#0033E5" logo={logo} customBorder={customBorder} mobilenavopen={mobilenavopen} mobilenavclose={mobilenavclose}/>
      </header>
      <Hero service={service} />
      <TechStack />
      <BenefitsCard service={service} />
      <Approach />
      <SuccessSwiper />
      <ThoughtsWithAccordion />
    </>
  );
};

export default Services;
