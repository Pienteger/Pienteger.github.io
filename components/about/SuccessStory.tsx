"use client";

import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import Image from 'next/image';
import layers from "../../assets/about/layers.svg"
import sisyphus from "../../assets/about/sisyphus.svg"
import capsule from "../../assets/about/capsule.svg"
import catalog from "../../assets/about/catalog.svg"
import left_arrow from "../../assets/about/arrow_left.png"
import right_arrow from "../../assets/about/arrow_right.png"
import arrow_up from "../../assets/about/arrow-up-right.svg"

import {motion} from "framer-motion"
import { fadeIn } from '@/app/varients';

import "../style/custom.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

const projectsContents = [
  {
    image: layers,
    name:"Layers",
    title: "Layers",
    description: "“Untitled has saved us thousands of hours of work. We’re able to spin up projects faster.”",
    bg_color: "#7F56D9",
    secondary_color: "rgba(255, 255, 255, 0.30)",
    
  },
  {
    image: sisyphus,
    name:"Sisyphus",
    title: "Sisyphus",
    description: "“We’ve been using Untitled to kick start every new project and can’t work without it.”",
    bg_color: "#079455",
    secondary_color: "rgba(255, 255, 255, 0.30)",
    
  },
  {
    image: capsule,
    name:"Capsule",
    title: "Capsule",
    description: "“Love the simplicity of the service and the prompt customer support.”",
    bg_color: "#1570EF",
    secondary_color: "rgba(255, 255, 255, 0.30)",
    
  },
  {
    image: catalog,
    name:"Catalog",
    title: "Catalog",
    description: "“Untitled has saved us thousands of hours of work. We’re able to spin up projects faster.”",
    bg_color: "#444CE7",
    secondary_color: "rgba(255, 255, 255, 0.30)",
    
  }
]


const SuccessStory = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <motion.div 
        variants={fadeIn("up", 0.02)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true}}
        className='w-full 2xl:w-[calc(100%-300px)] ml-auto py-16 xl:py-20 flex flex-col px-5 2xl:px-0'>
        <div className='flex flex-col gap-5'>
            <h1 className='text-pieblue text-[24px] font-bold leading-[28.8px] -tracking-[0.48px] lg:text-[40px] lg:leading-[54px] lg:-tracking-[0.8px]'>
                We’re Proud of Our Success Stories
            </h1>
            <p className='text-[#000B33] text-lg font-normal leading-[28px] lg:text-xl lg:leading-[30x]'>
                Case studies from some of our amazing customers who are building faster.
            </p>
        </div>
        <div className='w-full pt-16 pb-8'>
            <Swiper
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={0}
            pagination={{clickable: true}}
            breakpoints={{
                '@0.00': {
                slidesPerView: 1.2,
                spaceBetween: 24
                },
                '@0.75': {
                slidesPerView: 2,
                spaceBetween: 24
                },
                '@1.00': {
                slidesPerView: 3.2,
                spaceBetween: 32
                }
            }}
            modules={[Pagination]}
            className='success-story-custom-swipper'
            >
            {projectsContents.map((content, index) => (
                <SwiperSlide key={index}>
                    <div className={`p-5 flex flex-col justify-between gap-5 rounded-xl text-[#FFFFFF] h-[472px] xl:h-[504px] max-w-[384px]`} style={{backgroundColor: content.bg_color}}>
                        <div className='flex items-center gap-[10px]'>
                            <Image src={content.image} alt={content.name}/>
                            <span className='font-bold text-2xl xl:text-3xl leading-[24px] xl:leading-[38px]'>{content.name}</span>
                        </div>
                        <div className="p-6 border border-[#b1b6f2]" style={{backgroundColor: content.secondary_color}}>
                            <h2 className="font-bold text-2xl xl:text-3xl leading-[24px] xl:leading-[38px]">
                                {content.title}
                            </h2>
                            <p className="text-lg font-medium leading-[28px] pt-4 pb-8">
                                {content.description}
                            </p>
                            <button className="flex items-center gap-2 text-base font-bold xl:font-black leading-[24px]">
                                Read case study <span><Image src={arrow_up} alt="case study arrow"/></span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <div className="custom-pagination mt-20"></div>
            </Swiper>
        </div>
        <div className='flex gap-4'>
            <button onClick={() => swiperRef.current?.slidePrev()} className='hover:opacity-60'>
            <Image src={left_arrow} alt='left_arrow'/>
            </button>
            <button onClick={() => swiperRef.current?.slideNext()} className='hover:opacity-60'>
            <Image src={right_arrow} alt='right_arrow'/>
            </button>
        </div>
    </motion.div>
  )
}

export default SuccessStory
