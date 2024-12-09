'use client'
import React from 'react'
import ai from "../assets/services/ai.svg"
import api from "../assets/services/api.svg"
import cloud from "../assets/services/cloud.svg"
import data from "../assets/services/data.svg"
import web from "../assets/services/web.svg"
import microsoft from "../assets/services/microsoft.svg"
import Image from 'next/image'
import {motion} from "framer-motion"
import { fadeIn } from '@/app/varients'
import Link from 'next/link'

const allServices = [
    {
        image: ai,
        title: "AI Integration & Beyond",
        desctiption: "Leverage advanced AI capabilities to enhance your business operations, driving innovation and efficiency with seamless integration",
        primary_color: "#006609",
        bg_color: "#CCFFD0"
    },
    {
        image: microsoft,
        title: "Microsoft Graph & AD Integration",
        desctiption: "Streamline access, enhance data management, and ensure secure connectivity with seamless Microsoft Graph and Active Directory integration.",
        primary_color: "#0033E5",
        bg_color: "#CCD7FF"
    },
    {
        image: cloud,
        title: "Cloud Infrastructure Management",
        desctiption: "Enhance scalability, performance, and security with expertly managed cloud solutions tailored to your business needs.",
        primary_color: "#006664",
        bg_color: "#CCFFFE"
    },
    {
        image: api,
        title: "API Development and Integration",
        desctiption: "Ensure seamless connectivity and communication between your systems with reliable, well-crafted API solutions",
        primary_color: "#665900",
        bg_color: "#FFF8CC"
    },
    {
        image: web,
        title: "Web Application Development",
        desctiption: "Craft dynamic, user-friendly web applications that align perfectly with your brand and drive user engagement.",
        primary_color: "#006664",
        bg_color: "#CCFFFE"
    },
    {
        image: data,
        title: "Data Analytics and Insights",
        desctiption: "Leverage data to uncover insights and drive informed decisions that propel your business forward",
        primary_color: "#0033E5",
        bg_color: "#CCD7FF"
    }
]


const slugify = (title: string) => title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

const Services = () => {
  return (
    <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true}} 
        id='services'
        className='max-w-[1280px] mx-auto py-10 flex flex-col gap-10 px-5 2xl:px-0 lg:py-20'>
        
        <h1
            className='text-[#0033E5] text-[24px] font-bold leading-[28.8px] -tracking-[0.48px] lg:text-[40px] lg:leading-[54px] lg:-tracking-[0.8px]'
        >
            Expertly Crafted Solutions Delivered with Precision
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'>
            {
                allServices.map((service, index)=>(
                    <motion.div 
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true}}
                        key={index} className={`px-5 py-6 flex flex-col gap-5 rounded-xl border-b-[5px]`} style={{backgroundColor: service.bg_color, borderBottomColor: service.primary_color}}>
                        <Link 
                            href={{
                                pathname: `/services`,
                                query: {
                                    title: service.title,
                                    description: service.desctiption 
                                },
                            }}
                        >                        
                            <Image src={service.image} alt="ai"/>
                            <h2 className={`text-[${service.primary_color}] text-xl font-bold leading-[27px] -tracking-[0.4px] lg:text-2xl lg:leading-[32.4px] lg:-tracking-[0.48px]`}>
                                {service.title}
                            </h2>
                            <p className={`text-[${service.primary_color}] text-base font-normal leading-[21.6px] -tracking-[0.32px]`}>
                                {service.desctiption}
                            </p>
                        </Link>
                    </motion.div>
                ))
            }
        </div>
    </motion.div>
  )
}
export default Services