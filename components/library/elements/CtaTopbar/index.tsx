"use client";
import React, { useState, useEffect } from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface CTATopbarProps {
  title?: string;
}

const CTATopbar: React.FC<CTATopbarProps> = ({}) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title:
        "😀 Begin your skin regime today. Try PETA certified VEGAN facials by Dermalogica.",
      link: "/services/face/facial",
    },
    {
      title: "🤯 Makeup That Spell Attention - 4 Classy Makeup Looks.",
      link: "/services/makeup-salon/looks",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="w-[100%] h-auto fixed z-[99999]">
      <div className="bg-primaryGradient relative overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              x: {
                duration: 0.7,
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.3,
              },
            }}
            className="!flex !items-center !justify-center !gap-[10px] py-[12px]"
          >
            <div className="font-philosopher text-white text-[16px] font-bold whitespace-nowrap w-[80%] md:w-[unset] text-ellipsis overflow-hidden">
              {items[currentIndex].title}
            </div>
            <button
              aria-label="go-to button"
              onClick={() => {
                router.push(items[currentIndex].link);
              }}
              className="flex justify-center items-center border-[1px] border-white hover:bg-white hover:text-[#E19A8F] text-white duration-700 ease-out hover:ease-in-out font-normal text-[20px] w-[30px] h-[30px] rounded-[70px]"
            >
              <HiChevronDoubleRight />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CTATopbar;
