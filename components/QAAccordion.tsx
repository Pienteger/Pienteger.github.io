'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import accordionOpen from "../assets/accordion/collapse_open.svg"
import accordionClose from "../assets/accordion/collapse_close.svg"
import "./style/accordion.css"


const QAAccordion = () => {
    const accordionDatas = [
        {
            title: "What services do you offer",
            description: "We adhere to rigorous quality assurance processes throughout the development lifecycle. This includes regular code reviews, automated and manual testing, and performance monitoring. Our goal is to deliver high-quality software that meets your requirements and exceeds your expectations"
        },{
            title: "How do you ensure the quality of your software?",
            description: "We adhere to rigorous quality assurance processes throughout the development lifecycle. This includes regular code reviews, automated and manual testing, and performance monitoring. Our goal is to deliver high-quality software that meets your requirements and exceeds your expectations"
        },{
            title: "Can you help with software integration into existing systems?",
            description: "We adhere to rigorous quality assurance processes throughout the development lifecycle. This includes regular code reviews, automated and manual testing, and performance monitoring. Our goal is to deliver high-quality software that meets your requirements and exceeds your expectations"
        },{
            title: "What is your approach to UX/UI design?",
            description: "We adhere to rigorous quality assurance processes throughout the development lifecycle. This includes regular code reviews, automated and manual testing, and performance monitoring. Our goal is to deliver high-quality software that meets your requirements and exceeds your expectations"
        },{
            title: "What kind of support do you provide after the software is deployed?",
            description: "We adhere to rigorous quality assurance processes throughout the development lifecycle. This includes regular code reviews, automated and manual testing, and performance monitoring. Our goal is to deliver high-quality software that meets your requirements and exceeds your expectations"
        }
    ];

    const [open, setOpen] = useState<number | null>(null);
    const handleAccordionOpen = (index:any) =>{
        console.log("clicked", index);
        setOpen(open === index ? null : index);
    }
   
  return (
    <div className='pt-10 max-w-[1280px] mx-auto flex flex-col gap-10'>
        <h1 className='text-[#F0F7FF] text-[40px] font-bold leading-[54px] -tracking-[0.8px]'>
            Quick Answers Here, Saving You Time & Hassle
        </h1>
        <div className='flex flex-col gap-6'>
            {
                accordionDatas.map((data, index)=>(
                    <div key={index} className='bg-[#1A4DFF] rounded-xl p-6'>
                        <div className='flex justify-between items-center cursor-pointer' onClick={()=>handleAccordionOpen(index)}>
                            <span className='text-[#F0F7FF] text-xl font-bold leading-[28px] -tracking-[0.4px]'>{data.title}</span>
                            <Image src={open === index ? accordionClose : accordionOpen} alt='collaps icon'/>
                        </div>
                        <div className="transition-all duration-500 ease-in-out">
                            {
                                <div  className={`accordion-description ${open === index ? 'open' : ''}`}>
                                    <p className='text-[#F0F7FF] text-lg font-normal leading-[28px] -tracking-[0.4px] mt-3 mr-12'>{data.description}</p>
                                </div>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default QAAccordion
