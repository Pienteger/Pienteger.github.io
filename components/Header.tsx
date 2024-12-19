'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Header = ({primaryColor, logo, customBorder, mobilenavopen, mobilenavclose}:any) => {
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
                    <div className='hidden md:flex items-center justify-between py-5 max-w-[1280px] mx-auto md:px-5 2xl:px-0'>
                        <Link className='flex items-center gap-2' href='/'>
                            <span className='w-6'>
                                <Image src={logo} alt="Pienteger Logo" className='w-full' />
                            </span>
                            <h1 className={`text-[${primaryColor}] text-2xl font-bold font-sans`}>Pienteger</h1>
                        </Link>
                        <div className='flex items-center gap-6'>
                            <nav className={`flex justify-end text-sm gap-6 text-[${primaryColor}] font-medium`}>
                                <Link href="/#services">Services</Link>
                                <Link href="/contact">Contact</Link>
                                <Link href="/">About Us</Link>
                            </nav>
                            <a href="#" className={`border border-[${primaryColor}] py-3 px-8 rounded-[200px] text-[${primaryColor}] text-sm font-medium`}>
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
                        <Link className='flex items-center gap-2' href='/'>
                            <span className='w-6'>
                                <Image src={logo} alt="Pienteger Logo" className='w-full' />
                            </span>
                            <h1 className={`text-[${primaryColor}] text-2xl font-bold font-sans`}>Pienteger</h1>
                        </Link>
                        <button onClick={toggleMenu}>
                            <Image src={open?mobilenavclose:mobilenavopen} alt='mobile nav icon' />
                        </button>
                    </div>
                    {
                        open? 
                        <div 
                            className={`w-full h-screen bg-[#0033E5] flex flex-col justify-between items-center py-10 absolute top-[82px] right-0 z-50 transform transition-transform duration-500 ease-in-out 
                                        ${open?"translate-x-0":"-translate-x-full"}`}>
                            <ul className='flex flex-col gap-10 items-center'>
                                <li className='text-[#F0F7FF80] text-3xl font-medium leading-[40.5px] -tracking-[0.6px]'><Link href="/">Home</Link></li>
                                <li className='text-[#F0F7FF80] text-3xl font-medium leading-[40.5px] -tracking-[0.6px]'><Link href="/#services">Services</Link></li>
                                <li className='text-[#F0F7FF80] text-3xl font-medium leading-[40.5px] -tracking-[0.6px]'><Link href="/contact">Contact</Link></li>
                                <li className='text-[#F0F7FF80] text-3xl font-medium leading-[40.5px] -tracking-[0.6px]'><Link href="/">About us</Link></li>
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