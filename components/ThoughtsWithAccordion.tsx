import React from 'react'
import Thoughts from './Thoughts'
import QAAccordion from './QAAccordion'
import stroke_line from "../assets/accordion/stroke_line.svg"
import Image from 'next/image'
import top_bg from "../assets/accordion/top_bg.svg";
import bottom_bg from "../assets/accordion/bottom_bg.svg";
 
const ThoughtsWithAccordion = () => {
  return (
    <div className='overflow-hidden pt-20'>
      <div className='relative w-full'>
        <div className='absolute bottom-0 w-full'>
          <Image src={bottom_bg} alt='bottom bg' className='w-full h-full z-10'/>
        </div>
        <div className='absolute bottom-5 w-full'>
          <Image src={top_bg} alt='top bg' className='w-full h-full z-20'/>
        </div>
        <div className='pb-[132px] z-40 flex flex-col gap-20 relative'>
          <Thoughts/>
          <QAAccordion/>
        </div>
          <Image src={stroke_line} alt='storke line' className='-rotate-[19.722] z-20 absolute top-[230px]' width={20000}/>
      </div>
    </div>
    
  )
}

export default ThoughtsWithAccordion
