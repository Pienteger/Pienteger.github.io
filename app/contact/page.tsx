import Header from "@/components/Header";
import { Metadata } from "next";
import logo from "@/assets/bluenewlogo2024.png";
import mobilenavopen from "@/assets/bluemobilenavopen.svg";
import mobilenavclose from "@/assets/bluemobilenavclose.svg";
import ContactForm from "@/components/contact/ContactForm";
import { Icon } from '@iconify-icon/react';

export const metadata: Metadata = {
    title: "Contact Us | Pienteger®",
    description: "Contact Pienteger® for inquiries, support, or any other information.",
};

const Contact = () => {
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
            <div className="max-w-[600px] mx-auto px-5 xl:px-0 pt-16 pb-24">
                <ContactForm/>
                <Icon icon="mdi-light:alert" aria-label="Alert" />
            </div>
        </>
    );
};

export default Contact;
