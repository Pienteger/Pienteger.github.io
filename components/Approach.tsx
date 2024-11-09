import Image from 'next/image'
import React from 'react'
import discovery from "../assets/approach/discovery.svg"
import design from "../assets/approach/design.svg"
import delivery from "../assets/approach/delivery.svg"


const Approach = () => {
    const contents = [
        {
            image: discovery,
            title: "Discovery and Understanding",
            description: "We dive deep into your goals to craft precise, tailored solutions that meet your needs"
        },
        {
            image: design,
            title: "Design and Development",
            description: "We work closely with you, refining solutions and keeping you engaged at every stage"
        },
        {
            image: delivery,
            title: "Delivery and Ongoing Support",
            description: "We ensure seamless delivery and ongoing support for solutions that deliver long-term value"
        }
    ]

  return (
    <div className='relative'>
        <div className='bg-[url("../assets/approach/wave.svg")] bg-cover min-h-[189px]'>
        </div>
        <div className='bg-[url("../assets/approach/wave2.svg")] text-white w-full bg-cover z-[999] absolute top-[17px]'>    
            <div className='max-w-[1280px] mx-auto py-20 flex flex-col gap-20'>
                <h1 className='text-[#F0F7FF] text-[40px] font-bold leading-[54px] -tracking-[0.8px]'>
                    Our Approach: Collaborative, Transparent, and Focused
                </h1>
                <div className='flex gap-20'>
                    {
                        contents.map((content, index)=>(
                            <div key={index} className='flex flex-col gap-5'>
                                <Image src={content?.image} alt='discovery'/>
                                <h2 className='text-[#F0F7FF] text-2xl font-bold leading-[54px] -tracking-[0.48px]'>
                                    {content?.title}
                                </h2>
                                <p className='text-[#B2D6FF] text-base font-normal leading-[21.6px] -tracking-[0.32px]'>
                                    {content?.description}
                                </p>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Approach
