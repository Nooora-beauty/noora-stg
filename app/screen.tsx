"use client";
import React, { useEffect, useState } from "react";
// import WhatsNewSection from "../components/library/sections/WhatsNew";
// import BeautyServicesSection from "../components/library/sections/BeautyServices";
// import HeroBannerSection from "../components/library/sections/HeroBanner";
// import HowNoooraWorksSection from "../components/library/sections/HowNoooraWorks";
// import PopularHomeServiceSection from "../components/library/sections/PopularHomeService";
// import HomeDiscountSection from "../components/library/sections/HomeDiscount";
// import FeaturedPostSection from "../components/library/commonSections/FeaturedPosts";
// import TestimonialSection from "@/components/library/commonSections/Testimonials";
// import GetYourDealSection from "@/components/library/sections/GetYourDeal";
// import CoupleSpecialSection from "@/components/library/sections/CoupleSpecial";
import dynamic from "next/dynamic";
import Image from "next/image";
import bannerLoading from "@/app/static/images/bannerLoading.jpg";
// import { Skeleton } from "@/components/ui/skeleton";
import {
  CoupleSectionSkeleton,
  // WhatsNewSectionSkeleton,
} from "@/components/library/loadComponents/skeletons/HomePage";
import loadingTextAnimation from "@/app/static/loaders/loadingText.json";

const HeroBannerSection = dynamic(
  () => import("../components/library/sections/HeroBanner"),
  {
    loading: () => (
      <Image
        // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${dummyGiftCardDetails.image?.url || ""}`}
        src={bannerLoading}
        unoptimized
        alt="bannerLoading"
        className="hidden md:block w-full mt-[13px] relative z-[1]"
      />
    ),
    ssr: false,
  }
);
const HowNoooraWorksSection = dynamic(
  () => import("../components/library/sections/HowNoooraWorks"),
  {
    // loading: () => <div className="bg-[#FDF2F2]">loading...</div>,
    ssr: false,
  }
);

const CoupleSpecialSection = dynamic(
  () => import("@/components/library/sections/CoupleSpecial"),
  {
    loading: () => <CoupleSectionSkeleton />,
    ssr: false,
  }
);

const WhatsNewSection = dynamic(
  () => import("../components/library/sections/WhatsNew"),
  {
    // loading: () => <div className="bg-[#FDF2F2]">loading...</div>,
    ssr: false,
  }
);

const BeautyServicesSection = dynamic(
  () => import("../components/library/sections/BeautyServices"),
  {
    // loading: () => <div className="bg-[#FDF2F2]">loading...</div>,
    ssr: false,
  }
);

const PopularHomeServiceSection = dynamic(
  () => import("../components/library/sections/PopularHomeService"),
  {
    // loading: () => <div className="bg-[#FDF2F2]">loading...</div>,
    ssr: false,
  }
);

const HomeDiscountSection = dynamic(
  () => import("../components/library/sections/HomeDiscount"),
  {
    // loading: () => <div className="bg-[#FDF2F2]">loading...</div>,
    ssr: false,
  }
);

const FeaturedPostSection = dynamic(
  () => import("../components/library/commonSections/FeaturedPosts"),
  {
    // loading: () => <div className="bg-[#FDF2F2]">loading...</div>,
    ssr: false,
  }
);

const TestimonialSection = dynamic(
  () => import("@/components/library/commonSections/Testimonials"),
  {
    // loading: () => <div className="bg-[#FDF2F2]">loading...</div>,
    ssr: false,
  }
);

const GetYourDealSection = dynamic(
  () => import("@/components/library/sections/GetYourDeal"),
  {
    // loading: () => <div className="bg-[#FDF2F2]">loading...</div>,
    ssr: false,
  }
);
const Lottie = dynamic(() => import("lottie-react"), {
  loading: () => (
    <div className="h-6 w-6 md:h-10 md:w-10 rounded-full border-4 border-gray-200 border-t-4 border-t-primary animate-custom-spin"></div>
  ),
  ssr: false,
});
interface NoooraStep {
  icon: {
    url: string;
  };
  title: string;
  description?: string;
}

interface CoupleSpecialCard {
  title: string;
  description: string;
  image: {
    url: string;
  };
  isMostBooked: boolean | null;
  buttonText: string;
}

interface SectionImageDetail {
  title: string;
  description?: string | null;
  image: {
    url: string;
  };
  link?: string;
  buttonText?: string | null;
  buttonUrl?: string | null;
}

export interface PageData {
  heroTitle: string;
  heroBanner: Array<{
    files: Array<{ url: string }>;
  }>;
  heroMobileVideo: {
    url: string;
  };
  heroDescription: string;
  heroButtonLink: string;
  heroButtonText: string;
  howNoooraWorks: {
    title: string;
    description: string;
  };
  NoooraSteps: NoooraStep[];
  coupleSpecial: {
    title: string;
    description: string;
  };
  coupleSpecialCards: CoupleSpecialCard[];
  coupleSpecialVideo: {
    url: string;
  };
  whatsNew: {
    title: string;
    description: string;
  };
  whatsNewTabs: {
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
    tabImage: {
      url: string;
    };
  }[];

  beautyServicesTabs: {
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
  }[];
  dermalogicaImage: {
    url: string;
  };
  popularHomeService: {
    title: string;
    description: string;
  };
  homeServiceTiles: SectionImageDetail[];
  homeDiscount: {
    title: string;
    description: string;
  };
  homeDiscountCards: SectionImageDetail[];
  beautyServices: {
    title: string;
    description: string;
  };
  serviceFrom: string;
  serviceTo: string;
  getYourDeal: {
    title: string;
    description: string;
  };
  dealTickets: SectionImageDetail[];
  dealGiftCard: {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    image: {
      url: string;
    };
  };
}

interface HomePageProps {
  pageData: PageData;
  fetchDataPromise: Promise<PageData>;
}

const HomePage: React.FC<HomePageProps> = ({ pageData, fetchDataPromise }) => {
  const [homePageData, setHomePageData] = useState<PageData>(pageData);
  const {
    heroTitle,
    heroBanner,
    heroMobileVideo,
    heroDescription,
    heroButtonLink,
    heroButtonText,
    howNoooraWorks,
    NoooraSteps,
    coupleSpecial,
    coupleSpecialCards,
    coupleSpecialVideo,
    whatsNew,
    dermalogicaImage,
    whatsNewTabs,
    popularHomeService,
    homeServiceTiles,
    homeDiscount,
    homeDiscountCards,
    beautyServices,
    serviceFrom,
    serviceTo,
    getYourDeal,
    dealTickets,
    dealGiftCard,
    beautyServicesTabs,
  } = homePageData;

  useEffect(() => {
    console.log("running Homepage UseEffect");
    if (fetchDataPromise) {
      fetchDataPromise.then((data) => {
        console.log("Completed Fetching commonSection- ----> ", data);
        setHomePageData(data);
      });
    }
  }, []);

  // const router = useRouter();

  // useEffect(() => {
  //   router.prefetch("/gift-a-friend");
  //   router.prefetch("/services");
  //   router.prefetch("/about-us");
  //   router.prefetch("/contact");
  // }, []);

  const [showData, setShowData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowData(true);
    }, 5000);
  }, []);

  return (
    <div className="w-full pt-[130px] lg:pt-[130px]">
      <HeroBannerSection
        title={heroTitle}
        description={heroDescription}
        buttonLink={heroButtonLink}
        buttonText={heroButtonText}
        images={heroBanner[0].files}
        mobileVideo={heroMobileVideo}
      />
      <HowNoooraWorksSection
        sectionDetails={howNoooraWorks}
        steps={NoooraSteps}
      />

      {showData ? (
        <>
          <CoupleSpecialSection
            sectionDetails={coupleSpecial}
            videoUrl={coupleSpecialVideo?.url || ""}
            coupleCards={coupleSpecialCards}
          />
          <WhatsNewSection
            sectionDetails={whatsNew}
            dermalogicaImageUrl={dermalogicaImage?.url || ""}
            whatsNewTabs={whatsNewTabs}
          />
          <PopularHomeServiceSection
            sectionDetails={popularHomeService}
            serviceTiles={homeServiceTiles}
          />
          <HomeDiscountSection
            sectionDetails={homeDiscount}
            discountCards={homeDiscountCards}
          />
          <BeautyServicesSection
            sectionDetails={beautyServices}
            serviceFrom={serviceFrom}
            serviceTo={serviceTo}
            beautyServicesTabs={beautyServicesTabs}
          />
          <GetYourDealSection
            sectionDetails={getYourDeal}
            dealTickets={dealTickets}
            giftCardDetails={dealGiftCard}
          />
          <FeaturedPostSection />
          <TestimonialSection />
        </>
      ) : (
        <div className="common-container !w-[90%]">
          <div className="flex justify-center items-center py-6 md:py-10">
            {/* <div className="h-6 w-6 md:h-10 md:w-10 rounded-full border-4 border-gray-200 border-t-4 border-t-primary animate-custom-spin"></div> */}
            <Lottie animationData={loadingTextAnimation} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
