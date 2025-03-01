"use client";
import {
  FaqAccordion,
  FaqAccordionContent,
  FaqAccordionItem,
  FaqAccordionTrigger,
} from "@/components/ui/faqAccordian";
import React, { useState, useCallback } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { motion } from "motion/react";
interface CommonQuestionsSectionProps {
  title?: string;
  isWeddingPageFAQ?: boolean;
  commonQuestions?: {
    question: string;
    answer: string;
  }[];
}

const CommonQuestionsSection: React.FC<CommonQuestionsSectionProps> = ({
  commonQuestions = [],
  isWeddingPageFAQ = false
}) => {
  const [visibleQuestions, setVisibleQuestions] = useState(4);
  
  const loadMore = useCallback(() => {
    setVisibleQuestions((prev) => prev + 4);
  }, []);

  if (!commonQuestions.length) return null;
  return (
    <>
      {commonQuestions && commonQuestions.length > 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeOut",
            duration: 0.4,
            delay: 0.2,
          }}
          className={`common-container !w-[90%] !max-w-[1242px] md:!mb-[108px] ${isWeddingPageFAQ ? "!mb-[40px]" : "!mb-[90px]"}`}
        >
          <div className="mb-[10px] md:mb-[20px]">
            <h2
              className="w-full max-w-[230px] md:max-w-[400px] m-auto text-lg md:text-xxlg leading-[28px] md:leading-[52px] text-start text-[#212529] mb-[20px] md:mb-[40px] font-philosopher"
              // dangerouslySetInnerHTML={{ __html: sectionDetails.title }}
            >
              Common <i className="title-highlight">questions</i>
            </h2>
          </div>

          <FaqAccordion
            type="single"
            collapsible
            className="w-full !border-t-[1px] !border-[#616867] mb-[40px] md:mb-[45px]"
          >
            {commonQuestions &&
              commonQuestions?.slice(0, visibleQuestions).map((item, index) => {
                return (
                  <FaqAccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="!border-[#616867]"
                  >
                    <FaqAccordionTrigger className="!no-underline !py-[20px]  md:!py-4">
                      <span className="inline-flex w-full md:gap-x-[105px]">
                        <h3 className="w-full min-w-fit font-philosopher font-bold text-[18px] md:text-[20px] text-[#3C3D42] leading-[22px]">
                          {item.question}
                        </h3>
                        <FaqAccordionContent className="hidden lg:block min-h-[20px] !max-w-[95%] !no-underline text-[#616867] !font-normal !text-mobileBody md:!text-body !leading-[20px] md:!leading-[28px]">
                          <h3
                            dangerouslySetInnerHTML={{ __html: item.answer }}
                          />
                        </FaqAccordionContent>
                      </span>
                    </FaqAccordionTrigger>
                    <FaqAccordionContent className="block lg:hidden text-[#616867] !font-normal !text-mobileBody md:!text-body !leading-[20px] md:!leading-[28px] !pb-[20px] md:!py-4">
                      <h3 dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </FaqAccordionContent>
                  </FaqAccordionItem>
                );
              })}
          </FaqAccordion>
          <div className="flex justify-center">
            {commonQuestions.length > 4 &&
              visibleQuestions < commonQuestions.length && (
                <div className="cursor-pointer flex items-center justify-between w-[100px] md:w-[115px] font-normal text-sm md:text-[16px] text-[#C07858] uppercase leading-[22px] md:leading-[25px]">
                  <p onClick={loadMore}>Load more</p>
                  <AiOutlinePlus />
                </div>
              )}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CommonQuestionsSection;
