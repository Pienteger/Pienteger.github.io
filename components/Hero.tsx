import React from 'react'
import pattern from "../assets/hero_pattern.png";
import line from "../assets/hero_line.svg";
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {
  return (
    <div className='bg-pieblue relative overflow-hidden'>
        <Image src={line} alt='pattern image' className="absolute -bottom-20 w-3/4" />
        <div className='max-w-[1280px] mx-auto flex flex-col items-center lg:gap-[145px] lg:relative lg:items-start lg:px-5 2xl:px-0'>    
            <div className='w-full pt-10 px-5 text-[#F0F7FF] flex flex-col gap-6  lg:w-[600px] lg:py-[90px] lg:px-0 2xl:w-[780px]'>
                <h1 className='font-medium text-[30px] leading-[36px] -tracking-[0.6px] text-center lg:text-[64px] lg:leading-[86.4px] lg:-tracking-[1.28px] lg:text-start'>
                    Elevate Your Business with Bespoke Software Solution
                </h1>
                <p className='font-normal text-lg leading-[24.3px] -tracking-[0.36px] text-center lg:text-start lg:text-xl lg:leading-[27px] lg:-tracking-[0.4px]'>
                    We are committed to provide the best software solutions for your business
                </p>
                <div className='flex gap-6 justify-center lg:justify-normal'>
                    <Link href="/contact" className='px-[41px] py-3 text-pieblue bg-[#F0F7FF] font-medium text-base rounded-[200px] leading-[21.6px] -tracking-[0.32px]'>
                        Contact Us
                    </Link>
                    <Link href="/contact" className='px-[47px] py-3 text-[#F0F7FF] font-medium text-base rounded-[200px] border border-[#F0F7FF] leading-[21.6px] -tracking-[0.32px]'>
                        Start Free
                    </Link>
                </div>
            </div>
            <Image src={pattern} alt='pattern image' className="ml-20 lg:ml-0 lg:absolute lg:-right-[55px] lg:bottom-0"/>
        </div>
    </div>
  )
}
export default Hero