'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {motion} from "framer-motion"
import { fadeIn } from '@/app/varients'
import Link from 'next/link'

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('/services/data.json')
        .then(res=>res.json())
        .then(data => setServices(data))
        .catch(err => console.log(err))
    },[])

  return (
    <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true}} 
        id='services'
        className='max-w-[1280px] mx-auto py-10 flex flex-col gap-10 px-5 2xl:px-0 lg:py-20'>
        
        <h1
            className='text-[#0033E5] text-[24px] font-bold leading-[28.8px] -tracking-[0.48px] lg:text-[40px] lg:leading-[54px] lg:-tracking-[0.8px]'
        >
            Expertly Crafted Solutions Delivered with Precision
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'>
            {
                services?.map((service:any, index)=>(
                    <motion.div 
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true}}
                        key={index} className={`px-5 py-6  rounded-xl border-b-[5px]`} style={{backgroundColor: service.bg_color, borderBottomColor: service.primary_color}}>
                        <Link 
                            href={`/services/${service.slug}`}
                            className='flex flex-col gap-5'
                        >                        
                            <Image src={service.image} alt={service.title} width={40} height={40}/>
                            <h2 className={`text-[${service.primary_color}] text-xl font-bold leading-[27px] -tracking-[0.4px] lg:text-2xl lg:leading-[32.4px] lg:-tracking-[0.48px]`}>
                                {service.title}
                            </h2>
                            <p className={`text-[${service.primary_color}] text-base font-normal leading-[21.6px] -tracking-[0.32px]`}>
                                {service.description}
                            </p>
                        </Link>
                    </motion.div>
                ))
            }
        </div>
    </motion.div>
  )
}
export default Services