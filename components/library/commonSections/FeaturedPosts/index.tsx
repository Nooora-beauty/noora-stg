"use client";
import React from "react";

import FeaturedPostCard from "../../elements/FeaturedPostCard";
import { AiOutlinePlus } from "react-icons/ai";
import { useCommonSections } from "@/context/CommonSectionsContext";
import Link from "next/link";
import { motion } from "motion/react";
import testimonialHead from "@/app/static/icons/testimonialHead.svg";
import loveNooraLogo from "@/app/static/images/love-noora-logo.svg";
import featuresBlogBg from "@/app/static/images/blogs-bg.png";
import Image from "next/image";
import Slider from "react-slick";

const FeaturedPostSection = () => {
  const commonSectionsData = useCommonSections();
  const featuredPostSectionData = commonSectionsData?.featuredPostSection;
  const blogTestimonialData = commonSectionsData?.blogTestimonial;

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    speed: 500,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <>
      <div className="w-full h-full bg-[#F9F2F2] mb-[70px] md:mb-[116px] relative pt-[0px] pb-[80px] md:py-[80px]">
        <Image
          src={featuresBlogBg}
          width={300}
          height={260}
          priority
          className="max-w-[125px] md:max-w-[180px] lg:max-w-[280px] absolute bottom-0 left-0 z-1"
          alt="feature bg"
        />
        {/* <div
          className="text-center pt-[40px] md:pt-[72px] pb-[30px] md:pb-[46px]"
        >
          <motion.h2
            initial={{ y: 10, opacity: 0.01 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeOut",
              duration: 0.4,
              delay: 0.1,
            }}
            className="max-w-full lg:max-w-[992px] m-auto text-lg md:text-xxlg leading-[28px] md:leading-[52px] text-[#212529]  font-philosopher"
          >
            Featured <i className="text-primary">Posts</i>
          </motion.h2>
        </div> */}
        {/* <div */}
        <motion.div
          initial={{ y: 10, opacity: 0.01 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeOut",
            duration: 0.4,
            delay: 0.1,
          }}
          className="common-container !w-[90%] relative z-[2]"
        >
          <div className="flex items-center justify-between flex-col md:flex-row">
            <div className="w-full pr-0 md:max-w-[300px] lg:max-w-[400px] md:pr-[47px]">
              <div className="flex flex-col flex-wrap relative z-[2] mb-3 md:mb-0">
                <div className="w-full order-2 md:order-1 mb-12">
                  <Slider {...settings} className="w-full blog-slider">
                    {blogTestimonialData?.map(
                      (testimonial: any, index: number) => (
                        <div key={index} className="relative w-full px-1">
                          <div className="relative w-full text-center">
                            <Image
                              src={testimonialHead}
                              alt="Testimonial Head"
                              width={40}
                              height={30}
                              priority
                              className="h-[30px] w-[40px] absolute top-[13px] md:top-[10px] left-[50%] -translate-x-1/2"
                            />
                            <p className="relative pt-[58px] md:pt-[60px] pb-[15px] md:pb-0 text-center text-[#212529] opacity-60 font-philosopher font-normal text-[16px] md:text-[31px] leading-[22px] md:leading-[36px] line-clamp-[7]">
                              {testimonial.blogTestimonialContent}
                            </p>
                          </div>
                        </div>
                      )
                    )}
                  </Slider>
                </div>
                <Image
                  src={loveNooraLogo}
                  width={170}
                  height={170}
                  priority
                  alt="heart logo"
                  className="mx-auto w-[170px] h-[170px] order-1 md:order-2 anticlockwise-spin mt-[-68px] md:mt-0"
                />
              </div>
            </div>
            <div className="w-full md:pl-[60px] md:border-l md:border-dashed md:border-[#EFDADA]">
              {featuredPostSectionData?.post1 && (
                <FeaturedPostCard
                  title={featuredPostSectionData?.post1.heading}
                  category={featuredPostSectionData?.post1.category}
                  date={featuredPostSectionData?.post1.date}
                  image={featuredPostSectionData?.post1.image?.url || ""}
                />
              )}
              {featuredPostSectionData?.post2 && (
                <FeaturedPostCard
                  title={featuredPostSectionData?.post2.heading}
                  category={featuredPostSectionData?.post2.category}
                  date={featuredPostSectionData?.post2.date}
                  image={featuredPostSectionData?.post2.image?.url || ""}
                />
              )}
              {featuredPostSectionData?.post3 && (
                <FeaturedPostCard
                  title={featuredPostSectionData?.post3.heading}
                  category={featuredPostSectionData?.post3.category}
                  date={featuredPostSectionData?.post3.date}
                  image={featuredPostSectionData?.post3.image?.url || ""}
                  noBorder={true}
                />
              )}

              {featuredPostSectionData?.linkText && (
                // <div
                <motion.div
                  initial={{ y: 10, opacity: 0.01 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeOut",
                    duration: 0.4,
                    delay: 0.1,
                  }}
                  className="hidden lg:flex justify-start"
                >
                  <Link
                    href={featuredPostSectionData?.linkUrl || ""}
                    className="cursor-pointer flex items-center justify-between w-[100px] md:w-[115px] font-normal text-sm md:text-[16px] text-[#C07858] uppercase leading-[22px] md:leading-[25px]"
                  >
                    <p>{featuredPostSectionData?.linkText}</p>
                    <AiOutlinePlus />
                  </Link>
                  {/* </motion.div> */}
                </motion.div>
              )}
            </div>
          </div>
          {/* <div className="flex xl:justify-center gap-[10px] overflow-x-auto hide-scrollbar">
            {featuredPostSectionData?.post1 && (
              <FeaturedPostCard
                title={featuredPostSectionData?.post1.heading}
                category={featuredPostSectionData?.post1.category}
                date={featuredPostSectionData?.post1.date}
                image={featuredPostSectionData?.post1.image?.url || ""}
              />
            )}
            {featuredPostSectionData?.post2 && (
              <FeaturedPostCard
                title={featuredPostSectionData?.post2.heading}
                category={featuredPostSectionData?.post2.category}
                date={featuredPostSectionData?.post2.date}
                image={featuredPostSectionData?.post2.image?.url || ""}
              />
            )}
            {featuredPostSectionData?.post3 && (
              <FeaturedPostCard
                title={featuredPostSectionData?.post3.heading}
                category={featuredPostSectionData?.post3.category}
                date={featuredPostSectionData?.post3.date}
                image={featuredPostSectionData?.post3.image?.url || ""}
              />
            )}
            {featuredPostSectionData?.post4 && (
              <FeaturedPostCard
                title={featuredPostSectionData?.post4.heading}
                category={featuredPostSectionData?.post4.category}
                date={featuredPostSectionData?.post4.date}
                image={featuredPostSectionData?.post4.image?.url || ""}
              />
            )}

            {featuredPostSectionData?.linkText && (
              <div className="flex lg:hidden justify-center px-[30px]">
                <Link
                  href={featuredPostSectionData?.linkUrl || ""}
                  className="cursor-pointer flex items-center justify-between w-[100px] md:w-[115px] font-normal text-sm md:text-[16px] text-[#C07858] uppercase leading-[22px] md:leading-[25px]"
                >
                  <p>{featuredPostSectionData?.linkText}</p>
                  <AiOutlinePlus />
                </Link>
              </div>
            )}
          </div> */}
          {/* </motion.div> */}
        </motion.div>
      </div>
    </>
  );
};

export default FeaturedPostSection;
