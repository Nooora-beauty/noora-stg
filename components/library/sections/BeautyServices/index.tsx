"use client";
import React, { useState } from "react";
import CustomTabs from "../../elements/CustomTabs";
import CommonCards from "../../elements/CommonCards";
import TimestampHighlight from "../../elements/TimestampHighlight";
import { motion } from "motion/react";

interface BeautyServicesSectionProps {
  sectionDetails: {
    title: string;
    description: string;
  };
  serviceFrom: string;
  serviceTo: string;

  beautyServicesTabs: beautyServicesTabsData[];
}

interface beautyServicesTabsData {
  tabTitle: string;
  tabCards: {
    title: string;
    price: string;
    offerPercent: string | null;
    buttonText: string;
    image: {
      url: string;
    };
  }[];
}

const BeautyServicesSection: React.FC<BeautyServicesSectionProps> = ({
  sectionDetails,
  serviceFrom,
  serviceTo,
  beautyServicesTabs,
}) => {
  const [tab, setTab] = useState<beautyServicesTabsData>(beautyServicesTabs[0]);

  const handleActiveTab = (tabTitle: string) => {
    const foundTab = beautyServicesTabs.find(
      (tabElement) => tabElement.tabTitle === tabTitle
    );

    if (foundTab) {
      setTab(foundTab);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.01, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
      className="common-container !w-[90%] !max-w-[1242px] pb-[40px] flex flex-col"
    >
      <motion.div
        initial={{ y: 20, opacity: 0.01 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ ease: "easeInOut", duration: 0.4 }}
        className="flex flex-row justify-between md:justify-start items-end mb-[10px] xl:mb-[20px] "
      >
        <h2
          className="w-full max-w-[165px] md:max-w-[310px] text-lg md:text-xxlg leading-[28px] md:leading-[48.15px] text-[#212529] font-medium font-philosopher"
          dangerouslySetInnerHTML={{ __html: sectionDetails.title }}
        />
        <TimestampHighlight
          from={serviceFrom}
          to={serviceTo}
          className="!h-[30px] md:!h-[35px] xl:!h-[51px] !w-[135px] md:!w-[165px] xl:!w-[225px] md:mt-0 md:ml-3 text-xs md:text-sm xl:text-md py-[4px] px-[7px] md:!py-[8px] md:!px-[14px]"
          iconClassName="!text-[20px] xl:!text-[25px]"
        />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0.01 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ ease: "easeInOut", duration: 0.4, delay: 0.1 }}
        className="flex flex-col xl:flex-row items-start xl:items-center justify-between w-full mb-0 gap-[15px] xl:gap-0"
      >
        <p
          className="text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-[#212529b3] font-normal w-full xl:w-[45%] max-w-[524px]"
          dangerouslySetInnerHTML={{ __html: sectionDetails.description }}
        />
        <div className="w-full lg:w-[50%] lg:max-w-[610px] self-center xl:self-start">
          <CustomTabs
            tabsOptions={beautyServicesTabs}
            tab={tab.tabTitle}
            setTab={(tabTitle) => handleActiveTab(tabTitle)}
            maxWidth={610}
          />
        </div>
      </motion.div>

      {tab && (
        // <div
        <motion.div
          key={tab.tabTitle}
          initial={{ opacity: 0.01 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.01 }}
          transition={{
            opacity: { duration: 0.6, ease: "easeOut", delay: 0.4 },
          }}
          className={`self-center w-[100%] md:w-[100vw] pl-[calc(calc(100vw-1242px)/2)]`}
        >
          <div className="w-full overflow-hidden overflow-x-auto hide-scrollbar pt-[15px] md:pt-[20px] pb-[40px] md:pb-[70px]">
            <div className="flex items-start space-x-[10px] gap-x-[0px] md:gap-[5px] min-w-max">
              <CommonCards
                // cards={
                //   cardContent.slice(0, 8) as {
                //     icon: StaticImageData;
                //     title: string;
                //   }[]
                // }

                cards={tab.tabCards}
                // width={"!w-[200px] md:!w-full"}
              />
            </div>
          </div>
          {/* </div> */}
        </motion.div>
      )}
      {/* </motion.div> */}
    </motion.div>
  );
};

export default BeautyServicesSection;
