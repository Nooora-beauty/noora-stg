import React from "react";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import Petal1 from "@/app/static/images/petal1.svg";
import Petal2 from "@/app/static/images/petal2.svg";
import Petal3 from "@/app/static/images/petal3.svg";
import Link from "next/link";
import { motion } from "motion/react";

interface CoupleSpecialSectionProps {
  sectionDetails: {
    title: string;
    description: string;
  };
  videoUrl: string;
  coupleCards: {
    title: string;
    description: string;
    buttonText: string;
    isMostBooked: boolean | null;
    image: {
      url: string;
    };
  }[];
}

const CoupleSpecialSection: React.FC<CoupleSpecialSectionProps> = ({
  sectionDetails,
  videoUrl,
  coupleCards,
}) => {
  return (
    <>
      <div className="common-container !w-[90%] pb-[10px] lg:pb-[73px]">
        <div className="flex flex-col lg:flex-row gap-[40px] items-center justify-center">
          {/* outer border */}
          <motion.div
            // initial={{ y: 20, opacity: 0.01 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // viewport={{ once: true, amount: 0.7 }}
            // transition={{ ease: "easeInOut", duration: 0.4 }}
            initial={{ y: 20, opacity: 0.01 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeOut",
              duration: 0.4,
              delay: 0.2,
            }}
            className="hidden xl:block relative border-[1px] border-[#c078581a] rounded-[260px] "
          >
            {/* inner border */}
            <div className="border-[1px] border-[transparent] m-[11px] xl:m-[23px] custom-dashed-border">
              {/* image wrapper */}
              <div className="m-[8px] xl:m-[17px] overflow-hidden rounded-[220px] w-[327px] xl:w-[436px] h-[662px] bg-[#ededed]">
                {/* <video
                  className="w-full h-[full] max-h-[662px] object-cover"
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
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${videoUrl}`}
                  width={436}
                  height={662}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={`${process.env.NEXT_PUBLIC_STRAPI_URL}${videoUrl}`}
                  alt="couple-section image"
                  className="w-[327px] xl:w-[436px] max-w-[436px] h-auto max-h-[662px] object-cover"
                />
              </div>
            </div>
            {/* <div */}
            <motion.div
              className="w-[100px] xl:w-[200px] absolute top-[20%] left-[-15%]"
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
              className="w-[100px] xl:w-[120px] absolute top-[35px] right-[0]"
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
              className="w-[100px] xl:w-[210px] absolute bottom-[-10%] right-[0]"
              animate={{
                translateY: [0, -9, 0],
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
              className="petal-img-animation w-[100px] xl:w-[200px] absolute top-[20%] left-[-15%]"
            /> */}
            {/* <Image
              src={Petal2}
              alt="petal-2"
              width={69}
              height={78}
              unoptimized
              className="petal-img-animation w-[100px] xl:w-[120px] absolute top-[25px] right-[0]"
            /> */}
            {/* <Image
              src={Petal3}
              alt="petal-3"
              width={87}
              height={114}
              unoptimized
              className="petal-img-animation w-[100px] xl:w-[210px] absolute bottom-[-10%] right-[0]"
            /> */}
            {/* </motion.div> */}
          </motion.div>
          <div
            // initial={{ y: 20, opacity: 0.01 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{
            //   ease: "easeOut",
            //   duration: 0.4,
            //   delay: 0.2,
            // }}
            className="w-full max-w-[690px] flex flex-col gap-[0] lg:gap-[20px]"
          >
            <div
              // initial={{ y: 20, opacity: 0.01 }}
              // whileInView={{ y: 0, opacity: 1 }}
              // viewport={{ once: true, amount: 0.7 }}
              // transition={{ ease: "easeInOut", duration: 0.4, delay: 0.1 }}
              className="w-full"
            >
              <h2
                className="text-lg md:text-xxlg leading-[28px] md:leading-[52px] text-[#212529]  mb-[10px] md:mb-[20px] font-philosopher"
                dangerouslySetInnerHTML={{ __html: sectionDetails.title }}
              />
              <p
                className="text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-[#212529b3] font-normal w-full lg:max-w-[662px] mb-[15px] lg:mb-0"
                dangerouslySetInnerHTML={{ __html: sectionDetails.description }}
              />
            </div>
            <div className="pl-[2px] h-auto min-h-[250px] flex lg:justify-center gap-x-[10px] lg:w-fit overflow-x-auto lg:overflow-x-visible hide-scrollbar ">
              {coupleCards.map((item, index) => (
                <div
                  // initial={{ opacity: 0.01 }}
                  // whileInView={{ opacity: 1 }}
                  // viewport={{ once: true }}
                  // transition={{
                  //   ease: "easeInOut",
                  //   delay: 1 + index * 0.1,
                  // }}
                  key={index}
                  className={`w-full max-w-[220px] h-full max-h-[225px] p-2 bg-white rounded-xl slider-shadow my-[2px]`}
                >
                  <div className="w-[143px] sm:w-[162px] md:w-[197px] relative m-auto mb-[5px] md:mb-[13px]">
                    <div className="w-full md:w-[197px] h-[100px] md:h-[110px] rounded-b-[5px] overflow-hidden mb-[13.5px] md:mb-0 bg-[#ededed]">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                          item.image?.url || ""
                        }`}
                        alt="card Image"
                        // width={197}
                        // height={110}
                        placeholder="blur"
                        blurDataURL={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                          item.image?.url || ""
                        }`}
                        fill
                        sizes="(max-width: 768px) 100%, 197px"
                        className="h-[auto] w-full rounded-t-[10px] rounded-b-[5px] object-cover"
                      />
                    </div>
                    {item.isMostBooked && (
                      <div className="flex items-center bg-[#00800080] p-[4px] pr-2 rounded-[8px] absolute top-[0px] left-[0px] z-10">
                        <div className="mr-1 rounded-[50%] w-[14px] h-[14px] bg-white flex justify-center items-center">
                          <IoStar className="w-[8px] h-[8px] text-[#008000]" />
                        </div>
                        <p className="font-medium text-white text-[12px] leading-[16px]">
                          Most booked
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="py-2 relative">
                    <h5 className="text-[#A45D63] font-normal mb-1 font-philosopher text-body md:text-[20px]">
                      {item.title}
                    </h5>
                    <p className="font-normal text-[#212529] text-xs md:text-[16px] mb-3">
                      Starts at{" "}
                      <b className="font-semibold">{item.description}</b>
                    </p>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_WHATSAPP_LINK}?text=Hi Nooora, I would like to book for ${item.title}.`}
                      className="font-philosopher uppercase bg-primaryGradient transition-all duration-700 ease-in-out hover:transform hover:scale-110 hover:shadow-lg hover:-translate-y-1 text-white font-normal text-xs md:text-[16px] rounded-[65px] py-[6px] px-[10px] md:px-[12px] absolute right-0 bottom-[-23px] md:bottom-[-27px] z-10"
                    >
                      {item.buttonText}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {/* </motion.div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoupleSpecialSection;
