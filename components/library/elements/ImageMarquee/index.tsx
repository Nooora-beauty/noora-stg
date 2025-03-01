import React from "react";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

interface ImageMarqueeProps {
  images: {
    url: string;
  }[];
}

const ImageMarquee: React.FC<ImageMarqueeProps> = ({ images }) => {
  return (
    <div className="flex justify-around">
      <Marquee className="[--duration:20s]">
        {images.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Image
                key={`first-${index}`}
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item?.url || ""}`}
                alt="card Image"
                width={165}
                height={30}
                className="relative h-[30px] w-auto min-w-[165px] mx-8"
              />
            </React.Fragment>
          );
        })}
      </Marquee>
    </div>
    // </div>
  );
};

export default ImageMarquee;
