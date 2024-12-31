import React from 'react'
import Image from 'next/image';
import line from "../../assets/selectedServices/hero/line.svg"

const Hero = () => {
  return (
    <div
        className='bg-[#F0F7FF] overflow-hidden relative'>
            <div className='max-w-[1280px] mx-auto flex flex-col items-center lg:relative lg:items-start lg:px-5 2xl:px-0'>    
                <div className='w-full py-10 px-5 text-[#0033E5] flex flex-col gap-6 lg:py-[90px] lg:px-0 xl:w-[740px]'>
                        <h1 className='font-medium text-[30px] leading-[36px] -tracking-[0.6px] text-center lg:text-[64px] lg:leading-[86.4px] lg:-tracking-[1.28px] lg:text-start'>
                                Our Mission is to Increase GDP of Your Startup
                        </h1>
                        <p className='font-normal text-lg leading-[24.3px] -tracking-[0.36px] text-center lg:text-start lg:text-xl lg:leading-[27px] lg:-tracking-[0.4px]'>
                            Pienteger is a technology company that builds infrastructure for your startup, so you don’t have to. Businesses of every size—from new startups to public companies—use our software to manage their businesses.
                        </p>
                </div>                
            </div>
            <Image src={line} alt='pattern image' className="absolute bottom-0 md:-bottom-20  left-1/2 w-1/2" />
    </div>
  )
}

export default Hero
