import React, { useRef, useEffect, useState } from 'react';
import full_dhaka from '../assets/full_dhaka.webm';
import full_dhaka_poster from '../assets/full_dhaka_poster.jpg';
import kk_icon from '../assets/kk_icon.png';
import ProductCard from '../Components/ProductCard';

const Home: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    return (
        <>
            <div className='relative py-24'>
                <video preload='auto' autoPlay muted ref={videoRef}
                    poster={full_dhaka_poster}
                    className='w-full h-full object-cover absolute top-0 left-0 z-0 transition-opacity'
                    id="bg-video">
                    <source src={full_dhaka} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className='w-full h-full bg-black bg-opacity-50 top-0 left-0 absolute'></div>
                <div className="flex flex-col gap-2 h-full items-center justify-center text-center z-20 relative">
                    <p className="font-bold text-3xl text-white">
                        Replacing Complexity with Simplicity
                    </p>
                    <p className="text-xl text-white">
                        Pienteger®, on a Mission to Shape Bangladesh into a Smart Nation.
                    </p>

                    <a href="mailto:pienteger@gmail.com"
                        className="flex items-center justify-center gap-1 px-3 py-2 bg-purple-400 rounded font-bold text-purple-950 md:w-fit">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.25 4H18.75C20.483 4 21.8992 5.35645 21.9949 7.06558L22 7.25V16.75C22 18.483 20.6435 19.8992 18.9344 19.9949L18.75 20H5.25C3.51697 20 2.10075 18.6435 2.00514 16.9344L2 16.75V7.25C2 5.51697 3.35645 4.10075 5.06558 4.00514L5.25 4H18.75H5.25ZM20.5 9.373L12.3493 13.6637C12.1619 13.7623 11.9431 13.7764 11.7468 13.706L11.6507 13.6637L3.5 9.374V16.75C3.5 17.6682 4.20711 18.4212 5.10647 18.4942L5.25 18.5H18.75C19.6682 18.5 20.4212 17.7929 20.4942 16.8935L20.5 16.75V9.373ZM18.75 5.5H5.25C4.33183 5.5 3.57881 6.20711 3.5058 7.10647L3.5 7.25V7.679L12 12.1525L20.5 7.678V7.25C20.5 6.33183 19.7929 5.57881 18.8935 5.5058L18.75 5.5Z" fill="currentColor" />
                        </svg>
                        Join Our Dream
                    </a>
                </div>
            </div>

            <div className='px-2 md:px-40 py-10'>
                <h1 className='mx-auto text-3xl font-bold mb-2'>Our Products -</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <ProductCard name="Sertifiket&trade;"
                        icon="https://sertifiket.com/favicon.png"
                        tagline="Proof of you"
                        description="Comprehensive solution for digital identity, certificates, and documents." 
                        link='https://sertifiket.com'
                        linkText='Visit Website'/>

                    <ProductCard name="Kothakunjo&trade;"
                        icon={kk_icon}
                        tagline="Learn more, digitally"
                        description="All-in-one digital platform for e-books, audiobooks, and courses." 
                        link='https://kothakunjo.com'
                        linkText='Visit Website'/>

                    <ProductCard name="Placeia&trade;"
                        icon="https://placeia.com/favicon.svg"
                        tagline="Find a place, make it home"
                        description="One-stop solution for real estate, rental, and property management."
                        link='https://placeia.com'
                        linkText='Visit Website' />
                </div>
            </div>

            <div className='px-2 md:px-40 py-10'>
                <h1 className='mx-auto text-3xl font-bold mb-2'>Open source -</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <ProductCard name="QuranLib"
                        icon="https://www.nuget.org/Content/gallery/img/default-package-icon.svg"
                        tagline=".NET Lib for Quran app development"
                        description="A portable Quran library that gives read-only access to the entire Holy Quran."
                        link='https://www.nuget.org/packages/Pienteger.QuranLib/7.0.1' />
                </div>
            </div>
        </>
    )

}
export default Home;