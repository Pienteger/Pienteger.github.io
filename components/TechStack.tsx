import Image from 'next/image'
import React from 'react'
import techPattern from "../assets/techstackpattern.svg"
import postgress from "../assets/tech/postgress.svg"
import angular from "../assets/tech/angular.svg"
import js from "../assets/tech/js.svg"
import vue from "../assets/tech/vue.svg"
import dotnet from "../assets/tech/dotnet.svg"
import python from "../assets/tech/python.svg"
import react from "../assets/tech/react.svg"
import newtec from "../assets/tech/newtech.svg"
import kafka from "../assets/tech/kafka.svg"
import Marquee from 'react-fast-marquee'

const techStacks = [postgress, angular, js, vue, dotnet, python, newtec, react, kafka];

const CustomGradient= {
    maskImage: 'linear-gradient(90deg, rgba(255, 230, 65, 0.00) 20%, #FFE641 100%)'
}

const TechStack = () => {
  return (
    <div className='bg-[#FFE641]'>
        <div className='max-w-[1280px] mx-auto py-10 flex items-center gap-[102px]'>
            <h1 className='text-[#665900] text-[40px] font-bold w-[315px] leading-[54px] -tracking-[0.8px]'>
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
