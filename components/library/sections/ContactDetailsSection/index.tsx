"use client";
import Image from "next/image";
import colourSplash4 from "@/app/static/images/colorSplash4.svg";
import sectionArcs from "@/app/static/images/sectionArcs.svg";
import sectionDotBg from "@/app/static/images/sectionDotBg.svg";
import Petal1 from "@/app/static/images/petal1.svg";
import Petal3 from "@/app/static/images/petal3.svg";
import Link from "next/link";
import { motion } from "motion/react";

interface ContactOptionsProps {
  contactOptions: {
    text: string;
    icon: {
      url: string;
    };
  }[];
}

const ContactOptions: React.FC<ContactOptionsProps> = ({ contactOptions }) => {
  return (
    <>
      {contactOptions.map((option, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0.4,
              delay: index * 0.2,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full max-w-[682px] bg-[#ffefec] md:bg-[#ffefeca3] flex gap-[10px] md:gap-[25px] items-center rounded-[66px] p-[10px]"
          >
            <div className="bg-[#fff] border-[1px] border-transparent font-normal text-xs lg:text-[16px] w-full max-w-[50px] md:max-w-[78px] h-full min-h-[50px] md:min-h-[78px] rounded-[76px] flex justify-center items-center">
              <Image
                // src={option.icon}
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  option.icon?.url || ""
                }`}
                alt="call icon"
                width={24}
                height={24}
                className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
              />
            </div>
            <div
              className="conatct-services text-[13px] md:text-[20px] leading-[18px] md:leading-[32px] text-[#3C3D42] font-normal font-philosopher "
              dangerouslySetInnerHTML={{
                __html: option.text,
              }}
            />
          </motion.div>
        );
      })}
    </>
  );
};

interface ContactDetailsSectionProps {
  contactData: {
    pageSubtitle: string;
    bookingCard: {
      description: string;
      buttonText: string;
      buttonUrl: string;
    };
    contactOptions: {
      text: string;
      icon: {
        url: string;
      };
    }[];
  };
}

const ContactDetailsSection: React.FC<ContactDetailsSectionProps> = ({
  contactData,
}) => {

  return (
    <div className="h-full relative pt-[20px] md:pt-[80px]">
      <div className="relative common-container !w-[90%] !max-w-[1242px] z-[3]">
        <div className="relative flex flex-col items-center">
          <div className="mb-[20px] md:mb-[75px] w-full">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.1, delay: 0.01 }}
              viewport={{ once: true, amount: 0.1 }}
              className="font-philosopher font-normal text-[13px] md:text-[20px] leading-[18px] md:leading-[32px] text-start md:text-center text-[#C67C71] max-w-full lg:max-w-[767px] m-auto mb-[20px] md:mb-[40px]"
              dangerouslySetInnerHTML={{ __html: contactData.pageSubtitle }}
            />
            <div className="flex flex-col items-center gap-[20px] mb-[40px] md:mb-[82px]">
              <ContactOptions contactOptions={contactData.contactOptions} />
            </div>
            <div className="flex flex-col items-center gap-[20px] mb-[40px] md:mb-[82px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.4, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative w-full max-w-[900px] bg-[#ffefecb3] flex gap-[25px] items-center rounded-[59px] md:rounded-[218px] px-[10px] py-[40px] md:py-[66px] backdrop-blur-[34px]"
              >
                <div className="w-full max-w-[80%] md:max-w-[739px] flex flex-col items-center gap-[20px] m-auto">
                  <div
                    className="text-[13px] md:text-[20px] leading-[18px] md:leading-[32px] text-[#3C3D42] text-center font-normal font-philosopher "
                    dangerouslySetInnerHTML={{
                      __html: contactData.bookingCard.description,
                    }}
                  />
                  <Link
                    href={contactData.bookingCard.buttonUrl || ""}
                    className="font-philosopher bg-primaryGradient transition-all duration-700 ease-in-out hover:transform hover:scale-110 hover:shadow-lg hover:-translate-y-1 text-white font-normal text-xs md:text-[16px] rounded-[65px] py-[6px] px-[10px] md:px-[12px]"
                  >
                    {contactData.bookingCard.buttonText}
                  </Link>
                </div>
                <motion.div
                  className="w-[170px] xl:w-[200px] absolute top-[-15%] md:top-[0px] left-[-70px] rotate-[-25deg]"
                  animate={{
                    translateY: [0, -10, 0],
                  }}
                  style={{
                    rotate: "-25deg",
                  }}
                  transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <Image
                    src={Petal1}
                    alt="petal-1"
                    className="w-full"
                    unoptimized
                  />
                </motion.div>
                <motion.div
                  className="hw-[110px] xl:w-[110px] absolute bottom-[-60px] right-[0px] translate-y-[50%] rotate-[-40deg]"
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
                {/* <Image
                  src={Petal1}
                  alt="petal-1"
                  width={109}
                  height={82}
                  unoptimized
                  className="w-[170px] xl:w-[200px] absolute top-[-15%] md:top-[0px] left-0 -translate-x-[24%] md:-translate-x-[36%] rotate-[-25deg]"
                /> */}
                {/* <Image
                  src={Petal3}
                  alt="petal-3"
                  width={87}
                  height={114}
                  unoptimized
                  className="w-[110px] xl:w-[110px] absolute bottom-[0px] right-[0px] translate-y-[50%] rotate-[-40deg]"
                /> */}
              </motion.div>
            </div>
          </div>
          <div className="hidden md:block md:absolute top-0 right-0 z-[-1] w-[50%] h-auto">
            <Image
              // src={`${
              //   process.env.NEXT_PUBLIC_STRAPI_URL
              // }${"/uploads/couple_Special_Video_ezgif_com_video_to_gif_converter_6013eb5903.gif"}`}
              src={sectionArcs}
              width={1442}
              height={966}
              alt="contact-detail bg-1 image"
              className="hidden md:block w-[90%] h-full top-0 right-0 z-[-999]"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 z-[-1] w-[60%] md:w-auto h-auto">
        <Image
          // src={`${
          //   process.env.NEXT_PUBLIC_STRAPI_URL
          // }${"/uploads/couple_Special_Video_ezgif_com_video_to_gif_converter_6013eb5903.gif"}`}
          src={colourSplash4}
          //   width={596}
          //   height={567}
          alt="contact-detail bg-2 image"
          className=" "
        />
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] w-full h-auto">
        <Image
          // src={`${
          //   process.env.NEXT_PUBLIC_STRAPI_URL
          // }${"/uploads/couple_Special_Video_ezgif_com_video_to_gif_converter_6013eb5903.gif"}`}
          src={sectionDotBg}
          alt="contact-detail bg-3 image"
          className=" w-full z-[-1]"
        />
      </div>
    </div>
  );
};

export default ContactDetailsSection;
