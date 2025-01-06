import Header from "@/components/Header";
import { Metadata } from "next";
import logo from "@/assets/bluenewlogo2024.png";
import mobilenavopen from "@/assets/bluemobilenavopen.svg"
import mobilenavclose from "@/assets/bluemobilenavclose.svg"
import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import SuccessStory from "@/components/about/SuccessStory";
import GrowingTeam from "@/components/about/GrowingTeam";
import Hiring from "@/components/about/Hiring";

export const metadata: Metadata = {
    title: "About Us | Pienteger®",
    description: "About Pienteger® - A software company that you can trust.",
};

const About = () => {
    const customBorder = {
        borderBottom: '0.5px solid',
        borderImageSource: 'linear-gradient(90deg, rgba(0, 51, 229, 0) 0%, rgba(0, 51, 229, 0.5) 100%)',
        borderImageSlice: 1
    }

    return (
        <>
            <header className='flex-init bg-[#F0F7FF] sticky top-0 z-[999]'>
                <Header primaryColor="#0033E5" logo={logo} customBorder={customBorder} mobilenavopen={mobilenavopen} mobilenavclose={mobilenavclose}/>
            </header>
            <Hero/>
            <Story/>
            <SuccessStory/>
            <GrowingTeam/>
            <Hiring/>
        </>
    );

};

export default About;
