"use client";
import React from "react";
import tagIcon from "@/app/static/icons/tagIcon.svg";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

interface Book5TicketMobileOptionScreenProps {
  serviceTitle?: string;
}

const Book5TicketMobileOption: React.FC<Book5TicketMobileOptionScreenProps> = ({
  serviceTitle,
}) => {
  return (
    <div className="block md:hidden w-full mb-[15px]">
      <div
        className={`w-full md:min-w-[279px] flex items-center rounded-[20px] bg-[#ffd0ce33] border-[0.7px] border-[#9e5a5733]`}
      >
        <div className="relative w-full max-w-[50px] h-full rounded-[15px] m-[15px] ml-[20px] mr-[25px] icon-shadow">
          <Image
            //   src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${sectionDetails.barIcon?.url || ""}`}
            src={tagIcon}
            alt="pageBar image"
            width={48}
            height={48}
            priority
            className="h-auto w-full "
          />
        </div>
        <div className="w-full flex flex-col py-[10px] md:py-[20px]">
          <div className="w-full md:min-w-[279px] flex items-center gap-[10px] md:gap-[20px] text-[#CD3F3B]">
            <div className="w-full md:mt-[5px]">
              <div className="w-full flex flex-wrap md:flex-nowrap items-center gap-[3px] md:gap-x-[20px]">
                <div className="flex flex-col">
                  <span className="text-[16px] leading-[32px]">
                    <span className="font-bold">Book 5 & get 1</span>{" "}
                    <i>Free</i>
                  </span>
                  <span className="text-xxs leading-[12px]">
                    On your first booking
                  </span>
                </div>
              </div>
            </div>
            {/* button */}

            {/* this */}
            <div className="self-center w-fit mr-[22px]">
              <Link
                aria-label="book now"
                href={`${
                  process.env.NEXT_PUBLIC_WHATSAPP_LINK
                }?text=${encodeURIComponent(
                  `Hi Nooora, I would like to book for ${serviceTitle} (5+1).`
                )}`}
                // href={
                //   listItem?.buttonLink ||
                //   `${
                //     process.env.NEXT_PUBLIC_WHATSAPP_LINK
                //   }?text=Hi Nooora, I would like to book for ${encodeURIComponent(
                //     listItem.name
                //   )}.` ||
                //   ""
                // }
                className="block sm:hidden self-end font-philosopher uppercase bg-[#F6E1DD] text-primary font-normal text-xs md:text-[16px] rounded-[6px]"
              >
                <button
                  aria-label="book now"
                  className="block sm:hidden self-end font-philosopher uppercase bg-[#F6E1DD] text-primary font-normal text-xs md:text-[16px] rounded-[6px] py-[6px] px-[10px]"

                  // className="font-philosopher uppercase bg-[#FFF] text-[#C57D71] font-normal text-xs md:text-[16px] rounded-[6px] py-[6px] px-[10px]"
                >
                  <IoCartOutline className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book5TicketMobileOption;
