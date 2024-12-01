'use client';

import { useState } from 'react';
import newIcon from '../assets/logo2024.png';
import Image from 'next/image';
import mobilenavopen from "../assets/mobilenavopen.svg"
import mobilenavclose from "../assets/mobilenavclose.svg"

const customBorder = {
    borderBottom: '0.5px solid',
    borderImageSource: 'linear-gradient(90deg, rgba(244, 222, 200, 0) 0%, rgba(244, 222, 200, 0.5) 100%)',
    borderImageSlice: 1
}

const Header = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu= ()=>{
        console.log("clicked");
        setOpen((prev)=> !prev);   
    }
    return (
        <>
            {/* desktop nav */}
            <div className='hidden md:block' >
                <div style={customBorder}>
                    <div className='hidden md:flex items-center justify-between py-5 max-w-[1280px] mx-auto lg:px-5'>
                        <a className='flex items-center gap-2' href='/'>
                            <Image src={newIcon} alt="Pienteger Logo" className='h-6 w-6' />
                            <h1 className='text-[#F0F7FF] text-2xl font-bold font-sans'>Pienteger</h1>
                        </a>
                        <div className='flex items-center gap-6'>
                            <nav className='flex justify-end text-sm gap-6 text-[#F0F7FF] font-medium'>
                                <a href="/#service">Services</a>
                                <a href="/#Contact">Contact</a>
                                <a href="/#aboutUs">About Us</a>
                            </nav>
                            <a href="#" className='border border-[#F0F7FF] py-3 px-8 rounded-[200px] text-[#F0F7FF] text-sm font-medium'>
                                Start Free
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* mobile nav */}
            <div >
                <div className='flex md:hidden flex-col items-center justify-between mx-auto relative'>
                    <div className='w-full flex justify-between items-center p-5 relative' style={customBorder}>
                        <a className='flex items-center gap-2' href='/'>
                            <Image src={newIcon} alt="Pienteger Logo" className='h-6 w-6' />
                            <h1 className='text-[#F0F7FF] text-2xl font-bold font-sans'>Pienteger</h1>
                        </a>
                        <button onClick={toggleMenu}>
                            <Image src={open?mobilenavclose:mobilenavopen} alt='mobile nav icon' />
                        </button>
                    </div>
                    {
                        open? 
                        <div 
                            className={`w-full min-h-[742px] bg-[#0033E5] flex flex-col justify-between items-center py-10 absolute top-24 right-0 z-50 transform transition-transform duration-500 ease-in-out 
                                        ${open?"translate-x-0":"-translate-x-full"}`}>
                            <ul className='flex flex-col gap-10 items-center'>
                                <li className='text-[#F0F7FF80] text-3xl font-medium leading-[40.5px] -tracking-[0.6px]'><a href="#">Home</a></li>
                                <li className='text-[#F0F7FF80] text-3xl font-medium leading-[40.5px] -tracking-[0.6px]'><a href="#">Services</a></li>
                                <li className='text-[#F0F7FF80] text-3xl font-medium leading-[40.5px] -tracking-[0.6px]'><a href="#">Contact</a></li>
                                <li className='text-[#F0F7FF80] text-3xl font-medium leading-[40.5px] -tracking-[0.6px]'><a href="#">About us</a></li>
                            </ul>
                            <div className='flex gap-6'>
                                <button className='px-[41px] py-3 text-[#0033E5] bg-[#F0F7FF] font-medium text-base rounded-[200px] leading-[21.6px] -tracking-[0.32px]'>
                                    Contact Us
                                </button>
                                <button className='px-[47px] py-3 text-[#F0F7FF] font-medium text-base rounded-[200px] border border-[#F0F7FF] leading-[21.6px] -tracking-[0.32px]'>
                                    Start Free
                                </button>
                            </div>
                        </div>:
                        ""
                    }
                </div>
            </div>
        </>
    );
}
export default Header;