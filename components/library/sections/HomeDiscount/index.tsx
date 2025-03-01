import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

interface HomeDiscountSectionProps {
  sectionDetails: {
    title: string;
    description: string;
  };
  discountCards: {
    title: string;
    description?: string | null;
    image: {
      url: string;
    };
  }[];
}

const HomeDiscountSection: React.FC<HomeDiscountSectionProps> = ({
  sectionDetails,
  discountCards,
}) => {
  return (
    <>
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
        className="common-container !w-[90%] !mb-[60px] md:!mb-[116px]"
      >
        <div
          // initial={{ y: 20, opacity: 0.01 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // viewport={{ once: true, amount: 0.7 }}
          // transition={{ ease: "easeInOut", duration: 0.4 }}
          className="mb-[20px] lg:mb-[20px]"
        >
          <h2
            className="w-full max-w-[160px] md:max-w-[992px] lg:m-auto md:text-center text-lg md:text-xxlg leading-[28px] md:leading-[52px] text-[#212529]  mb-[10px] md:mb-[20px] font-philosopher"
            dangerouslySetInnerHTML={{ __html: sectionDetails.title }}
          />
          <p
            className="max-w-full lg:max-w-[827px] m-auto md:text-center text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-[#212529b3] font-normal"
            dangerouslySetInnerHTML={{ __html: sectionDetails.description }}
          />
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0.01 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ ease: "easeInOut", duration: 0.4, delay: 0.1 }}
          className="w-fit flex flex-wrap justify-center gap-[10px] m-auto"
        >
          {discountCards.map((item, index) => {
            return (
              // not creating seperate component, because not used anywhere in the website other than  this
              <div
                key={index}
                style={{
                  backgroundColor: index === 0 ? "#FFDCD6" : "#FFF0EF",
                }}
                className={`cursor-pointer max-w-full lg:min-w-[522px] rounded-[15px] lg:max-h-[218px] flex justify-center gap-[20px] lg:gap-[45px]`}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                    item.image?.url || ""
                  }`}
                  width={179}
                  height={182}
                  // unoptimized
                  priority
                  placeholder="blur"
                  blurDataURL={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                    item.image?.url || ""
                  }`}
                  alt="discount card Image"
                  className="h-full w-full max-w-[30%]"
                />
                <div className="pt-[35px] md:pt-[51px] pb-[35px] md:pb-[52px] w-[50%] sm:w-[217px]">
                  <h3 className="font-philosopher font-bold text-body md:text-md lg:text-lg text-[#B5685B] leading-[20px] sm:leading-[30px] mb-[5px] lg:mb-[10px]">
                    {item.title}
                  </h3>
                  <p className="text-xs lg:text-body leading-[18px] lg:leading-[25px] text-[#212529b3] font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
      {/* </div> */}
    </>
  );
};

export default HomeDiscountSection;
