"use client";
import React from "react";
import Image from "next/image";
import weddingMakeupBanner from "@/app/static/images/WM-1.png";
import Link from "next/link";
import { motion } from "motion/react";

interface WeddingMakeupSideSectionProps {
  SideImage1: {
    url: string;
  };
  SideImage2: {
    url: string;
  };
  SideText: string;
}

const WeddingMakeupSideSection: React.FC<WeddingMakeupSideSectionProps> = ({
  SideImage1,
  SideImage2,
  SideText,
}) => {
  return (
    <>
      <div className="w-full max-w-[327px] flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="m-[5px] relative overflow-hidden rounded-[220px] w-auto h-auto max-h-[180px] mb-[10px] md:mb-[20px]"
        >
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
            // src={weddingSideBanner1}
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
              SideImage1?.url || ""
            }`}
            width={436}
            height={662}
            alt="couple-section image"
            className="w-full h-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          // initial={{ y: 20, opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // viewport={{ once: true, amount: 0.7 }}
          // transition={{ ease: "easeInOut", duration: 0.4 }}
          className="relative border-[1px] border-[#c078581a] rounded-[240px] mb-[10px] md:mb-[20px] bg-[#FFEFECB5]"
        >
          {/* inner border */}
          <div className="border-[1px] border-[transparent] m-[5px] custom-dashed-border-mobile">
            {/* image wrapper */}
            <div className="m-[5px] relative overflow-hidden rounded-[220px] w-auto h-auto min-h-[160px]">
              <div
                className="w-full max-w-[253px] text-center text-[#5D2E28] text-body md:text-md leading-[18px] md:leading-[23px] m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-philosopher"
                dangerouslySetInnerHTML={{
                  __html: SideText,
                }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="m-[5px] relative overflow-hidden rounded-[220px] w-auto h-auto max-h-[180px]"
        >
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
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
              SideImage2?.url || ""
            }`}
            width={436}
            height={662}
            alt="couple-section image"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </>
  );
};

interface WeddingMakeupMainBannerProps {
  HeadImage: {
    url: string;
  };
}

const WeddingMakeupMainBanner: React.FC<WeddingMakeupMainBannerProps> = ({
  HeadImage,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.01, delay: 0.01 }}
      viewport={{ once: true, amount: 0.01 }}
      // initial={{ y: 20, opacity: 0 }}
      // whileInView={{ y: 0, opacity: 1 }}
      // viewport={{ once: true, amount: 0.7 }}
      // transition={{ ease: "easeInOut", duration: 0.4 }}
      className="hidden xl:block relative border-[1px] border-[#c078581a] rounded-[240px] "
    >
      {/* inner border */}
      <div className="border-[1px] border-[transparent] m-[11px] xl:m-[17px] custom-dashed-border-long">
        {/* image wrapper */}
        <div className="relative m-[8px] xl:m-[17px] overflow-hidden rounded-[220px] w-[327px] xl:w-[400px] h-auto min-h-[660px]">
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
            // src={weddingMakeupBanner}
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${HeadImage?.url || ""}`}
            // width={400}
            // height={660}
            fill
            alt="couple-section image"
            className="w-auto h-full min-h-[660px] min-w-[327px] xl:w-[400px] xl:h-[660px] object-cover"
            priority={true}
          />
        </div>
      </div>
    </motion.div>
  );
};

interface WeddingMakeupDetailsProps {
  headSubTitle: string;
  headTitle: string;
  HeadContent1: string;
  HeadContent2: string;
}

const WeddingMakeupDetails: React.FC<WeddingMakeupDetailsProps> = ({
  // weddingServicesDetails,
  headTitle,
  headSubTitle,
  HeadContent1,
  HeadContent2,
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
        className="block xl:hidden relative border-[1px] border-[#c078581a] rounded-[240px] mb-[10px]"
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
              src={weddingMakeupBanner}
              width={436}
              height={662}
              alt="couple-section image"
              className="w-full h-auto max-h-[660px] -translate-y-[25%]"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col w-full md:max-w-[400px] mb-[15px] md:mb-[26px] items-start"
      >
        <h3
          className="text-md md:text-[60px] text-[#212529] leading-[28px] md:leading-[68px] mb-[10px] md:mb-[26px] font-philosopher"
          dangerouslySetInnerHTML={{
            __html: headTitle,
          }}
        >
          {/* Wedding Hair & Make Up */}
        </h3>
        <div className="w-full md:max-w-[327px] mb-[10px] md:mb-[30px]">
          <div
            className="flex flex-col gap-y-[10px] md:gap-y-[20px] text-[#C67C71] text-mobileBody md:text-[20px] leading-[18px] md:leading-[25px] font-philosopher font-normal mb-[10px] md:mb-[26px]"
            dangerouslySetInnerHTML={{
              __html: headSubTitle,
            }}
          />

          <div
            className="text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-[#212529b3] font-normal max-w-full lg:max-w-[705px] mb-[10px] md:mb-[26px]"
            dangerouslySetInnerHTML={{ __html: HeadContent1 }}
          />

          <div
            className="text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-[#212529b3] font-normal max-w-full lg:max-w-[705px]"
            dangerouslySetInnerHTML={{
              __html: HeadContent2,
            }}
          />
        </div>
        <Link
          href={`${
            process.env.NEXT_PUBLIC_WHATSAPP_LINK
          }?text=Hi Nooora, I would like to book for ${encodeURIComponent(
            headTitle
          )}.`}
          className="font-philosopher bg-primaryGradient transition-all duration-700 ease-in-out hover:transform hover:scale-110 hover:shadow-lg hover:-translate-y-1 text-white font-normal text-xs md:text-[16px] rounded-[65px] py-[6px] px-[10px] md:px-[12px]"
        >
          BOOK NOW
        </Link>
      </motion.div>
    </>
  );
};

interface WeddingDetailsSectionProps {
  headSubTitle: string;
  headTitle: string;
  HeadContent1: string;
  HeadContent2: string;
  HeadImage: {
    url: string;
  };
  SideImage1: {
    url: string;
  };
  SideImage2: {
    url: string;
  };
  SideText: string;
}

const WeddingDetails: React.FC<WeddingDetailsSectionProps> = ({
  headTitle,
  headSubTitle,
  HeadContent1,
  HeadContent2,
  HeadImage,
  SideImage1,
  SideImage2,
  SideText,
}) => {
  return (
    <div className="common-container !w-[90%] !max-w-[1242px] !mt-[10px] md:!mt-[65px] !mb-[35px] md:!mb-[97px]">
      <div className="flex flex-col lg:flex-row md:gap-[20px] items-center justify-center">
        <WeddingMakeupDetails
          headTitle={headTitle}
          headSubTitle={headSubTitle}
          HeadContent1={HeadContent1}
          HeadContent2={HeadContent2}
        />
        <WeddingMakeupMainBanner HeadImage={HeadImage} />
        <WeddingMakeupSideSection
          SideImage1={SideImage1}
          SideImage2={SideImage2}
          SideText={SideText}
        />
      </div>
    </div>
  );
};

export default WeddingDetails;
