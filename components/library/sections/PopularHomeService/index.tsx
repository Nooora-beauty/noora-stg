import React from "react";
import HomeServiceCard from "../../elements/HomeServiceCard";
import { motion } from "motion/react";

interface PopularHomeServiceSectionProps {
  sectionDetails: {
    title: string;
    description: string;
  };
  serviceTiles: {
    title: string;
    image: {
      url: string;
    };
    link?: string;
    buttonText?: string | null;
    buttonUrl?: string | null;
  }[];
}

const PopularHomeServiceSection: React.FC<PopularHomeServiceSectionProps> = ({
  sectionDetails,
  serviceTiles,
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
        className="common-container !w-[90%] !max-w-[1242px] !mb-[60px] md:!mb-[108px]"
      >
        <div className="mb-[20px] lg:mb-[20px] ">
          <h2
            className="w-full max-w-[230px] md:max-w-full lg:max-w-[445px] md:m-auto text-lg md:text-xxlg leading-[28px] md:leading-[52px] text-start md:text-center text-[#212529]  mb-[10px] md:mb-[20px] font-philosopher"
            dangerouslySetInnerHTML={{ __html: sectionDetails.title }}
          />
          <p
            className="text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-start md:text-center text-[#212529b3] font-normal max-w-full lg:max-w-[774px] m-auto"
            dangerouslySetInnerHTML={{ __html: sectionDetails.description }}
          />
        </div>
        <div className="w-full flex flex-wrap justify-center gap-[8px] md:gap-[10px]">
          {serviceTiles.map((item, index) => {
            return <HomeServiceCard key={index} card={item} index={index} />;
          })}
        </div>
        {/* </motion.div> */}
      </motion.div>
    </>
  );
};

export default PopularHomeServiceSection;
