'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import thought1 from "../../assets/thoughts/thought1.png"
import thought2 from "../../assets/thoughts/thought2.png"
import thought3 from "../../assets/thoughts/thought3.png"
import arrow from "../../assets/thoughts/arrow.svg"
import left_arrow from "../../assets/all_thoughts/left_arrow.svg"
import right_arrow from "../../assets/all_thoughts/right_arrow.svg"
import "../style/pagination.css"

import {motion} from "framer-motion"
import { fadeIn } from '@/app/varients'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link'
import ReactPaginate from 'react-paginate'




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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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

    const itemsPerPage = 9;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = thoughts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(thoughts.length / itemsPerPage);
  
    const handlePageClick = (event:any) => {
      const newOffset = (event.selected * itemsPerPage) % thoughts.length;
      setItemOffset(newOffset);
    };

    const CustomPrev = ()=>(
        <span>
            <Image src={left_arrow} alt='left arrow'/>
        </span>
    )

    const CustomNext = ()=>(
        <span>
            <Image src={right_arrow} alt='right arrow'/>
        </span>
    )


  return (
    <div className='bg-[#0033E5] 2xl:bg-transparent'>
        <motion.div 
            variants={fadeIn("left", 0.06)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}}
            className='flex flex-col gap-5 pt-[72px] px-5 2xl:pt-0 2xl:px-0'>
            <div className='max-w-[1280px] mx-auto w-full'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[#F0F7FF] text-[24px] font-bold leading-[28.8px] -tracking-[0.48px] lg:text-[40px] lg:leading-[54px] lg:-tracking-[0.8px]'>
                        Explore Our Latest Thoughts
                    </h1>
                    <Link href="/all-thoughts" >
                        <button className='hidden lg:block px-8 py-3 border border-[#F0F7FF] rounded-[200px] font-[500] text-[#F0F7FF] text-base leading-[21.6px] -tracking-[0.32px]'>View All</button>
                    </Link>
                </div>
            </div>
            <div className='w-full 2xl:w-[calc(100%-300px)] ml-auto'>
                <div className='grid grid-cols-1 xl:grid-cols-3 gap-10'>
                {currentItems &&  currentItems.map((thought, index) => (
                    <div key={index} className='flex flex-col lg:flex-row gap-6 p-0 max-w-[600px] lg:p-5'>
                        <Image src={thought.image} alt={thought.date}/>
                        <div className='flex gap-6 flex-col justify-between'>
                            <span className='text-[#F0F7FF] font-normal text-base leading-[19.2px] -tracking-[0.32px]'>{thought.date}</span>
                            <p className='text-[#F0F7FF] font-bold text-base leading-[22.4px] -tracking-[0.32px]'>{thought.description}</p>
                            <button className='text-[#F0F7FF] font-normal text-base leading-[23.04px] -tracking-[0.32px] flex gap-2 items-center'>Read Now <span><Image src={arrow} alt='arrow'/></span></button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<CustomPrev/>}
                onPageChange={handlePageClick}
                pageCount={pageCount}
                previousLabel={<CustomNext/>}
                renderOnZeroPageCount={null}
                className='flex justify-center items-center gap-[26px] text-[#F0F7FF] custom-pagination max-w-[1280px] mx-auto w-full'
            />
            <button className='lg:hidden w-fit mx-auto mt-10 px-8 py-3 border border-[#F0F7FF] rounded-[200px] font-[500] text-[#F0F7FF] text-base leading-[21.6px] -tracking-[0.32px]'>View All</button>
        </motion.div>
    </div>
  )
}

export default Thoughts
