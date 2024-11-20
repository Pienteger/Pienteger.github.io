import Image from 'next/image';
import left_arrow from "../assets/footer/guidance_left-arrow.svg";
import facebook from "../assets/footer/facebook.svg";
import twitter from "../assets/footer/twitter.svg";
import instagram from "../assets/footer/instagram.svg";
import linkedin from "../assets/footer/linkedin.svg";
import line from "../assets/footer/line.svg";

const Footer = () => {
    return (
        <>
            <div className="bg-[#FFE641] mt-20 pt-4 pb-20 flex items-center justify-between px-8 rounded-tr-[32px] rounded-tl-[32px]">
                <h1 className="text-[#000B33] font-bold text-2xl leading-[34.56px] -tracking-[0.48px]">
                    Craft Your Dreams, Simple. Reliable. Secure
                </h1>
                <button className="bg-[#000B33] rounded-[200px] px-8 py-4 flex items-center gap-2">
                    <span className="text-[#B2D6FF] font-medium text-base leading-[21.6px] -tracking-[0.32px]">
                        Contact Us
                    </span>
                    <Image src={left_arrow} alt="left arrow"/>
                </button>
            </div>
            <div className="bg-[#000B33] rounded-tr-[50px] rounded-tl-[50px] py-10 -mt-16 relative overflow-hidden">
                <div className="max-w-[1280px] mx-auto flex justify-between gap-10">
                    <div className="flex flex-col gap-3 justify-center mr-[120px]">
                        <span className="text-[#F0F7FF] font-bold text-2xl leading-[32.4px] -tracking-[0.48px]">
                            Pienteger
                        </span>
                        <p className="text-[#B2D6FF] font-normal text-base leading-[24px] -tracking-[0.32px]">
                            © 2024 All Rights Reserved
                        </p>
                    </div>
                    <div className="p-3 flex flex-col gap-6">
                        <span className="text-[#F0F7FF] font-bold text-base leading-[23.04px] -tracking-[0.32px]">
                            Services
                        </span>
                        <ul className="flex flex-col gap-6">
                            <li className="text-[#B2D6FF] font-normal text-base leading-[23.04px] -tracking-[0.32px]">
                                AI Integration & Beyond
                            </li>
                            <li className="text-[#B2D6FF] font-normal text-base leading-[23.04px] -tracking-[0.32px]">
                                Microsoft Graph & AD Integration
                            </li>
                            <li className="text-[#B2D6FF] font-normal text-base leading-[23.04px] -tracking-[0.32px]">
                                Cloud Infrastructure Management
                            </li>
                            <li className="text-[#B2D6FF] font-normal text-base leading-[23.04px] -tracking-[0.32px]">
                                API Development and Integration
                            </li>
                            <li className="text-[#B2D6FF] font-normal text-base leading-[23.04px] -tracking-[0.32px]">
                                Web Application Development
                            </li>
                            <li className="text-[#B2D6FF] font-normal text-base leading-[23.04px] -tracking-[0.32px]">
                                Data Analytics and Insights
                            </li>
                        </ul>
                    </div>
                    <div className="p-3 flex flex-col gap-6">
                        <span className="text-[#F0F7FF] font-bold text-base leading-[23.04px] -tracking-[0.32px]">
                            More
                        </span>
                        <ul className="flex flex-col gap-6">
                            <li className="text-[#B2D6FF] font-normal text-base leading-[23.04px] -tracking-[0.32px]">
                                Works
                            </li>
                            <li className="text-[#B2D6FF] font-normal text-base leading-[23.04px] -tracking-[0.32px]">
                                Blogs
                            </li>
                            <li className="text-[#B2D6FF] font-normal text-base leading-[23.04px] -tracking-[0.32px]">
                                Contact Us
                            </li>
                        </ul>
                    </div>
                    <div className="p-3 flex flex-col gap-6">
                        <span className="text-[#F0F7FF] font-bold text-base leading-[23.04px] -tracking-[0.32px]">
                            Help
                        </span>
                        <ul className="flex flex-col gap-6">
                            <li className="text-[#B2D6FF] font-normal text-base leading-[23.04px] -tracking-[0.32px]">
                                Privacy Policy
                            </li>
                            <li className="text-[#B2D6FF] font-normal text-base leading-[23.04px] -tracking-[0.32px]">
                                Subscription Policy
                            </li>
                            <li className="text-[#B2D6FF] font-normal text-base leading-[23.04px] -tracking-[0.32px]">
                                Terms & Services
                            </li>
                        </ul>
                    </div>
                    <div className="p-3 flex flex-col justify-between">
                        <div className="flex flex-col gap-6">
                            <span className="text-[#F0F7FF] font-bold text-base leading-[23.04px] -tracking-[0.32px]">
                                Follow Us
                            </span>
                            <div className="flex gap-6">
                                <Image src={facebook} alt="facebook"/>
                                <Image src={twitter} alt="twitter"/>
                                <Image src={instagram} alt="instagram"/>
                                <Image src={linkedin} alt="linkedin"/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center -mb-10">
                            <button className="bg-[#41FFFC] text-[#006664] rounded-[200px] py-2 px-6 uppercase font-bold text-base leading-[23.04px] -tracking-[0.32px] rotate-[16.532deg] w-[120px] -mr-[25%]">RELIABLE</button>
                            <button className="bg-[#41FF51] text-[#006609] rounded-[200px] py-2 px-6 uppercase font-bold text-base leading-[23.04px] -tracking-[0.32px] -rotate-[17.704deg] w-[120px] -ml-[50%]">AGILE</button>
                            <button className="bg-[#FFE641] text-[#665900] rounded-[200px] py-2 px-6 uppercase font-bold text-base leading-[23.04px] -tracking-[0.32px] -rotate-[4.944deg] [120px] -mt-5 -mr-[30%]">SECURE</button>
                        </div>
                    </div>
                </div>
                <div className='absolute top-[140px] w-[1400px]'>
                    <Image src={line} alt='line' className='w-full -rotate-[19.722]  -z-50' />
                </div>
            </div>
        </>
    );
}


export default Footer;