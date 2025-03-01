import React from "react";
import TestimonialSlider from "../../elements/TestimonialSlider";
import { useCommonSections } from "@/context/CommonSectionsContext";
import { motion } from "motion/react";

const TestimonialSection = () => {
  const data = useCommonSections();
  const testimonials = data?.testimonials;
  return (
    // <div
    <motion.div
      initial={{ y: 20, opacity: 0.01 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        ease: "easeOut",
        duration: 0.4,
        delay: 0.2,
      }}
      className="common-container !w-[90%] !max-w-[1062px] !mb-[70px] md:!mb-[120px]"
    >
      <TestimonialSlider list={testimonials} />
    </motion.div>
    // </div>
  );
};

export default TestimonialSection;
