import Header from '@/components/Header'
import React from 'react'
import logo from "@/assets/bluenewlogo2024.png";
import mobilenavopen from "@/assets/bluemobilenavopen.svg"
import mobilenavclose from "@/assets/bluemobilenavclose.svg"
import Hero from '@/components/allThoughts/Hero';
import Thoughts from '@/components/allThoughts/Thoughts';
import ThoughtsWithPagination from '@/components/allThoughts/ThoughtsWithPagination';

const AllThoughts = () => {
    const customBorder = {
        borderBottom: '0.5px solid',
        borderImageSource: 'linear-gradient(90deg, rgba(0, 51, 229, 0) 0%, rgba(0, 51, 229, 0.5) 100%)',
        borderImageSlice: 1
    }
    
    return (
        <>
        <header className='flex-init bg-[#F0F7FF]'>
            <Header primaryColor="#0033E5" logo={logo} customBorder={customBorder} mobilenavopen={mobilenavopen} mobilenavclose={mobilenavclose}/>
        </header>
        <Hero />
        <ThoughtsWithPagination />
        </>
    )
}

export default AllThoughts
