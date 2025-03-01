import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "motion/react";

interface ServicesTilesProps {
  sectionDetails: {
    title: string;
    description: string;
  };
  tiles: {
    title: string;
    image: {
      url: string;
    };
    link: string;
  }[];
}

const ServicesTiles: React.FC<ServicesTilesProps> = ({
  sectionDetails,
  tiles,
}) => {
  const router = useRouter();
  return (
    <>
      <div className="common-container !w-[90%] !max-w-[1242px] !mb-[60px] md:!mb-[108px]">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeOut",
            duration: 0.4,
            delay: 0.2,
          }}
          className="mb-[20px]"
        >
          <h2
            className="w-full max-w-[230px] md:max-w-[400px] md:m-auto text-lg md:text-xxlg leading-[28px] md:leading-[52px] text-start text-[#212529]  mb-[10px] md:mb-[20px] font-philosopher"
            dangerouslySetInnerHTML={{ __html: sectionDetails.title }}
          />
          <p
            className="text-mobileBody md:text-body leading-[20px] md:leading-[25px] text-start md:text-center text-[#212529b3] font-normal max-w-full lg:max-w-[899px] m-auto"
            dangerouslySetInnerHTML={{ __html: sectionDetails.description }}
          />
        </motion.div>
        <div className="w-fit flex flex-wrap justify-center gap-[10px] lg:gap-[10px]">
          {tiles.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => item.link && router.push(item.link)}
                className={`bg-[#ededed] hovered-img-card rounded-[20px] overflow-hidden relative w-full max-w-[calc(50%-5px)] md:max-w-[38%] lg:w-full lg:max-w-[291px] h-[200px] md:h-[327px] ${
                  item.link && "cursor-pointer"
                }`}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                    item.image?.url || ""
                  }`}
                  alt="card Image"
                  width={412}
                  height={246}
                  className="relative h-full w-full object-cover"
                />
                <div className="w-full max-w-[212px] absolute bottom-[10%] left-1/2 -translate-x-1/2  font-philosopher font-bold text-center text-md sm:text-xlg md:text-xxlg text-[#ffffff] leading-[43px]">
                  {item.title}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServicesTiles;
