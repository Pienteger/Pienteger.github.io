'use client'
import React from 'react'
import line from "../../assets/selectedServices/hero/line.svg"
import Image from 'next/image';
import {motion} from "framer-motion";
import { fadeIn } from '@/app/varients';


const Hero = ({service}:any) => {
  return (
    <div
        className='bg-[#F0F7FF] overflow-hidden relative'>
            <div className='max-w-[1280px] mx-auto flex flex-col items-center lg:relative lg:items-start lg:px-5 2xl:px-0'>    
                <motion.div 
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true}}
                    className='w-full py-10 px-5 text-[#0033E5] flex flex-col gap-6 lg:py-[90px] lg:px-0 xl:w-[740px]'>
                        <h1 className='font-medium text-[30px] leading-[36px] -tracking-[0.6px] text-center lg:text-[64px] lg:leading-[86.4px] lg:-tracking-[1.28px] lg:text-start'>
                            {service?.title}
                        </h1>
                        <p className='font-normal text-lg leading-[24.3px] -tracking-[0.36px] text-center lg:text-start lg:text-xl lg:leading-[27px] lg:-tracking-[0.4px]'>
                            {service?.description}
                        </p>
                        <div className='flex gap-6 justify-center lg:justify-normal'>
                            <button className='px-[41px] py-3 text-[#FAFFFA] bg-[#0033E5] font-medium text-base rounded-[200px] leading-[21.6px] -tracking-[0.32px]'>
                                Contact Us
                            </button>
                            <button className='px-[47px] py-3 text-[#0033E5] font-medium text-base rounded-[200px] border border-[#0033E5] leading-[21.6px] -tracking-[0.32px]'>
                                Start Free
                            </button>
                        </div>
                </motion.div>                
            </div>
            <Image src={line} alt='pattern image' className="absolute bottom-0 md:-bottom-20  left-1/2 w-1/2" />
    </div>
  )
}
export default Hero