import React from 'react'
import ai from "../assets/services/ai.svg"
import api from "../assets/services/api.svg"
import cloud from "../assets/services/cloud.svg"
import data from "../assets/services/data.svg"
import web from "../assets/services/web.svg"
import microsoft from "../assets/services/microsoft.svg"
import Image from 'next/image'

const Services = () => {
  return (
    <div className='max-w-[1280px] mx-auto py-20 flex flex-col gap-10'>
        <h1
            className='text-[#0033E5] text-[40px] font-bold leading-[54px] -tracking-[0.8px]'
        >
        Expertly Crafted Solutions Delivered with Precision
        </h1>
        <div className='grid grid-cols-3'>
            <div className='px-5 py-6 flex flex-col gap-5 bg-[#CCFFD0] rounded-xl border-b-[5px] border-b-[#006609]'>
                <Image src={ai} alt="ai"/>
                <h2 className='text-[#006609] text-2xl font-bold leading-[32.4px] -tracking-[0.48px]'>
                    AI Integration & Beyond
                </h2>
                <p className='text-[#006609] text-base font-normal leading-[21.6px] -tracking-[0.32px]'>
                    Leverage advanced AI capabilities to enhance your business operations, driving innovation and efficiency with seamless integration
                </p>
            </div>
            <div className='px-5 py-6 flex flex-col gap-5 bg-[#CCD7FF] rounded-xl border-b-[5px] border-b-[#0033E5]'>
                <Image src={microsoft} alt="Microsoft" />
                <h2 className='text-[#0033E5] text-2xl font-bold leading-[32.4px] -tracking-[0.48px]'>
                    Microsoft Graph & AD Integration
                </h2>
                <p className='text-[#0033E5] text-base font-normal leading-[21.6px] -tracking-[0.32px]'>
                    Streamline access, enhance data management, and ensure secure connectivity with seamless Microsoft Graph and Active Directory integration.
                </p>
            </div>
            <div className='px-5 py-6 flex flex-col gap-5 bg-[#CCFFFE] rounded-xl border-b-[5px] border-b-[#006664]'>
                <Image src={cloud} alt="cloud" />
                <h2 className='text-[#006609] text-2xl font-bold leading-[32.4px] -tracking-[0.48px]'>
                    Cloud Infrastructure Management
                </h2>
                <p className='text-[#006609] text-base font-normal leading-[21.6px] -tracking-[0.32px]'>
                    Enhance scalability, performance, and security with expertly managed cloud solutions tailored to your business needs.
                </p>
            </div>
            <div className='px-5 py-6 flex flex-col gap-5 bg-[#FFF8CC] rounded-xl border-b-[5px] border-b-[#665900]'>
                <Image src={api} alt="Api" />
                <h2 className='text-[#665900] text-2xl font-bold leading-[32.4px] -tracking-[0.48px]'>
                    API Development and Integration
                </h2>
                <p className='text-[#665900] text-base font-normal leading-[21.6px] -tracking-[0.32px]'>
                    Ensure seamless connectivity and communication between your systems with reliable, well-crafted API solutions
                </p>
            </div>
            <div className='px-5 py-6 flex flex-col gap-5 bg-[#CCFFFE] rounded-xl border-b-[5px] border-b-[#006664]'>
                <Image src={web} alt="Web" />
                <h2 className='text-[#006609] text-2xl font-bold leading-[32.4px] -tracking-[0.48px]'>
                    Web Application Development
                </h2>
                <p className='text-[#006609] text-base font-normal leading-[21.6px] -tracking-[0.32px]'>
                    Craft dynamic, user-friendly web applications that align perfectly with your brand and drive user engagement.
                </p>
            </div>
            <div className='px-5 py-6 flex flex-col gap-5 bg-[#CCD7FF] rounded-xl border-b-[5px] border-b-[#0033E5]'>
                <Image src={data} alt="Data" />
                <h2 className='text-[#0033E5] text-2xl font-bold leading-[32.4px] -tracking-[0.48px]'>
                    Data Analytics and Insights
                </h2>
                <p className='text-[#0033E5] text-base font-normal leading-[21.6px] -tracking-[0.32px]'>
                    Leverage data to uncover insights and drive informed decisions that propel your business forward
                </p>
            </div>
        </div>
    </div>
  )
}
export default Services