import React from "react";
import NoooraServiceSteps from "../../elements/NooraServiceSteps";
import { motion } from "motion/react";

interface HowNoooraWorksSectionProps {
  sectionDetails: {
    title: string;
    description: string;
  };
  steps: {
    icon: {
      url: string;
    };
    title: string;
  }[];
}

const HowNoooraWorksSection: React.FC<HowNoooraWorksSectionProps> = ({
  sectionDetails,
  steps,
}) => {
  return (
    <>
      <div className="common-container !w-[90%] !max-w-[1242px] md:!w-[80%] flex flex-col lg:flex-row justify-between !mb-[40px] md:!mb-[70px]">
        {/* <div */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ ease: "easeInOut", duration: 0.4 }}
          className="mb-[15px] lg:mb-0"
        >
          <h2
            className="text-lg md:text-xxlg leading-[28px] md:leading-[52px] text-[#212529]  mb-[10px] md:mb-[20px] font-philosopher"
            dangerouslySetInnerHTML={{ __html: sectionDetails.title }}
          />
          <p
            className="text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-[#212529b3] font-normal max-w-full lg:max-w-[482px] pr-0 lg:pr-[10px]"
            dangerouslySetInnerHTML={{ __html: sectionDetails.description }}
          />
          {/* </motion.div> */}
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ ease: "easeInOut", duration: 0.4 }}
          className="w-full lg:w-[610px]"
        >
          <NoooraServiceSteps className="m-0" steps={steps} />
        </motion.div>
      </div>
    </>
  );
};

export default HowNoooraWorksSection;
