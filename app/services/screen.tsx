"use client";
import React from "react";
import PageBar from "@/components/library/elements/PageBar";
import ServicesTiles from "@/components/library/elements/ServicesTiles";
import RecommendedPublications from "@/components/library/commonSections/RecommendedPublications";

interface PageData {
  chooseService: {
    title: string;
    description: string;
  };
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
  servicesTiles: {
    title: string;
    image: {
      url: string;
    };
    link: string;
  }[];
  publicationImages: {
    url: string;
  }[];
  publicationTitle: string;
}

interface ServicesIndexScreenProps {
  pageData: PageData;
}

const ServicesIndexScreen: React.FC<ServicesIndexScreenProps> = ({
  pageData,
}) => {
  const {
    pageBar,
    chooseService,
    servicesTiles,
    publicationTitle,
    publicationImages,
  } = pageData;
  return (
    <div className="w-full pt-[130px] lg:pt-[145px]">
      <PageBar
        sectionDetails={pageBar}
        className="!mt-[20px] md:!mt-[24px] !mb-[20px] md:!mb-[71px]"
      />
      <ServicesTiles sectionDetails={chooseService} tiles={servicesTiles} />
      <RecommendedPublications
        title={publicationTitle}
        images={publicationImages}
      />
    </div>
  );
};

export default ServicesIndexScreen;
