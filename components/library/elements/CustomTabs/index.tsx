import React from "react";

interface ItemInterface {
  tabTitle: string;
}

interface props {
  tabsOptions: { tabTitle: string }[];
  tab: string;
  maxWidth?: number;
  setTab: (value: string) => void;
}
const CustomTabs: React.FC<props> = ({
  tabsOptions,
  tab,
  setTab,
  maxWidth,
}) => {
  return (
    <div className="text-sm font-medium text-center text-[#6B7280]">
      <div className="text-sm font-normal text-center">
        <ul
          className={`w-full ${
            maxWidth ? `max-w-[${maxWidth}px]` : ""
          } flex flex-wrap justify-between md:justify-center gap-[2px] md:gap-[5px] `}
        >
          {tabsOptions?.map((item: ItemInterface, index: number) => {
            const isActive = item?.tabTitle === tab;

            return (
              <li className={`me-0 lg:me-1`} key={index}>
                <span
                  onClick={() => setTab?.(item.tabTitle)}
                  className={`${
                    isActive ? "text-[#212529]" : "text-[#0a0a0a66]"
                  } transition-all duration-[600ms] ease-in-out relative inline-block px-[11px] lg:px-[22px] py-[8px] lg:py-[10px] ml-0 lg:ml-2 text-xs md:text-body lg:text-[18px] rounded-full font-inter bg-[#F8F9FB]  cursor-pointer`}
                >
                  {item.tabTitle}
                  {isActive && (
                    <div className="w-[30px] h-[1px] absolute z-10 top-full left-1/2 -translate-x-1/2 bg-primary transition-all duration-[600ms] ease-in-out" />
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CustomTabs;
