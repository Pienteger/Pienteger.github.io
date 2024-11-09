
import Image, { StaticImageData } from "next/image";
import React from 'react';
import kk_icon from '../assets/kk_icon.png';

import reactlogo from "../assets/react.svg";
import dotnetlogo from "../assets/dotnet.jpeg";
import pythonlogo from "../assets/python.svg";
import sqlserverlogo from "../assets/sqlserver.svg";
import postgresqllogo from "../assets/postgresql.svg";
import vuelogo from "../assets/vue.svg";
import javascriptlogo from "../assets/javascript.svg";
import wordpresslogo from "../assets/wordpress.svg";
import azurelogo from "../assets/azure.svg";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";


import { Metadata } from "next";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Approach from "@/components/Approach";

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
    </>
  );
}


export default Home;