"use client";
import React from "react";
import Image from "next/image";
import Petal1 from "@/app/static/images/petal1.svg";
import Petal2 from "@/app/static/images/petal2.svg";
import Petal3 from "@/app/static/images/petal3.svg";
import { useRouter } from "next/navigation";
import Book5TicketMobileOption from "../../elements/Book5TicketMobileOption";
import { dummyGiftCardDetails } from "@/app/constant";
import mobileTicket from "@/app/static/images/mobileTicket.svg";

import { motion } from "motion/react";
import Link from "next/link";

interface GetYourDealSectionProps {
  sectionDetails: {
    title: string;
    description: string;
  };
  dealTickets: {
    title: string;
    image: {
      url: string;
    };
  }[];
  giftCardDetails: {
    title: string;
    description: string;
    buttonText: string;
    image: {
      url: string;
    };
    buttonUrl: string;
  };
}

const GetYourDealSection: React.FC<GetYourDealSectionProps> = ({
  sectionDetails,
  giftCardDetails,
  dealTickets,
}) => {
  const router = useRouter();

  return (
    <>
      <>
        {/* <div */}
        <motion.div
          initial={{ y: 20, opacity: 0.01 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeOut",
            duration: 0.4,
            delay: 0.4,
          }}
          className="common-container !w-[90%] !max-w-[1242px] !mb-[80px] md:!mb-[113px]"
        >
          <motion.div
            initial={{ y: 20, opacity: 0.01 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ ease: "easeInOut", duration: 0.4 }}
            className="mb-[20px]"
          >
            <h2
              className="max-w-full lg:max-w-[992px] m-auto md:text-center text-lg md:text-xxlg leading-[28px] md:leading-[52px] text-[#212529]  mb-[10px] md:mb-[20px] font-philosopher"
              dangerouslySetInnerHTML={{ __html: sectionDetails.title }}
            />
            <p
              className="max-w-full lg:max-w-[589px] m-auto md:text-center text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-[#212529b3] font-normal"
              dangerouslySetInnerHTML={{ __html: sectionDetails.description }}
            />
          </motion.div>
          <Book5TicketMobileOption />
          {/* tickets */}
          <div className="flex md:hidden relative w-full m-auto mb-[15px]">
            <div className="w-full flex items-center justify-between">
              <Image
                // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${dummyGiftCardDetails.image?.url || ""}`}
                src={mobileTicket}
                width={162}
                height={103}
                // unoptimized
                priority
                alt="mobile ticket-card"
                className="w-full !max-w-[calc(50%-10px)]"
              />
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  dummyGiftCardDetails.image?.url || ""
                }`}
                width={162}
                height={103}
                // unoptimized
                priority
                placeholder="blur"
                blurDataURL={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  dummyGiftCardDetails.image?.url || ""
                }`}
                alt="gift-card"
                className="w-full !max-w-[calc(50%-7px)]"
              />
            </div>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0.01 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ ease: "easeInOut", duration: 0.4, delay: 0.1 }}
            className="hidden md:flex w-fit flex-col sm:flex-row justify-center gap-[5px] md:gap-[15px] m-auto !mb-[10px] md:!mb-[20px]"
          >
            {/* <Link href={ dealTickets[0].buttonUrl}></Link> */}

            <Link
              href={
                `${
                  process.env.NEXT_PUBLIC_WHATSAPP_LINK
                }?text=Hi Nooora, I would like to book for ${encodeURIComponent(
                  dealTickets[0].title
                )}.` || ""
              }
              // className="block sm:hidden self-end font-philosopher uppercase bg-[#F6E1DD] text-primary font-normal text-xs md:text-[16px] rounded-[6px] py-[6px] px-[10px]"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  dealTickets[0].image?.url || ""
                }`}
                width={354}
                height={85}
                // unoptimized
                priority
                placeholder="blur"
                blurDataURL={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  dealTickets[0].image?.url || ""
                }`}
                alt="ticket"
                className="w-[full] !max-w-[100%] sm:!max-w-[100px] md:!max-w-[200px] min-[1440px]:!max-w-[354px]"
              />
            </Link>

            <Link
              href={
                `${
                  process.env.NEXT_PUBLIC_WHATSAPP_LINK
                }?text=Hi Nooora, I would like to book for ${encodeURIComponent(
                  dealTickets[1].title
                )}.` || ""
              }
              // className="block sm:hidden self-end font-philosopher uppercase bg-[#F6E1DD] text-primary font-normal text-xs md:text-[16px] rounded-[6px] py-[6px] px-[10px]"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  dealTickets[1].image?.url || ""
                }`}
                width={696}
                height={85}
                // unoptimized
                priority
                placeholder="blur"
                blurDataURL={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  dealTickets[1].image?.url || ""
                }`}
                alt="package"
                className="w-[full] !max-w-[100%] sm:!max-w-[200px] md:!max-w-[400px] min-[1440px]:!max-w-[696px]"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0.01 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ ease: "easeInOut", duration: 0.4, delay: 0.2 }}
            className="relative w-fit flex flex-wrap justify-center gap-[15px] m-auto"
          >
            <motion.div
              initial={{ y: 20, opacity: 0.01 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ ease: "easeInOut", duration: 0.4, delay: 0.3 }}
              className="w-full hidden md:flex flex-col lg:flex-row items-center gap-[22px] md:gap-[42px] lg:gap-[72px] px-[12px] sm:px-[25px] lg:px-[145px] py-[15px] md:py-[40px] lg:py-[37px] border-[1px] border-[#e19a8f80] rounded-[40px] lg:rounded-[147px]"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  giftCardDetails.image?.url || ""
                }`}
                width={348}
                height={219}
                // unoptimized
                priority
                placeholder="blur"
                blurDataURL={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  giftCardDetails.image?.url || ""
                }`}
                alt="gift-card"
                className="hidden md:block w-full sm:max-w-[300px] lg:max-w-[348px] bg-[#ededed] rounded-[15px]"
              />
              <motion.div
                initial={{ y: 20, opacity: 0.01 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ ease: "easeInOut", duration: 0.4, delay: 0.4 }}
                className="w-[full] sm:max-w-[300px] lg:max-w-[373px] flex flex-col items-start justify-center"
              >
                <p
                  className="font-philosopher font-normal text-[20px] md:text-[30px] text-[#212529] leading-[28px] md:leading-[42px] mb-[10px] md:mb-[16px]"
                  dangerouslySetInnerHTML={{ __html: giftCardDetails.title }}
                />
                <p
                  className="font-philosopher font-normal text-sm md:text-[20px] text-[#212529] leading-[20px] md:leading-[28px] mb-[12px] md:mb-[25px]"
                  dangerouslySetInnerHTML={{
                    __html: giftCardDetails.description,
                  }}
                />
                <button
                  onClick={() =>
                    giftCardDetails.buttonUrl &&
                    router.push(giftCardDetails.buttonUrl)
                  }
                  className="font-philosopher bg-primaryGradient transition-all duration-700 ease-in-out hover:transform hover:scale-110 hover:shadow-lg hover:-translate-y-1 text-white font-normal text-xs md:text-[16px] rounded-[65px] py-[6px] px-[10px] md:px-[12px] right-0 bottom-[-23px] md:bottom-[-27px] z-10"
                >
                  {giftCardDetails.buttonText}
                </button>
              </motion.div>
            </motion.div>
            {/* <div */}
            <motion.div
              className="hidden md:block w-[170px] xl:w-[200px] absolute top-[-15px] md:top-[-40px] lg:top-0 left-[-70px] rotate-[-25deg]"
              animate={{
                translateY: [0, -10, 0],
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={{
                rotate: "-25deg",
              }}
            >
              <Image
                src={Petal1}
                alt="petal-1"
                width={109}
                height={82}
                unoptimized
                className="w-full"
              />
            </motion.div>
            {/* </div> */}
            {/* <div */}
            <motion.div
              className="hidden md:block w-[100px] xl:w-[120px] absolute top-[190px] min-[400px]:top-[215px] lg:top-[70px] right-[-4%] md:right-[-55px]"
              animate={{
                translateY: [0, -10, 0],
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Image
                src={Petal2}
                alt="petal-2"
                width={69}
                height={78}
                unoptimized
                className="w-full"
              />
            </motion.div>
            {/* </div> */}
            {/* <div */}
            <motion.div
              className="hidden md:block w-[110px] xl:w-[110px] absolute bottom-[-60px] right-[100px] md:right-[200px]"
              style={{
                rotate: "-40deg",
              }}
              animate={{
                translateY: [0, -5, 0],
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Image
                src={Petal3}
                alt="petal-3"
                width={87}
                height={114}
                unoptimized
                className="w-full"
              />
            </motion.div>
            {/* </div> */}
            {/* <Image
              src={Petal1}
              alt="petal-1"
              width={109}
              height={82}
              unoptimized
              className="hidden md:block w-[170px] xl:w-[200px] absolute top-[-15px] md:top-[-40px] lg:top-0 left-0 -translate-x-[24%] md:-translate-x-[36%] rotate-[-25deg]"
            /> */}
            {/* <Image
              src={Petal2}
              alt="petal-2"
              width={69}
              height={78}
              unoptimized
              className="hidden md:block w-[100px] xl:w-[120px] absolute top-[190px] min-[400px]:top-[215px] lg:top-[70px] right-[-4%] md:right-[-55px]"
            /> */}
            {/* <Image
              src={Petal3}
              alt="petal-3"
              width={87}
              height={114}
              unoptimized
              className="hidden md:block w-[110px] xl:w-[110px] absolute bottom-[-60px] right-[100px] md:right-[200px] rotate-[-40deg]"
            /> */}
          </motion.div>
          {/* </motion.div> */}
        </motion.div>
      </>
    </>
  );
};

export default GetYourDealSection;
