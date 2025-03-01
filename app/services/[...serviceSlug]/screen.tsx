"use client";
import React from "react";
import CommonQuestionsSection from "@/components/library/commonSections/CommonQuestions";
import FeaturedPostSection from "@/components/library/commonSections/FeaturedPosts";
import TestimonialSection from "@/components/library/commonSections/Testimonials";
import PageBar from "@/components/library/elements/PageBar";
import CategoryDetailList from "@/components/library/sections/CategoryDetailList";
import CategoryDetailSection from "@/components/library/sections/CategoryDetails";
import CategoryServicesSection from "@/components/library/sections/CategoryServices";

interface ServiceScreenProps {
  category?: string;
  service?: string;
  subCategory?: string;
  pageData: {
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
    headImage?: {
      url: string;
    };
    details?: {
      title: string;
      description: string;
    };
    additionalDetails?: {
      title: string;
      description: {
        children: { text: string }[];
      }[];
    };
    categoryDetailList: {
      title: string;
      image: {
        url: string;
      };
      detailList1: {
        title: string;
        description: string;
        icon: {
          url: string;
        };
      }[];
      detailList2: {
        title: string;
        description: string;
        icon: {
          url: string;
        };
      }[];
    };
    commonQuestions: {
      question: string;
      answer: string;
    }[];
  };
  allServices: {
    name: string;
    link: string;
    slug: string;
    menuQuote: string;
    categories: CategoriesEntity[];
  }[];
}

interface CategoriesEntity {
  name: string;
  link: string;
  slug: string;
  icon: {
    url: string;
  };
  subCategories: SubCategoriesEntity[];
}

interface SubCategoriesEntity {
  name: string;
  link: string;
  slug: string;
  additionalTag: string;
  details: string;
  rating: string;
  sessions: {
    price: string;
    time: string;
  }[];
  image: {
    url: string;
  };
  icon: {
    url: string;
  };
  services: ServicesEntity[];
  buttonLink: string;
}
interface ServicesEntity {
  name: string;
  slug: string;
  additionalTag: string;
  details: string;
  rating: string;
  sessions: {
    price: string;
    time: string;
  }[];
  image: {
    url: string;
  };
}

const ServiceScreen: React.FC<ServiceScreenProps> = ({
  service = "",
  category = "",
  subCategory = "",
  pageData,
  allServices,
}) => {
  const {
    pageBar,
    headImage,
    details,
    additionalDetails,
    categoryDetailList,
    commonQuestions,
  } = pageData || {};
  return (
    <>
      <div className="w-full pt-[130px] lg:pt-[144px]">
        <PageBar
          sectionDetails={pageBar}
          className="!mt-[10px] md:!mt-[15px] !mb-[10px] md:!mb-[15px]"
        />
        <CategoryServicesSection
          service={service}
          category={category}
          subCategory={subCategory}
          allServices={allServices}
        />
        <CategoryDetailSection
          src={headImage?.url || ""}
          details={details}
          additionalDetails={additionalDetails}
        />
        <CategoryDetailList categoryDetailList={categoryDetailList} />
        <CommonQuestionsSection commonQuestions={commonQuestions} />
        <FeaturedPostSection />
        <TestimonialSection />
      </div>
    </>
  );
};

export default ServiceScreen;
