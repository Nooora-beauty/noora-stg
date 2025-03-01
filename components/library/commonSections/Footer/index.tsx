"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { appFooterNavigation } from "@/app/constant";
import FooterServiceList from "../../elements/FooterServiceList";
import Image from "next/image";
// import whatsappRoundIcon from "@/app/static/icons/whatsapp-round.svg";
import supportedCards from "@/app/static/images/footer-pay.png";
import { FaFacebookF, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import loadingTextAnimation from "@/app/static/loaders/loadingText.json";
// import Lottie from "lottie-react";
// import Marquee from "@/components/ui/marquee";
// import FlipText from "@/components/ui/flip-text";

const Marquee = dynamic(() => import("@/components/ui/marquee"), {
  loading: () => <div className="bg-[#FDF2F2]"></div>,
  ssr: false,
});

const FlippingList = dynamic(() => import("../../elements/FlippingList"), {
  loading: () => <div className="bg-[#FDF2F2]"></div>,
  ssr: false,
});

const Lottie = dynamic(() => import("lottie-react"), {
  loading: () => (
    <div className="h-6 w-6 md:h-10 md:w-10 rounded-full border-4 border-gray-200 border-t-4 border-t-primary animate-custom-spin"></div>
  ),
  ssr: false,
});

interface AppFooterPropsInterface {
  footerData: {
    logo: {
      url: string;
    };
    id: number;
    description: string;
    locationList1: {
      id: number;
      name?: string;
    }[];
    locationList2: {
      id: number;
      name?: string;
    }[];
    locationList3: {
      id: number;
      name?: string;
    }[];
    servicesList: {
      title: string;
      list: {
        text: string;
        url: string;
      }[];
    }[];
  };
}

const AppFooter: React.FC<AppFooterPropsInterface> = ({ footerData }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowData(true);
    }, 3000);
  }, []);

  useEffect(() => {
    // Check if the window object is available (client-side)
    if (typeof window !== "undefined") {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth <= 767);
      };

      checkScreenSize(); // Initial check
      window.addEventListener("resize", checkScreenSize);

      return () => {
        window.removeEventListener("resize", checkScreenSize);
      };
    }
  }, []);

  console.log("Footer re-rendering");
  return (
    <>
      {/* section-1 */}
      <div className="w-full h-full bg-[#F9F2F2] mb-[2px] pt-[41px] pb-[43px] rounded-t-[60px]">
        <div className="common-container !w-[90%] !max-w-[1242px]">
          <p className="font-philosopher font-normal text-lg md:text-[25px] text-center text-[#212529] leading-[28px] md:leading-[35px] mb-[16px]">
            Our Locations
          </p>

          {showData ? (
            <div className="flex flex-wrap justify-center">
              <Marquee className="[--duration:30s]">
                <FlippingList
                  locationList={footerData?.locationList1}
                  className="w-full min-w-[110px] md:min-w-[160px] min-h-[44px] md:min-h-[55px] font-philosopher bg-white font-normal text-sm lg:text-[20px] text-[#212529] text-center leading-[28px] rounded-[10px] py-[8px] lg:py-[14px] px-[17px] lg:px-[34px] transition-[width] duration-500"
                />
              </Marquee>
              <Marquee className="[--duration:50s]">
                <FlippingList
                  locationList={footerData?.locationList2}
                  className="w-full min-w-[150px] md:min-w-[200px] min-h-[44px] md:min-h-[55px] font-philosopher bg-white font-normal text-sm lg:text-[20px] text-[#212529] text-center leading-[28px] rounded-[10px] py-[8px] lg:py-[14px] px-[17px] lg:px-[34px] transition-[width] duration-500"
                />
              </Marquee>
              <Marquee className="[--duration:110s]">
                <FlippingList
                  locationList={footerData?.locationList3}
                  className="min-w-[220px] md:min-w-[320px] min-h-[44px] md:min-h-[55px] font-philosopher bg-white font-normal text-sm lg:text-[20px] text-[#212529] text-center leading-[28px] rounded-[10px] py-[8px] lg:py-[14px] px-[17px] lg:px-[34px] transition-[width] duration-500"
                />
              </Marquee>
            </div>
          ) : (
            <div className="flex justify-center items-center py-6 md:py-10">
              {/* <div className="h-6 w-6 md:h-10 md:w-10 rounded-full border-4 border-gray-200 border-t-4 border-t-primary animate-custom-spin"></div> */}
              <Lottie animationData={loadingTextAnimation} />
            </div>
          )}
        </div>
      </div>
      {/* section-2 */}
      <div className="w-full h-full bg-[#F9F2F2] mb-[2px] pt-[66px] pb-[27px]">
        <div className="common-container !w-[90%] !max-w-[963px]">
          <div className="flex justify-center mb-[20px] md:mb-[35px]">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                footerData?.logo?.url || ""
              }`}
              alt="Nooora Logo"
              width={23}
              height={23}
              className="cursor-pointer w-[130px] h-[35px] lg:w-[252px] lg:h-[56px]"
            />
          </div>
          <div className="w-[100%] max-w-[803px] font-philosopher font-normal text-body lg:text-[18px] text-center text-[#9E5A57] leading-[22px] lg:leading-[25px] mb-[20px] md:mb-[34px] m-auto">
            {footerData?.description}
          </div>
          <div className="flex flex-wrap justify-center gap-x-[10px] gap-y-[10px] ">
            {appFooterNavigation.map((nav, index) => {
              return (
                <Link
                  href={nav.link || ""}
                  key={index}
                  className=" border-[1px] border-[#C67D7180] text-[#9E5A57] hover:border-[#9E5A57] hover:bg-[white] hover:text-[#9E5A57] duration-700 ease-out hover:ease-in-out font-normal text-xs lg:text-body rounded-[70px] py-[3px] px-[11px] lg:py-[6px] lg:px-[22px]"
                >
                  {nav.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* section-3 */}
      <div className="w-full h-full bg-[#F9F2F2] mb-[2px] pt-[35px] pb-[43px]">
        <div className="common-container !w-[90%] !max-w-[1242px] !mb-[20px] lg:!mb-0">
          {!isMobile && (
            <div className="hidden md:flex flex-wrap flex-col sm:flex-row items-center sm:items-start justify-between gap-x-[67px] gap-y-[30px]">
              {footerData?.servicesList?.map((service, index) => {
                return (
                  <FooterServiceList
                    key={index}
                    serviceName={service.title}
                    subCategories={service.list}
                  />
                );
              })}
            </div>
          )}
          {isMobile && (
            <div className="flex md:hidden flex-wrap flex-col sm:flex-row items-center sm:items-start justify-between gap-x-[67px] gap-y-[30px]">
              <Accordion type="single" collapsible className="w-full">
                {footerData?.servicesList?.map((service, index) => {
                  return (
                    <AccordionItem
                      key={index}
                      value={service.title}
                      className="font-philosopher !font-bold !text-[16px] text-[#3C3D42] leading-[22px] !border-[#C67D7180]"
                    >
                      <AccordionTrigger className="!no-underline !font-bold">
                        {service.title}
                      </AccordionTrigger>
                      {service?.list?.map((subCategory, index) => {
                        return (
                          <AccordionContent
                            key={index}
                            className="text-[#C07858] text-sm md:text-body font-normal leading-[26px] !pb-[5px]"
                          >
                            <Link
                              href={subCategory.url || ""}
                              className="flex items-center"
                            >
                              <div>•</div>
                              <div className="pl-[10px]">
                                {subCategory.text}
                              </div>
                            </Link>
                          </AccordionContent>
                        );
                      })}
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          )}
        </div>
        {/* social buttons */}
        <div className="common-container !w-[90%] !max-w-[1242px] !pt-[34px] !pb-[27px] border-b-[1px] border-[#F6E1DD]">
          <div className="w-full flex  justify-between items-center gap-[20px]">
            <Link
              href={`${process.env.NEXT_PUBLIC_WHATSAPP_LINK}?text=Hi+There%2C+Please+help+with+the+booking+process.&type=phone_number&app_absent=0`}
              className="font-philosopher hover:bg-white hover:text-[#32D851] bg-[#32D851] text-white duration-700 ease-out hover:ease-in-out font-normal text-xs lg:text-[16px] w-[110px] lg:w-[143px] h-[35px] lg:h-[50px] border-[1px] border-[#32D851] rounded-[76px] py-0 px-[10px] lg:py-[12px] lg:px-[15px] cursor-pointer"
            >
              <div className="flex items-center gap-[5px] h-full">
                {/* <Image
                  src={whatsappRoundIcon}
                  alt="whatsapp"
                  width={23}
                  height={23}
                  unoptimized
                /> */}
                <FaWhatsapp className="text-[14px] md:text-[18px]" />
                BOOK NOW
              </div>
            </Link>
            <div className="w-[120px] md:w-[135px] lg:w-[154px] flex justify-between gap-[10px]">
              <Link
                aria-label="phone"
                href="tel:+97145586532"
                className="flex justify-center items-center bg-[#C0785833] border-[1px] border-[#9E5A57] hover:border-[#CB8277] hover:bg-[transparent] duration-700 ease-out hover:ease-in-out font-normal text-xs lg:text-[16px] w-[34px] lg:w-[44px] h-[34px] lg:h-[44px] rounded-[76px]"
              >
                <FaPhoneAlt className="w-[14px] h-[14px] lg:w-[20px] lg:h-[20px] text-[#C07858]" />
              </Link>
              <button
                aria-label="facebook"
                className="flex justify-center items-center bg-[#C0785833] border-[1px] border-[#9E5A57] hover:border-[#CB8277] hover:bg-[transparent] duration-700 ease-out hover:ease-in-out font-normal text-xs lg:text-[16px] w-[34px] lg:w-[44px] h-[34px] lg:h-[44px] rounded-[76px]"
                onClick={() =>
                  window?.open("https://www.facebook.com/nooora.ae", "_blank")
                }
              >
                <FaFacebookF className="w-[14px] h-[14px] lg:w-[20px] lg:h-[20px] text-[#C07858]" />
              </button>
              <button
                aria-label="instagram"
                className="flex justify-center items-center bg-[#C0785833] border-[1px] border-[#9E5A57] hover:border-[#CB8277] hover:bg-[transparent] duration-700 ease-out hover:ease-in-out font-normal text-xs lg:text-[16px] w-[34px] lg:w-[44px] h-[34px] lg:h-[44px] rounded-[76px]"
                onClick={() =>
                  window?.open("https://www.instagram.com/nooora.ae", "_blank")
                }
              >
                <RiInstagramFill className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] text-[#C07858]" />
              </button>
            </div>
          </div>
        </div>
        {/* copyrights and helpers */}
        <div className="common-container !w-[90%] !max-w-[1242px] !pt-[34px]">
          <div className="w-full flex flex-col-reverse lg:flex-row flex-wrap justify-between gap-[20px] lg:gap-[10px]">
            <div className="flex items-center flex-col-reverse lg:flex-row gap-[15px] self-center lg:self-start">
              <div className="pt-[10px] lg:pt-[0px] lg:pr-[15px] border-t-[1px] lg:border-t-[0px] lg:border-r-[1px] border-[#C67D71] font-normal text-xs md:text-[16px] text-[#C67D71] leading-[30px]">
                Nooora Beauty Concierge © 2020-2025
              </div>
              <Image
                src={supportedCards}
                alt="whatsapp"
                width={278}
                height={27}
                className=""
              />
            </div>
            <div className="flex flex-wrap items-center self-center justify-center lg:self-start gap-x-1 gap-y-2 lg:gap-x-4 lg:gap-y-0 text-[#C67D71] font-normal text-xs lg:text-[16px] leading-[16px] lg:leading-[30px]">
              <Link href="/terms">Terms</Link>
              <span>|</span>
              <Link href="/gift-and-package-policy">Gift and Package</Link>
              <span>|</span>
              <Link href="/refund-policy">Refund</Link>
              <span>|</span>
              <Link href="/cancellation-policy">Cancellation</Link>
              <span>|</span>
              <Link href="/privacy-policy">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFooter;
