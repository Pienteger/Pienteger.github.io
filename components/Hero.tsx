import React from 'react'
import pattern from "../assets/hero_pattern.png";
import line from "../assets/hero_line.svg";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='bg-[#0033E5] relative overflow-hidden'>
        <Image src={line} alt='pattern image' className="absolute -bottom-20 w-3/4" />
        <div className='max-w-[1280px] mx-auto flex gap-[145px] relative'>    
            <div className='w-[780px] py-[90px] text-[#F0F7FF] flex flex-col gap-6'>
                <h1 className='font-medium text-[64px] leading-[86.4px] -tracking-[1.28px]'>
                    Elevate Your Business with Bespoke Software Solution
                </h1>
                <p className='font-normal text-xl leading-[27px] -tracking-[0.4px]'>
                    We are committed to providing you with the best software solutions for your business
                </p>
                <div className='flex gap-6'>
                    <button className='px-8 py-3 text-[#0033E5] bg-[#F0F7FF] font-medium text-base rounded-[200px] leading-[21.6px] -tracking-[0.32px]'>
                        Contact Us
                    </button>
                    <button className='px-8 py-3 text-[#F0F7FF] font-medium text-base rounded-[200px] border border-[#F0F7FF] leading-[21.6px] -tracking-[0.32px]'>
                        Start Free
                    </button>
                </div>
            </div>
            <Image src={pattern} alt='pattern image' className="absolute -right-[55px] bottom-0"/>
        </div>
    </div>
  )
}
export default Hero