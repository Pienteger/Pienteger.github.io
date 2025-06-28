import Header from '@/components/Header'
import React from 'react'
import logo from "@/assets/bluenewlogo2024.png";
import mobilenavopen from "@/assets/bluemobilenavopen.svg"
import mobilenavclose from "@/assets/bluemobilenavclose.svg"
import Hero from '@/components/allThoughts/Hero';
import ThoughtsWithPagination from '@/components/allThoughts/ThoughtsWithPagination';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "All Thoughts | Pienteger®",
    description: "Explore All Thoughts from Pienteger® - Your trusted partner in innovative software solutions.",
};

const AllThoughts = () => {
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
        <Hero />
        <ThoughtsWithPagination />
        </>
    )
}

export default AllThoughts
