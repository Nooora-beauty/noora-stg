"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { MdStars } from "react-icons/md";
import Link from "next/link";

interface ItemInterface {
  title: string;
  price: string;
  offerPercent: string | null;
  buttonText: string;
  image: {
    url: string;
  };
}

interface CardsSliderProps {
  tabCards: {
    title: string;
    price: string;
    buttonText: string;
    offerPercent: string | null;
    image: {
      url: string;
    };
  }[];
}
const CardsSlider: React.FC<CardsSliderProps> = ({ tabCards }) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    // slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    speed: 100,
    autoplaySpeed: 700,
    swipeToSlide: true,
    cssEase: "linear",
    responsive: [
      // {
      //   breakpoint: 1344,
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 4,
      //   },
      // },
      {
        breakpoint: 1248,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 3,
        },
      },
      {
        breakpoint: 685,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="slider-theme-arrow relative">
      {tabCards?.map((item: ItemInterface, index: number) => {
        return (
          <div key={index} className="w-full lg:w-fit">
            <div className="px-[5px] min-h-[250px] md:min-h-[289px] m-auto lg:m-0">
              <div className={`p-2 bg-white rounded-xl slider-shadow`}>
                <div className="w-full max-w-[100%] relative mb-[15px]">
                  <div className="w-full h-[100px] xs:h-[120px] sm:h-[130px] md:h-[150px] overflow-hidden rounded-b-[6px] bg-[#ededed]">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                        item?.image?.url || ""
                      }`}
                      // width={200}
                      // height={130}
                      alt="card Image"
                      priority
                      placeholder="blur"
                      blurDataURL={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                        item?.image?.url || ""
                      }`}
                      fill
                      sizes="(max-width: 768px) 100vw, 100%"
                      className="h-[auto] w-full rounded-t-[10px] rounded-b-[5px] object-cover"
                    />
                  </div>
                  {item.offerPercent && (
                    <div className="flex items-center bg-white px-[8px] py-[5px] rounded-[5px] absolute bottom-[-11px] left-[11px] z-10">
                      <MdStars
                        className="text-sm md:text-md text-[#008000] mr-1"
                        aria-hidden="true"
                        role="none"
                      />
                      <p className="uppercase text-[#212529] text-xxs md:text-[12px] leading-[14px] md:leading-[16px]">
                        <b className="font-extrabold">{item.offerPercent}</b>{" "}
                        OFF
                      </p>
                    </div>
                  )}
                </div>
                <div className="py-2 relative">
                  <h5 className="text-[#A45D63] font-normal mb-1 font-philosopher text-sm md:text-[20px]">
                    {item?.title}
                  </h5>
                  <p className="font-normal text-[#212529] text-xs md:text-[16px] mb-3">
                    Starts at <b className="font-semibold">{item.price}</b>
                  </p>
                  <Link
                    // aria-hidden="true"
                    href={`${
                      process.env.NEXT_PUBLIC_WHATSAPP_LINK
                    }?text=Hi Nooora, I would like to book for ${item.title} ${
                      item.offerPercent ? `(${item.offerPercent} OFF)` : ""
                    }.`}
                    className="font-philosopher uppercase bg-primaryGradient transition-all duration-700 ease-in-out hover:transform hover:scale-110 hover:shadow-lg hover:-translate-y-1 text-white font-normal text-xs md:text-[16px] rounded-[65px] py-[6px] px-[10px] md:px-[12px] absolute right-0 bottom-[-23px] md:bottom-[-27px] z-10"
                  >
                    BOOK NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default CardsSlider;
