"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import StarRating from "../../elements/StarRating";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
interface HeroBannerSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  images: {
    url: string;
  }[];
  mobileVideo: {
    url: string;
  };
}

const HeroBannerSection: React.FC<HeroBannerSectionProps> = ({
  title = "",
  description = "",
  buttonText = "",
  buttonLink = "",
  images,
  mobileVideo,
}) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[currentIndex]);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const router = useRouter();
  return (
    <>
      <div className="relative full-container !h-full sm:!h-full !mb-[30px] lg:!mb-[103px] overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
            currentImage?.url || ""
          }`}
          onLoad={() => {
            console.log(
              "bannerLoaded",
              `${process.env.NEXT_PUBLIC_STRAPI_URL}${currentImage?.url || ""}`
            );
          }}
          alt="banner"
          width={1440}
          height={600}
          // unoptimized
          priority
          placeholder="blur"
          blurDataURL={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
            currentImage?.url || ""
          }`}
          className="hidden min-[431px]:block relative top-0 md:left-1/2 md:-translate-x-1/2 w-full min-w-[1440px] h-full max-h-[600px] md:max-h-[600px] xl:max-h-[700px] min-[1440px]:max-h-[750px] 2xl:max-h-[700px] min-[2300px]:max-h-[900px]"
        />
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${mobileVideo?.url || ""}`}
          alt="banner"
          width={375}
          height={700}
          priority
          placeholder="blur"
          blurDataURL={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
            mobileVideo?.url || ""
          }`}
          className="block min-[431px]:hidden relative top-0 md:left-1/2 md:-translate-x-1/2 w-full max-h-[700px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "ease", duration: 0.6 }}
          className="absolute top-0 left-0 w-full h-fit flex flex-col justify-center items-center pt-[90px] lg:pt-[201px]"
        >
          {/* <p */}
          <motion.p
            initial={{
              translateY: "50%",
              skewX: "-5deg",
              skewY: "5deg",
              opacity: 0.01,
            }}
            animate={{
              translateY: 0,
              skewX: 0,
              skewY: 0,
              opacity: 1,
            }}
            exit={{
              translateY: "100%",
              skewX: "-5deg",
              skewY: "5deg",
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="w-full max-w-[90%] lg:max-w-[851px] font-philosopher font-bold text-xlg lg:text-[51px] leading-[30px] lg:leading-[60px] text-center !text-white mb-[20px] lg:mb-[24px]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <motion.p
            initial={{ opacity: 0.01 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.8, delay: 0.2 }}
            className="hidden md:block font-normal text-[16px] lg:text-[20px] leading-[14px] lg:leading-[28px] text-center text-white mb-[20px] xl:mb-[31px]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {/* <button */}
          <motion.button
            initial={{ opacity: 0.01 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.8, delay: 0.2 }}
            className="block font-philosopher bg-white border-[1px]  border-transparent hover:border-[white] hover:bg-[transparent] hover:text-[white] duration-700 ease-out hover:ease-in-out text-[#A45D63] font-normal text-sm lg:text-[16px] rounded-[65px] py-[8px] px-[20px] mb-[10px] lg:mb-[50px]"
            onClick={() => router.push(buttonLink)}
          >
            {buttonText}
          </motion.button>
          {/* </button> */}
          {/* <div */}
          <motion.div
            initial={{ opacity: 0.01 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center justify-center gap-[5px] lg:gap-[10px]"
          >
            <div className="flex flex-row items-center justify-center gap-[10px] lg:gap-[15px]">
              <StarRating rating={5} total={5} color="white" className="flex" />
              {/* <StarRating
                rating={5}
                total={5}
                color="#A45D63"
                className="flex md:hidden bg-white rounded-[65px] py-[10px] px-[14px]"
              /> */}
              <p className="font-normal normal-case mt-[5px] md:mt-0 text-[16px] lg:text-[20px] text-white">
                5 Star Rated
              </p>
            </div>
            <p className="block font-normal text-[16px] lg:text-[20px] text-white">
              On-Demand Beauty
            </p>
            {/* </motion.div> */}
            {/* </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default HeroBannerSection;
