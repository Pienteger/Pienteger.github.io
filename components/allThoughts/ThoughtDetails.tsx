import React from 'react'
import banner from "../../assets/thought_details/banner.png"
import description1 from "../../assets/thought_details/description1.png"
import description2 from "../../assets/thought_details/description2.png"
import avatar from "../../assets/thought_details/avatar.png"
import copy from "../../assets/thought_details/copy.svg"
import facebook from "../../assets/thought_details/facebook.svg"
import twitter from "../../assets/thought_details/twitter.svg"
import linkedin from "../../assets/thought_details/linkedin.svg"
import Image from 'next/image'

const ThoughtDetails = () => {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <div className='flex flex-col items-center py-16 lg:py-24 gap-10 px-5 xl:px-0'>
        <h1 className='text-[#000B33] text-center text-[30px] font-normal leading-[44px] -tracking-[0.6px] lg:text-[64px] lg:font-medium lg:leading-[86.4px] lg:-tracking-[1.28px]'>
            Exploring the Future: How VR is Revolutionising Business and Beyond
        </h1>
        <span className='text-pieblue text-base font-normal leading-[24px] -tracking-[0.32px]'>
            August 25 2024
        </span>
        <Image src={banner} alt="hero banner" className='w-full'/> 
      </div>
      <div className='w-full px-5 xl:max-w-[720px] mx-auto'>
        <p className='text-[#000B33] text-base font-normal leading-[24px] -tracking-[0.32px] lg:leading-[30px] lg:-tracking-[0.32px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
        </p>
        <h4 className='text-pieblue text-2xl font-medium leading-[32px] -tracking-[0.48px] lg:text-3xl lg:leading-[38px] lg:-tracking-[0.6px] pt-[72px] pb-5'>
            Introduction
        </h4>
        <p className='text-[#000B33] text-base font-normal leading-[24px] -tracking-[0.32px] lg:leading-[30px] lg:-tracking-[0.32px] pb-7'>
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
        </p>
        <p className='text-[#000B33] text-base font-normal leading-[24px] -tracking-[0.32px] lg:leading-[30px] lg:-tracking-[0.32px] pb-12'>      
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. 
        </p>
        <Image src={description1} alt='description 1'/>
        <p className='text-[#101828] text-center italic text-xl font-medium leading-[30px] -tracking-[0.4px] lg:text-2xl lg:leading-[36px] lg:-tracking-[0.48px] pt-12'>      
            “In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”
        </p>
        <div className='flex flex-col items-center pt-8'>
            <Image src={avatar} alt='avatar'/>
            <span className='text-[#101828] text-base font-normal leading-[24px] -tracking-[0.32px] pt-3 pb-[2px]'>Sakeer</span>
            <span className='text-[#475467] text-base font-normal leading-[24px] -tracking-[0.32px]'>Product Designer</span>
        </div>
        <p className='text-[#000B33] text-base font-normal leading-[24px] -tracking-[0.32px] lg:leading-[30px] lg:-tracking-[0.32px] pt-12'>
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
        </p>
        <p className='text-[#000B33] text-base font-normal leading-[24px] -tracking-[0.32px] lg:leading-[30px] lg:-tracking-[0.32px] py-7'>      
            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
        </p>
        <p className='text-[#000B33] text-base font-normal leading-[24px] -tracking-[0.32px] lg:leading-[30px] lg:-tracking-[0.32px]'>
            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
        </p>
        <h4 className='text-pieblue text-2xl font-medium leading-[32px] -tracking-[0.48px] lg:text-3xl lg:leading-[38px] lg:-tracking-[0.6px] pt-[32px] pb-4'>
            Software and tools
        </h4>
        <p className='text-[#000B33] text-base font-normal leading-[24px] -tracking-[0.32px] lg:leading-[30px] lg:-tracking-[0.32px]'>      
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id. 
        </p>
        <p className='text-[#000B33] text-base font-normal leading-[24px] -tracking-[0.32px] lg:leading-[30px] lg:-tracking-[0.32px] pt-7'>      
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.  
        </p>
        <h4 className='text-pieblue text-2xl font-medium leading-[32px] -tracking-[0.48px] lg:text-3xl lg:leading-[38px] lg:-tracking-[0.6px] pt-[32px] pb-4'>
            Other resources
        </h4>
        <p className='text-[#000B33] text-base font-normal leading-[24px] -tracking-[0.32px] lg:leading-[30px] lg:-tracking-[0.32px]'>      
            Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis. 
        </p>
        <ol className='text-[#000B33] text-base font-normal leading-[24px] -tracking-[0.32px] lg:leading-[30px] lg:-tracking-[0.32px] pt-7 pb-12'>
            <li>
                1. Lectus id duis vitae porttitor enim gravida morbi.
            </li>
            <li>
                2. Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.
            </li>
            <li>
                3. Suspendisse maecenas ac donec scelerisque diam sed est duis purus.
            </li>
        </ol>
        <Image src={description2} alt='description 2'/>
        <p className='text-[#000B33] text-base font-normal leading-[24px] -tracking-[0.32px] lg:leading-[30px] lg:-tracking-[0.32px] pt-12'>      
            Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis suspendisse at.
        </p>
        <p className='text-[#000B33] text-base font-normal leading-[24px] -tracking-[0.32px] lg:leading-[30px] lg:-tracking-[0.32px] pt-7'>      
            Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.
        </p>
        <div className='bg-[#CCD7FF] rounded-2xl p-8 my-12'>
            <h4 className='text-pieblue text-2xl font-medium leading-[32px] -tracking-[0.48px] lg:text-3xl lg:leading-[38px] lg:-tracking-[0.6px] pb-5'>
                Conclusion
            </h4>
            <p className='text-[#000B33] text-base font-normal leading-[24px] -tracking-[0.32px] lg:leading-[30px] lg:-tracking-[0.32px]'>      
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
            </p>
            <p className='text-[#000B33] text-base font-normal leading-[24px] -tracking-[0.32px] lg:leading-[30px] lg:-tracking-[0.32px] py-7'>      
                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
            </p>
            <p className='text-[#000B33] text-base font-normal leading-[24px] -tracking-[0.32px] lg:leading-[30px] lg:-tracking-[0.32px]'>      
                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.
            </p>
        </div>
        <div className='flex justify-between xl:justify-normal xl:gap-6 items-center pt-6'>
            <button className='border border-pieblue rounded-[200px] px-8 py-3 flex items-center gap-2 text-pieblue text-sm font-medium leading-[18.9px] -tracking-[0.28px]'>
                <Image src={copy} alt='copy'/>
                Copy Link
            </button>
            <Image src={facebook} alt='facebook' />
            <Image src={twitter} alt='twitter' />
            <Image src={linkedin} alt='linkedin' />
        </div>
      </div>
    </div>
  )
}

export default ThoughtDetails
