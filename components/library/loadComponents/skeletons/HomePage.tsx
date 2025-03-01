import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const CoupleSectionSkeleton = () => {
  return (
    <>
      <div className="common-container !w-[90%] pb-[10px] lg:pb-[73px]">
        <div className="flex flex-col lg:flex-row gap-[40px] items-center justify-center">
          <Skeleton className="hidden xl:block w-[327px] xl:w-[436px] h-[662px] relative border-[1px] border-[#c078581a] rounded-[260px] " />
          <div className="w-full max-w-[690px] flex flex-col gap-[0] lg:gap-[20px]">
            <div className="w-full">
              <Skeleton className="h-[50px] w-3/4 rounded-lg mb-[10px] md:mb-[20px]" />
              <Skeleton className="h-[20px] w-full lg:max-w-[662px] mb-[15px] lg:mb-[5px] rounded-lg" />
              <Skeleton className="h-[20px] w-full lg:max-w-[662px] mb-[15px] lg:mb-[5px] rounded-lg" />
              <Skeleton className="h-[20px] w-full lg:max-w-[662px] mb-[15px] lg:mb-[5px] rounded-lg" />
            </div>
            <div className="pl-[2px] h-auto min-h-[250px] flex lg:justify-center gap-x-[10px] lg:w-fit overflow-x-auto lg:overflow-x-visible hide-scrollbar ">
              {[...Array(3)].map((item, index) => (
                <div
                  key={index}
                  className={`w-full max-w-[220px] h-full max-h-[225px] p-2 bg-white rounded-xl slider-shadow my-[2px]`}
                >
                  <Skeleton className="w-[143px] sm:w-[162px] md:w-[197px] h-[100px] md:h-[110px] relative m-auto mb-[5px] md:mb-[13px]" />
                  <div className="py-2 relative">
                    <Skeleton className="h-[20px] w-1/2  mb-[15px] lg:mb-[5px] rounded-lg" />
                    <Skeleton className="h-5 w-3/4 rounded-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const WhatsNewSectionSkeleton = () => {
  return (
    <>
      <div className="common-container !w-[90%] pb-[10px] lg:pb-[73px]">
        <div className="flex flex-col lg:flex-row gap-[40px] items-center justify-center">
          <Skeleton className="hidden xl:block w-[327px] xl:w-[436px] h-[662px] relative border-[1px] border-[#c078581a] rounded-[260px] " />
          <div className="w-full max-w-[690px] flex flex-col gap-[0] lg:gap-[20px]">
            <div className="w-full">
              <Skeleton className="h-[50px] w-3/4 rounded-lg mb-[10px] md:mb-[20px]" />
              <Skeleton className="h-[20px] w-full lg:max-w-[662px] mb-[15px] lg:mb-[5px] rounded-lg" />
              <Skeleton className="h-[20px] w-full lg:max-w-[662px] mb-[15px] lg:mb-[5px] rounded-lg" />
              <Skeleton className="h-[20px] w-full lg:max-w-[662px] mb-[15px] lg:mb-[5px] rounded-lg" />
            </div>
            <div className="pl-[2px] h-auto min-h-[250px] flex lg:justify-center gap-x-[10px] lg:w-fit overflow-x-auto lg:overflow-x-visible hide-scrollbar ">
              {[...Array(3)].map((item, index) => (
                <div
                  key={index}
                  className={`w-full max-w-[220px] h-full max-h-[225px] p-2 bg-white rounded-xl slider-shadow my-[2px]`}
                >
                  <Skeleton className="w-[143px] sm:w-[162px] md:w-[197px] h-[100px] md:h-[110px] relative m-auto mb-[5px] md:mb-[13px]" />
                  <div className="py-2 relative">
                    <Skeleton className="h-[20px] w-1/2  mb-[15px] lg:mb-[5px] rounded-lg" />
                    <Skeleton className="h-5 w-3/4 rounded-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
