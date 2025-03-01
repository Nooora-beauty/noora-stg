import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
interface HomeServiceCardProps {
  card: {
    title: string;
    image: {
      url: string;
    };
    link?: string;
    buttonText?: string | null;
    buttonUrl?: string | null;
  };
  index: number;
}

const HomeServiceCard: React.FC<HomeServiceCardProps> = ({
  card,
  index
}) => {
  const router = useRouter();
  return (
    <>
      {/* <div */}
      <motion.div
        initial={{ opacity: 0.01, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.4,
          delay: index * 0.2,
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="hovered-img-card relative w-[48%] lg:w-[404px] lg:max-w-[404px] h-[104px] md:h-[246px] cursor-pointer overflow-hidden rounded-[10px] bg-[#ededed]"
        onClick={() => card.link && router.push(card.link)}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.image?.url || ""}`}
          alt="card Image"
          // width={412}
          // height={246}
          priority
          placeholder="blur"
          blurDataURL={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
            card.image?.url || ""
          }`}
          fill
          sizes="(max-width: 768px) 48%, 404px"
          className="relative h-full w-full rounded-[10px] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-philosopher font-normal text-md sm:text-xlg md:text-xxlg text-[#ffffff]">
          {card.title}
        </div>
      </motion.div>
      {/* </div> */}
    </>
  );
};

export default HomeServiceCard;
