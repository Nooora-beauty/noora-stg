"use client";
import React, { useState } from "react";
import Image from "next/image";
import downArrow from "@/app/static/icons/dropdown-arrow.svg";
import navListPointerBg from "@/app/static/icons/navListPointerBg.svg";
import navLinkArrow from "@/app/static/icons/navLinkArrow.svg";
import navTicket from "@/app/static/images/navTicket.png";
import navRating from "@/app/static/images/navRating.png";
import navWedding from "@/app/static/images/navWedding.png";
import borderHeart from "@/app/static/icons/borderHeart.svg";
import megaMenuBg from "@/app/static/images/megaMenuBG.svg";
import aboutStatStrokes from "@/app/static/images/aboutStatsStrokes.png";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface ServiceNavProps {
  navDetails: {
    name: string;
    menuType: string;
    url: string | null;
    icon: {
      url: string;
    } | null;
  };
  menuDetails: {
    benefits: { text: string; icon: { url: string } }[];
    logo: {
      url: string;
    };
    navServices: {
      title: string;
      media: { url: string };
      url: string | null;
    }[];
  };
}

const ServicesNav: React.FC<ServiceNavProps> = ({
  navDetails,
  menuDetails,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any pending timeout
    if (!open) setOpen(true); // Open only if not already open
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setOpen(false); // Close the menu after a short delay
    }, 200); 
  };
  const handleServiceClick = () => {
    if (navDetails.url) {
      router.push(navDetails.url);
    }
  };
  const router = useRouter();
  return (
    <>
      {/* <DropdownMenu open={open}> */}
      <div
        className="relative z-[99999] outline-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="hidden md:flex items-center gap-[7px] cursor-pointer">
          <p
            className="font-philosopher text-sm lg:text-[18px] text-[#000000] font-normal"
            onClick={handleServiceClick}
          >
            {navDetails.name}
          </p>
          <Image src={downArrow} alt="down arrow" width={10} height={5} />
        </div>
      </div>
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        // align="end"
        // alignOffset={-190}
        className={cn(
          open ? "block" : "hidden",
          "absolute top-[91px] left-[190px] outline-none border-none p-0 bg-[#FFFFFF] border-[1px] border-[#FFE1DC] rounded-[20px] w-full max-w-[1270px] h-[555px] z-[99999] dropdown-content-arrow"
        )}
      >
        <div className="relative outline-none border-none p-0 rounded-[20px] w-full max-w-[1270px] h-[555px] overflow-hidden">
          <div className="relative w-full h-full">
            <div className="w-full max-w-fit flex gap-x-[40px] m-auto mt-[30px]">
              <div className="w-full max-w-fit flex flex-col gap-y-[10px]">
                {menuDetails.benefits.map((item, index) => {
                  return (
                    <div key={index} className="flex gap-x-[20px]">
                      <div className="relative w-[45px]">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                            item.icon?.url || ""
                          }`}
                          alt={`pointer petal icon`}
                          width={60}
                          height={60}
                          priority
                          // unoptimized
                          className="absolute -translate-x-[30%] w-full min-w-[120px] h-auto"
                        />
                        <Image
                          src={navListPointerBg}
                          alt={`nav feature background`}
                          width={45}
                          height={45}
                          priority
                          // unoptimized
                          className="w-full max-w-[45px] h-auto max-h-[45px]"
                        />
                      </div>
                      <div className="self-center font-philosopher font-normal text-[#000000] text-[20px] leading-[28px] whitespace-nowrap">
                        {item.text}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <div className="flex gap-x-[15px]">
                  {menuDetails.navServices.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="relative w-[135px] cursor-pointer z-[9999]"
                        onClick={() => {
                          if (item?.url) router.push(item?.url);
                          setOpen(false);
                        }}
                      >
                        <div className="relative w-[135px] h-[235px] cursor-pointer mb-[15px] nav-list-item">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                              item.media?.url || ""
                            }`}
                            alt="nav serviceItem image"
                            fill
                            sizes="(max-width: 768px) 100vw, 135px"
                            priority
                            className="relative h-full w-full rounded-[10px] object-cover"
                          />
                          <div className="w-full max-w-[15px] nav-link-icon">
                            <Image
                              src={navLinkArrow}
                              alt="nav serviceLink Icon"
                              width={15}
                              height={15}
                              priority
                              className="relative h-full w-full"
                            />
                          </div>
                        </div>
                        <div className="font-philosopher font-normal text-[28px] text-[#0A0A0A] leading-[32px]">
                          {item.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex gap-x-[15px] mt-[60px]">
                  <Image
                    // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${dummyGiftCardDetails.image?.url || ""}`}
                    src={navTicket}
                    width={217}
                    height={114}
                    priority
                    // unoptimized
                    alt="mobile ticket-card"
                    className="cursor-pointer relative z-[9] w-full max-w-[217px] h-auto"
                  />
                  <div className="w-full flex flex-row gap-x-[15px]">
                    <Image
                      // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${dummyGiftCardDetails.image?.url || ""}`}
                      src={navRating}
                      width={315}
                      height={115}
                      priority
                      // unoptimized
                      alt="mobile ticket-card"
                      className="cursor-pointer relative z-[9] w-full max-w-[315px] h-auto"
                    />
                    <div className="relative">
                      <div
                        onClick={() => {
                          router.push("/wedding");
                          setOpen(false);
                        }}
                      >
                        <Image
                          // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${dummyGiftCardDetails.image?.url || ""}`}
                          src={navWedding}
                          width={315}
                          height={114}
                          // unoptimized
                          priority
                          alt="mobile ticket-card"
                          className="cursor-pointer relative z-[9] w-full max-w-[315px] h-auto"
                        />
                      </div>
                      <Image
                        // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${dummyGiftCardDetails.image?.url || ""}`}
                        src={borderHeart}
                        width={30}
                        height={16}
                        priority
                        // unoptimized
                        alt="mobile ticket-card"
                        className="absolute z-[99] w-[30px] h-auto top-0 left-[27px] -translate-y-[85%]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              // src={`${
              //   process.env.NEXT_PUBLIC_STRAPI_URL
              // }${"/uploads/couple_Special_Video_ezgif_com_video_to_gif_converter_6013eb5903.gif"}`}
              src={aboutStatStrokes}
              width={336}
              height={226}
              unoptimized
              priority
              alt="mega-menu bg-1"
              className="w-full max-w-[536px] h-auto absolute bottom-0 rotate-180 -translate-x-[30%] translate-y-1/2 z-[1]"
            />
            <Image
              // src={`${
              //   process.env.NEXT_PUBLIC_STRAPI_URL
              // }${"/uploads/couple_Special_Video_ezgif_com_video_to_gif_converter_6013eb5903.gif"}`}
              src={megaMenuBg}
              // width={336}
              // height={226}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 536px"
              // unoptimized
              alt="mega-menu bg-2"
              className="w-full h-auto bottom-0 translate-y-[25%] z-0"
            />
          </div>
        </div>
      </motion.div>
      {/* </DropdownMenu> */}
    </>
  );
};

export default ServicesNav;
