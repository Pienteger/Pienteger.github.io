import Image from 'next/image'
import React from 'react'
import techPattern from "../../assets/selectedServices/tech/pattern.svg"
import postgress from "../../assets/selectedServices/tech/postgress.png"
import angular from "../../assets/selectedServices/tech/angular.png"
import js from "../../assets/selectedServices/tech/js.png"
import vue from "../../assets/selectedServices/tech/vue.png"
import dotnet from "../../assets/selectedServices/tech/dotnet.png"
import python from "../../assets/selectedServices/tech/python.png"
import react from "../../assets/selectedServices/tech/react.png"
import newtec from "../../assets/selectedServices/tech/newtec.png"
import kafka from "../../assets/selectedServices/tech/wordpress.png"
import Marquee from 'react-fast-marquee'

const techStacks = [postgress, angular, js, vue, dotnet, python, newtec, react, kafka];

const CustomGradient= {
    maskImage: 'linear-gradient(90deg, rgba(255, 230, 65, 0.00) 20%, #FFE641 100%)'
}

const TechStack = () => {
  return (
    <div className='bg-pieblue'>
        <div className='max-w-[1280px] mx-auto py-10 px-5 flex flex-col items-center gap-2 lg:flex-row lg:gap-[102px] 2xl:px-0'>
            <h1 className='text-[#F0F7FF] text-[24px] font-bold w-[315px] leading-[28.8px] -tracking-[0.48px] lg:text-[40px] lg:leading-[54px] lg:-tracking-[0.8px]'>
                Technologies We Excel in
                <span className='pl-[14px]'><Image src={techPattern} alt='tech stack pattern' className='inline'/></span>
            </h1>
            <Marquee speed={40} className='flex-1'>
                {
                    techStacks.map((techstack, index)=>(
                        <div key={index} className='p-5' style={CustomGradient}>
                            <Image  src={techstack} alt={`${techstack}`}/>
                        </div>
                ))}
            </Marquee>
        </div>
    </div>
  )
}

export default TechStack
