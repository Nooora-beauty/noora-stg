import React from "react";
import Image from "next/image";

interface FeaturedPostCardInterface {
  title?: string;
  category?: string;
  date?: string;
  image?: string;
  noBorder?: boolean;
}

const FeaturedPostCard: React.FC<FeaturedPostCardInterface> = ({
  title,
  category,
  date,
  image,
  noBorder=false
}) => {
  const featuredImage: string | null = image
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`
    : null;

  return (
    <div className={`cursor-pointer flex items-center w-full h-full mb-[20px] pb-[20px] md:pb-[40px] ${!noBorder && "border-b-[1px] border-[#DFBEB7]"}`}>
      <div className="w-full md:mr-[37px] mr-[20px]">
        <p className="font-philosopher font-normal mb-[27px] text-[#212529] text-body md:text-[31px] text-left leading-[22px] md:leading-[41px] line-clamp-2">
          {title}
        </p>
        <div className="flex justify-start gap-[5px] md:gap-[10px] text-[#000000] opacity-50 w-full text-[13px] md:text-[15px] leading-[18px]">
          <p className="font-quatSans uppercase">{`category: ${category}`}</p>
          <p className="font-quatSans">|</p>
          <p className="font-quatSans uppercase">{date}</p>
        </div>
      </div>
      <div className="min-w-[90px] w-[90px] h-[90px] md:min-w-[144px] md:w-[144px] md:h-[120px] rounded-[10px] overflow-hidden bg-[#ededed]">
        {featuredImage && (
          <Image
            src={featuredImage}
            alt="Featured Post Image"
            className="h-full object-cover !w-full scale-100 lg:hover:scale-105 transition-all duration-500 ease-in-out"
            width={270}
            height={170}
            priority
            placeholder="blur"
            blurDataURL={featuredImage}
          />
        )}
      </div>
    </div>
  );
};

export default FeaturedPostCard;
