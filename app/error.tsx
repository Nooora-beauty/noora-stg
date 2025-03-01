"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import testimonialHead from "@/app/static/icons/testimonialHead.svg";
import colorSplash1 from "@/app/static/images/colorSplash1.svg";
import heartAnimation from "@/app/static/animatedIcons/heartSparkling.json"; 
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const NotFoundPage = () => {
  return (
    <div className="px-[20px] flex h-[600px] md:h-[900px] pt-[130px] lg:pt-[144px] w-full flex-col items-center justify-center bg-[#fff] relative">
      <Image
        src={colorSplash1}
        alt="splash"
        width={542}
        height={542}
        className={`hidden md:block w-[200px] lg:w-[500px] absolute z-[1] right-0 top-1/2 -translate-y-1/2`}
      />
      <Lottie animationData={heartAnimation} loop={true} className="w-[205px] h-[105px] md:w-[330px] md:h-[190px]" />
      <div className="relative max-w-[400px] mb-2 md:mb-5 z-[2]">
        <Image
          src={testimonialHead}
          alt="Testimonial Head"
          width={40}
          height={30}
          className="h-[30px] w-[40px] absolute top-[10px] md:top-[12px] left-[-6px] md:left-[-40px]"
        />
        <p className="w-[86%] md:w-full px-2 mx-auto font-inter text-[#212529b3] text-[16px] text-center py-[30px]">
          Oops! It looks like you’re lost… but beauty is never far away!
          💖 Let’s get you back to pampering.
        </p>
        <Image
          src={testimonialHead}
          alt="Testimonial Head"
          width={40}
          height={30}
          className="h-[30px] w-[40px] absolute !bottom-[12px] right-[-6px] md:right-[-30px] rotate-180"
        />
      </div>
      <Link
        href="/"
        className="font-philosopher bg-primaryGradient transition-all duration-700 ease-in-out hover:transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 text-white font-normal text-body md:text-[20px] rounded-[65px] py-[12px] px-[30px]"
      >
        LINK TO HOMEPAGE
      </Link>
    </div>
  );
};
export default NotFoundPage;
