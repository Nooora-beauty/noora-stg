"use client";
import React from "react";
import Image from "next/image";
import sectionShadow from "@/app/static/images/sectionShadow.svg";
import sectionArcs from "@/app/static/images/sectionArcs.svg";
// import listPointer from "@/app/static/icons/listPointer.svg";
// import categoryDetail from "@/app/static/images/categoryDetail.jpg";
import NoooraServiceSteps from "@/components/library/elements/NooraServiceSteps";

interface AboutSummaryProps {
  data: {
    aboutNoora: AboutNooraOrHomeService;
    NoooraSteps: NoooraStepsEntity[];
  };
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

const AboutSummary: React.FC<AboutSummaryProps> = ({ data }) => {
  return (
    <>
      <div className="h-full relative mb-[40px] md:mb-[80px] pt-[20px] md:pt-[80px] ">
        <div className="relative common-container !w-[90%] !max-w-[1242px] z-[3]">
          <div className="relative flex flex-col items-center">
            <div className="mb-[20px] md:mb-[75px] w-full">
              <h2
                className="w-full max-w-[230px] md:max-w-[250px] md:m-auto text-lg md:text-xxlg leading-[28px] md:leading-[52px] text-start text-[#212529]  mb-[10px] md:mb-[20px] font-philosopher"
                dangerouslySetInnerHTML={{ __html: data.aboutNoora.title }}
              />
              <p
                className="text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-start md:text-center text-[#212529b3] font-normal max-w-full lg:max-w-[705px] m-auto"
                dangerouslySetInnerHTML={{
                  __html: data.aboutNoora.description,
                }}
              />
              {/* {data?.aboutNoora?.description} */}
            </div>

            <NoooraServiceSteps className="m-0" steps={data.NoooraSteps} />
            {/* </div> */}
            <div className="hidden md:block md:absolute top-0 right-0 z-[-1] w-[50%] h-auto">
              <Image
                // src={`${
                //   process.env.NEXT_PUBLIC_STRAPI_URL
                // }${"/uploads/couple_Special_Video_ezgif_com_video_to_gif_converter_6013eb5903.gif"}`}
                src={sectionArcs}
                width={1442}
                height={966}
                alt="couple-section image"
                className="hidden md:block w-full h-full "
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block md:absolute top-0 left-0 z-[-1] w-[80%] h-auto shadowImageGradient">
          <Image
            // src={`${
            //   process.env.NEXT_PUBLIC_STRAPI_URL
            // }${"/uploads/couple_Special_Video_ezgif_com_video_to_gif_converter_6013eb5903.gif"}`}
            src={sectionShadow}
            width={1442}
            height={966}
            alt="couple-section image"
            className="hidden md:block w-full h-full "
          />
        </div>
      </div>
    </>
  );
};

export default AboutSummary;
