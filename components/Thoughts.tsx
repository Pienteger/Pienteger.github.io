'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import thought1 from "../assets/thoughts/thought1.png"
import thought2 from "../assets/thoughts/thought2.png"
import thought3 from "../assets/thoughts/thought3.png"
import arrow from "../assets/thoughts/arrow.svg"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




const thoughts = [
    {
        image: thought1,
        date: "August 25",
        description: "Exploring the Future: How VR is Revolutionising Business and Beyond"
    },
    {
        image: thought2,
        date: "August 15",
        description: "How We Integrated OpenAI to Build Optimised Logistics Management"
    },
    {
        image: thought3,
        date: "August 10",
        description: "Automobile Industry: The future of AI and etc"
    }
]

const Thoughts = () => {
  return (
    <div className='max-w-[1280px] mx-auto flex flex-col gap-5'>
        <div className='flex justify-between items-center'>
            <h1 className='text-[#F0F7FF] text-[40px] font-bold leading-[54px] -tracking-[0.8px]'>
            Reliable, Innovative Products Crafted
            </h1>
            <button className='px-8 py-3 border border-[#F0F7FF] rounded-[200px] font-[500] text-[#F0F7FF] text-base leading-[21.6px] -tracking-[0.32px]'>View All</button>
        </div>

        <Swiper
            spaceBetween={0}
            slidesPerView={3}
            className='overflow-scroll'
        >
          {thoughts.map((thought, index) => (
                <SwiperSlide key={index}>
                    <div className='flex gap-6 p-5 max-w-[600px]'>
                        <Image src={thought.image} alt={thought.date}/>
                        <div className='flex flex-col justify-between'>
                            <span className='text-[#F0F7FF] font-normal text-base leading-[19.2px] -tracking-[0.32px]'>{thought.date}</span>
                            <p className='text-[#F0F7FF] font-bold text-base leading-[22.4px] -tracking-[0.32px]'>{thought.description}</p>
                            <button className='text-[#F0F7FF] font-normal text-base leading-[23.04px] -tracking-[0.32px] flex gap-2 items-center'>Read Now <span><Image src={arrow} alt='arrow'/></span></button>
                        </div>
                    </div>
                </SwiperSlide>
           ))}
        </Swiper>
    </div>
  )
}

export default Thoughts
