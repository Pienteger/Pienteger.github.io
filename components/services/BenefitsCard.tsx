'use client'
import React from 'react'
import enhance from "../../assets/selectedServices/benefits/enhance.svg"
import drive from "../../assets/selectedServices/benefits/drive.svg"
import stay from "../../assets/selectedServices/benefits/stay.svg"
import Image from 'next/image'
import {motion} from "framer-motion"
import { fadeIn } from '@/app/varients'

const allServices = [
    {
        image: enhance,
        title: "Enhance Efficiency and Productivity",
        desctiption: "Streamline operations and reduce manual workloads with AI-driven automation, enabling your team to focus on high-value tasks",
        primary_color: "#006609",
        bg_color: "#CCFFD0"
    },
    {
        image: drive,
        title: "Drive Data-Driven Decisions",
        desctiption: "Leverage powerful AI analytics to gain deeper insights into your business, making informed decisions with confidence",
        primary_color: "#0033E5",
        bg_color: "#CCD7FF"
    },
    {
        image: stay,
        title: "Stay Ahead of the Curve",
        desctiption: "With our advanced AI solutions, your business stays at the forefront of innovation, outpacing the competition",
        primary_color: "#665900",
        bg_color: "#FFF8CC"
    }
]


const BenefitsCard = ({service}:any) => {
    const filterServiceTitle = (service:any)=>{
        if (!service) return "";
        const words = service.trim().split(/\s+/);
        return words.slice(0, 2).join(" ");
    }
  return (
    <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true}} 
        className='max-w-[1280px] mx-auto py-10 flex flex-col gap-10 px-5 2xl:px-0 lg:py-20'>
        <h1
            className='text-[#0033E5] text-[24px] font-bold leading-[28.8px] -tracking-[0.48px] lg:text-[40px] lg:leading-[54px] lg:-tracking-[0.8px]'
        >
            {`Our ${filterServiceTitle(service?.title)} Delivers Tangible Benefits`}
        </h1>
        <div className='grid sm:justify-items-center grid-cols-1 2xl:grid-cols-3'>
            {
                allServices.map((service, index)=>(
                    <div key={index} className={`px-5 py-6 flex flex-col gap-5 rounded-xl border-b-[5px] sm:w-[426px]`} style={{backgroundColor: service.bg_color, borderBottomColor: service.primary_color}}>
                        <Image src={service.image} alt="ai"/>
                        <h2 className={`text-[${service.primary_color}] text-xl font-bold leading-[27px] -tracking-[0.4px] lg:text-2xl lg:leading-[32.4px] lg:-tracking-[0.48px]`}>
                            {service.title}
                        </h2>
                        <p className={`text-[${service.primary_color}] text-base font-normal leading-[21.6px] -tracking-[0.32px]`}>
                            {service.desctiption}
                        </p>
                    </div>
                ))
            }
        </div>
    </motion.div>
  )
}
export default BenefitsCard