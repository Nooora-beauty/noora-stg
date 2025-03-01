import React from "react";
import ImageMarquee from "../../elements/ImageMarquee";

interface RecommendedPublicationsProps {
  title: string;
  images: {
    url: string;
  }[];
}

const RecommendedPublications: React.FC<RecommendedPublicationsProps> = ({
  title,
  images,
}) => {
  return (
    <>
      <div className="common-container !w-[90%] !max-w-[1242px] overflow-hidden">
        <div className="w-full h-full bg-[white] mb-[40px] md:mb-[138px]">
          <div className="text-center pb-[20px] md:pb-[51px]">
            <h2
              className="w-full max-w-[230px] md:max-w-[540px] md:m-auto text-lg md:text-xxlg leading-[28px] md:leading-[52px] text-start text-[#212529]  mb-[10px] md:mb-[20px] font-philosopher"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
          <ImageMarquee images={images} />
        </div>
      </div>
    </>
  );
};

export default RecommendedPublications;
