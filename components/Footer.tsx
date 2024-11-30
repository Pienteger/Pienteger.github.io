import Image from 'next/image';
import left_arrow from "../assets/footer/guidance_left-arrow.svg";
import facebook from "../assets/footer/facebook.svg";
import twitter from "../assets/footer/twitter.svg";
import instagram from "../assets/footer/instagram.svg";
import linkedin from "../assets/footer/linkedin.svg";
import line from "../assets/footer/line.svg";


const Footer = () => {
    const services = [
        {
            url: "",
            title: "AI Integration & Beyond"
        },
        {
            url: "",
            title: "Microsoft Graph & AD Integration"
        },
        {
            url: "",
            title: "Cloud Infrastructure Management"
        },
        {
            url: "",
            title: "API Development and Integration"
        },
        {
            url: "",
            title: "Web Application Development"
        },
        {
            url: "",
            title: "Data Analytics and Insights"
        }
    ]
    const mores = [
        {
            url: "",
            title: "Works"
        },
        {
            url: "",
            title: "Blogs"
        },
        {
            url: "",
            title: "Contact Us"
        }
    ]
    const helps = [
        {
            url: "",
            title: "Privacy Policy"
        },
        {
            url: "",
            title: "Subscription Policy"
        },
        {
            url: "",
            title: "Terms & Services"
        }
    ]
    
    return (
        <>
            <div className="bg-[#FFE641] mt-20 pt-4 pb-20 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0 px-8 rounded-tr-[32px] rounded-tl-[32px]">
                <h1 className="text-[#000B33] font-bold text-2xl leading-[34.56px] -tracking-[0.48px]">
                    Craft Your Dreams, Simple. Reliable. Secure
                </h1>
                <button className="bg-[#000B33] w-full md:w-fit rounded-[200px] px-8 py-4 flex items-center justify-center gap-2">
                    <span className="text-[#B2D6FF] font-medium text-base leading-[21.6px] -tracking-[0.32px]">
                        Contact Us
                    </span>
                    <Image src={left_arrow} alt="left arrow"/>
                </button>
            </div>
            <div className="bg-[#000B33] rounded-tr-[50px] rounded-tl-[50px] py-10 -mt-16 relative overflow-hidden">
                <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between gap-10 px-5 md:px-0">
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
                            {
                                services.map((service, index)=>(
                                    <li key={index} className="text-[#B2D6FF] font-normal text-base leading-[23.04px] -tracking-[0.32px]">
                                        {service?.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="p-3 flex flex-col gap-6">
                        <span className="text-[#F0F7FF] font-bold text-base leading-[23.04px] -tracking-[0.32px]">
                            More
                        </span>
                        <ul className="flex flex-col gap-6">
                            {
                                mores.map((more, index)=>(
                                    <li key={index} className="text-[#B2D6FF] font-normal text-base leading-[23.04px] -tracking-[0.32px]">
                                        {more?.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="p-3 flex flex-col gap-6">
                        <span className="text-[#F0F7FF] font-bold text-base leading-[23.04px] -tracking-[0.32px]">
                            Help
                        </span>
                        <ul className="flex flex-col gap-6">
                            {
                                helps.map((help, index)=>(
                                    <li key={index} className="text-[#B2D6FF] font-normal text-base leading-[23.04px] -tracking-[0.32px]">
                                        {help.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="p-3 flex flex-col justify-between relative md:static">
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
                        <div className="flex flex-col items-center md:-mb-10 absolute md:static bottom-[153px] right-14">
                            <button 
                                className="bg-[#41FFFC] text-[#006664] rounded-[200px] py-2 px-6 uppercase font-bold text-base leading-[23.04px] -tracking-[0.32px] rotate-[18deg] 
                                            w-[120px] -mr-[60px]">
                                    RELIABLE
                            </button>
                            <button 
                                className="bg-[#41FF51] text-[#006609] rounded-[200px] py-2 px-6 uppercase font-bold text-base leading-[23.04px] -tracking-[0.32px] -rotate-[17.704deg] 
                                            w-[120px] -mb-[15px] -ml-[110px]">
                                AGILE
                            </button>
                            <button 
                                className="bg-[#FFE641] text-[#665900] rounded-[200px] py-2 px-6 uppercase font-bold text-base leading-[23.04px] -tracking-[0.32px] -rotate-[4.944deg] 
                                            w-[120px] -mr-[60px]">
                                    SECURE
                            </button>
                        </div>
                    </div>
                </div>
                <div className='absolute top-[140px] w-[1400px]'>
                    <Image src={line} alt='line' className='w-full md:-rotate-[19.722]  -z-50' />
                </div>
            </div>
        </>
    );
}


export default Footer;