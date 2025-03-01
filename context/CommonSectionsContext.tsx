"use client";
import { commonSectionStaticData } from "@/app/constant";
import dynamic from "next/dynamic";
// import AppFooter from "@/components/library/commonSections/Footer";
// import AppHeader from "@/components/library/commonSections/Header";
import React, { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";
import bannerLoading from "@/app/static/images/headerLoading.png";

const AppHeader = dynamic(
  () => import("@/components/library/commonSections/Header"),
  {
    loading: () => (
      <>
        <Image
          src={bannerLoading}
          alt="bannerLoading"
          className="fixed top-0 left-0  w-full z-[9999999]"
          style={{ height: "145px", zIndex: "9999999999" }}
        />
      </>
    ),
    ssr: false,
  }
);

const AppFooter = dynamic(
  () => import("@/components/library/commonSections/Footer"),
  {
    // loading: () => <div className="h-[200px] bg-[#FDF2F2]" />, // Placeholder for footer
    ssr: false,
  }
);

interface CommonSectionsInterface {
  header: {
    logoUrl: string;
    logo: {
      url: string;
    };
    menuItem: {
      name: string;
      menuType: string;
      url: string | null;
      icon: {
        url: string;
      } | null;
    }[];
    megaMenu: {
      benefits: { text: string; icon: { url: string } }[];
      logo: {
        url: string;
      };
      navServices: {
        title: string;
        media: { url: string };
        url: string | null;
      }[];
    };
  };
  footer: {
    logo: {
      url: string;
    };
    id: number;
    description: string;
    locationList1: {
      id: number;
      name?: string;
    }[];
    locationList2: {
      id: number;
      name?: string;
    }[];
    locationList3: {
      id: number;
      name?: string;
    }[];
    servicesList: {
      title: string;
      list: {
        text: string;
        url: string;
      }[];
    }[];
  };
  featuredPostSection: {
    post1: {
      image: { url: string };
      heading: string;
      category: string;
      date: string;
    };
    post2: {
      image: { url: string };
      heading: string;
      category: string;
      date: string;
    };
    post3: {
      image: { url: string };
      heading: string;
      category: string;
      date: string;
    };
    linkText: string;
    linkUrl: string;
  };
  blogTestimonial:
    | {
        id: number;
        blogTestimonialContent: string;
      }[]
    | undefined;

  testimonials: {
    author: string;
    review: string;
    stars: number;
    avatar: {
      url: string;
    } | null;
  }[];
}

const CommonSectionsContext = createContext<CommonSectionsInterface | null>(
  null
);

export const CommonSectionsProvider = ({
  fetchPromise,
  children,
}: {
  fetchPromise: Promise<CommonSectionsInterface>;
  children: React.ReactNode;
}) => {
  const [commonSectionsData, setCommonSectionsData] =
    useState<CommonSectionsInterface>(commonSectionStaticData);

  useEffect(() => {
    console.log("running UseEffect");
    if (fetchPromise) {
      fetchPromise.then((data) => {
        console.log("Completed Fetching commonSection- ----> ", data);
        setCommonSectionsData(data);
      });
      // .catch((error) => {
      //   console.log("error ----> ", error);
      // });
    }
  }, []);

  const [showData, setShowData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowData(true);
    }, 5000);
  }, []);
  return (
    <>
      <AppHeader headerData={commonSectionsData.header} />
      <CommonSectionsContext.Provider value={commonSectionsData}>
        {children}
      </CommonSectionsContext.Provider>
      {showData && <AppFooter footerData={commonSectionsData.footer} />}
    </>
  );
};

export const useCommonSections = () => {
  return useContext(CommonSectionsContext);
};
