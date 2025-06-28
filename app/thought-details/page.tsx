import Header from '@/components/Header'
import React from 'react'
import logo from "@/assets/bluenewlogo2024.png";
import mobilenavopen from "@/assets/bluemobilenavopen.svg"
import mobilenavclose from "@/assets/bluemobilenavclose.svg"
import ThoughtDetails from '@/components/allThoughts/ThoughtDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Thoughts | Pienteger® Insights",
    description: "Dive into thoughts - a unique perspective from Pienteger®. Discover innovative ideas and trusted insights.",
};

const Details = () => {
    const customBorder = {
        borderBottom: '0.5px solid',
        borderImageSource: 'linear-gradient(90deg, rgba(0, 51, 229, 0) 0%, rgba(0, 51, 229, 0.5) 100%)',
        borderImageSlice: 1
    }
    
    return (
        <>
        <header className='flex-init bg-[#F0F7FF] sticky top-0 z-999'>
            <Header primaryColor="#0033E5" logo={logo} customBorder={customBorder} mobilenavopen={mobilenavopen} mobilenavclose={mobilenavclose}/>
        </header>
        <div className=''>
            <ThoughtDetails/>
        </div>
        </>
    )
}

export default Details
