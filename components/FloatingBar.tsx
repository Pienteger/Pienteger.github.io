import Image from 'next/image'
import React from 'react'
import arrow from "../assets/footer/guidance_left-arrow.svg"

const FloatingBar = () => {
  return (
    <div className='flex justify-center w-full'>
        <div className='p-6 rounded-[80px] bg-[#FFE641] flex items-center gap-5 fixed bottom-10 z-[9999]'>
            <span className='text-[#000B33] text-2xl font-bold leading-[34.56px] -tracking-[0.48px]'>
                Craft Your Dreams, Simple. Reliable. Secure
            </span>
            <button className="bg-[#000B33] rounded-[200px] px-[18px] py-3 flex items-center gap-2">
                <span className='text-[#B2D6FF] font-medium text-base leading-[21.6px] -tracking-[0.32px] flex items-center'>
                    Contact Us 
                </span>
                <Image src={arrow} alt='arrow'/>    
            </button>
        </div>
    </div>
  )
}

export default FloatingBar
