import React from "react";
import Image from "next/image";
import { MdStars } from "react-icons/md";
import Link from "next/link";

interface ItemInterface {
  title: string;
  price: string;
  offerPercent: string | null;
  image: {
    url: string;
  };
}

interface CommonCardsProps {
  cards: {
    title: string;
    price: string;
    offerPercent: string | null;
    image: {
      url: string;
    };
  }[];
  width?: string;
}

const CommonCards: React.FC<CommonCardsProps> = ({ cards, width }) => {
  return (
    <>
      {cards?.map((item: ItemInterface, index: number) => {
        return (
          <div
            key={index}
            className={`p-2 bg-white rounded-[10px] card-shadow w-full md:w-fit ${width}`}
          >
            <div className="w-[162px] md:w-[204px] relative mb-[15px]">
              <div className="w-full h-[100px] xs:h-[120px] sm:h-[130px] md:h-[148px] overflow-hidden rounded-b-[6px] bg-[#ededed]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                    item?.image?.url || ""
                  }`}
                  fill
                  sizes="(max-width: 768px) 100vw, 100%"
                  priority
                  placeholder="blur"
                  blurDataURL={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                    item?.image?.url || ""
                  }`}
                  alt="card Image"
                  className="h-[auto] w-full rounded-t-[10px] rounded-b-[5px] object-cover"
                />
              </div>
              {item?.offerPercent && (
                <div className="flex items-center bg-white p-[4px] pr-2 rounded-md absolute bottom-[-12px] left-[15px] z-10">
                  <MdStars
                    className="text-sm text-[#008000] mr-1"
                    aria-hidden="true"
                    role="none"
                  />
                  <p className="uppercase text-[#212529] text-xxs md:text-[12px]">
                    <b className="font-extrabold">{item.offerPercent}</b> OFF
                  </p>
                </div>
              )}
            </div>
            <div className="py-2 relative">
              <h5 className="text-[#A45D63] font-normal mb-1 font-philosopher text-sm md:text-[20px]">
                {item?.title}
              </h5>
              <p className="font-normal text-[#212529] text-xs md:text-[16px] mb-3">
                Starts at <b className="font-semibold">{item?.price}</b>
              </p>
              <Link
                href={`${
                  process.env.NEXT_PUBLIC_WHATSAPP_LINK
                }?text=Hi Nooora, I would like to book for ${item.title} ${
                  item.offerPercent ? `(${item.offerPercent} OFF)` : ""
                }.`}
                className="font-philosopher bg-primaryGradient transition-all duration-700 ease-in-out hover:transform hover:scale-110 hover:shadow-lg hover:-translate-y-1 text-white font-normal text-xs md:text-[16px] rounded-[65px] py-[6px] px-[10px] md:px-[12px] absolute right-0 bottom-[-23px] md:bottom-[-27px] z-10"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CommonCards;
