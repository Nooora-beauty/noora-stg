import React from "react";
import { FaCaretDown, FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";

const AppHeaderLoadView = () => {
  return (
    <div className="fixed w-[100%] z-[99999]">
      <div className="w-full h-[54px] bg-primaryGradient"></div>
      <div className="bg-white w-full">
        <div className="common-container h-[74px] md:h-[91px] !w-[90%] !max-w-[1242px] flex justify-between items-center pt-[20px] pb-[18px] md:py-[20px] border-b-[1px] border-[#ededed]">
          <div className="hidden md:flex items-center gap-[20px] lg:gap-[30px]">
            <button className="font-philosopher bg-[#F6E1DD] text-[#CB8277] border-[1px] border-transparent hover:border-[#CB8277] hover:bg-[transparent] duration-700 ease-out hover:ease-in-out font-normal text-xs lg:text-[16px] w-[90px] lg:w-[110px] h-[35px] lg:h-[50px] rounded-[76px] py-0 px-0 lg:py-[13px] lg:px-[10px]">
              Gift Card
            </button>
            <button className="bg-[#F6E1DD] border border-transparent hover:border-[#CB8277] hover:bg-transparent transition duration-700 text-xs lg:text-[16px] w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] rounded-full flex items-center justify-center">
              <FaPhone className="text-[#CB8277] text-[10.5px] ml-[2px]" />
            </button>
            <p className="font-philosopher text-sm lg:text-[18px] text-black font-normal cursor-pointer">
              Blog
            </p>
          </div>
          <div className="w-[130px] h-[35px] lg:w-[189px] lg:h-[44px]"></div>
          <div className="flex items-center gap-[10px] sm:gap-[30px]">
            <div className="hidden md:flex items-center gap-[7px] cursor-pointer">
              <p className="font-philosopher text-sm lg:text-[18px] text-[#000000] font-normal">
                Services
              </p>
              <FaCaretDown className="text-[#bd6f74] text-[12px] w-[10px] h-[20px]" />
            </div>
            <button className="font-philosopher hover:bg-white hover:text-[#32D851] bg-[#32D851] text-white transition duration-700 font-normal text-xs lg:text-[16px] w-[110px] lg:w-[143px] h-[35px] lg:h-[50px] border border-[#32D851] rounded-full flex items-center justify-center gap-[5px] uppercase">
              <FaWhatsapp className="text-[14px] md:text-[18px]" /> BOOK NOW
            </button>
            <IoIosMenu className="block md:hidden w-[35px] h-[35px] text-[#e29a8f]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeaderLoadView;
