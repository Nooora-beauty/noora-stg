import Link from "next/link";
import Image from "next/image";
import React from "react";

interface PageBarProps {
  sectionDetails: {
    pageTitle: string;
    barIcon: {
      url: string;
    };
    breadCrumbs: { text: string; url: string }[];
  };
  className?: string;
}

const PageBar: React.FC<PageBarProps> = ({ sectionDetails, className }) => {
  return (
    <>
      <div
        className={`common-container !w-[90%] !max-w-[1242px] flex justify-center items-center bg-[#F8F9FB] !h-full md:!min-h-[170px] rounded-[20px] ${className}`}
      >
        <div className="w-full flex justify-between items-center px-[20px] py-[15px] md:py-0 md:pl-[61px] md:pr-[68px]">
          <div className="w-fit flex flex-col items-start justify-between md:justify-center gap-[5px] md:gap-[13px]">
            {sectionDetails?.pageTitle && (
              <h1 className="font-philosopher capitalize font-normal text-md md:text-[40px] text-[#212529] leading-[22px] md:leading-[40px]">
                {sectionDetails.pageTitle}
              </h1>
            )}
            {sectionDetails?.breadCrumbs?.length && (
              <span className="font-normal text-xxs max-w-[180px] md:text-body text-[#555555] leading-[15px]  md:leading-[24px] md:max-w-[450px]">
                {sectionDetails.breadCrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    <Link
                      href={crumb?.url || ""}
                      // className="inline cursor-pointer"
                      className={`${crumb?.url ? "inline" : "cursor-default" }`}
                    >
                      {crumb.text}
                    </Link>
                    {index < sectionDetails.breadCrumbs.length - 1 && " / "}
                  </React.Fragment>
                ))}
              </span>
            )}
          </div>
          {sectionDetails?.barIcon && (
            <div>
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  sectionDetails.barIcon?.url || ""
                }`}
                alt="pageBar image"
                width={139}
                height={130}
                priority
                className="w-full max-w-[50px] md:max-w-[139px] h-full max-h-[130px] mix-blend-multiply"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PageBar;
