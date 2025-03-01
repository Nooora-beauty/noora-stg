"use client";
import React, { useState } from "react";
import Image from "next/image";
import colorSplash1 from "@/app/static/images/colorSplash1.svg";
import CardsSlider from "../../elements/CardsSlider";
import { IoStar } from "react-icons/io5";
import { motion } from "motion/react";

interface TabSliderData {
  tabTitle: string;
  tabImage: {
    url: string;
  };
  tabCards: {
    title: string;
    price: string;
    offerPercent: string | null;
    buttonText: string;
    image: {
      url: string;
    };
  }[];
}
interface WhatsNewSectionProps {
  sectionDetails: {
    title: string;
    description: string;
  };
  dermalogicaImageUrl: string;
  whatsNewTabs: TabSliderData[];
}

const WhatsNewSection: React.FC<WhatsNewSectionProps> = ({
  sectionDetails,
  dermalogicaImageUrl,
  whatsNewTabs,
}) => {
  const [activeTab, setActiveTab] = useState<TabSliderData>(whatsNewTabs[0]);
  const handleActiveTab = (tabTitle: string) => {
    const foundTab = whatsNewTabs.find(
      (tabElement) => tabElement.tabTitle === tabTitle
    );

    if (foundTab) {
      setActiveTab(foundTab);
    }
  };

  return (
    <>
      <div className="relative">
        <div className="common-container !w-[90%] !max-w-[1242px] pb-[90px] sm:pb-[150px] lg:pb-[123px]">
          {/* <div */}
          <motion.div
            initial={{ y: 20, opacity: 0.01 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeOut",
              duration: 0.4,
              delay: 0.2,
            }}
            className="mb-[15px] lg:mb-[20px]"
          >
            <h2
              className="text-lg md:text-xxlg leading-[28px] md:leading-[35px] text-[#212529]  mb-[10px] md:mb-[20px] font-philosopher"
              dangerouslySetInnerHTML={{ __html: sectionDetails.title }}
            />
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <p
                className="text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-[#212529b3] font-normal w-full lg:w-[45%] lg:max-w-[579px] mb-[15px] lg:mb-0"
                dangerouslySetInnerHTML={{ __html: sectionDetails.description }}
              />
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${dermalogicaImageUrl}`}
                priority
                alt="dermalogica"
                width={300}
                height={37}
                className="w-[100%] max-w-[200px] lg:max-w-[300px] h-auto max-h-[37px] self-end"
              />
            </div>
            {/* </motion.div> */}
          </motion.div>

          {/* this is tile section*/}
          {/* <div */}
          <motion.div
            initial={{ y: 20, opacity: 0.01 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeOut",
              duration: 0.4,
              delay: 0.2,
            }}
            className="flex justify-between flex-col lg:flex-row min-h-[295px] gap-[20px]"
          >
            <div className="w-[100%] md:w-[70%] lg:w-[30%] flex lg:block flex-col lg:flex-row justify-between lg:justify-start m-auto lg:m-0">
              <div className="flex lg:flex-col justify-center relative gap-[10px] lg:gap-0 px-[5px] sm:px-0">
                <div
                  className={`relative w-[240px] h-[90px] md:h-[100px] lg:h-[133px] ${
                    activeTab.tabTitle === whatsNewTabs[0].tabTitle &&
                    "lg:!w-[240px]"
                  }`}
                >
                  <div
                    className={`bg-[#ededed] hovered-img-card relative rounded-[8px] overflow-hidden cursor-pointer w-full h-[100%] md:h-[95%] bg-cover bg-right !bg-no-repeat duration-700 ease-out hover:ease-in-out ${
                      activeTab.tabTitle === whatsNewTabs[0].tabTitle &&
                      "border-inside-bottom"
                    }`}
                    // style={{
                    //   backgroundImage: `url("${process.env.NEXT_PUBLIC_STRAPI_URL}${whatsNewTabs[0].tabImage.url}")`,
                    // }}
                    onClick={() => handleActiveTab(whatsNewTabs[0].tabTitle)}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${whatsNewTabs[0].tabImage.url}`}
                      alt="tab-1 image"
                      //  width={300}
                      //  height={37}
                      priority
                      placeholder="blur"
                      blurDataURL={`${process.env.NEXT_PUBLIC_STRAPI_URL}${whatsNewTabs[0].tabImage.url}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 100%"
                      className="absolute object-cover transition-all ease-in-out"
                    />
                    <div className="absolute w-full h-full flex items-center justify-start z-[3]">
                      <span className="text-[#fff] text-[16px] md:text-md lg:text-[25px] font-bold pl-4 lg:pl-8 font-philosopher">
                        {whatsNewTabs[0].tabTitle}
                      </span>
                    </div>
                    <div className="flex items-center bg-[#d6241d80] p-[4px] pr-2 rounded-[8px] absolute top-[0px] left-[0px] z-[99]">
                      <div className="mr-1 rounded-[50%] w-[14px] h-[14px] bg-white flex justify-center items-center">
                        <IoStar className="w-[8px] h-[8px] text-[#d6241d]" />
                      </div>
                      <p className="font-medium text-white text-[12px] leading-[16px]">
                        8 types
                      </p>
                    </div>
                  </div>
                  <div
                    className={`hidden lg:block h-full absolute top-0 !m-0 right-[-30px] w-[2px] bg-[#C57D71] z-10 ${
                      activeTab.tabTitle === whatsNewTabs[0].tabTitle
                        ? "active-shape"
                        : "remove-shape right-[-30px]"
                    }`}
                  />
                </div>

                <div
                  className={`relative w-[240px] h-[90px] md:h-[100px] lg:h-[133px] box-border
                    ${
                      activeTab.tabTitle === whatsNewTabs[1].tabTitle &&
                      "lg:!w-[240px]"
                    }`}
                >
                  <div
                    className={`bg-[#ededed] hovered-img-card mt-0 lg:mt-[7px] relative rounded-[8px] overflow-hidden cursor-pointer w-full h-[100%] md:h-[95%] bg-cover bg-right !bg-no-repeat duration-500 ease-out hover:ease-in-out  ${
                      activeTab.tabTitle === whatsNewTabs[1].tabTitle &&
                      "border-inside-bottom"
                    }`}
                    // style={{
                    //   backgroundImage: `url("${process.env.NEXT_PUBLIC_STRAPI_URL}${whatsNewTabs[1].tabImage.url}")`,
                    // }}
                    onClick={() => handleActiveTab(whatsNewTabs[1].tabTitle)}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${whatsNewTabs[1].tabImage.url}`}
                      alt="tab-2 image"
                      //  width={300}
                      //  height={37}
                      priority
                      placeholder="blur"
                      blurDataURL={`${process.env.NEXT_PUBLIC_STRAPI_URL}${whatsNewTabs[1].tabImage.url}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 100%"
                      className="absolute object-cover transition-all ease-in-out"
                    />
                    <div className="absolute w-full h-full flex items-center justify-start">
                      <span className="text-[#fff] text-[16px] md:text-md lg:text-[25px] font-bold pl-4 lg:pl-8 font-philosopher">
                        {whatsNewTabs[1].tabTitle}
                      </span>
                    </div>
                    <div className="flex items-center bg-[#d6241d80] p-[4px] pr-2 rounded-[8px] absolute top-[0px] left-[0px] z-[99]">
                      <div className="mr-1 rounded-[50%] w-[14px] h-[14px] bg-white flex justify-center items-center">
                        <IoStar className="w-[8px] h-[8px] text-[#d6241d]" />
                      </div>
                      <p className="font-medium text-white text-[12px] leading-[16px]">
                        6 types
                      </p>
                    </div>
                  </div>
                  <div
                    className={`hidden lg:block h-full absolute top-0 !m-0 right-[-30px] w-[2px] bg-[#C57D71] active-shape z-10 ${
                      activeTab.tabTitle === whatsNewTabs[1].tabTitle
                        ? "active-shape"
                        : "remove-shape right-[-30px]"
                    }`}
                  />
                </div>

                <div className="block lg:hidden w-[97%] mx-[5px] h-[2px] bg-[#C57D71] absolute bottom-[-12px] lg:bottom-[-20px] left-0">
                  <div
                    className={`absolute w-[10px] h-[10px] bottom-[-3px] transition-all duration-300 ease-in-out
                      ${
                        activeTab.tabTitle === whatsNewTabs[0].tabTitle
                          ? "left-[20%] sm:left-[30%] md:left-[110px]"
                          : "left-[70%] sm:left-[70%] md:left-[340px]"
                      }`}
                  >
                    <div className="w-full h-full bg-white transform rotate-[-45deg] clip-triangle" />
                  </div>
                </div>
              </div>
            </div>
            {activeTab.tabCards.length && (
              // <div
              <motion.div
                key={activeTab.tabTitle}
                initial={{ opacity: 0.01 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.01 }}
                transition={{
                  opacity: { duration: 0.6, ease: "easeOut", delay: 0.4 },
                }}
                className="whats-new-slider-wrapper"
              >
                <CardsSlider tabCards={activeTab.tabCards} />
                {/* </motion.div> */}
              </motion.div>
            )}
            {/* </motion.div> */}
          </motion.div>
        </div>
        <Image
          src={colorSplash1}
          alt="splash"
          priority
          className="absolute z-[-1] top-[25%] min-[475px]:top-[0] right-[0]"
        />
      </div>
    </>
  );
};

export default WhatsNewSection;
