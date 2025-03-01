"use client";
import PageBar from "@/components/library/elements/PageBar";
import React from "react";
import { motion } from "motion/react";

interface PolicyScreenProps {
  title?: string;
  data: {
    pageBar: {
      pageTitle: string;
      barIcon: {
        url: string;
      };
      breadCrumbs: {
        text: string;
        url: string;
      }[];
    };

    headContent: {
      body: string;
    };
    cookiesSectionTitle: string;
    cookiesSectionContent: {
      body: string;
    };
    personalInformationSectionTitle: string;
    personalInformationSectionContent: {
      body: string;
    };
    disclosureSectionTitle: string;
    disclosureSectionContent: {
      body: string;
    };
    dataTransferSectionTitle: string;
    dataTransferSectionContent: {
      body: string;
    };
    updatingInformationSectionTitle: string;
    updatingInformationSectionContent: {
      body: string;
    };
  };
}

const PolicyScreen: React.FC<PolicyScreenProps> = ({ data }) => {
  return (
    <div className="w-full pt-[130px] lg:pt-[144px]">
      <PageBar
        sectionDetails={data?.pageBar}
        className="!mt-[20px] md:!mt-[24px] !mb-[20px] md:!mb-[30px]"
      />
      <div className="common-container !w-[90%] !max-w-[1242px] !mb-[100px]">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
            delay: 0.2,
          }}
          className="content-container-dynamic"
          dangerouslySetInnerHTML={{
            __html: data?.headContent?.body,
          }}
        />
     
      </div>
    </div>
  );
};

export default PolicyScreen;
