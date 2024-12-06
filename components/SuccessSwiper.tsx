"use client";

import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import Image from 'next/image';
import sertifiket from "../assets/products/sertifiket.png"
import kothakunjo from "../assets/products/kothakunjo.png"
import serrifiket_arrow from "../assets/products/serrifiket_arrow.svg"
import kothakunjo_arrow from "../assets/products/kothakunjo_arrow.svg"
import quranlab_arrow from "../assets/products/quranlab_arrow.svg"
import left_arrow from "../assets/products/left_arrow.svg";
import right_arrow from "../assets/products/right_arrow.svg";
import {motion} from "framer-motion"
import { fadeIn } from '@/app/varients';

import "./style/custom.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

const projectsContents = [
  {
    image: sertifiket,
    arrow: serrifiket_arrow,
    title: "Sertifiket™",
    description: "Comprehensive solution for digital identity, certificates, and documents",
    bg_color: "#CCFFD0",
    primary_color: "#006609"
  },{
    image: kothakunjo,
    arrow: kothakunjo_arrow,
    title: "Kothakunjo™",
    description: "All-in-one digital platform for e-books, audiobooks, and courses",
    bg_color: "#CCD7FF",
    primary_color: "#0033E5"
  },{
    image: kothakunjo,
    arrow: quranlab_arrow,
    title: "QuranLib",
    description: "A portable Quran library that gives read-only access to the entire Holy Quran.",
    bg_color: "#FFF8CC",
    primary_color: "#665900"
  },{
    image: sertifiket,
    arrow: serrifiket_arrow,
    title: "Sertifiket™",
    description: "Comprehensive solution for digital identity, certificates, and documents",
    bg_color: "#CCFFD0",
    primary_color: "#006609"
  },{
    image: kothakunjo,
    arrow: kothakunjo_arrow,
    title: "Kothakunjo™",
    description: "All-in-one digital platform for e-books, audiobooks, and courses",
    bg_color: "#CCD7FF",
    primary_color: "#0033E5"
  },{
    image: kothakunjo,
    arrow: quranlab_arrow,
    title: "QuranLib",
    description: "A portable Quran library that gives read-only access to the entire Holy Quran.",
    bg_color: "#FFF8CC",
    primary_color: "#665900"
  }
]


const SuccessSwiper = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <motion.div 
      variants={fadeIn("right", 0.06)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: true}}
      className='max-w-[1280px] mx-auto py-20 flex flex-col gap-10 px-5 2xl:px-0'>
      <div className='flex justify-between items-center'>
        <h1 className='text-[#0033E5] text-[24px] font-bold leading-[28.8px] -tracking-[0.48px] lg:text-[40px] lg:leading-[54px] lg:-tracking-[0.8px]'>
          Reliable, Innovative Products Crafted
        </h1>
        <div className='hidden lg:flex gap-4'>
          <button onClick={() => swiperRef.current?.slidePrev()} className='hover:opacity-60'>
            <Image src={left_arrow} alt='left_arrow'/>
          </button>
          <button onClick={() => swiperRef.current?.slideNext()} className='hover:opacity-60'>
            <Image src={right_arrow} alt='right_arrow'/>
          </button>
        </div>
      </div>
      <div className='w-full'>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{clickable: true}}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
            },
            '@0.75': {
              slidesPerView: 2,
            },
            '@1.00': {
              slidesPerView: 3,
            }
          }}
          modules={[Pagination]}
          className='custom-swipper'
        >
          {projectsContents.map((content, index) => (
            <SwiperSlide key={index}>
                <div className={`px-5 py-6 flex flex-col gap-5 rounded-xl border-b-[5px]`} style={{backgroundColor: content.bg_color, borderBottomColor: content.primary_color}}>
                    <Image src={content.image} alt={content.title}/>
                    <h2 className={`text-[${content.primary_color}] text-2xl font-bold leading-[32.4px] -tracking-[0.48px]`}>
                        {content.title}
                    </h2>
                    <p className={`text-[${content.primary_color}] text-base font-normal leading-[21.6px] -tracking-[0.32px]`}>
                        {content.description}
                    </p>
                    <button className={`flex items-center gap-2 text-[${content.primary_color}] text-base font-bold leading-[21.6px] -tracking-[0.32px]`}>
                        Visit Website <span><Image src={content.arrow} alt={`${content.title} arrow`}/></span>
                    </button>
                </div>
            </SwiperSlide>
           ))}
           <div className="custom-pagination mt-20"></div>
        </Swiper>
      </div>
    </motion.div>
  )
}

export default SuccessSwiper
