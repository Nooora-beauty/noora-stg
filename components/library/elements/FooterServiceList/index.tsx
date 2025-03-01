import Link from "next/link";
import React from "react";

interface FooterServiceListProps {
  serviceName: string;
  subCategories: { text: string; url: string }[];
}

const FooterServiceList: React.FC<FooterServiceListProps> = ({
  serviceName,
  subCategories,
}) => {
  return (
    <div className=" flex flex-col gap-[11px] md:gap-[22px] min-w-[205px] md:min-w-[unset]">
      <div className=" font-philosopher font-bold text-[16px] text-[#3C3D42] leading-[22px]">
        {serviceName}
      </div>
      <ul className=" list-disc pl-[17px] text-[#C07858] text-sm md:text-body font-normal leading-[26px] md:leading-[29px]">
        {subCategories.map((subCategory, index) => {
          return (
            <li key={index}>
              <Link href={subCategory.url || ""}>{subCategory.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterServiceList;
