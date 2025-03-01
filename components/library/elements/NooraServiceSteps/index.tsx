import React from "react";
import Icon01 from "@/app/static/icons/01.svg";
import Icon02 from "@/app/static/icons/02.svg";
import Icon03 from "@/app/static/icons/03.svg";
import Image from "next/image";
// import { motion } from "motion/react";
interface NoooraServiceStepsProps {
  steps: {
    icon: {
      url: string;
    };
    title: string;
  }[];
  className?: string;
}

const NoooraServiceSteps: React.FC<NoooraServiceStepsProps> = ({
  className,
  steps,
}) => {
  const [step1, step2, step3] = steps;
  return (
    <div
      // <motion.div
      // initial={{ y: 20, opacity: 0.01 }}
      // whileInView={{ y: 0, opacity: 1 }}
      // viewport={{ once: true }}
      // transition={{
      //   ease: "easeOut",
      //   duration: 1,
      //   delay: 0.1,
      // }}
      className={`flex w-full max-w-[320px] md:max-w-[500px] justify-between md:justify-around lg:justify-between gap-[40px] md:gap-[unset] ${className}`}
    >
      <div className="relative flex flex-col gap-[20px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${step1.icon?.url || ""}`}
          width={60}
          height={68}
          // unoptimized
          priority
          alt="service-step-icon1"
          className="relative w-[30px] sm:w-[50px] h-[40px] sm:h-[68px]"
        />
        <div className="relative">
          <Image
            src={Icon01}
            alt="step-count-1"
            className="w-[73px] lg:w-[93px] h-[51px] lg:h-[71px]"
          />
          <p
            className="w-[95px] md:w-[168px] leading-[18px] lg:leading-[25px] absolute top-[7px] left-[7px] font-philosopher font-bold text-[#0A0A0A] text-sm md:text-body lg:text-lg"
            dangerouslySetInnerHTML={{ __html: steps[0]?.title }}
          />
          {/* {step1.title}
          </p> */}
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${step2.icon?.url || ""}`}
          width={60}
          height={68}
          priority
          // unoptimized
          alt="service-step-icon2"
          className="w-[30px] sm:w-[50px] h-[40px] sm:h-[68px]"
        />
        <div className="relative">
          <Image
            src={Icon02}
            alt="step-count-2"
            className="w-[73px] lg:w-[93px] h-[51px] lg:h-[71px]"
          />
          <p
            className="w-[79px] lg:w-[131px] leading-[18px] lg:leading-[25px] absolute top-[7px] left-[0px] font-philosopher font-bold text-[#0A0A0A] text-sm md:text-body lg:text-lg"
            dangerouslySetInnerHTML={{ __html: steps[1]?.title }}
          />
          {/* {step2.title}
          </p> */}
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${step3.icon?.url || ""}`}
          width={60}
          height={68}
          // unoptimized
          priority
          alt="service-step-icon3"
          className="w-[30px] sm:w-[50px] h-[40px] sm:h-[68px]"
        />
        <div className="relative">
          <Image
            src={Icon03}
            alt="step-count-3"
            className="w-[73px] lg:w-[93px] h-[51px] lg:h-[71px]"
          />
          <p
            className="w-[70px] lg:w-[115px] leading-[18px] lg:leading-[25px] absolute top-[7px] left-[0px] font-philosopher font-bold text-[#0A0A0A] text-sm md:text-body lg:text-lg"
            dangerouslySetInnerHTML={{ __html: steps[2]?.title }}
          />
          {/* {step3.title}
          </p> */}
        </div>
      </div>
      {/* </motion.div> */}
    </div>
  );
};

export default NoooraServiceSteps;
