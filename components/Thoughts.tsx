import React, { useRef } from "react";
import Image from "next/image";
import thought1 from "../assets/thoughts/thought1.png";
import thought2 from "../assets/thoughts/thought2.png";
import thought3 from "../assets/thoughts/thought3.png";
import arrow from "../assets/thoughts/arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const thoughts = [
  {
    image: thought1,
    date: "August 25",
    description:
      "Exploring the Future: How VR is Revolutionising Business and Beyond",
  },
  {
    image: thought2,
    date: "August 15",
    description:
      "How We Integrated OpenAI to Build Optimised Logistics Management",
  },
  {
    image: thought3,
    date: "August 10",
    description: "Automobile Industry: The future of AI and etc",
  },
];

const Thoughts = () => {
  return (
    <div className="bg-pieblue 2xl:bg-transparent">
      <div className="flex flex-col gap-5 pt-[72px] px-5 2xl:pt-0 2xl:px-0">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-[#F0F7FF] text-[24px] font-bold leading-[28.8px] -tracking-[0.48px] lg:text-[40px] lg:leading-[54px] lg:-tracking-[0.8px]">
              Explore Our Latest Case Studies and Insights
            </h2>
            <Link
              href="/all-thoughts"
              className="hidden cursor-pointer lg:block px-8 py-3 border focus:bg-white focus:text-pieblue border-[#F0F7FF] rounded-[200px] font-medium text-[#F0F7FF] text-base leading-[21.6px] -tracking-[0.32px]"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="w-full 2xl:w-[calc(100%-300px)] ml-auto">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
              },
              "@0.75": {
                slidesPerView: 2,
              },
              "@1.00": {
                slidesPerView: 3,
              },
            }}
            className="overflow-scroll"
          >
            {thoughts.map((thought, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col lg:flex-row gap-6 p-0 max-w-[600px] lg:p-5">
                  <Image src={thought.image} alt={thought.date} />
                  <div className="flex gap-6 flex-col justify-between">
                    <span className="text-[#F0F7FF] font-normal text-base leading-[19.2px] -tracking-[0.32px]">
                      {thought.date}
                    </span>
                    <p className="text-[#F0F7FF] font-bold text-base leading-[22.4px] -tracking-[0.32px]">
                      {thought.description}
                    </p>
                    <Link href="/thought-details">
                      <button className="text-[#F0F7FF] font-normal text-base leading-[23.04px] -tracking-[0.32px] flex gap-2 items-center">
                        Read Now{" "}
                        <span>
                          <Image src={arrow} alt="arrow" />
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Link
          href="/all-thoughts"
          className="flex justify-center focus:bg-white focus:text-pieblue lg:hidden w-fit mx-auto mt-10 px-8 py-3 border border-[#F0F7FF] rounded-[200px] font-medium text-[#F0F7FF] text-base leading-[21.6px] -tracking-[0.32px]"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default Thoughts;
