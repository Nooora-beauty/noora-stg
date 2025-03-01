"use client";
import colorSplash2 from "@/app/static/images/colorSplash2.svg";
import colorSplash3 from "@/app/static/images/colorSplash3.svg";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

interface CategoryDetailSectionProps {
  src?: string;
  details?: {
    title?: string;
    description?: string;
  };
  additionalDetails?: {
    title?: string;
    description?: {
      children: { text: string }[];
    }[];
  };
}

const CategoryDetailSection: React.FC<CategoryDetailSectionProps> = ({
  src,
  details,
  additionalDetails,
}) => {
  const [expandDetails, setExpandDetails] = useState(false);
  const [expandAdditionalDetails, setExpandAdditionalDetails] = useState(false);

  return (
    <>
      <div className="relative">
        <div className="common-container w-full md:!w-[90%] !max-w-[1242px] !mb-[40px] md:!mb-[108px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex gap-x-[80px]"
          >
            {src && (
              <div className="px-[5%] md:px-0 hidden lg:block w-full h-auto max-w-[545px] max-h-[718px] overflow-hidden rounded-[20px] bg-[#ededed]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${src}`}
                  // src={categoryDetailsImage}
                  width={545}
                  height={718}
                  priority
                  alt="category details image"
                  className="h-auto w-full"
                />
              </div>
            )}
            <div className="w-full h-auto max-w-[625px]">
              <div className="px-[5%] md:px-0 bg-white md:bg-transparent mb-[15px] lg:mb-[50px]">
                {details?.title && (
                  <h2
                    className="md:max-w-[493px] text-lg md:text-xxlg leading-[28px] md:leading-[52px] text-[#212529]  mb-[10px] md:mb-[20px] font-philosopher"
                    dangerouslySetInnerHTML={{ __html: details.title }}
                  />
                )}
                {details?.description && (
                  <>
                    <p
                      className={`text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-[#212529b3] font-normal ${
                        expandDetails
                          ? "open-description"
                          : "closed-content-description"
                      }`}
                      dangerouslySetInnerHTML={{ __html: details.description }}
                    />
                    <div
                      className="cursor-pointer mt-[10px] md:mt-[15px] text-primary text-right md:text-left text-mobileBody md:text-body leading-[20px] md:leading-[25px] hover:underline"
                      onClick={() => setExpandDetails(!expandDetails)}
                    >
                      {expandDetails ? "Read less" : "Read more"}
                    </div>
                  </>
                )}
              </div>
              {src && (
                <div className="relative px-[5%] md:px-0 max-h-[400px]">
                  <div className="block lg:hidden w-full h-auto m-auto max-w-[545px] max-h-[400px] sm:max-h-[718px] overflow-hidden rounded-[20px] mb-[15px]">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${src}`}
                      // src={categoryDetailsImage}
                      width={545}
                      height={718}
                      priority
                      alt="category details image"
                      className="h-auto w-full"
                    />
                  </div>
                  <Image
                    src={colorSplash2}
                    alt="splash"
                    width={542}
                    height={542}
                    priority
                    className={`md:hidden w-[180px] absolute z-[-1] top-[80px] left-[0] -translate-y-1/2 `}
                  />
                  <Image
                    src={colorSplash3}
                    alt="splash"
                    width={270}
                    height={270}
                    priority
                    className="md:hidden w-[130px] absolute z-[-1] bottom-[10%] right-[0] translate-y-1/2"
                  />
                </div>
              )}
              <div className="px-[5%] md:px-0 ">
                {additionalDetails?.title && (
                  <h2
                    className="text-[20px] md:text-[35px] leading-[22px] md:leading-[49px] text-[#212529] mb-[10px] font-philosopher"
                    dangerouslySetInnerHTML={{
                      __html: additionalDetails.title,
                    }}
                  />
                )}
                <div
                  className={`text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-[#212529b3] font-normal category-content-space ${
                    expandAdditionalDetails
                      ? "open-additional-content-description"
                      : "closed-additional-content-description"
                  }`}
                  // dangerouslySetInnerHTML={{ __html: additionalDetails.description }}
                >
                  {additionalDetails?.description &&
                    additionalDetails.description.map((item, index) => (
                      <div
                        key={index}
                        dangerouslySetInnerHTML={{
                          __html: item.children[0].text,
                        }}
                      />
                    ))}
                </div>
                {additionalDetails?.description &&
                  additionalDetails.description[0].children[0].text?.length >
                    0 && (
                    <div
                      className="cursor-pointer mt-[10px] md:mt-[15px] text-primary text-right md:text-left text-mobileBody md:text-body leading-[20px] md:leading-[25px] hover:underline"
                      onClick={() =>
                        setExpandAdditionalDetails(!expandAdditionalDetails)
                      }
                    >
                      {expandAdditionalDetails ? "Read less" : "Read more"}
                    </div>
                  )}
              </div>
            </div>
          </motion.div>
        </div>
        <Image
          src={colorSplash2}
          alt="splash"
          width={542}
          height={542}
          priority
          className={`hidden md:block w-[271px] md:w-[542px] h-auto absolute z-[-1] top-[40%] md:top-[35%] lg:top-[0] left-[0] -translate-y-1/2 `}
        />
        <Image
          src={colorSplash3}
          alt="splash"
          width={270}
          height={270}
          priority
          className="hidden md:block w-[135px] md:w-[270px] h-auto absolute z-[-1] bottom-[35%] lg:bottom-[0] right-[0] translate-y-1/2"
        />
      </div>
    </>
  );
};

export default CategoryDetailSection;
