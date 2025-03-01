"use client";
import RecommendedPublications from "@/components/library/commonSections/RecommendedPublications";
import React, { useState } from "react";
import {
  // detailsFeatureList,
  // dummyDealTickets,
  dummyGiftCardDetails,
  staticRecommendationProps,
} from "../constant";
import TestimonialSection from "@/components/library/commonSections/Testimonials";
import FeaturedPostSection from "@/components/library/commonSections/FeaturedPosts";
import CommonQuestionsSection from "@/components/library/commonSections/CommonQuestions";
// import mostBookedOption from "@/app/static/images/mostBookedOption.png";
import Petal1 from "@/app/static/images/petal1.svg";
import Petal2 from "@/app/static/images/petal2.svg";
import Petal3 from "@/app/static/images/petal3.svg";
// import tagIcon from "@/app/static/icons/tagIcon.svg";
import mobileTicket from "@/app/static/images/mobileTicket.svg";

import Image from "next/image";
import { IoCartOutline, IoStar } from "react-icons/io5";
// import { BiSolidCoinStack } from "react-icons/bi";
import { Clock } from "lucide-react";
import Book5TicketMobileOption from "@/components/library/elements/Book5TicketMobileOption";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { BiSolidCoinStack } from "react-icons/bi";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
// import PageBar from "@/components/library/elements/PageBar";
interface ServiceDetailScreenProps {
  title?: string;
  data: {
    pageBar: {
      pageTitle: string;
      serviceRating: string;

      breadCrumbs: {
        text: string;
        url: string;
      }[];
    };
    priceList: {
      time: string;
      price: string;
      isBestValue: boolean;
      additionalTag: string | null;
      buttonText: string;
      buttonLink: string | null;
    }[];
    specialOffer: {
      name: string;
      time1: string | null;
      time2: string | null;
      time3: string | null;
      price: string;
      additionalTag: string | null;
      image: {
        url: string;
      };
      buttonText: string;
      buttonLink: string | null;
    };
    benefits: {
      text: string;
      icon: {
        url: string;
      };
    }[];
    headImage: {
      url: string;
    };
    serviceDetail: {
      title: string;
      description: {
        children: { text: string }[];
      }[];
    };
    tabList1: {
      title: string;
      description?: string;
      pointers: {
        title: string;
        description?: string;
        icon?: {
          url: string;
        };
      }[];
    }[];
    tabList2: {
      title: string;
      description?: string;
      pointers: {
        title: string;
        description?: string;
        icon?: {
          url: string;
        };
      }[];
    }[];
    commonQuestions: {
      question: string;
      answer: string;
    }[];
  };
}

interface RightRowDetailsProps {
  headImageUrl: string;
}

interface ServiceOptionItem {
  isFirst?: boolean;
  serviceTitle: string;
  details: {
    time: string;
    price: string;
    isBestValue: boolean;
    additionalTag: string | null;
    buttonText: string;
    buttonLink: string | null;
  };
}

const ServiceOptionItem: React.FC<ServiceOptionItem> = ({
  isFirst,
  serviceTitle,
  details,
}) => {
  return (
    details.time && (
      <div className="w-full">
        <div
          className={`w-full md:min-w-[279px] flex items-center gap-[10px] md:gap-[20px] py-[20px] ${
            !isFirst ? "border-t border-dashed border-[#E29A8F]" : ""
          }`}
        >
          <div
            className={cn(
              "w-full md:min-w-[279px] flex md:flex-nowrap items-center gap-x-[10px] md:gap-x-[20px] gap-y-[2px] md:gap-y-[0px]",
              details.isBestValue ? "flex-wrap-reverse" : "flex-wrap"
            )}
          >
            <div className="flex items-center gap-2">
              <span className="text-xs md:text-[16px] flex items-center">
                <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
                <span className="ml-[5px] md:ml-2">
                  <span className="font-bold">{details.time}</span>
                  <span> Minutes</span>
                </span>
              </span>
            </div>
            <div className="flex justify-center items-center gap-[10px] md:gap-[20px]">
              {details.price && (
                <div className="flex items-center text-xs md:text-[16px] leading-[22px] md:leading-[26px] time-seperator">
                  {/* <BiSolidCoinStack className="w-3 sm:w-4 h-3 sm:h-4" /> */}
                  <span className="">
                    {/* <span className="mr-[5px] md:mr-2">Starts at</span>
                  <span className="font-bold">{details.price}</span>v */}
                    <span className="font-bold text-xs md:text-[16px] flex items-center gap-1">
                      <BiSolidCoinStack className="w-3 sm:w-4 h-3 sm:h-4" />
                      {details.price}
                    </span>
                  </span>
                </div>
              )}
              {details?.additionalTag && (
                <div className="flex items-center">
                  <Badge
                    className=" bg-[#3e67e9] hover:bg-[#5d7feb] text-white text-[8px] sm:text-xxs leading-[10px] md:leading-[12px] font-extrabold tracking-[2px] uppercase rounded-full px-[8px]"
                    variant="secondary"
                  >
                    {details.additionalTag}
                  </Badge>
                </div>
              )}
            </div>
            {details.isBestValue && (
              <div className="flex items-center">
                <span className="text-[#32D851] text-[8px] sm:text-xxs leading-[10px] md:leading-[12px] font-extrabold tracking-[2px] uppercase">
                  *Best value
                </span>
              </div>
            )}
          </div>
          {/* button */}
          <div className="w-fit mr-[22px]">
            <Link
              href={
                details.buttonLink ||
                `${
                  process.env.NEXT_PUBLIC_WHATSAPP_LINK
                }?text=Hi Nooora, I would like to book for ${encodeURIComponent(
                  serviceTitle
                )} ${encodeURIComponent(
                  details?.additionalTag ? `(${details?.additionalTag})` : ""
                )}.` ||
                ""
              }
              className="hidden sm:block whitespace-nowrap self-end font-philosopher uppercase bg-[#F6E1DD] text-primary font-normal text-xs md:text-[16px] rounded-[65px] py-[6px] px-[10px] md:px-[12px]"
            >
              {details.buttonText}
            </Link>
            <Link
              // href={
              //   PageBar.pageTitle ||
              //   `${
              //     process.env.NEXT_PUBLIC_WHATSAPP_LINK
              //   }?text=Hi Nooora, I would like to book for ${encodeURIComponent(
              //     serviceTitle
              //   )} ${encodeURIComponent(
              //     details?.additionalTag ? `(${details?.additionalTag})` : ""
              //   )}.` ||
              //   ""
              // }

              href={
                `${
                  process.env.NEXT_PUBLIC_WHATSAPP_LINK
                }?text=Hi Nooora, I would like to book for ${encodeURIComponent(
                  serviceTitle
                )}.` || ""
              }
              className="block sm:hidden self-end font-philosopher uppercase bg-[#F6E1DD] text-primary font-normal text-xs md:text-[16px] rounded-[6px] py-[6px] px-[10px]"
            >
              <IoCartOutline className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

interface MostPurchasedOptionItemProps {
  details: {
    name: string;
    time1: string | null;
    time2: string | null;
    time3: string | null;
    price: string;
    additionalTag: string | null;
    image: {
      url: string;
    };
    buttonText: string;
    buttonLink: string | null;
  };
}

const MostPurchasedOptionItem: React.FC<MostPurchasedOptionItemProps> = ({
  details,
}) => {
  return (
    details?.name && (
      <div className="w-full">
        <div
          className={`p-[10px] !pr-0 w-full md:min-w-[279px] flex items-center rounded-[20px] border-[1px] border-dashed border-[#E29A8F]`}
        >
          {details.image && (
            <div className="w-[73px] min-w-[73px] min-h-[67px] h-[67px] overflow-hidden rounded-[15px] mr-[15px] box-border bg-[#ededed]">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  details.image?.url || ""
                }`}
                // src={mostBookedOption}
                alt="pageBar image"
                width={73}
                height={67}
                className="h-full w-full object-cover"
              />
            </div>
          )}
          {/* <div className="flex flex-col w-full"> */}
          <div className="w-full flex flex-col">
            {details.additionalTag && (
              <div className="w-full">
                <div className="flex items-center leading-[8px] md:leading-[10px] mb-[5px] md:mb-0">
                  <span className="text-[#B20002] text-[8px] sm:text-xxs font-extrabold tracking-[2px] uppercase">
                    {/* *Most purchased */}*{details.additionalTag}
                  </span>
                </div>
              </div>
            )}
            <div className="w-full md:min-w-[279px] flex items-center gap-[10px] md:gap-[20px]">
              <div className="w-full md:mt-[5px]">
                <div className="w-full flex flex-wrap md:flex-nowrap items-center gap-[3px] md:gap-x-[20px]">
                  {details.name && (
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{details.name}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap items-center text-[#212529] text-xs md:text-[14px] leading-[14px] md:leading-[24px] mt-[5px] md:mt-[1px] gap-[10px] md:gap-x-[20px]">
                  <div className="flex items-center md:gap-2">
                    <span className="text-xs md:text-[16px] flex items-center">
                      <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
                      <span className="ml-[5px] md:ml-2 flex">
                        <span className="flex gap-x-[5px] md:gap-x-2">
                          <span className="font-bold">
                            {details.time1 || "---"}
                          </span>
                          {details.time2 && (
                            <span className="font-bold text-seperator">
                              {details.time2}
                            </span>
                          )}
                          {details.time3 && (
                            <span className="font-bold text-seperator">
                              {details.time3}
                            </span>
                          )}
                        </span>
                        <span className="ml-[5px] md:ml-2">Mins</span>
                      </span>
                    </span>
                  </div>
                  {details.price && (
                    <div className="">
                      <span className="font-bold text-xs md:text-[16px] flex items-center gap-1 time-seperator">
                        <BiSolidCoinStack className="w-3 sm:w-4 h-3 sm:h-4" />
                        {details.price}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              {/* button */}
              {details.buttonText && (
                <div className="w-fit mr-[22px] self-start">
                  <Link
                    href={
                      details.buttonLink ||
                      `${
                        process.env.NEXT_PUBLIC_WHATSAPP_LINK
                      }?text=Hi Nooora, I would like to book for ${encodeURIComponent(
                        details?.name
                      )} ${encodeURIComponent(
                        details?.additionalTag
                          ? `(${details?.additionalTag})`
                          : ""
                      )}.` ||
                      ""
                    }
                    className="hidden sm:block whitespace-nowrap self-end font-philosopher uppercase bg-[#F6E1DD] text-primary font-normal text-xs md:text-[16px] rounded-[65px] py-[6px] px-[10px] md:px-[12px]"
                  >
                    {details.buttonText}
                  </Link>
                  <Link
                    href={
                      details.buttonLink ||
                      `${
                        process.env.NEXT_PUBLIC_WHATSAPP_LINK
                      }?text=Hi Nooora, I would like to book for ${encodeURIComponent(
                        details?.name
                      )} ${encodeURIComponent(
                        details?.additionalTag
                          ? `(${details?.additionalTag})`
                          : ""
                      )}.` ||
                      ""
                    }
                    className="block sm:hidden self-end font-philosopher uppercase bg-[#F6E1DD] text-primary font-normal text-xs md:text-[16px] rounded-[6px] py-[6px] px-[10px]"
                  >
                    <IoCartOutline className="w-5 h-5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

interface TabsProps {
  tabs: {
    title: string;
    description?: string;
    pointers: {
      title: string;
      description?: string;
      icon?: {
        url: string;
      };
    }[];
  }[];
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, className }) => {
  const [selectedTab, setSelectedTab] = useState<{
    title: string;
    description?: string;
    pointers: {
      title: string;
      description?: string;
      icon?: {
        url: string;
      };
    }[];
  }>(tabs[0]);
  const handleSelectTab = (index: number) => {
    setSelectedTab(tabs[index]);
  };
  return (
    <>
      <div className="w-full border-b-[1px] border-[#F6E1DD] flex gap-[20px] md:gap-[40px] mb-[10px] md:mb-[20px]">
        {tabs.map((tab, index) => {
          const isSelected = tab.title === selectedTab.title;
          return (
            <div
              key={index}
              className={`cursor-pointer py-[10px] md:py-[10px] font-philosopher text-[16px] md:text-[20px] leading-[18px] md:leading-[28px] ${
                isSelected
                  ? "!text-[#9E5A57] border-b-[2px] border-[#9E5A57]"
                  : ""
              } ${className}`}
              onClick={() => handleSelectTab(index)}
            >
              <h2 dangerouslySetInnerHTML={{ __html: tab.title }} />
            </div>
          );
        })}
      </div>
      <motion.div
        key={selectedTab?.title || ""}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          opacity: { duration: 0.4, ease: "easeOut", delay: 0.3 },
        }}
      >
        {selectedTab?.description && (
          <p
            className="text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-[#212529b3] font-normal mb-[10px] md:mb-[20px]"
            dangerouslySetInnerHTML={{ __html: selectedTab.description }}
          />
        )}
        {selectedTab?.pointers &&
          selectedTab.pointers.map((item, index) => {
            return (
              <div key={index} className="flex gap-[15px]">
                {item.icon && (
                  <div>
                    <Image
                      // src={item.icon}
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                        item.icon?.url || ""
                      }`}
                      // src={checkMark}
                      alt={`detail feature icon`}
                      width={30}
                      height={30}
                      className="w-full min-w-[30px] h-auto min-h-[30px]"
                    />
                  </div>
                )}
                <div>
                  {item.title && (
                    <h3
                      className="md:max-w-[493px] text-[20px] leading-[28px] text-[#212529] mb-[10px] font-philosopher"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  )}

                  {item.description && (
                    <p
                      className="text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-[#212529b3] font-normal mb-[10px] md:mb-[20px] transition-all duration-100 ease-in-out"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  )}
                </div>
              </div>
            );
          })}
      </motion.div>
    </>
  );
};

interface LeftRowDetailsProps {
  pageBar: {
    pageTitle: string;
    serviceRating: string;

    breadCrumbs: {
      text: string;
      url: string;
    }[];
  };
  headImageUrl: string;
  serviceDetail: {
    title: string;
    description: {
      children: { text: string }[];
    }[];
  };
  tabList1: {
    title: string;
    description?: string;
    pointers: {
      title: string;
      description?: string;
      icon?: {
        url: string;
      };
    }[];
  }[];
  tabList2: {
    title: string;
    description?: string;
    pointers: {
      title: string;
      description?: string;
      icon?: {
        url: string;
      };
    }[];
  }[];
  priceList: {
    time: string;
    price: string;
    isBestValue: boolean;
    additionalTag: string | null;
    buttonText: string;
    buttonLink: string | null;
  }[];
  specialOffer: {
    name: string;
    time1: string | null;
    time2: string | null;
    time3: string | null;
    price: string;
    additionalTag: string | null;
    image: {
      url: string;
    };
    buttonText: string;
    buttonLink: string | null;
  };
  benefits: {
    text: string;
    icon: {
      url: string;
    };
  }[];
}

const LeftRowDetails: React.FC<LeftRowDetailsProps> = ({
  pageBar,
  headImageUrl,
  serviceDetail,
  tabList1,
  tabList2,
  priceList,
  specialOffer,
  // benefits,
}) => {
  return (
    <div className="w-full md:min-w-[716px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full md:pr-[20px] md:border-r-[1px] md:border-[#F6E1DD]"
      >
        {/* top bar */}
        <div className="w-full flex justify-center items-center">
          <div className="w-full flex justify-between items-center pb-[20px] md:pb-[30px] border-b-[1px] border-[#9E5A57]">
            {/* <div className="flex items-start w-fit gap-[10px]"> */}
            <div className="w-fit flex flex-col items-start justify-between md:justify-center gap-[5px] md:gap-[13px]">
              <div className="flex items-start w-fit gap-[10px]">
                <h1 className="font-philosopher font-normal text-md md:text-[40px] text-[#212529] leading-[22px] md:leading-[40px]">
                  {pageBar.pageTitle}
                </h1>
                <div className="flex md:hidden items-center p-[4px] pr-2 rounded-[8px] bg-[#FFF4F2]">
                  <div className="mr-1 rounded-[50%] w-[14px] h-[14px] bg-[#E29A8F] flex justify-center items-center">
                    <IoStar className="w-[8px] h-[8px] text-[#fff]" />
                  </div>
                  <span className="inline-flex items-center font-medium text-[#212529] text-[12px] leading-[16px]">
                    <span>{pageBar.serviceRating}</span>
                    <span className="hidden md:inline-block ml-[4px]">
                      Rated
                    </span>
                  </span>
                </div>
              </div>
              <span className="font-normal max-w-[180px] text-xxs md:text-body text-[#555555] leading-[15px] md:leading-[24px] md:max-w-[450px]">
                {" "}
                {pageBar.breadCrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    <Link
                      href={crumb?.url || ""}
                      className={`${crumb?.url ? "inline" : "cursor-default"}`}
                    >
                      {crumb.text}
                    </Link>

                    {index < pageBar.breadCrumbs.length - 1 && " / "}
                  </React.Fragment>
                ))}
              </span>
            </div>

            <div className="hidden md:flex items-center p-[4px] pr-2 rounded-[8px] bg-[#FFF4F2]">
              <div className="mr-1 rounded-[50%] w-[14px] h-[14px] bg-[#E29A8F] flex justify-center items-center">
                <IoStar className="w-[8px] h-[8px] text-[#fff]" />
              </div>
              <span className="inline-flex items-center font-medium text-[#212529] text-[12px] leading-[16px]">
                <span>{pageBar.serviceRating}</span>
                <span className="hidden md:inline-block ml-[4px]">Rated</span>
              </span>
            </div>
            {/* </div> */}
            {headImageUrl && (
              <div className="block md:hidden w-[104px] md:w-[100px] h-[69px] md:h-auto md:max-h-[100px] overflow-hidden rounded-[20px] ">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${headImageUrl}`}
                  width={100}
                  height={100}
                  // unoptimized
                  priority
                  alt="pageBar image"
                  className="h-[69px] w-[104px] md:h-auto md:w-full"
                />
              </div>
            )}
          </div>
        </div>
        {/* service options list */}
        {priceList.map((item, index) => {
          return (
            <ServiceOptionItem
              key={index}
              isFirst={index == 0}
              details={item}
              serviceTitle={pageBar.pageTitle}
            />
          );
        })}
        {/* most purchased option */}
        <MostPurchasedOptionItem details={specialOffer} />
      </motion.div>
      {/* Left - tickets and Tags section */}
      <motion.div
       initial={{ y: 20, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       viewport={{ once: true }}
       transition={{
         ease: "easeInOut",
         duration: 0.2,
         delay: 0.2,
       }}
        className="w-full mt-[20px] md:mt-[50px] md:pr-[20px]"
      >
        <Book5TicketMobileOption serviceTitle={pageBar.pageTitle} />
        {/* tickets */}
        {/* <div className="hidden w-fit md:flex flex-col sm:flex-row justify-center items-center gap-[5px] md:gap-[15px] mb-[15px]">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
              dummyDealTickets[0].image?.url || ""
            }`}
            width={354}
            height={85}
            alt="ticket"
            className="w-full max-w-[100%] sm:max-w-[100px] md:max-w-[200px] min-[1440px]:max-w-[354px]"
            className="w-full md:h-[85px] md:w-auto"
          />
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
              dummyDealTickets[1].image?.url || ""
            }`}
            width={696}
            height={85}
            alt="package"
            className="w-full max-w-[100%] sm:max-w-[200px] md:max-w-[400px] min-[1440px]:max-w-[696px]"
            className="h-[96px] w-auto"
          />
        </div> */}
        {/* --------------------------------------------------------------- */}
        <div className="flex md:hidden relative w-full m-auto mb-[15px]">
          <div className="w-full flex items-center justify-between">
            <Link
              href={`${
                process.env.NEXT_PUBLIC_WHATSAPP_LINK
              }?text=${encodeURIComponent(
                `Hi Nooora, I would like to book for ${pageBar.pageTitle}.`
              )}`}
              className="w-full !max-w-[calc(50%-10px)]"
            >
              <Image
                // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${dummyGiftCardDetails.image?.url || ""}`}
                src={mobileTicket}
                width={162}
                height={103}
                // unoptimized
                alt="mobile ticket-card"
                // className="w-full !max-w-[calc(50%-10px)]"
              />
            </Link>

            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/gift-a-friend`}
              className="w-full !max-w-[calc(50%-7px)]"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  dummyGiftCardDetails.image?.url || ""
                }`}
                width={162}
                height={103}
                // unoptimized
                alt="gift-card"
                // className="w-full !max-w-[calc(50%-7px)]"
              />
            </Link>
          </div>
        </div>
        {/* features lists */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full flex gap-[15px] justify-center mb-[15px] md:mb-[60px]"
        >
          {benefits.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full max-w-[calc(50%-5px)] bg-[#FDF2F2] rounded-[10px]"
              >
                <div className="md:px-[20px] py-[15px] md:py-[22px] flex flex-col items-center md:items-start">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                      item.icon?.url || ""
                    }`}
                    // src={item.icon}
                    alt={`detail feature icon`}
                    width={30}
                    height={30}
                    className="mb-[15px] w-full max-w-[20px] md:max-w-[30px] h-auto max-h-[30px]"
                  />
                  <div className="font-normal font-philosopher text-[#9E5A57] text-center md:text-left text-sm md:text-[18px] leading-[18px] md:leading-[22px]">
                    {item.text}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div> */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-[15px] lg:mb-[60px] mt-8 md:mt-0"
          >
            {/* here */}
            <h2
              className="md:max-w-full text-lg md:text-xxlg leading-[28px] md:leading-[52px] text-[#212529]  mb-[10px] md:mb-[20px] font-philosopher"
              dangerouslySetInnerHTML={{ __html: serviceDetail?.title }}
            />

            {serviceDetail?.description &&
              serviceDetail.description.map((item, index) => (
                <p
                  key={index}
                  className="text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-[#212529b3] font-normal mb-[10px] md:mb-[20px]"
                  dangerouslySetInnerHTML={{
                    __html: item.children[0].text,
                  }}
                />
              ))}
          </motion.div>
          {tabList1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="mb-[15px] lg:mb-[40px]"
            >
              <Tabs
                tabs={tabList1}
                className="!text-[20px] md:!text-[25px] !leading-[22px] md:!leading-[35px]"
              />
            </motion.div>
          )}
          {tabList2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className=""
            >
              <Tabs
                tabs={tabList2}
                className=" !leading-[22px] md:!leading-[35px]"
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const RightRowDetails: React.FC<RightRowDetailsProps> = ({ headImageUrl }) => {
  const router = useRouter();
  const handleGiftCardDetails = () => {
    router.push("/gift-a-friend");
  };
  return (
    <div className={`hidden md:block w-full`}>
      {headImageUrl && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full h-[400px] relative overflow-hidden rounded-[20px] mb-[30px] bg-[#ededed]"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${headImageUrl}`}
            // src={detailsImage}
            // width={100}
            // height={100}
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1242px) 50vw, 621px"
            // unoptimized
            alt="pageBar image"
            className="h-full w-full object-cover"
          />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full flex flex-wrap justify-center m-auto"
      >
        <div className="w-full flex flex-col items-center gap-[30px] border-[1px] border-[#E29A8F] rounded-[20px] py-[47px]">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
              dummyGiftCardDetails.image?.url || ""
            }`}
            width={348}
            height={219}
            // unoptimized
            alt="gift-card"
            className="w-full sm:max-w-[300px] lg:max-w-[348px] bg-[#ededed] rounded-[15px]"
          />
          <div className="w-full max-w-[450px] flex flex-col items-center justify-center">
            <p
              className="font-philosopher font-normal text-center text-sm md:text-[20px] text-[#212529] leading-[20px] md:leading-[28px] mb-[12px] md:mb-[25px]"
              dangerouslySetInnerHTML={{
                __html: dummyGiftCardDetails.description,
              }}
            />
            <button
              className="font-philosopher bg-primaryGradient transition-all duration-700 ease-in-out hover:transform hover:scale-110 hover:shadow-lg hover:-translate-y-1 text-white font-normal text-xs md:text-[16px] rounded-[65px] py-[6px] px-[10px] md:px-[12px] right-0 bottom-[-23px] md:bottom-[-27px] z-10"
              onClick={handleGiftCardDetails}
            >
              {dummyGiftCardDetails.buttonText}
            </button>
          </div>
        </div>
        <motion.div
          className="w-[170px] xl:w-[200px] absolute bottom-[15px] md:bottom-[-50px] left-[-70px]"
          style={{
            rotate: "-25deg",
          }}
          animate={{
            translateY: [0, -5, 0],
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <Image
            src={Petal1}
            alt="petal-1"
            width={109}
            height={82}
            unoptimized
            className="w-full"
          />
        </motion.div>
        <motion.div
          className="w-[100px] xl:w-[120px] absolute top-[190px] min-[400px]:top-[215px] lg:top-[70px] right-[-4%] md:right-[-55px]"
          animate={{
            translateY: [0, -10, 0],
          }}
          transition={{
            duration: 2.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <Image
            src={Petal2}
            alt="petal-2"
            width={69}
            height={78}
            unoptimized
            className="w-full"
          />
        </motion.div>
        <motion.div
          className="w-[110px] xl:w-[110px] absolute bottom-[-60px] right-[0px] rotate-[-40deg]"
          animate={{
            translateY: [0, -8, 0],
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <Image
            src={Petal3}
            alt="petal-3"
            width={87}
            height={114}
            unoptimized
            className="w-full"
          />
        </motion.div>
        {/* <Image
          src={Petal1}
          alt="petal-1"
          width={109}
          height={82}
          unoptimized
          className="w-[170px] xl:w-[200px] absolute bottom-[15px] md:bottom-[-50px] left-0 -translate-x-[24%] md:-translate-x-[36%] rotate-[-25deg]"
        /> */}
        {/* <Image
          src={Petal2}
          alt="petal-2"
          width={69}
          height={78}
          unoptimized
          className="w-[100px] xl:w-[120px] absolute top-[190px] min-[400px]:top-[215px] lg:top-[70px] right-[-4%] md:right-[-55px]"
        /> */}
        {/* <Image
          src={Petal3}
          alt="petal-3"
          width={87}
          height={114}
          unoptimized
          className="w-[110px] xl:w-[110px] absolute bottom-[-60px] right-[0px] rotate-[-40deg]"
        /> */}
      </motion.div>
    </div>
  );
};

const ServiceDetailScreen: React.FC<ServiceDetailScreenProps> = ({ data }) => {
  const {
    headImage,
    pageBar,
    serviceDetail,
    tabList1,
    tabList2,
    priceList,
    specialOffer,
    benefits,
    commonQuestions,
  } = data;
  return (
    <>
      <div className="w-full pt-[130px] lg:pt-[145px]">
        <div className="common-container !w-[90%] !max-w-[1242px] !mt-[20px]">
          <div className="flex gap-[20px] pb-[44px] md:pb-[74px] mb-[44px] md:mb-[60px] border-b-[1px] border-[#F6E1DD]">
            <LeftRowDetails
              pageBar={pageBar}
              headImageUrl={headImage?.url || ""}
              serviceDetail={serviceDetail}
              tabList1={tabList1}
              tabList2={tabList2}
              priceList={priceList}
              specialOffer={specialOffer}
              benefits={benefits}
            />
            <RightRowDetails headImageUrl={headImage?.url || ""} />
          </div>
        </div>
        <TestimonialSection />
        <FeaturedPostSection />
        <CommonQuestionsSection commonQuestions={commonQuestions} />
        <RecommendedPublications {...staticRecommendationProps} />
      </div>
    </>
  );
};

export default ServiceDetailScreen;
