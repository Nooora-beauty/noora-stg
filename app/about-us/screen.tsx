"use client";
import PageBar from "@/components/library/elements/PageBar";
import React from "react";
import Image from "next/image";
import aboutStatStrokes from "@/app/static/images/aboutStatsStrokes.png";
import AboutSummary from "@/components/library/sections/AboutSummary";
import Petal1 from "@/app/static/images/petal1.svg";
import Petal3 from "@/app/static/images/petal3.svg";

interface AboutScreenProps {
  aboutUsData: {
    trainedProfessionalValue: string;
    customerSatisfactionValue: string;
    brandPartnershipValue: string;
    pageBar: PageBar;
    aboutNoora: AboutNooraOrHomeService;
    NoooraSteps: NoooraStepsEntity[];
    homeService: AboutNooraOrHomeService;
  };
}
interface PageBar {
  id: number;
  pageTitle: string;
  barIcon: { url: string };
  breadCrumbs: {
    text: string;
    url: string;
  }[];
}

interface AboutNooraOrHomeService {
  title: string;
  description: string;
}
interface NoooraStepsEntity {
  title: string;
  icon: {
    url: string;
  };
}

const AboutScreen: React.FC<AboutScreenProps> = ({ aboutUsData }) => {
  const {
    pageBar,
    homeService,
    trainedProfessionalValue,
    customerSatisfactionValue,
    brandPartnershipValue,
    ...restData
  } = aboutUsData;
  return (
    <div className="w-full pt-[130px] lg:pt-[144px]">
      <PageBar sectionDetails={pageBar} className="!mt-[20px] md:!mt-[24px]" />
      <AboutSummary data={restData} />
      {/* stats section */}
      <div className="relative mb-[80px] md:pt-[30px] ">
        <div className="relative common-container !w-[100%] md:!w-[90%] !max-w-[1242px] z-[3]">
          <div className="h-full xl:h-[1023px] flex flex-col md:flex-row gap-[95px] items-start justify-center">
            <div className="self-center w-full flex justify-center md:justify-end mt-[300px] md:mt-[unset]">
              <div className="max-w-[90%] flex flex-col items-center w-full md:max-w-[446px]">
                <h3
                  className="text-[30px] md:text-[45px] leading-[32px] md:leading-[49px] text-white mb-[10px] md:mb-[20px] font-philosopher"
                  dangerouslySetInnerHTML={{
                    __html: homeService?.title,
                  }}
                />

                <div
                  className="flex flex-col gap-y-[10px] md:gap-y-[20px] text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-white font-normal"
                  dangerouslySetInnerHTML={{
                    __html: homeService?.description,
                  }}
                />
              </div>
            </div>
            <div className="absolute top-0 left-0 z-[-1] md:w-auto md:h-full overflow-hidden md:overflow-auto">
              <Image
                // src={`${
                //   process.env.NEXT_PUBLIC_STRAPI_URL
                // }${"/uploads/couple_Special_Video_ezgif_com_video_to_gif_converter_6013eb5903.gif"}`}
                src={aboutStatStrokes}
                width={890}
                height={1023}
                priority
                alt="couple-section image"
                className="w-full min-w-fit md:min-w-[unset] h-[900px] -translate-x-[20%] md:translate-x-0 md:w-full md:h-full "
              />
            </div>
            <div className=" self-center relative border-[1px] border-[#c078581a] rounded-[240px] ">
              <div className="border-[1px] border-[transparent] m-[11px] xl:m-[17px] custom-dashed-border-long">
                <div className="relative m-[8px] xl:m-[17px] overflow-hidden rounded-[220px] w-[267px] xl:w-[400px] h-[460px] xl:h-[660px] bg-[rgba(255,239,236,0.8)] backdrop-blur-[20px]" />
                <div className="w-[267px] xl:w-[400px] h-[460px] xl:h-[660px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="h-full flex flex-col justify-center items-center">
                    <div className="w-full max-w-[90%] md:max-w-[300px] pb-[35px] md:pb-[45px] border-b-[1px] border-[#ac010333] text-center">
                      <div className="text-[28px] md:text-[45px] leading-[22px] md:leading-[49px] text-[#C67C71] mb-[20px] font-philosopher">
                        {trainedProfessionalValue}
                      </div>
                      <div className="font-normal text-mobileBody md:text-body leading-[20px] md:leading-[24px]">
                        Trained professionals
                      </div>
                    </div>
                    <div className="w-full max-w-[90%] md:max-w-[300px] mt-[35px] md:mt-[45px] pb-[35px] md:pb-[45px] border-b-[1px] border-[#ac010333] text-center">
                      <div className="text-[28px] md:text-[45px] leading-[22px] md:leading-[49px] text-[#C67C71] mb-[20px] font-philosopher">
                        {customerSatisfactionValue}
                      </div>
                      <div className="font-normal text-mobileBody md:text-body leading-[20px] md:leading-[24px]">
                        Customer Satisfaction
                      </div>
                    </div>
                    <div className="w-full max-w-[90%] md:max-w-[300px] mt-[35px] md:mt-[45px] text-center">
                      <div className="text-[28px] md:text-[45px] leading-[22px] md:leading-[49px] text-[#C67C71] mb-[20px] font-philosopher">
                        {brandPartnershipValue}
                      </div>
                      <div className="font-normal text-mobileBody md:text-body leading-[20px] md:leading-[24px]">
                        Top Brands Partnerships
                      </div>
                    </div>
                  </div>
                  <Image
                    src={Petal1}
                    alt="petal-1"
                    width={109}
                    height={82}
                    unoptimized
                    className="w-[120px] xl:w-[200px] absolute top-[-15px] md:top-[-40px] lg:top-0 right-0 translate-x-[24%] md:translate-x-[36%] rotate-[-25deg]"
                  />
                  <Image
                    src={Petal3}
                    alt="petal-3"
                    width={87}
                    height={114}
                    unoptimized
                    className="w-[110px] xl:w-[110px] absolute bottom-[80px] left-0 -translate-x-[50%] rotate-[-40deg]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
