import React from 'react'
import pattern from "../assets/hero_pattern.png";
import new_pattern from "../assets/hero_patter_new.png";
import line from "../assets/hero_line.svg";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='bg-[#0033E5] relative overflow-hidden'>
        <Image src={line} alt='pattern image' className="absolute -bottom-20 w-3/4" />
        <div className='max-w-[1280px] mx-auto flex flex-col md:gap-[145px] md:relative'>    
            <div className='w-full pt-10 px-5 text-[#F0F7FF] flex flex-col gap-6  md:w-[780px] md:py-[90px] md:px-0'>
                <h1 className='font-medium text-[30px] leading-[36px] -tracking-[0.6px] text-center md:text-[64px] md:leading-[86.4px] md:-tracking-[1.28px] md:text-start'>
                    Elevate Your Business with Bespoke Software Solution
                </h1>
                <p className='font-normal text-lg leading-[24.3px] -tracking-[0.36px] text-center md:text-start md:text-xl md:leading-[27px] md:-tracking-[0.4px]'>
                    We are committed to providing you with the best software solutions for your business
                </p>
                <div className='flex gap-6 justify-center md:justify-normal'>
                    <button className='px-[41px] py-3 text-[#0033E5] bg-[#F0F7FF] font-medium text-base rounded-[200px] leading-[21.6px] -tracking-[0.32px]'>
                        Contact Us
                    </button>
                    <button className='px-[47px] py-3 text-[#F0F7FF] font-medium text-base rounded-[200px] border border-[#F0F7FF] leading-[21.6px] -tracking-[0.32px]'>
                        Start Free
                    </button>
                </div>
            </div>
            <Image src={pattern} alt='pattern image' className="mx-10 md:mx-0 md:absolute md:-right-[55px] md:bottom-0"/>
            {/* <Image src={new_pattern} alt='pattern image' className="w-fit md:absolute md:-right-[55px] md:bottom-0"/> */}
            
        </div>
    </div>
  )
}
export default Hero