
import React from 'react';

import { Metadata } from "next";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import SuccessSwiper from "@/components/SuccessSwiper";
import ThoughtsWithAccordion from "@/components/ThoughtsWithAccordion";
import FloatingBar from "@/components/FloatingBar";

export const metadata: Metadata = {
  title: "Pienteger® - A software company that you can trust.",
  description: "A software company that you can trust.",
};

const Home: React.FC = () => {

  return (
    <>
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