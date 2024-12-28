"use client";

import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import Image from 'next/image';
import alisa from "../../assets/about/alisa.jpeg"
import rich from "../../assets/about/rich.jpeg"
import annie from "../../assets/about/annie.jpeg"
import johnny from "../../assets/about/johnny.jpeg"
import twitter from "../../assets/about/twitter.svg"
import linkedin from "../../assets/about/linkedin.svg"
import dribble from "../../assets/about/dribble.svg"
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
    bg_image: alisa,
    name:"Alisa Hester",
    position: "Founder & CEO",
    description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    twitter_url: "",
    linkedin_url: "",
    dribble_url: "",
  },{
    bg_image: rich,
    name:"Rich Wilson",
    position: "Engineering Manager",
    description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    twitter_url: "",
    linkedin_url: "",
    dribble_url: "",
  },{
    bg_image: annie,
    name:"Annie Stanley",
    position: "Product Manager",
    description: "Former PM for Airtable, Medium, Ghost, and Lumi.",
    twitter_url: "",
    linkedin_url: "",
    dribble_url: "",
  },{
    bg_image: johnny,
    name:"Johnny Bell",
    position: "Frontend Developer",
    description: "Former frontend dev for Linear, Coinbase, and Postscript.",
    twitter_url: "",
    linkedin_url: "",
    dribble_url: "",
  }
]


const GrowingTeam = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <motion.div 
        variants={fadeIn("left", 0.06)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true}}
        className='w-full 2xl:w-[calc(100%-300px)] ml-auto py-16 xl:py-20 flex flex-col px-5 2xl:px-0'>
        <div className='flex flex-col gap-5'>
            <h1 className='text-[#0033E5] text-[24px] font-bold leading-[28.8px] -tracking-[0.48px] lg:text-[40px] lg:leading-[54px] lg:-tracking-[0.8px]'>
                We’re a Fast-Growing Team
            </h1>
            <p className='text-[#000B33] text-lg font-normal leading-[28px] lg:text-xl lg:leading-[30x]'>
                We’re always on the lookout for passionate, dynamic, and talented individuals.
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
                    <div 
                        className={`flex flex-col justify-between gap-5 rounded-xl h-[472px] xl:h-[504px] max-w-[384px] bg-cover bg-center relative overflow-hidden`} 
                        style={{ backgroundImage: `url(${content.bg_image.src})`}}>
                        <div className="p-6 border-t border-[rgba(255, 255, 255, 0.30)] absolute bottom-0 backdrop-blur-lg text-[#FFFFFF]" style={{backgroundColor: "rgba(255, 255, 255, 0.30)"}}>
                            <h2 className="font-bold text-2xl xl:text-3xl leading-[24px] xl:leading-[38px] flex justify-between items-center">
                                <span>
                                    {content.name}
                                </span>
                                <Image src={arrow_up} alt="case study arrow"/>
                            </h2>
                            <p className='font-bold text-base xl:text-lg leading-[24px] xl:leading-[28px] pt-4 pb-1'>
                                {content.position}
                            </p>
                            <p className="text-lg font-medium leading-[28px] pb-8">
                                {content.description}
                            </p>
                            <div className='flex gap-5'>
                                <a href={content.twitter_url || ""}>
                                    <Image src={twitter} alt='twitter'/>
                                </a>
                                <a href={content.linkedin_url || ""}>
                                    <Image src={linkedin} alt='linkedin'/>
                                </a>
                                <a href={content.dribble_url || ""}>
                                    <Image src={dribble} alt='dribble'/>
                                </a>
                            </div>
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

export default GrowingTeam
