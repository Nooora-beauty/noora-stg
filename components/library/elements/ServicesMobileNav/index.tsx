"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import navListPointerBg from "@/app/static/icons/navListPointerBg.svg";
import mobileTicket from "@/app/static/images/mobileTicket.svg";
import navRating from "@/app/static/images/navRating.png";
import navWedding from "@/app/static/images/navWedding.png";
import megaMenuBg from "@/app/static/images/megaMenuBG.svg";
import aboutStatStrokes from "@/app/static/images/aboutStatsStrokes.png";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

interface ServicesMobileNavProps {
  // src?: string;
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

const ServicesMobileNav: React.FC<ServicesMobileNavProps> = ({
  menuDetails,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const isAndroid = useMemo(() => {
    if (
      typeof window !== "undefined" &&
      window.navigator &&
      window.navigator.userAgent
    ) {
      return /Android/i.test(window.navigator.userAgent);
    }
    return false;
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [drawerOpen]);
  return (
    <>
      <div
        className="block md:hidden items-center cursor-pointer"
        onClick={() => setDrawerOpen(true)}
      >
        <IoIosMenu className="w-[35px] h-[35px] text-[#e29a8f]" />
      </div>

      <div
        className={`fixed top-0 left-0 bg-white w-full h-screen overflow-auto z-[99999] transition-transform duration-300 ease-in-out 
            ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="sticky top-0 z-[999999] bg-white flex justify-between m-4 mt-0 py-5 border-b-[1px] border-[#F6E1DD]">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
              menuDetails.logo?.url || ""
            }`}
            alt="Nooora Logo"
            width={130}
            height={35}
            priority
            className="cursor-pointer w-[130px] h-[35px] lg:w-[189px] lg:h-[42px]"
          />
          <IoCloseOutline
            className="w-[35px] h-[35px] text-[#0A0A0A]"
            onClick={() => setDrawerOpen(false)}
          />
        </div>
        <div
          className={`relative w-full h-full px-[16px] overflow-hidden ${
            isAndroid && "h-[88%]"
          }`}
        >
          <div className="w-full flex flex-col gap-y-[20px] m-auto">
            <div className="w-full grid grid-cols-3 gap-[10px]">
              {menuDetails.navServices.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative cursor-pointer z-[9999]"
                    onClick={() => {
                      if (item?.url) router.push(item?.url);
                      setDrawerOpen(false);
                    }}
                  >
                    <div className="relative w-full h-[105px] cursor-pointer mb-[5px]">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                          item.media?.url || ""
                        }`}
                        alt="nav serviceItem image"
                        fill
                        sizes="(max-width: 768px) 100vw, 100%"
                        priority
                        className="relative h-full w-full rounded-[10px] object-cover"
                      />
                    </div>
                    <div className="font-philosopher font-normal text-[18px] text-[#0A0A0A] leading-[22px]">
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-full max-w-fit flex flex-col gap-y-[5px]">
              {menuDetails.benefits.map((item, index) => {
                return (
                  <div key={index} className="flex gap-x-[10px]">
                    <div className="relative w-[25px]">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                          item.icon?.url || ""
                        }`}
                        alt={`pointer petal icon`}
                        width={60}
                        height={60}
                        priority
                        className="absolute -translate-x-[30%] w-full min-w-[60px] h-auto"
                      />
                      <Image
                        src={navListPointerBg}
                        alt={`nav feature background`}
                        width={15}
                        height={15}
                        priority
                        className="w-full max-w-[25px] h-auto max-h-[25px]"
                      />
                    </div>
                    <div className="self-center font-philosopher font-normal text-[#000000] text-[15px] leading-[28px] whitespace-nowrap">
                      {item.text}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-start gap-x-[15px] max-w-[341px] pb-2">
              <div className="w-full flex flex-col gap-y-[15px]">
                <Image
                  // src={${process.env.NEXT_PUBLIC_STRAPI_URL}${dummyGiftCardDetails.image?.url || ""}}
                  src={navRating}
                  width={315}
                  height={115}
                  // unoptimized
                  priority
                  alt="mobile ticket-card"
                  className="cursor-pointer relative z-[9] w-full max-w-[315px] h-auto"
                />
                <div
                  className="relative"
                  onClick={() => {
                    router.push("/wedding");
                    setDrawerOpen(false);
                  }}
                >
                  <Image
                    // src={${process.env.NEXT_PUBLIC_STRAPI_URL}${dummyGiftCardDetails.image?.url || ""}}
                    src={navWedding}
                    width={315}
                    height={114}
                    // unoptimized
                    priority
                    alt="mobile ticket-card"
                    className="cursor-pointer relative z-[9] w-full max-w-[315px] h-auto"
                  />
                </div>
              </div>
              <Image
                // src={${process.env.NEXT_PUBLIC_STRAPI_URL}${dummyGiftCardDetails.image?.url || ""}}
                src={mobileTicket}
                width={217}
                height={114}
                // unoptimized
                priority
                alt="mobile ticket-card"
                className="cursor-pointer relative z-[9] w-full max-w-[117px] h-auto"
              />
            </div>
          </div>
          <Image
            // src={${
            //   process.env.NEXT_PUBLIC_STRAPI_URL
            // }${"/uploads/couple_Special_Video_ezgif_com_video_to_gif_converter_6013eb5903.gif"}}
            src={aboutStatStrokes}
            width={336}
            height={226}
            priority
            unoptimized
            alt="mega-menu bg-1"
            className="w-full max-w-[580px] md:max-w-[636px] absolute bottom-0 h-auto rotate-180 left-[calc(50%-22px)] -translate-x-1/2 translate-y-[50%] z-[-1]"
          />
          <Image
            // src={${
            //   process.env.NEXT_PUBLIC_STRAPI_URL
            // }${"/uploads/couple_Special_Video_ezgif_com_video_to_gif_converter_6013eb5903.gif"}}
            src={megaMenuBg}
            // width={336}
            // height={226}
            fill
            sizes="(max-width: 768px) 580px, 636px"
            unoptimized
            priority
            alt="mega-menu bg-2"
            className="w-full h-auto absolute bottom-0 translate-y-[45%] z-[-1]"
          />
        </div>
      </div>
    </>
  );
};

export default ServicesMobileNav;
