import React from 'react'
import Thoughts from './Thoughts'
import QAAccordion from './QAAccordion'
import stroke_line from "../assets/accordion/stroke_line.svg"
import Image from 'next/image'
 
const ThoughtsWithAccordion = () => {
  return (
    <div className='bg-[url("../assets/accordion/end_bg.png")] pb-3 relative'>
      <div className='bg-[url("../assets/accordion/top_bg.png")] py-20'>
        <Thoughts/>
        <QAAccordion/>
        <Image src={stroke_line} alt='storke line' className='absolute top-[320px] -rotate-[19.722]' width={20000}/>
      </div>
    </div>
    
  )
}

export default ThoughtsWithAccordion
