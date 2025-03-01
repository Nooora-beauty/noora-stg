"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import testimonialHead from "@/app/static/icons/testimonialHead.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarRating from "../StarRating";

interface TestimonialSliderProps {
  // list: { author: string; review: string; stars: number }[];
  list?: {
    author: string;
    review: string;
    stars: number;
    avatar: {
      url: string;
    } | null;
  }[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ list }) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    waitForAnimate: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
    customPaging: (index: number) => (
      <div
        className={`w-[37px] h-[3px] border-[3px] rounded-[60px] border-[#d8d8d8] ${
          index === currentTestimonialIndex && "border-[4px] !border-[#C07858]"
        }`}
      ></div>
    ),
    afterChange: (index: number) => setCurrentTestimonialIndex(index),
  };
  return (
    <>
      <Slider {...settings} className="testimonial-slider relative">
        {list?.map((item, index: number) => {
          return (
            <div
              key={index}
              className="w-full h-full mb-[65px] border-1 border-black"
            >
              <div className={` bg-white relative`}>
                <Image
                  src={testimonialHead}
                  priority
                  alt="Testimonial Head"
                  className="h-[34px] w-[58px] absolute top-0 left-[50%] -translate-x-1/2"
                />
                <div
                  className="py-[50px] md:py-[68px] px-[10px] md:px-[17px] border-b-[1px] border-[#00000033]"
                  style={{
                    borderStyle: "dashed",
                    borderBottomWidth: "1px",
                    borderImageSlice: "1",
                    borderImageWidth: "1",
                    borderImageOutset: "0",
                    borderImageSource:
                      "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%2300000033' stroke-width='3' stroke-dasharray='5, 9' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
                  }}
                >
                  <h5 className="font-philosopher font-normal text-[20px] md:text-[40px] text-[#212529] text-center leading-[27px] md:leading-[54px]">
                    {item?.review}
                  </h5>
                </div>
                <div
                  className="py-[14px]"
                  style={{
                    borderStyle: "dashed",
                    borderBottomWidth: "1px",
                    borderImageSlice: "1",
                    borderImageWidth: "1",
                    borderImageOutset: "0",
                    borderImageSource:
                      "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%2300000033' stroke-width='3' stroke-dasharray='5, 9' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
                  }}
                >
                  <div className="flex gap-[20px] items-center justify-between">
                    <div className="flex gap-[10px] md:gap-[20px] items-center">
                      <Avatar className="w-[26px] md:w-[40px] h-[26px] md:h-[40px] text-sm md:text-[16px]">
                        <AvatarImage
                          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                            item?.avatar?.url || ""
                          }`}
                        />
                        <AvatarFallback className="bg-[lightgrey]">
                          {item.author[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <p className="font-normal text-sm md:text-[20px] text-[#212529] leading-[28px]">
                        {item.author}
                      </p>
                    </div>
                    <div className="flex gap-[20px] items-center">
                      <StarRating
                        total={5}
                        rating={item.stars}
                        className="w-[95px] md:w-[162px] justify-between text-sm md:text-[27px] !gap-[2px] md:!gap-[7px]"
                        color="#D69388"
                      />
                      <p className="hidden lg:block font-normal text-[16px] text-[#B66C4B] leading-[22px]">
                        5 Star Rated On-Demand Beauty
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default TestimonialSlider;
