"use client";
import Image from "next/image";
import React from "react";
import sectionShadow from "@/app/static/images/sectionShadow.svg";
import listPointer from "@/app/static/icons/listPointer.svg";
import categoryDetail from "@/app/static/images/categoryDetail.jpg";
import { motion } from "motion/react";

interface CategoryDetailListProps {
  categoryDetailList: {
    title: string;
    image: {
      url: string;
    };
    detailList1: {
      title: string;
      description: string;
      icon: {
        url: string;
      };
    }[];
    detailList2: {
      title: string;
      description: string;
      icon: {
        url: string;
      };
    }[];
  };
}

interface ServiceDetailItemProps {
  detail: {
    title: string;
    icon: { url: string };
    description: string;
  };
  index: number;
  totalItemsInList: number;
  right?: boolean;
}

const ServiceDetailItem: React.FC<ServiceDetailItemProps> = ({
  detail,
  index,
  totalItemsInList,
  right = false,
}) => {
  const calculateRotation = (index: number, totalItemsInList: number) => {
    // Find the center point of this specific list
    const center = (totalItemsInList - 1) / 2;

    // Calculate distance from center (normalized to -1 to 1 range) and reversing it
    const distanceFromCenter = -((index - center) / center);

    // Maximum rotation angle (in degrees)
    const maxRotation = 45;

    // Calculate rotation based on distance from center
    const rotation = (distanceFromCenter * maxRotation) / 2;

    return rotation;
  };

  return (
    <div className="relative flex flex-col gap-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className={`flex items-start gap-[15px] md:gap-[20px] ${
          right ? "md:ml-5" : "md:mr-5"
        }`}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${detail.icon?.url || ""}`}
          alt={`detail item image`}
          width={30}
          height={30}
          className="mt-1 w-full max-w-[30px] md:max-w-[40px]  h-auto max-h-[30px] md:max-h-[40px]"
        />
        <div className="flex flex-col gap-[5px] sm:gap-[10px] md:gap-[15px]">
          <h3 className="font-philosopher text-[20px] md:text-[25px] leading-[22px] md:leading-[29px] text-[#212529] w-full md:max-w-[248px]">
            {detail.title}
          </h3>
          <p className="text-[#212529b3] text-mobileBody md:text-sm leading-[20px] md:leading-[22px] ">
            {detail.description}
          </p>
        </div>
      </motion.div>
      <Image
        src={listPointer}
        alt={`detail item image`}
        width={30}
        height={30}
        className={`hidden xl:block absolute w-full max-w-[30px] md:max-w-[60px] h-auto max-h-[30px] md:max-h-[60px] z-[-3] ${
          right ? "top-[30px] left-[0px]" : "top-[30px] right-[-5px]"
        }`}
        style={{
          transform: right
            ? `translate(-100%, 0) rotateY(180deg) rotate(${calculateRotation(
                index,
                totalItemsInList
              )}deg)`
            : `translate(100%, 0) rotate(${calculateRotation(
                index,
                totalItemsInList
              )}deg)`,
        }}
      />
    </div>
  );
};

const CategoryDetailList: React.FC<CategoryDetailListProps> = ({
  categoryDetailList,
}) => {
  const list = categoryDetailList;

  const firstHalf = list?.detailList1.slice(0, 3);
  const secondHalf = list?.detailList2.slice(0, 3);

  return (
    <>
      {categoryDetailList ? (
        <div className="relative mb-[40px] md:mb-[80px] ">
          <div className="relative common-container !w-[90%] !max-w-[1242px] z-[3]">
            {/* <div className="block xl:hidden mb-[15px] lg:mb-[0px]">
            <h2
              className="w-fit md:max-w-[493px] text-center text-lg md:text-xxlg m-auto leading-[28px] md:leading-[52px] text-[#212529]  mb-[10px] md:mb-[20px] font-philosopher"
              // dangerouslySetInnerHTML={{ __html: sectionDetails.title }}
            >
              Why Unwind at Home <br />
              with <i className="title-highlight">Nooora?</i>
            </h2>
          </div> */}
            <div
              // initial={{ y: 20, opacity: 0 }}
              // whileInView={{ y: 0, opacity: 1 }}
              // viewport={{ once: true, amount: 0.7 }}
              // transition={{ ease: "easeInOut", duration: 0.4 }}
              className="block xl:hidden relative border-[1px] border-[#c078581a] rounded-[240px] mb-[20px]"
            >
              {/* inner border */}
              <div className="border-[1px] border-[transparent] m-[5px] custom-dashed-border-mobile">
                {/* image wrapper */}
                <div className="m-[5px] relative overflow-hidden rounded-[220px] w-auto h-auto max-h-[160px]">
                  {/* <video
                  className="w-full h-[full] max-h-[660px] object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${videoUrl}`}
                  />
                </video> */}
                  <Image
                    src={categoryDetail}
                    width={436}
                    height={662}
                    priority
                    alt="couple-section image"
                    className="w-full h-auto max-h-[660px] -translate-y-[50%]"
                  />
                  <div className="w-full text-white text-center text-lg m-auto leading-[28px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-philosopher">
                    {list.title}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-[20px] md:gap-[20px] items-start justify-center">
              {/* text-list1 */}
              <div className="flex flex-col gap-[20px] md:gap-12 md:mt-[32px]">
                {firstHalf.slice(0, 3).map((detail, index) => (
                  <ServiceDetailItem
                    key={index}
                    detail={detail}
                    index={index}
                    totalItemsInList={firstHalf.length}
                  />
                ))}
              </div>
              {/* outer border */}
              <div
                // initial={{ y: 20, opacity: 0 }}
                // whileInView={{ y: 0, opacity: 1 }}
                // viewport={{ once: true, amount: 0.7 }}
                // transition={{ ease: "easeInOut", duration: 0.4 }}
                className="hidden xl:block relative border-[1px] border-[#c078581a] rounded-[240px] "
              >
                {/* inner border */}
                <div className="border-[1px] border-[transparent] m-[11px] xl:m-[17px] custom-dashed-border-long">
                  {/* image wrapper */}
                  <div className="relative m-[8px] xl:m-[17px] overflow-hidden rounded-[220px] w-[327px] xl:w-[400px] h-auto max-h-[660px]">
                    {/* <video
                  className="w-full h-[full] max-h-[660px] object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${videoUrl}`}
                  />
                </video> */}
                    <Image
                      src={
                        `${process.env.NEXT_PUBLIC_STRAPI_URL}/${
                          list?.image?.url || ""
                        }` || ""
                      }
                      width={436}
                      height={662}
                      priority
                      alt="couple-section image"
                      className="w-[327px] xl:w-[400px] max-w-[400px] h-auto max-h-[660px]"
                    />
                    <div className="w-full max-w-[294px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-philosopher text-xxlg text-center text-white leading-[52px]">
                      {list.title}
                    </div>
                  </div>
                </div>
              </div>
              {/* text-list2 */}
              <div className="flex flex-col gap-[20px] md:gap-12 md:mt-[32px]">
                {secondHalf.map((detail, index) => (
                  <ServiceDetailItem
                    key={index}
                    detail={detail}
                    index={index}
                    totalItemsInList={secondHalf.length}
                    right
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block relative md:absolute top-0 left-0 z-[-1] w-[80%] h-auto shadowImageGradient">
            <Image
              // src={`${
              //   process.env.NEXT_PUBLIC_STRAPI_URL
              // }${"/uploads/couple_Special_Video_ezgif_com_video_to_gif_converter_6013eb5903.gif"}`}
              src={sectionShadow}
              width={1442}
              height={966}
              priority
              alt="couple-section image"
              className="hidden md:block w-full h-full "
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CategoryDetailList;
