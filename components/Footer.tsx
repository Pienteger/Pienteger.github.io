import Image from 'next/image';
import left_arrow from "../assets/footer/guidance_left-arrow.svg";
import facebook from "../assets/footer/facebook.svg";
import twitter from "../assets/footer/twitter.svg";
import instagram from "../assets/footer/instagram.svg";
import linkedin from "../assets/footer/linkedin.svg";
import line from "../assets/footer/line.svg";
import Link from 'next/link';
import ServicesData from '../public/services/data.json';


const Footer = () => {
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
            url: "contact",
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
            url: "tos",
            title: "Terms & Services"
        }
    ]

    const currentYear = new Date().getFullYear();
    
    return (
        <>
            <div className="bg-[#FFE641] pt-4 pb-20 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0 px-8 rounded-tr-[32px] rounded-tl-[32px]">
                <h2 className="text-[#000B33] font-bold text-2xl leading-[34.56px] -tracking-[0.48px]">
                    Craft Your Dreams, Simple. Reliable. Secure
                </h2>
                <button className="bg-[#000B33] w-full lg:w-fit rounded-[200px] px-8 py-4 flex items-center justify-center gap-2">
                    <Link href="/contact" className="text-[#B2D6FF] font-medium text-base leading-[21.6px] -tracking-[0.32px]">
                        Contact Us
                    </Link>
                    <Image src={left_arrow} alt="left arrow"/>
                </button>
            </div>
            <div className="bg-[#000B33] rounded-tr-[50px] rounded-tl-[50px] py-10 -mt-16 relative overflow-hidden">
                <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between gap-10 px-5 flex-wrap 2xl:px-0 2xl:flex-nowrap relative z-50">
                    <div className="flex flex-col gap-3 justify-center mr-[120px]">
                        <Link href="/" className="text-[#F0F7FF] font-bold text-2xl leading-[32.4px] -tracking-[0.48px]">
                            Pienteger
                        </Link>
                        <p className="text-[#B2D6FF] font-normal text-base leading-[24px] -tracking-[0.32px]">
                            © {currentYear} All Rights Reserved
                        </p>
                    </div>
                    <div className="p-3 flex flex-col gap-6">
                        <span className="text-[#F0F7FF] font-bold text-base leading-[23.04px] -tracking-[0.32px]">
                            Services
                        </span>
                        <ul className="flex flex-col gap-6">
                            {
                                ServicesData.map((service, index)=>(
                                    <li key={index} className="text-[#B2D6FF] font-normal text-base leading-[23.04px] -tracking-[0.32px]">
                                        <Link  href={`/services/${service.slug}`}>
                                            {service?.title}
                                        </Link>
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
                                        <Link href={`/${more?.url || ""}`}>
                                            {more?.title}
                                        </Link>
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
                                    <li key={index} className="text-[#B2D6FF] font-normal text-base leading-[23.04px] -tracking-[0.32px] cursor-pointer">
                                        <Link href={`/${help?.url || ""}`}>
                                            {help.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="p-3 flex flex-col justify-between relative lg:static">
                        <div className="flex flex-col gap-6">
                            <span className="text-[#F0F7FF] font-bold text-base leading-[23.04px] -tracking-[0.32px]">
                                Follow Us
                            </span>
                            <div className="flex gap-6">
                                <a href="https://www.facebook.com/pientegersoftware/" target='_blank'>
                                    <Image src={facebook} alt="facebook"/>
                                </a>
                                {/* <a href="#">
                                    <Image src={twitter} alt="twitter"/>
                                </a>
                                <a href="#">
                                    <Image src={instagram} alt="instagram"/>
                                </a> */}
                                <a href="https://www.linkedin.com/company/pienteger/" target='_blank'>
                                    <Image src={linkedin} alt="linkedin"/>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:-mb-10 absolute 2xl:static bottom-[153px] right-14 lg:right-20 xl:right-44 2xl:right-0">
                            <button 
                                className="bg-[#41FFFC] text-[#006664] rounded-[200px] py-2 px-6 uppercase font-bold text-base leading-[23.04px] -tracking-[0.32px] rotate-18 
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
                <div className='absolute top-[140px] w-[1400px] z-10'>
                    <Image src={line} alt='line' className='w-full lg:-rotate-[19.722]  -z-50' />
                </div>
            </div>
        </>
    );
}


export default Footer;