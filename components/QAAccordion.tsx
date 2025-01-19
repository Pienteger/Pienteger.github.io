import React, { useState } from 'react'
import Image from 'next/image'
import accordionOpen from "../assets/accordion/collapse_open.svg"
import accordionClose from "../assets/accordion/collapse_close.svg"
import "./style/accordion.css"

const QAAccordion = () => {
    const accordionDatas = [
        {
            title: "What services do you offer?",
            description: "We provide a wide range of services, including custom software development, mobile and web application development, cloud solutions, DevOps services, software consulting, and UI/UX design. Our team specializes in building scalable and high-performing solutions tailored to your business needs."
        },
        {
            title: "How do you ensure the quality of your software?",
            description: "We follow strict quality assurance protocols, including code reviews, unit testing, integration testing, and automated testing. Our team uses the latest tools and methodologies to identify and resolve issues early in the development lifecycle to ensure high-quality software delivery."
        },
        {
            title: "Can you help with software integration into existing systems?",
            description: "Yes, we specialize in integrating new software into existing systems seamlessly. We ensure compatibility, minimize downtime, and optimize performance by thoroughly analyzing your current infrastructure and building robust APIs or middleware solutions."
        },
        {
            title: "What is your approach to UX/UI design?",
            description: "Our UX/UI design approach focuses on user-centric principles. We conduct thorough user research, create interactive wireframes, and design visually appealing interfaces that enhance user experience while maintaining functionality and performance."
        },
        {
            title: "What kind of support do you provide after the software is deployed?",
            description: "We provide comprehensive post-deployment support, including bug fixes, performance monitoring, regular updates, and feature enhancements. Our support team ensures that your software continues to run smoothly and meets evolving business requirements."
        }
    ];


    const [open, setOpen] = useState<number | null>(null);
    const handleAccordionOpen = (index: any) => {
        console.log("clicked", index);
        setOpen(open === index ? null : index);
    }

    return (
        <div className='bg-[#0033E5] 2xl:bg-transparent'>
            <div className='pt-20 max-w-[1280px] mx-auto flex flex-col gap-10 px-5 2xl:px-0'>
                <h2 className='text-[#F0F7FF] text-[24px] font-bold leading-[28.8px] -tracking-[0.48px] lg:text-[40px] lg:leading-[54px] lg:-tracking-[0.8px]'>
                    Quick Answers Here, Saving You Time & Hassle
                </h2>
                <div className='flex flex-col gap-6'>
                    {
                        accordionDatas.map((data, index) => (
                            <div key={index} className='bg-[#1A4DFF] rounded-xl p-6'>
                                <div className='flex justify-between items-center cursor-pointer' onClick={() => handleAccordionOpen(index)}>
                                    <span className='text-[#F0F7FF] text-xl font-bold leading-[28px] -tracking-[0.4px]'>{data.title}</span>
                                    <Image src={open === index ? accordionClose : accordionOpen} alt='collaps icon' />
                                </div>
                                <div className="transition-all duration-500 ease-in-out">
                                    {
                                        <div className={`accordion-description ${open === index ? 'open' : ''}`}>
                                            <p className='text-[#F0F7FF] text-lg font-normal leading-[28px] -tracking-[0.4px] mt-3 mr-12'>{data.description}</p>
                                        </div>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default QAAccordion
