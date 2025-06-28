"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import Image from "next/image";
import sertifiket from "../assets/products/sertifiket.png";
import crowLogo from "../assets/products/crow-logo.png";
import rasidah_logo from "../assets/products/rasidah_logo.png";
import green_left_arrow from "../assets/products/green_left_arrow.svg";
import blue_left_arrow from "../assets/products/blue_left_arrow.svg";
import brown_arrow from "../assets/products/brown_left_arrow.svg";
import easywashapp_logo from "../assets/products/easywashapp_logo.png";
import left_arrow from "../assets/products/left_arrow.svg";
import right_arrow from "../assets/products/right_arrow.svg";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/varients";

import "./style/custom.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

const projectsContents = [
  {
    image: easywashapp_logo,
    arrow: blue_left_arrow,
    title: "EasyWash",
    description:
      "A California based laundry management system for efficient operations",
    bg_color: "#CCD7FF",
    primary_color: "#0033E5",
    website: "https://easywashapp.com",
  },
  {
    image: crowLogo,
    arrow: green_left_arrow,
    title: "Crow™",
    description:
      "Efficient CLI tool to scan and delete build files, helping you free up disk space.",
    bg_color: "#CCFFD0",
    primary_color: "#006609",
    website: "https://github.com/Pienteger/Crow/releases",
  },
  {
    image: rasidah_logo,
    arrow: brown_arrow,
    title: "Rasidah",
    description: "A tech focused online news agency in the Bangladesh region",
    bg_color: "#FFF8CC",
    primary_color: "#665900",
    website: "https://rasidah.com",
  },
];

const SuccessSwiper = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <motion.div
      variants={fadeIn("up", 0.02)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className="max-w-[1280px] mx-auto py-20 flex flex-col gap-10 px-5 2xl:px-0"
    >
      <div className="flex justify-between items-center">
        <h4 className="text-[#0033E5] text-[24px] font-bold leading-[28.8px] -tracking-[0.48px] lg:text-[40px] lg:leading-[54px] lg:-tracking-[0.8px]">
          Reliable, Innovative Products Crafted
        </h4>
        <div className="hidden lg:flex gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hover:opacity-60"
          >
            <Image src={left_arrow} alt="left_arrow" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hover:opacity-60"
          >
            <Image src={right_arrow} alt="right_arrow" />
          </button>
        </div>
      </div>
      <div className="w-full">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{ clickable: true }}
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
          modules={[Pagination]}
          className="custom-swipper"
        >
          {projectsContents.map((content, index) => (
            <SwiperSlide key={index}>
              <div
                className={`px-5 py-6 flex flex-col gap-5 rounded-xl border-b-[5px]`}
                style={{
                  backgroundColor: content.bg_color,
                  borderBottomColor: content.primary_color,
                }}
              >
                <Image src={content.image} alt={content.title} height={40} />
                <h4
                  className={`text-[${content.primary_color}] text-2xl font-bold leading-[32.4px] -tracking-[0.48px]`}
                >
                  {content.title}
                </h4>
                <p
                  className={`text-[${content.primary_color}] text-base font-normal leading-[21.6px] -tracking-[0.32px]`}
                >
                  {content.description}
                </p>
                <a
                  className={`flex items-center gap-2 text-[${content.primary_color}] text-base font-bold leading-[21.6px] -tracking-[0.32px]`}
                  href={content.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website{" "}
                  <span>
                    <Image src={content.arrow} alt={`${content.title} arrow`} />
                  </span>
                </a>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination mt-20"></div>
        </Swiper>
      </div>
    </motion.div>
  );
};

export default SuccessSwiper;
