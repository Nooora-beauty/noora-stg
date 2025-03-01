"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface SpecialDaySectionProps {
  specialDay: {
    title: string;
    buttonText: string;
    image: {
      url: string;
    };
  };
}

const SpecialDaySection: React.FC<SpecialDaySectionProps> = ({
  specialDay,
}) => {
  return (
    <>
      <div className="relative bg-[#F9F2F2]  !mb-[45px] md:!mb-[93px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative common-container !w-[90%] !max-w-[1118px]"
        >
          <div className="relative w-full flex justify-end md:justify-start py-[20px] md:py-[118px] pb-[118px] z-[999]">
            <div className="w-full max-w-[50%] md:max-w-[325px]">
              <h2
                className="w-full m-auto text-md md:text-xxlg leading-[22px] md:leading-[52px] text-[#212529]  mb-[10px] md:mb-[20px] font-philosopher"
                dangerouslySetInnerHTML={{ __html: specialDay.title }}
              />
              <Link
                href={`${process.env.NEXT_PUBLIC_WHATSAPP_LINK}?text=Hi Nooora, I would like to book you for my Special Day!.`}
                className="inline-block uppercase font-philosopher bg-primaryGradient transition-all duration-700 ease-in-out hover:transform hover:scale-110 hover:shadow-lg hover:-translate-y-1 text-white font-normal text-xs md:text-[16px] rounded-[65px] py-[6px] px-[10px] md:px-[12px]"
                dangerouslySetInnerHTML={{ __html: specialDay.buttonText }}
              />
            </div>
          </div>
          <Image
            // src={specialDay}
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
              specialDay.image?.url || ""
            }`}
            width={436}
            height={662}
            alt="couple-section image"
            className="pointer-events-none absolute w-full max-w-[200px] md:max-w-[580px] h-auto max-h-[662px] bottom-0 left-0 md:left-[unset] md:right-0 z-[1] object-cover"
          />
        </motion.div>
      </div>
    </>
  );
};

export default SpecialDaySection;
