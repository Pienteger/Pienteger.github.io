'use client'
import React from 'react'

const ContactForm = () => {
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const data:Record<string, string> = {};
        formData.forEach((value, key)=>{
            data[key] = value.toString();
        })
        const isSubmissionSuccessful = true;
        if(isSubmissionSuccessful){
            form.reset();
        }
    }
  return (
    <div>
        <h1 className='text-pieblue font-bold text-4xl leading-[44px] -tracking-[0.72px]'>Get in touch</h1>
        <p className='text-[#000B33] font-normal text-lg leading-[28px] -tracking-[0.72px] lg:text-xl lg:leading-[30px] pt-5 pb-12'>Our friendly team would love to hear from you.</p>
        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
            <div className='flex flex-col xl:flex-row gap-6 '>
                <div className='flex flex-col gap-[6px] w-full xl:w-1/2'>
                    <div className='flex gap-[2px]'>
                        <span className='text-[#000B33] font-medium text-sm leading-[20px]'>First Name</span>
                        <span className='text-[#7F56D9]'>*</span>
                    </div>
                    <input type="text" name="first_name" id="" placeholder='First name' className='border border-[#667085] rounded-lg px-[14px] py-3' required/>
                </div>
                <div className='flex flex-col gap-[6px] w-full xl:w-1/2'>
                    <div className='flex gap-[2px]'>
                        <span className='text-[#000B33] font-medium text-sm leading-[20px]'>Last Name</span>
                        <span className='text-[#7F56D9]'>*</span>
                    </div>
                    <input type="text" name="last_name" id="" placeholder='First name' className='border border-[#667085] rounded-lg px-[14px] py-3' required/>
                </div>
            </div>    
            <div className='flex flex-col gap-[6px]'>
                <div className='flex gap-[2px]'>
                    <span className='text-[#000B33] font-medium text-sm leading-[20px]'>Email</span>
                    <span className='text-[#7F56D9]'>*</span>
                </div>
                <input type="email" name="email" id="" placeholder='you@company.com' className='border border-[#667085] rounded-lg px-[14px] py-3' required/>
            </div>
            <div className='flex flex-col gap-[6px]'>
                <div className='flex gap-[2px]'>
                    <span className='text-[#000B33] font-medium text-sm leading-[20px]'>Phone number</span>
                    <span className='text-[#7F56D9]'>*</span>
                </div>
                <input type="tel" name="phone" id="" placeholder='+1 (555) 000-0000' className='border border-[#667085] rounded-lg px-[14px] py-3' required/>
            </div>
            <div className='flex flex-col gap-[6px]'>
                <div className='flex gap-[2px]'>
                    <span className='text-[#000B33] font-medium text-sm leading-[20px]'>Message</span>
                    <span className='text-[#7F56D9]'>*</span>
                </div>
                <textarea name="message" id="" className='border border-[#667085] rounded-lg px-[14px] py-3 min-h-[110px]' placeholder='Leave us a message...' required></textarea>
            </div>
            <div className='flex gap-3'>
                <input type="checkbox" name="accepct_terms" id="" required/>
                <span className='text-[#000B33] font-medium text-sm leading-[20px]'>You agree to our friendly privacy policy.</span>
            </div>
            <div>
                <input type="submit" value="Send message" className='w-full bg-[#000B33] border-2 rounded-[50px] text-[#FFFFFF] font-bold text-base leading-[20px] px-[18px] py-3 cursor-pointer'/>
            </div>
        </form>        
    </div>
  )
}

export default ContactForm
