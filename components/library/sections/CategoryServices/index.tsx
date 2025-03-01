"use client";
import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Clock, Logs } from "lucide-react";
import { BiSolidCoinStack } from "react-icons/bi";
import tabListMarker from "@/app/static/icons/tabListMarker.svg";
import fadeArrow from "@/app/static/icons/fadeArrow.svg";
import { IoCartOutline } from "react-icons/io5";

import { IoStar } from "react-icons/io5";
import {
  Drawer,
  DrawerTrigger,
  DrawerTitle,
  DrawerContent,
  DrawerHeader,
} from "@/components/ui/drawer";
import PulsatingButton from "@/components/ui/pulsating-button";
import textLinkAnimation from "@/app/static/animatedIcons/linkAnimation.json";
import testimonialHead from "@/app/static/icons/testimonialHead.svg";

import { usePathname, useRouter } from "next/navigation";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface Session {
  price: string;
  time: string;
}

const AnimatedPrice = ({ sessions }: { sessions: Session[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sessionLength = useMemo(() => sessions.length, [sessions]);

  useEffect(() => {
    if (sessionLength <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sessionLength);
    }, 2000);

    return () => clearInterval(interval);
  }, [sessionLength]);

  return (
    <span className="relative w-full overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentIndex}
          initial={{ y: 20, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full whitespace-nowrap"
        >
          {sessions[currentIndex]?.price}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
const AnimatedTime = ({ sessions }: { sessions: Session[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sessionLength = useMemo(() => sessions.length, [sessions]);

  useEffect(() => {
    if (sessionLength <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sessionLength);
    }, 2000);

    return () => clearInterval(interval);
  }, [sessionLength]);

  return (
    <span className="relative w-full overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentIndex}
          initial={{ y: 20, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="whitespace-nowrap"
        >
          <span className="font-bold whitespace-nowrap">
            {sessions[currentIndex]?.time}
          </span>
          <span className="whitespace-nowrap"> Minutes</span>
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const AnimatedLength = ({ sessions }: { sessions: number[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sessionLength = useMemo(() => sessions.length, [sessions]);

  useEffect(() => {
    if (sessionLength <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sessionLength);
    }, 2000);

    return () => clearInterval(interval);
  }, [sessionLength]);

  return (
    <span className="relative w-full overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentIndex}
          initial={{ y: 20, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="whitespace-nowrap"
        >
          <span className="font-bold whitespace-nowrap">
            {sessions[currentIndex]}
          </span>
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

interface ServiceCardListProps {
  list: (SubCategoriesEntity | ServicesEntity)[];
  isSubCategory?: boolean;
}

interface AllServicesEntity {
  name: string;
  link: string;
  slug: string;
  menuQuote: string;
  categories: CategoriesEntity[];
}

interface CategoryServicesProps {
  service: string;
  category: string;
  subCategory?: string;
  allServices: AllServicesEntity[];
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
  link?: string;
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
  buttonLink: string;
}

const ServiceListItemContent: React.FC<{
  isSubCategory: boolean;
  listItem: SubCategoriesEntity | ServicesEntity;
}> = ({ isSubCategory, listItem }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const router = useRouter();
  return (
    <>
      {/* Description */}
      <div className="mt-[10px] md:mt-[15px] text-[10px] sm:text-mobileBody md:text-body leading-[14px] sm:leading-[20px] md:leading-[25px] text-[#212529b3] font-normal">
        {isSubCategory ? (
          <div
            className={`${
              isDetailsOpen ? "open-description" : "closed-description"
            }`}
            dangerouslySetInnerHTML={{ __html: listItem.details }}
          />
        ) : (
          <ul
            className="arrowed-list ml-2"
            dangerouslySetInnerHTML={{ __html: listItem.details }}
          />
        )}
      </div>

      {/* View More */}
      {isSubCategory ? (
        <div
          className="cursor-pointer mt-[10px] md:mt-[15px] text-primary text-mobileBody md:text-body leading-[20px] md:leading-[25px] hover:underline"
          onClick={() => setIsDetailsOpen(!isDetailsOpen)}
        >
          {isDetailsOpen ? "Read less" : "Read more"}
        </div>
      ) : (
        <div
          onClick={() => {
            if (listItem?.link) router.push(listItem.link);
          }}
          className="cursor-pointer flex items-center mt-[10px] md:mt-[15px] text-primary text-mobileBody md:text-body leading-[20px] md:leading-[25px] hover:underline"
        >
          VISIT
          <div className="w-[30px] md:w-[40px] h-auto font-bold ml-[-4px] md:ml-[-6px]">
            <Lottie
              animationData={textLinkAnimation}
              // lottieRef={animationRef}
              // loop={false}
            />
          </div>
        </div>
      )}
    </>
  );
};

const ServiceList: React.FC<ServiceCardListProps> = ({
  list,
  isSubCategory = false,
}) => {
  const router = useRouter();
  const listLength = useMemo(() => list.length, [list]);

  return (
    <>
      <div className="w-[100%] md:max-w-[unset] md:min-w-[913px] relative">
        {listLength &&
          list.map((listItem: any, index: number) => (
            <div
              key={index}
              className={`md:mx-[40px] pb-[15px] ${
                index !== 0 && "pt-[15px]"
              } border-b border-[#F6E1DD]`}
            >
              <div className="flex flex-row gap-[10px] md:gap-6">
                {/* Left: Image and Rating */}
                <div className="hovered-img-card relative w-[30%] max-w-[150px] h-fit">
                  <div className="relative aspect-square overflow-hidden rounded-[6px] bg-[#ededed]">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                        listItem.image?.url || ""
                      }`}
                      alt={listItem.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 150px"
                      priority
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center bg-[#fff] p-[4px] pr-2 rounded-[8px] absolute bottom-[5px] left-[5px] z-10">
                    <div className="mr-1 rounded-[50%] w-[14px] h-[14px] bg-[#E29A8F] flex justify-center items-center">
                      <IoStar className="w-[8px] h-[8px] text-[#fff]" />
                    </div>
                    <span className="inline-flex items-center font-medium text-[#212529] text-[12px] leading-[16px]">
                      <span>{listItem.rating}</span>
                      <span className="hidden md:inline-block ml-[4px]">
                        Stars
                      </span>
                    </span>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 flex md:block flex-col w-full md:max-w-[606px]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col md:block w-[160px] sm:w-[unset]">
                      {listItem.additionalTag && (
                        <span className="block w-max text-[#088E21] bg-[#E0F4D2] text-[8px] sm:text-xxs font-semibold tracking-[2px] uppercase !pl-[6px] !pr-[3px] !rounded-[5px]">
                          {listItem.additionalTag}
                        </span>
                      )}
                      {isSubCategory ? (
                        <div
                          className={cn(
                            "flex items-start",
                            listItem.slug ? "cursor-pointer" : ""
                          )}
                          onClick={() => {
                            if (listItem.slug) router.push(`/${listItem.slug}`);
                          }}
                        >
                          <h2
                            className={`font-medium text-body md:text-[26px] leading-[22px] md:leading-[36px] whitespace-nowrap overflow-hidden text-ellipsis`}
                          >
                            {listItem.name}
                          </h2>
                          {listItem.slug && (
                            <div className="w-[25px] md:w-[40px] h-auto font-bold">
                              <Lottie
                                animationData={textLinkAnimation}
                                // lottieRef={animationRef}
                                // loop={false}
                              />
                            </div>
                          )}
                        </div>
                      ) : (
                        <h2
                          className={`${
                            !listItem.additionalTag &&
                            "mt-[-16px] md:mt-[-12px]"
                          } font-medium text-body md:text-[26px] leading-[22px] md:leading-[36px] whitespace-nowrap overflow-hidden text-ellipsis`}
                        >
                          {listItem.name}
                        </h2>
                      )}
                    </div>
                    <Link
                      href={
                        listItem?.buttonLink ||
                        `${
                          process.env.NEXT_PUBLIC_WHATSAPP_LINK
                        }?text=Hi Nooora, I would like to book for ${encodeURIComponent(
                          listItem.name
                        )}.` ||
                        ""
                      }
                      className="hidden sm:block self-end font-philosopher uppercase bg-[#F6E1DD] text-primary font-normal text-xs md:text-[16px] rounded-[65px] py-[6px] px-[10px] md:px-[12px]"
                    >
                      BOOK NOW
                    </Link>
                    <Link
                      href={
                        listItem?.buttonLink ||
                        `${
                          process.env.NEXT_PUBLIC_WHATSAPP_LINK
                        }?text=Hi Nooora, I would like to book for ${encodeURIComponent(
                          listItem.name
                        )}.` ||
                        ""
                      }
                      className="block sm:hidden self-end font-philosopher uppercase bg-[#F6E1DD] text-primary font-normal text-xs md:text-[16px] rounded-[6px] py-[6px] px-[10px]"
                    >
                      <IoCartOutline className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Price and Duration */}
                  <div
                    className={`w-fit md:min-w-[279px] flex items-center gap-[10px] md:gap-[20px] pb-[5px] md:pb-[15px] border-b border-dashed ${
                      !listItem.additionalTag ? "mt-0" : "mt-[5px] md:mt-[5px]"
                    }`}
                    style={{
                      borderStyle: "dashed",
                      borderBottomWidth: "1px",
                      borderImageSlice: "1",
                      borderImageWidth: "1",
                      borderImageOutset: "0",
                      borderImageSource:
                        "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23D6D6D6' stroke-width='5' stroke-dasharray='6, 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-full font-bold text-xs md:text-[16px] flex items-center gap-1">
                        <BiSolidCoinStack className="w-3 sm:w-4 h-3 sm:h-4" />
                        {listItem.sessions.length > 1 ? (
                          <AnimatedPrice sessions={listItem.sessions} />
                        ) : (
                          <>{listItem.sessions[0].price}</>
                        )}
                      </span>
                    </div>
                    <div className="flex items-center text-xs md:text-[16px] leading-[22px] md:leading-[26px] time-seperator">
                      <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
                      <span className="ml-[5px] md:ml-2">
                        {listItem.sessions.length > 1 ? (
                          <AnimatedTime sessions={listItem.sessions} />
                        ) : (
                          <>
                            <span className="font-bold">
                              {listItem.sessions[0].time}
                            </span>
                            <span> Minutes</span>
                          </>
                        )}
                      </span>
                    </div>
                    <div
                      className={cn(
                        "flex items-center text-xs md:text-[16px] leading-[22px] md:leading-[26px]",
                        listItem.sessions[0].length && "time-seperator"
                      )}
                    >
                      {listItem.sessions.length > 1 ? (
                        <AnimatedLength
                          sessions={listItem.sessions.map(
                            (session: any) => session.length
                          )}
                        />
                      ) : (
                        <>
                          <span className="font-bold">
                            {listItem.sessions[0].length}
                          </span>
                        </>
                      )}
                    </div>

                    {listItem?.length?.length && (
                      <div
                        key={index}
                        className="flex items-center text-xs md:text-[16px] leading-[22px] md:leading-[26px] time-seperator"
                      >
                        <span className="font-bold">{listItem?.length}</span>
                      </div>
                    )}
                  </div>

                  <ServiceListItemContent
                    isSubCategory={isSubCategory}
                    listItem={listItem}
                  />
                </div>
              </div>
            </div>
          ))}
        <div className="absolute bottom-[-10px] left-1/2 translate-y-[100%] -translate-x-1/2 text-[#212529b3] text-[12px] font-normal whitespace-nowrap">
          Note: Prices are 5% VAT incl.
        </div>
      </div>
    </>
  );
};

const SideNav = ({
  navList,
  activeTab,
  className,
  isSubCategory = false,
  menuQuote,
}: {
  navList: {
    slug: string;
    name: string;
    link?: string;
    icon?: {
      url: string;
    };
    services?: ServicesEntity[];
    subCategories?: SubCategoriesEntity[];
  }[];
  activeTab: string;
  className?: string;
  menuQuote?: string;
  isSubCategory?: boolean;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className={`w-[100%] border-r border-[#F6E1DD] ${className}`}>
      {menuQuote ? (
        <div className="mt-[100px] px-[40px]">
          <div className="relative">
            <Image
              src={testimonialHead}
              alt="Testimonial Head"
              priority
              className="h-[50px] w-[70px] absolute top-[20px] left-[-65px]"
            />
          </div>
          <div
            className="py-[80px] px-2 text-center text-[#0a0a0a66] opacity-[0.6] font-philosopher font-medium text-body md:text-xxlg leading-[22px] md:leading-[52px]"
            dangerouslySetInnerHTML={{ __html: menuQuote }}
          />
          <div className="relative">
            <Image
              src={testimonialHead}
              alt="Testimonial Head"
              priority
              className="h-[50px] w-[70px] absolute bottom-[20px] right-[-30px] rotate-180"
            />
          </div>
        </div>
      ) : (
        <>
          {navList?.map((sub, index) => {
            const isActive = sub.slug === activeTab;
            return (
              <div key={index} className="mb-6">
                {/* {!menuQuote && ( */}
                <div
                  onClick={() => {
                    if (sub.link) router.push(sub.link);
                  }}
                  className={`cursor-pointer flex items-center justify-between pl-[20px] border-l-[4px]  py-[10px] ${
                    isActive
                      ? "border-[#CA0006] bg-[#FFEFEC]"
                      : " border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                        sub.icon ? sub.icon?.url : ""
                      }`}
                      // src={sub.icon ? sub.icon?.url : ""}
                      alt={sub.name}
                      width={24}
                      height={24}
                      priority
                    />
                    <span
                      className={`font-philosopher text-md text-[#000] ${
                        isActive ? "" : ""
                      }`}
                    >
                      {sub.name}
                    </span>
                  </div>
                  {isActive && (
                    <Image
                      src={fadeArrow}
                      alt="arrow"
                      width={16}
                      height={16}
                      priority
                      className="mr-[65px]"
                    />
                  )}
                </div>
                {/* )} */}

                {/* Services list under subcategory */}
                {isSubCategory ? (
                  <div className="mt-4 ml-[60px] relative">
                    <Image
                      src={tabListMarker}
                      alt="marker"
                      width={20}
                      height={20}
                      priority
                      className="absolute -left-6 -translate-x-1 -top-1"
                    />
                    <ul className="space-y-3">
                      {sub.services &&
                        sub.services.map((subCategory, index) => (
                          <li
                            key={index}
                            onClick={() => {
                              if (subCategory.slug)
                                router.push(`/${subCategory.slug}`);
                            }}
                            className={`${
                              subCategory.slug
                                ? "cursor-pointer hover:underline"
                                : ""
                            } text-sm  ${
                              isActive ? "text-[#000000b3]" : "text-[#000000b3]"
                            }`}
                          >
                            {subCategory.name}
                          </li>
                        ))}
                    </ul>
                  </div>
                ) : (
                  <>
                    {!menuQuote && (
                      <div className="mt-2 ml-[60px] relative">
                        <Image
                          src={tabListMarker}
                          alt="marker"
                          width={20}
                          height={20}
                          priority
                          className="absolute -left-6 -translate-x-1 -top-1"
                        />
                        <ul className="space-y-3">
                          {(sub.subCategories as CategoriesEntity["subCategories"]) &&
                            (
                              sub.subCategories as CategoriesEntity["subCategories"]
                            ).map((subCategory, index) => {
                              return (
                                <li
                                  key={index}
                                  onClick={() => {
                                    if (subCategory.slug) {
                                      const updatedPathname = pathname
                                        .split("/")
                                        .slice(0, -1)
                                        .join("/");
                                      router.push(
                                        `${updatedPathname}/${sub.slug}/${subCategory.slug}`
                                      );
                                    }
                                  }}
                                  className={`${
                                    subCategory.slug
                                      ? "cursor-pointer hover:underline"
                                      : ""
                                  } text-sm ${
                                    isActive
                                      ? "text-[#000000b3]"
                                      : "text-[#000000b3]"
                                  }`}
                                >
                                  {subCategory.name}
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

const CategoryServices: React.FC<CategoryServicesProps> = ({
  service,
  category,
  subCategory,
  allServices,
  // setTab,
}) => {
  const router = useRouter();
  // Find the current service based on service
  const currentService = allServices.find(
    (foundCategory) => foundCategory.slug === service
  );

  // Find the current category
  const currentCategory = currentService?.categories.find((sub) => {
    if (currentService?.menuQuote) {
      return sub.slug === service;
    } else {
      return sub.slug === category;
    }
  });

  // Find the current category
  const currentSubCategory =
    currentCategory?.subCategories &&
    (currentCategory?.subCategories.find((sub) => {
      if (currentService?.menuQuote) {
        return sub.slug === category;
      } else {
        return sub.slug === subCategory;
      }
    }) as SubCategoriesEntity);

  const showMobileMenuButton = currentService?.menuQuote
    ? Boolean(currentSubCategory)
    : true;

  return (
    <>
      <div className="common-container !w-[90%] !max-w-[1242px] !mb-[40px] md:!mb-[108px]">
        {/* Tabs section */}
        <div className="w-full pb-[10px] md:pb-[15px] border-b-[1px] border-[#F6E1DD]">
          <ul className="flex justify-start gap-[7px] md:gap-[5px] text-sm font-normal text-center text-[#6B7280] overflow-scroll pb-[2px] md:overflow-auto hide-scrollbar jiggle-animation">
            {allServices?.map((item, index) => {
              const isActive = item?.slug === service;
              return (
                <li className="me-0 lg:me-1 text-nowrap" key={index}>
                  <span
                    onClick={() => {
                      if (item.link) router.push(item.link);
                      // setTab?.(item.slug)
                    }}
                    className={`${
                      isActive ? "text-[#212529]" : "text-[#0a0a0a66]"
                    } transition-all duration-[600ms] ease-in-out relative inline-block px-[11px] lg:px-[22px] py-[8px] lg:py-[10px] ml-0 lg:ml-2 text-xs md:text-body lg:text-[18px] rounded-full font-inter bg-[#F8F9FB] cursor-pointer`}
                  >
                    {item.name}
                    {isActive && (
                      <div className="w-[30px] h-[1px] absolute z-10 top-full left-1/2 -translate-x-1/2 bg-primary transition-all duration-[600ms] ease-in-out" />
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
            delay: 0.2,
          }}
          className="flex mt-[20px] md:mt-[51px] md:border-r border-[#F6E1DD]"
        >
          {currentSubCategory ? (
            <>
              <SideNav
                navList={currentCategory.subCategories}
                activeTab={
                  currentService?.menuQuote
                    ? (category as string)
                    : (subCategory as string)
                }
                className="hidden md:block"
                isSubCategory
              />
              <ServiceList
                list={currentSubCategory?.services as ServicesEntity[]}
                isSubCategory
              />
            </>
          ) : (
            <>
              <SideNav
                navList={(currentService as AllServicesEntity)?.categories}
                activeTab={category as string}
                className="hidden md:block"
                menuQuote={currentService?.menuQuote}
              />
              <ServiceList list={currentCategory?.subCategories || []} />
            </>
          )}
        </motion.div>
      </div>
      {showMobileMenuButton && (
        <Drawer>
          <DrawerTrigger
            asChild
            className="block md:hidden fixed bottom-[20px] left-[50%] -translate-x-1/2 z-[999]"
          >
            <PulsatingButton
              pulseColor="#d6241db3"
              className="inline-flex font-bold items-center mt-[10px] font-philosopher uppercase text-[#fff] bg-[#c57d71] text-sm rounded-[65px] py-[6px] px-[10px] md:px-[12px]"
              pulseClassName="bg-[#d6241d] rounded-[65px]"
              contentClassName="inline-flex"
            >
              View Menu
              <Logs className="ml-2 w-4 h-5" />
            </PulsatingButton>
          </DrawerTrigger>
          <DrawerContent className="bg-white rounded-t-[10px]">
            <div>
              <DrawerHeader>
                <DrawerTitle className="w-full m-auto text-lg md:text-xxlg leading-[28px] md:leading-[52px] text-center text-[#212529]  mb-[10px] md:mb-[20px] font-philosopher">
                  Services
                </DrawerTitle>
              </DrawerHeader>

              <div className="flex mt-[20px] mb-[20px] md:border-r border-[#F6E1DD] max-h-[70vh] overflow-y-scroll">
                {currentSubCategory ? (
                  <>
                    <SideNav
                      navList={currentCategory.subCategories}
                      activeTab={subCategory as string}
                      className="block md:hidden"
                      isSubCategory
                    />
                  </>
                ) : (
                  <>
                    <SideNav
                      navList={
                        (currentService as (typeof allServices)[0])?.categories
                      }
                      activeTab={category as string}
                      className="block md:hidden"
                    />
                    {/* <ServiceList list={currentCategory?.subCategories || []} /> */}
                  </>
                )}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default CategoryServices;
