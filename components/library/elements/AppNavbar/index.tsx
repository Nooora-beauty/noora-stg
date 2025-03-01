"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaCaretDown, FaWhatsapp } from "react-icons/fa";
import dynamic from "next/dynamic";

const ServicesNav = dynamic(() => import("../ServicesNav"), {
  loading: () => (
    <div className="hidden md:flex items-center gap-[7px] cursor-pointer">
      <p className="font-philosopher text-sm lg:text-[18px] text-[#000000] font-normal">
        Services
      </p>
      <FaCaretDown className="text-[#bd6f74] text-[12px] w-[10px] h-[20px]" />
    </div>
  ),
  ssr: false,
});
const ServicesMobileNav = dynamic(() => import("../ServicesMobileNav"), {
  ssr: false,
});

interface AppNavbarProps {
  headerData: {
    logoUrl: string;
    logo: {
      url: string;
    };
    menuItem: {
      name: string;
      menuType: string;
      url: string | null;
      icon: {
        url: string;
      } | null;
    }[];
    megaMenu: {
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
  };
}

const AppNavbar: React.FC<AppNavbarProps> = ({ headerData }) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth <= 767);
      };

      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);

      return () => {
        window.removeEventListener("resize", checkScreenSize);
      };
    }
  }, []);
  return (
    <>
      <div
        className={`bg-[#FFFFFF] fixed w-[100%] z-[99999] mt-[54px] pt-[20px]`}
      >
        <div
          className={`common-container !w-[90%] !max-w-[1242px] flex justify-between items-center pb-[20px] border-b-[1px] border-[#F6E1DD]`}
        >
          <div className="hidden md:flex items-center gap-[20px] lg:gap-[30px]">
            <button
              onClick={() =>
                headerData?.menuItem?.[0]?.url &&
                router.push(headerData?.menuItem?.[0]?.url)
              }
              className="font-philosopher bg-[#F6E1DD] text-[#CB8277] border-[1px] border-transparent hover:border-[#CB8277] hover:bg-[transparent] duration-700 ease-out hover:ease-in-out font-normal text-xs lg:text-[16px] w-[90px] lg:w-[110px] h-[35px] lg:h-[50px] rounded-[76px] py-0 px-0 lg:py-[13px] lg:px-[10px]"
            >
              {/* GIFT CARD  */}

              {headerData?.menuItem?.[0]?.name}
            </button>
            <button
              onClick={() =>
                headerData?.menuItem?.[1]?.url &&
                router.push(headerData?.menuItem?.[1]?.url)
              }
              className="bg-[#F6E1DD] border-[1px] border-transparent hover:border-[#CB8277] hover:bg-[transparent] duration-700 ease-out hover:ease-in-out font-normal text-xs lg:text-[16px] w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] rounded-[76px] py-[10px] px-[12px] lg:py-[14px] lg:px-[18px]"
            >
              <Link href="tel:+97145586532">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                    headerData?.menuItem[1]?.icon?.url || ""
                  }`}
                  alt="call icon"
                  width={14}
                  height={14}
                  className="w-[10px] h-[10px] lg:w-[14px] lg:h-[14px]"
                />
              </Link>
            </button>
            <p
              onClick={() =>
                headerData?.menuItem?.[2]?.url &&
                router.push(headerData?.menuItem?.[2]?.url)
              }
              className="font-philosopher text-sm lg:text-[18px] text-[#000000] font-normal cursor-pointer"
            >
              {/* Blog */}
              {headerData?.menuItem?.[2]?.name}
            </p>
          </div>
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
              headerData?.logo?.url || ""
            }`}
            alt="Nooora Logo"
            width={189}
            height={42}
            priority
            className="cursor-pointer w-[130px] h-[35px] lg:w-[189px] lg:h-[42px]"
            onClick={() => router.push(headerData.logoUrl)}
          />
          <div className="flex items-center gap-[10px] sm:gap-[30px]">
            {!isMobile && (
              <ServicesNav
                navDetails={headerData?.menuItem?.[3]}
                menuDetails={headerData.megaMenu}
              />
            )}
            <button
              onClick={() =>
                headerData?.menuItem?.[4]?.url &&
                router.push(headerData?.menuItem?.[4]?.url)
              }
              className="font-philosopher hover:bg-white hover:text-[#32D851] bg-[#32D851] text-white duration-700 ease-out hover:ease-in-out font-normal text-xs lg:text-[16px] w-[110px] lg:w-[143px] h-[35px] lg:h-[50px] border-[1px] border-[#32D851] rounded-[76px] py-0 px-[10px] lg:py-[12px] lg:px-[15px] cursor-pointer"
            >
              <div className="relative flex items-center justify-center sm:justify-center gap-[5px] uppercase">
                {/* <div className="relative w-[23px] h-[23px]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                    headerData?.menuItem?.[4]?.icon?.url || ""
                  }`}
                  alt="whatsapp"
                  width={23}
                  height={23}
                  fill
                  unoptimized
                  className="block w-full h-full object-cover"
                />
                </div> */}
                {/* BOOK NOW */}
                <FaWhatsapp className="text-[14px] md:text-[18px]" />
                {headerData?.menuItem?.[4]?.name}
              </div>
            </button>
            {isMobile && (
              <div className="block md:hidden items-center">
                <ServicesMobileNav
                  // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${headerData?.logo?.url || ""}`}
                  menuDetails={headerData.megaMenu}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppNavbar;
