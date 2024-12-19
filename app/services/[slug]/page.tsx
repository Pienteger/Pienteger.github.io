'use client';

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
import { useEffect, useState } from "react";
import NoPage from "@/app/not-found";


const Services= ({params}:any) => {

  const customBorder = {
    borderBottom: '0.5px solid',
    borderImageSource: 'linear-gradient(90deg, rgba(0, 51, 229, 0) 0%, rgba(0, 51, 229, 0.5) 100%)',
    borderImageSlice: 1
  }

const [allServices, allSetServices] = useState<any>([]);

useEffect(()=>{
  fetch('/services/data.json')
  .then(res=>res.json())
  .then(data=>allSetServices(data))
  .catch(err=>console.log(err))
},[])

const { slug } = params;
const service = allServices.find((service: any) => service.slug === slug);

return (

    <>
      <header className='flex-init bg-[#F0F7FF]'>
        <Header primaryColor="#0033E5" logo={logo} customBorder={customBorder} mobilenavopen={mobilenavopen} mobilenavclose={mobilenavclose}/>
      </header>
      {
        service?
        <div>
          <Hero service={service} />
          <TechStack />
          <BenefitsCard service={service} />
          <Approach />
          <SuccessSwiper />
          <ThoughtsWithAccordion />
        </div>
        :<NoPage/>
      }
    </>
  );
};

export default Services;
