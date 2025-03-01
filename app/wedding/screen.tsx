import React from "react";
import PageBar from "@/components/library/elements/PageBar";
import WeddingDetails from "@/components/library/sections/WeddingDetailsSection";
import PreWeddingSection from "@/components/library/sections/PreWeddingSection";
import SpecialDaySection from "@/components/library/sections/SpecialDaySection";
import CommonQuestionsSection from "@/components/library/commonSections/CommonQuestions";

interface WeddingScreenProps {
  title?: string;
  weddingData: {
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
    HeadTitle: string;
    HeadSubTitle: string;
    HeadContent1: string;
    HeadContent2: string;
    weddingServicesDetails: {
      title: string;
      description: string;
    };
    weddingServices: {
      title: string;
      description: string;
      buttonText: string;
      image: {
        url: string;
      };
    }[];

    commonQuestions: {
      question: string;
      answer: string;
    }[];
    specialDay: {
      title: string;
      buttonText: string;
      image: { url: string };
    };
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
  };
}

const WeddingScreen: React.FC<WeddingScreenProps> = ({ weddingData }) => {
  const {
    weddingServicesDetails,
    weddingServices,
    HeadTitle,
    HeadSubTitle,
    HeadContent1,
    HeadContent2,
    specialDay,
    HeadImage,
    SideImage1,
    SideImage2,
    SideText,
    pageBar,
    commonQuestions,
  } = weddingData;

  return (
    <div className="w-full pt-[130px] lg:pt-[144px]">
      <PageBar sectionDetails={pageBar} className="!mt-[10px] md:!mt-[24px]" />
      <WeddingDetails
        headTitle={HeadTitle}
        headSubTitle={HeadSubTitle}
        HeadContent1={HeadContent1}
        HeadContent2={HeadContent2}
        HeadImage={HeadImage}
        SideImage1={SideImage1}
        SideImage2={SideImage2}
        SideText={SideText}
      />
      <PreWeddingSection
        list={weddingServices}
        weddingServicesDetails={weddingServicesDetails}
      />
      <SpecialDaySection specialDay={specialDay} />
      <CommonQuestionsSection commonQuestions={commonQuestions} isWeddingPageFAQ={true} />
    </div>
  );
};

export default WeddingScreen;
