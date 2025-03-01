"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface PreWeddingSectionProps {
  list: {
    title: string;
    description: string;
    image: {
      url: string;
    };
  }[];
  weddingServicesDetails: {
    title: string;
    description: string;
  };
}

const generateOptions = (weddingServices: PreWeddingSectionProps["list"]) => {
  const optionsList = weddingServices.map((service) => {
    return {
      label: service.title,
      value: service.title,
    };
  });
  return optionsList;
};

const PreWeddingSection: React.FC<PreWeddingSectionProps> = ({
  list,
  weddingServicesDetails,
}) => {
  const [selectedtab, setSelectedTab] = useState<{
    title: string;
    description: string;
    image: {
      url: string;
    };
  }>(list[0]);

  const handleSelectTab = (value: string) => {
    const foundTab = list.find((item) => item.title === value);
    if (foundTab) {
      setSelectedTab(foundTab);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
      className="common-container !w-[90%] !max-w-[1242px] !mb-[45px] md:!mb-[130px]"
    >
      <div className="mb-[10px] md:mb-[60px]">
        <h2
          className="max-w-full lg:max-w-[992px] m-auto md:text-center text-lg md:text-xxlg leading-[28px] md:leading-[52px] text-[#212529]  mb-[10px] md:mb-[20px] font-philosopher"
          dangerouslySetInnerHTML={{ __html: weddingServicesDetails.title }}
        />
        <p
          className="max-w-full lg:max-w-[796px] m-auto md:text-center text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-[#212529b3] font-normal"
          dangerouslySetInnerHTML={{
            __html: weddingServicesDetails.description,
          }}
        />
      </div>
      <div className="w-full">
        <div className="w-full mb-[10px] md:mb-[60px]">
          {/* tabs */}
          <div className="w-full pb-[10px] md:pb-[15px]">
            <ul className="flex justify-center gap-[7px] md:gap-[5px] text-sm font-normal text-center text-[#6B7280] overflow-scroll pb-[2px] md:overflow-auto hide-scrollbar jiggle-animation">
              {generateOptions(list).map((item, index) => {
                const isActive = item?.value === selectedtab.title;
                return (
                  <li className="me-0 lg:me-1 text-nowrap" key={index}>
                    <span
                      onClick={() => handleSelectTab(item?.value)}
                      className={`${
                        isActive ? "text-[#212529]" : "text-[#0a0a0a66]"
                      } transition-all duration-[600ms] ease-in-out relative inline-block px-[11px] lg:px-[22px] py-[8px] lg:py-[10px] ml-0 lg:ml-2 text-xs md:text-body lg:text-[18px] rounded-full font-inter bg-[#F8F9FB] cursor-pointer`}
                    >
                      {item.label}
                      {isActive && (
                        <div className="w-[30px] h-[1px] absolute z-10 top-full left-1/2 -translate-x-1/2 bg-primary transition-all duration-[600ms] ease-in-out" />
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <motion.div
          key={selectedtab.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            opacity: { duration: 0.6, ease: "easeOut", delay: 0.4 },
            y: { duration: 0.6, ease: "easeOut" },
          }}
          className="w-full md:mb-[15px]"
        >
          <div
            className={`w-full md:max-w-[1118px] m-auto flex flex-col md:flex-row gap-x-[63px] items-center rounded-[50px] md:rounded-[155px] bg-[#ffd0ce33] border-[0.7px] border-[#9e5a5733] px-[10px] md:px-0 pt-[10px] md:pt-0`}
          >
            <div className="relative w-full max-w-[390px] h-full max-h-[286px] rounded-[40px] md:rounded-[150px] overflow-hidden md:m-[5px] md:mr-[25px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  selectedtab.image?.url || ""
                }`}
                // src={weddingService}
                alt="pageBar image"
                width={390}
                height={286}
                className="h-auto w-full "
              />
            </div>
            <div className="w-full max-w-[570px] px-[10px] md:px-0 py-[20px] md:py-[20px]">
              <h2
                className="w-full text-lg md:text-xxlg leading-[28px] md:leading-[52px] text-[#212529]  mb-[10px] md:mb-[20px] font-philosopher"
                dangerouslySetInnerHTML={{ __html: selectedtab.title }}
              />

              <p
                className="w-full  text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-[#212529b3] font-normal mb-[10px] md:mb-[20px]"
                dangerouslySetInnerHTML={{ __html: selectedtab.description }}
              />

              <Link
                href={`${
                  process.env.NEXT_PUBLIC_WHATSAPP_LINK
                }?text=Hi Nooora, I would like to book for ${encodeURIComponent(
                  selectedtab.title
                )}.`}
                className="inline-block font-philosopher bg-primaryGradient transition-all duration-700 ease-in-out hover:transform hover:scale-110 hover:shadow-lg hover:-translate-y-1 text-white font-normal text-xs md:text-[16px] rounded-[65px] py-[6px] px-[10px] md:px-[12px]"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PreWeddingSection;
