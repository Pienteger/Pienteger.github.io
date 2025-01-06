
import React from 'react';

import { Metadata } from "next";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import SuccessSwiper from "@/components/SuccessSwiper";
import ThoughtsWithAccordion from "@/components/ThoughtsWithAccordion";
import FloatingBar from "@/components/FloatingBar";
import Header from '@/components/Header';
import logo from "@/assets/newlogo2024.png";
import mobilenavopen from "@/assets/mobilenavopen.svg"
import mobilenavclose from "@/assets/mobilenavclose.svg"

export const metadata: Metadata = {
  title: "Pienteger® - A software company that you can trust.",
  description: "A software company that you can trust.",
};

const Home: React.FC = () => {

  const customBorder = {
    borderBottom: '0.5px solid',
    borderImageSource: 'linear-gradient(90deg, rgba(244, 222, 200, 0) 0%, rgba(244, 222, 200, 0.5) 100%)',
    borderImageSlice: 1
  }

  return (
    <>
      <header className='flex-init bg-[#0033E5] sticky top-0 z-[999]'>
        <Header primaryColor="#F0F7FF" logo={logo} customBorder={customBorder} mobilenavopen={mobilenavopen} mobilenavclose={mobilenavclose}/>
      </header>
      <Hero/>
      <TechStack/>
      <Services/>
      <Approach/>
      <SuccessSwiper/>
      <ThoughtsWithAccordion/>
      {/* <FloatingBar/> */}
    </>
  );
}


export default Home;