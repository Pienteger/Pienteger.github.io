"use client";

import React from 'react'

import {motion} from "framer-motion"
import { fadeIn } from '@/app/varients';

import "../style/custom.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import location from "@/assets/about/location.svg"
import clock from "@/assets/about/clock.svg"

const allVacancy = [
  {
    position: "Product Designer",
    description: "We’re looking for a mid-level product designer to join our team.",
    dept: "Design",
    primaty_color: "#175CD3",
    dot_color: "#2E90FA",
    border_color: "#B2DDFF",
    bg_color: "#EFF8FF",
    type: "Remote",
    time: "Full-time",
  },{
    position: "Engineering Manager",
    description: "We’re looking for an experienced engineering manager to join our team.",
    dept: "Software Development",
    primaty_color: "#C11574",
    dot_color: "#EE46BC",
    bg_color: "#FDF2FA",
    border_color: "#FCCEEE",
    type: "Remote",
    time: "Full-time",
  },{
    position: "Customer Success Manager",
    description: "We’re looking for a customer success manager to join our team.",
    dept: "Careers",
    primaty_color: "#067647",
    dot_color: "#17B26A",
    bg_color: "#ECFDF3",
    border_color: "#ABEFC6",
    type: "Remote",
    time: "Full-time",
  },{
    position: "Account Executive",
    description: "We’re looking for an account executive to join our team.",
    dept: "Sales",
    primaty_color: "#3538CD",
    dot_color: "#6172F3",
    bg_color: "#EEF4FF",
    border_color: "#C7D7FE",
    type: "Remote",
    time: "Full-time",
  },{
    position: "SEO Marketing Manager",
    description: "We’re looking for an experienced SEO marketing manager to join our team.",
    dept: "Marketing",
    primaty_color: "#B93815",
    dot_color: "#EF6820",
    bg_color: "#FEF6EE",
    border_color: "#F9DBAF",
    type: "Remote",
    time: "Full-time",
  },{
    position: "UX Researcher",
    description: "We’re looking for a senior user researcher to join our team.",
    dept: "Design",
    primaty_color: "#175CD3",
    dot_color: "#2E90FA",
    bg_color: "#EFF8FF",
    border_color: "#B2DDFF",
    type: "Remote",
    time: "Full-time",
  }
]


const Hiring = () => {
  return (
    <motion.div 
        variants={fadeIn("left", 0.06)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true}}
        className='w-full xl:w-[1280px] mx-auto py-16 xl:py-20 flex flex-col gap-16 px-5 2xl:px-0'>
        <div className='flex flex-col gap-5'>
            <h1 className='text-[#0033E5] text-[24px] font-bold leading-[28.8px] -tracking-[0.48px] lg:text-[40px] lg:leading-[54px] lg:-tracking-[0.8px]'>
                We’re a Fast-Growing Team
            </h1>
            <p className='text-[#000B33] text-lg font-normal leading-[28px] lg:text-xl lg:leading-[30x]'>
                We’re always on the lookout for passionate, dynamic, and talented individuals.
            </p>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-16 gap-y-12'>
            {allVacancy.map((vacancy, index)=>(
                <div key={index} className='border-t border-[#E4E7EC] pt-6'>
                    <div className='flex flex-col xl:flex-row xl:items-center gap-2'>
                        <h2 className='text-[#000B33] text-lg font-black leading-[28px]'>{vacancy.position}</h2>
                        <button className='flex items-center gap-[6px] border rounded-full py-[2px] px-[10px] w-fit' style={{borderColor: vacancy.border_color, backgroundColor: vacancy.bg_color}}>
                            <span className='w-2 h-2 rounded-full' style={{backgroundColor:vacancy.dot_color}}></span>
                            <span className="text-[#175CD3] text-sm font-medium leading-[20px]" style={{color: vacancy.primaty_color}}>{vacancy.dept}</span>
                        </button>
                    </div>
                    <p className='mt-3 xl:mt-2 mb-6 text-[#000B33] text-base font-normal leading-[24px]'>{vacancy.description}</p>
                    <div className='flex gap-5'>
                        <div className='flex gap-2'>
                            <Image src={location} alt='location'/>
                            <span className='text-[#000B33] text-base font-medium leading-[24px]'>{vacancy.type}</span>
                        </div>
                        <div className='flex gap-2'>
                            <Image src={clock} alt='clock'/>
                            <span className='text-[#000B33] text-base font-medium leading-[24px]'>{vacancy.time}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Hiring
