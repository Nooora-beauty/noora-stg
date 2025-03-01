"use client";
import React, { useEffect, useState } from "react";
import {
  // dummyGiftCardDetails,
  dummyPageBarProps,
  // servicesData,
} from "../constant";
import Image from "next/image";
import PageBar from "@/components/library/elements/PageBar";
import shopCard from "@/app/static/images/shopCardBg.png";
import { giftCardList } from "../constant";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createPayment } from "@/services/telrService";
import { cn } from "@/lib/utils";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import textLinkAnimation from "@/app/static/animatedIcons/linkAnimation.json";

const giftCardSteps = [
  {
    name: "Choose Gift",
  },
  {
    name: "Add Details",
  },
  {
    name: "Checkout",
  },
];

interface GiftCardScreenProps {
  title?: string;
}

interface StepsSubSectionProps {
  activeStep: number;
}

const StepsSubSection: React.FC<StepsSubSectionProps> = ({ activeStep }) => {
  return (
    <div
      className={`hidden md:block w-full max-w-[256px] border-r border-[#E7EAF1] `}
    >
      <div className="w-full mt-[40px]">
        {giftCardSteps.map((sub, index) => {
          const isActive = activeStep === index + 1;
          return (
            <div key={index} className="mb-[10px]">
              <div
                className={` flex items-center justify-between pl-[20px] border-l-[4px]  py-[10px] ${
                  isActive
                    ? "border-[#CA0006] bg-[#FFEFEC]"
                    : "border-transparent"
                }`}
              >
                <div className="flex items-center gap-[20px]">
                  {/* <Image
                        src={sub.icon ? sub.icon?.url : ""}
                        alt={sub.name}
                        width={24}
                        height={24}
                      /> */}
                  <div
                    className={`w-[35px] h-[35px] flex items-center justify-center font-philosopher rounded-full text-[18px] ${
                      isActive
                        ? "bg-[#CA0006] text-white"
                        : "bg-[#E6EAF3] text-[#212529]"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span
                    className={`font-philosopher text-md text-[#000] ${
                      isActive ? "" : ""
                    }`}
                  >
                    {sub.name}
                  </span>
                </div>
                {/* {isActive && (
                      <Image
                        src={fadeArrow}
                        alt="arrow"
                        width={16}
                        height={16}
                        className="mr-[65px]"
                      />
                    )} */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const generateDisplayableValues = (cardValue: number) => {
  const vatValue = parseFloat((cardValue * 0.05).toFixed(2));
  const totalValue = parseFloat((cardValue + vatValue).toFixed(2));
  const showValue = cardValue.toFixed(0);

  return {
    vatValue,
    totalValue,
    showValue,
  };
};

const CardSubSection: React.FC<{ cardValue: number }> = ({ cardValue }) => {
  const { vatValue, totalValue, showValue } =
    generateDisplayableValues(cardValue);
  // const vatValue = parseFloat((cardValue * 0.05).toFixed(2));
  // const totalValue = parseFloat((cardValue + vatValue).toFixed(2));
  // const showValue = cardValue.toFixed(0);
  return (
    <div className="w-full md:max-w-fit flex flex-col">
      <div className="w-full mt-[10px] md:mt-[40px] md:max-w-fit mb-[20px] md:mb-[30px]">
        <div className="relative md:w-[347px]">
          <Image
            // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${dummyGiftCardDetails.image?.url || ""}`}
            src={shopCard}
            width={348}
            height={219}
            // unoptimized
            alt="gift-card"
            className="w-full md:max-w-[347px]"
          />
          <div className=" font-philosopher text-[#E6AFA6] flex flex-row absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[20%]">
            <div className="text-[12px] leading-[16px]">AED</div>
            <div className="text-[60px] leading-[64px]">
              {cardValue ? showValue : "---"}
            </div>
          </div>
        </div>
      </div>
      <div className="px-[20px] md:px-0 font-philosopher text-[#D1958B]">
        <div className="flex justify-between mb-[10px]">
          <div className="text-[16px] md:text-[22px] leading-[18px] md:leading-[30px]">
            1 Gift card
          </div>
          <div className="text-[18px] md:text-[26px] leading-[20px] md:leading-[36px]">
            AED {cardValue ? cardValue.toFixed(2) : "---"}
          </div>
        </div>
        <div className="flex justify-between mb-[10px] md:mb-[20px]">
          <div className="text-[16px] md:text-[22px] leading-[18px] md:leading-[30px]">
            Vat 5%
          </div>
          <div className="text-[18px] md:text-[26px] leading-[20px] md:leading-[36px]">
            AED {cardValue ? vatValue : "---"}
          </div>
        </div>
        <div className="flex justify-between total-border text-[#000] py-[10px] md:py-[20px]">
          <div className="text-[16px] md:text-[22px] leading-[18px] md:leading-[30px]">
            Total
          </div>
          <div className="text-[18px] md:text-[26px] leading-[20px] md:leading-[36px]">
            AED {cardValue ? totalValue : "---"}
          </div>
        </div>
      </div>
    </div>
  );
};

interface Inputs {
  fromName: string;
  fromEmail: string;
  toName: string;
  toEmail: string;
  toCountryCode: string;
  toPhoneNumber: string;
  instructions: string;
}

const GiftCardForm = () => {
  const [card, setCard] = useState<{
    price: string;
    description?: string;
  }>(giftCardList[0]);
  const [selectedTab, setSelectedTab] = useState("amount");
  const [activeStep, setActiveStep] = useState<number>(1);

  useEffect(() => {
    if (selectedTab === "amount") {
      setCard({
        price: "200",
      });
    } else {
      setCard(giftCardList[0]);
    }
  }, [selectedTab]);

  const handlePayment = (orderDetails: {
    fromName: string;
    fromEmail: string;
    instructions: string;
    toName: string;
    toEmail: string;
    toCountryCode: string;
    toPhoneNumber: string;
  }) => {
    let details;

    if (selectedTab == "amount") {
      const { totalValue } = generateDisplayableValues(parseFloat(card.price));
      details = {
        amount: `${totalValue}`,
        description: "GiftCard Amount",
        orderDetails,
      };
    } else {
      const { totalValue } = generateDisplayableValues(parseFloat(card.price));
      details = {
        amount: `${totalValue}`,
        description: card.description || "",
        orderDetails,
      };
    }

    createPayment(details);
  };

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // const { totalValue } = generateDisplayableValues(parseFloat(card.price));
    handlePayment(data);
    // console.log(data);
  };

  return (
    <>
      <div className="common-container !w-[90%] !max-w-[1242px] !mb-[40px] md:!mb-[108px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col-reverse md:flex-row w-[100%] md:max-w-[unset] md:min-w-[913px]"
        >
          <StepsSubSection activeStep={activeStep} />
          {/* forms here */}
          <div className="w-full max-w-[641px] md:border-r border-[#E7EAF1] md:mr-[33px]">
            {/* step-1 */}
            <div className="w-full pb-[30px] md:pb-[40px] border-b-[1px] border-[#E7EAF1]">
              <div
                className={cn(
                  "min-h-[51px] mt-[30px] md:mt-[40px] pl-[20px] md:pl-[40px] border-l-[2px] border-[#CA0006] flex items-center justify-between mr-5 md:mr-10"
                )}
              >
                <h3 className="font-philosopher text-[20px] md:text-[25px] leading-[12px] md:leading-[19px] text-[#212529] w-full md:max-w-[248px]">
                  Step 01 - Choose gift
                </h3>
                <button
                  type="button"
                  disabled={activeStep !== 2}
                  onClick={() => {
                    setActiveStep(1);
                  }}
                  className={`${
                    activeStep === 1 ? "hidden" : ""
                  } block w-fit min-w-[102px] font-philosopher bg-[#E6EAF3] text-[#212529] font-normal text-body md:text-[18px] rounded-[65px] py-[12px] px-[10px] md:px-[30px] ml-[10px]`}
                >
                  Back
                </button>
              </div>
              <div
                className={`w-full mt-[20px] ${
                  activeStep !== 1 && "opacity-[0.5]"
                }`}
              >
                {/* amount-service selector */}
                <div
                  className={cn(
                    activeStep !== 1 && "opacity-[0.5]",
                    "w-full max-w-[90%] md:max-w-[520px] m-auto h-full border border-[#DFBEB7] rounded-[10px]"
                  )}
                >
                  {/* selector tabs */}
                  <div className="w-full border-b-[1px] border-[#DFBEB7] flex gap-[20px] md:gap-[40px] mb-[10px] md:mb-[30px] px-[30px]">
                    {[
                      { title: "Gift an amount", value: "amount" },
                      { title: "Gift a service", value: "service" },
                    ].map((tab, index) => {
                      const isSelected = tab.value === selectedTab;
                      return (
                        <div
                          key={index}
                          className={`cursor-pointer py-[10px] md:py-[14px] font-philosopher text-[16px] md:text-[20px] leading-[18px] md:leading-[28px] ${
                            isSelected
                              ? "!text-[#9E5A57] border-b-[2px] border-[#C47D82]"
                              : ""
                          }`}
                          // onClick={() => handleSelectTab(index)}
                          onClick={() => {
                            if (activeStep === 1) {
                              setSelectedTab(tab.value);
                            }
                          }}
                        >
                          <span className="text-[#D99288]">{"• "}</span>
                          <span className="text-[#000000]">{tab.title}</span>
                        </div>
                      );
                    })}
                  </div>
                  {/* selector content */}
                  {selectedTab === "amount" && (
                    <div className="px-[30px] mb-[20px] md:mb-[40px]">
                      <div className="w-full font-normal text-xs md:text-body leading-[18px] md:leading-[21px] text-[#555555] mb-[10px] md:mb-[15px]">
                        Enter your amount
                      </div>
                      <div className="w-full">
                        <div className="flex flex-col md:flex-row gap-x-[10px]">
                          <input
                            type="number"
                            id="amount"
                            value={card.price}
                            onChange={(e) => setCard({ price: e.target.value })}
                            className="w-full h-[50px] md:h-[60px] border border-[#DFBEB7]  rounded-[10px] p-[10px] focus:outline-none placeholder:text-[#212529b3] text-[#212529] text-[16px] md:text-[18px] leading-[18px] md:leading-[27px] font-philosopher"
                            placeholder="Enter your amount"
                            disabled={activeStep !== 1}
                          />
                          <button
                            // onClick={() => handlePayment("amount")}
                            onClick={() => {
                              // if (
                              //   !parseFloat(card.price) ||
                              //   parseFloat(card.price) < 200
                              // ) {
                              //   alert("Minimum Value should be AED 200");
                              //   return;
                              // }
                              setActiveStep(2);
                            }}
                            disabled={activeStep !== 1}
                            type="button"
                            className="disabled:pointer-events-none  w-fit h-fit md:self-center min-w-[102px] font-philosopher bg-primaryGradient transition-all duration-700 ease-in-out hover:transform hover:scale-110 hover:shadow-lg hover:-translate-y-1 text-white font-normal text-body md:text-[18px] rounded-[65px] py-[12px] px-[10px] md:px-[30px] mt-[20px] md:mt-0"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedTab === "service" && (
                    <div className="px-[30px] mb-[20px] md:mb-[40px]">
                      <div className="w-full font-normal text-xs md:text-body leading-[18px] md:leading-[21px] text-[#555555] mb-[10px] md:mb-[15px]">
                        Choose a service
                      </div>
                      <div className="w-full">
                        <div className="flex flex-col md:flex-row gap-x-[10px]">
                          <Select
                            disabled={activeStep !== 1}
                            value={
                              card.description || giftCardList[0].description
                            }
                            onValueChange={(value) => {
                              const foundCard = giftCardList.find(
                                (item) => item.description == value
                              );
                              if (foundCard) {
                                setCard(foundCard);
                              }
                            }}
                          >
                            <SelectTrigger className="w-full h-[50px] md:h-[60px] border border-[#DFBEB7] rounded-[10px] p-[10px] focus:outline-none placeholder:text-[#212529b3] text-[#212529] text-[16px] md:text-[18px] leading-[18px] md:leading-[27px] font-philosopher">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent className="w-[--radix-select-trigger-width] rounded-[10px] border border-[#DFBEB7]">
                              {giftCardList.map((item, index) => (
                                <SelectItem
                                  key={index}
                                  value={`${item.description}`}
                                  className="!bg-white text-gray-500 text-[16px] md:text-[18px] leading-[18px] md:leading-[27px] font-philosopher cursor-pointer"
                                >
                                  AED {item.price}{" "}
                                  <span className="text-red-500">{"• "}</span>{" "}
                                  {item.description}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <button
                            // onClick={() => handlePayment("service")}
                            onClick={() => setActiveStep(2)}
                            disabled={activeStep !== 1}
                            type="button"
                            className="disabled:pointer-events-none  w-fit h-fit md:self-center min-w-[102px] font-philosopher bg-primaryGradient transition-all duration-700 ease-in-out hover:transform hover:scale-110 hover:shadow-lg hover:-translate-y-1 text-white font-normal text-body md:text-[18px] rounded-[65px] py-[12px] px-[10px] md:px-[30px] mt-[20px] md:mt-0"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full max-w-[90%] md:max-w-[520px] m-auto mt-2 flex items-center">
                  <Link
                    href="https://nooora-redesign.vercel.app/gift-and-package-policy"
                    className="text-[#D1958B] hover:underline"
                  >
                    T&C Applies.
                  </Link>
                  <div className="w-[30px] md:w-[40px] h-auto font-bold ml-[-4px] md:ml-[-6px]">
                    <Lottie animationData={textLinkAnimation} />
                  </div>
                </div>
              </div>
            </div>
            {/* step-2 */}
            <div className="w-full md:pb-[40px] md:border-b-[1px] border-[#E7EAF1]">
              <div
                className={cn(
                  activeStep !== 2 && "opacity-[0.5]",
                  "my-[30px] md:my-[40px] pl-[20px] md:pl-[40px] border-l-[2px] border-[#CA0006]"
                )}
              >
                <h3 className="font-philosopher text-[20px] md:text-[25px] leading-[12px] md:leading-[19px] text-[#212529] w-full md:max-w-[248px]">
                  Step 02 - Enter details
                </h3>
              </div>
              {/* section */}
              <form className="full" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full">
                  <div
                    className={cn(
                      activeStep !== 2 && "opacity-[0.5]",
                      "relative border-[1px] border-[#C07858] mb-[20px] md:mb-[30px]"
                    )}
                  >
                    <p className="bg-[#fff] px-[5px] md:px-[10px] font-philosopher font-bold text-[#C07858] text-[16px] md:text-[18px] leading-[18px] md:leading-[27px] absolute top-0 left-[15px] md:left-[31px] -translate-y-[60%]">
                      From
                    </p>
                  </div>
                  <div className="w-full max-w-[470px] flex flex-wrap md:flex-nowrap gap-[20px] px-[20px] md:px-[40px] mb-[40px] md:mb-[60px]">
                    <div className="w-full md:w-[50%] relative">
                      <input
                        type="text"
                        id="name"
                        disabled={activeStep !== 2}
                        {...register("fromName", { required: true })}
                        className="disabled:opacity-[0.5] w-full  border-b border-[#C67C71] rounded-[10px] rounded-bl-none py-[10px] focus:outline-none  placeholder:text-[#212529b3] text-[#212529] text-[16px] md:text-[18px] leading-[18px] md:leading-[27px] font-philosopher"
                        placeholder="Name"
                      />
                      {errors.fromName && (
                        <span className="absolute -bottom-1 right-0 md:left-0 translate-y-full text-xs text-[red]">
                          * required
                        </span>
                      )}
                    </div>
                    <div className="w-full md:w-[50%] relative">
                      <input
                        type="email"
                        id="email"
                        disabled={activeStep !== 2}
                        {...register("fromEmail", { required: true })}
                        className="disabled:opacity-[0.5] w-full border-b border-[#C67C71] rounded-[10px] rounded-bl-none py-[10px] focus:outline-none  placeholder:text-[#212529b3] text-[#212529] text-[16px] md:text-[18px] leading-[18px] md:leading-[27px] font-philosopher"
                        placeholder="Email"
                      />
                      {errors.fromEmail && (
                        <span className="absolute -bottom-1 right-0 md:left-0 translate-y-full text-xs text-[red]">
                          * required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div
                    className={cn(
                      activeStep !== 2 && "opacity-[0.5]",
                      "relative border-[1px] border-[#C07858]  mb-[20px] md:mb-[30px]"
                    )}
                  >
                    <p className="bg-[#fff] px-[5px] md:px-[10px] font-philosopher font-bold text-[#C07858] text-[16px] md:text-[18px] leading-[18px] md:leading-[27px] absolute top-0 left-[15px] md:left-[31px] -translate-y-[60%]">
                      Recipient
                    </p>
                  </div>
                  <div className="w-full max-w-[470px] flex flex-wrap md:flex-nowrap gap-[20px] px-[20px] md:px-[40px] mb-[20px]">
                    <div className="w-full md:w-[50%] relative">
                      <input
                        type="text"
                        id="name"
                        {...register("toName", { required: true })}
                        disabled={activeStep !== 2}
                        className="disabled:opacity-[0.5] w-full border-b border-[#C67C71] rounded-[10px] rounded-bl-none py-[10px] focus:outline-none  placeholder:text-[#212529b3] text-[#212529] text-[16px] md:text-[18px] leading-[18px] md:leading-[27px] font-philosopher"
                        placeholder="Name"
                      />
                      {errors.toName && (
                        <span className="absolute -bottom-1 right-0 md:left-0 translate-y-full text-xs text-[red]">
                          * required
                        </span>
                      )}
                    </div>
                    <div className="w-full md:w-[50%] relative">
                      <input
                        type="email"
                        id="email"
                        {...register("toEmail", { required: true })}
                        disabled={activeStep !== 2}
                        className="disabled:opacity-[0.5] w-full border-b border-[#C67C71] rounded-[10px] rounded-bl-none py-[10px] focus:outline-none  placeholder:text-[#212529b3] text-[#212529] text-[16px] md:text-[18px] leading-[18px] md:leading-[27px] font-philosopher"
                        placeholder="Email"
                      />
                      {errors.toEmail && (
                        <span className="absolute -bottom-1 right-0 md:left-0 translate-y-full text-xs text-[red]">
                          * required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col w-full max-w-[470px] px-[20px] md:px-[40px] mb-[20px]">
                    <div className="flex gap-[15px]">
                      <select
                        disabled={activeStep !== 2}
                        {...register("toCountryCode")}
                        className="disabled:opacity-[0.5] w-[109px] border-b border-[#C67C71] rounded-[10px] rounded-bl-none py-[10px] focus:outline-none placeholder:text-[#212529b3] text-[#212529] text-[16px] md:text-[18px] leading-[18px] md:leading-[27px] font-philosopher"
                      >
                        <option value="+971">+971</option>
                        {/* Add more country codes as needed */}
                      </select>
                      <div className="w-full relative">
                        <input
                          type="tel"
                          id="phone"
                          {...register("toPhoneNumber", { required: true })}
                          disabled={activeStep !== 2}
                          className="disabled:opacity-[0.5] border-b border-[#C67C71] rounded-[10px] rounded-bl-none py-[10px] focus:outline-none placeholder:text-[#212529b3] text-[#212529] text-[16px] md:text-[18px] leading-[18px] md:leading-[27px] font-philosopher w-full"
                          placeholder="1234567890"
                        />

                        {errors.toPhoneNumber && (
                          <span className="absolute -bottom-1 right-0 md:left-0 translate-y-full text-xs text-[red]">
                            * required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mb-[20px] md:mb-[26px] w-full max-w-[470px] px-[20px] md:px-[40px]">
                    <textarea
                      id="message"
                      {...register("instructions")}
                      disabled={activeStep !== 2}
                      className="disabled:opacity-[0.5] border-b border-[#C67C71] rounded-[10px] rounded-bl-none py-[10px] focus:outline-none placeholder:text-[#212529b3] text-[#212529] text-[16px] md:text-[18px] leading-[18px] md:leading-[27px] font-philosopher"
                      placeholder="Instructions"
                      style={{ resize: "none" }}
                      rows={2}
                    />
                  </div>
                  <div className="w-full max-w-[470px] px-[20px] md:px-[40px]">
                    <button
                      type="submit"
                      disabled={activeStep !== 2}
                      // onClick={() => handlePayment()}
                      className="disabled:pointer-events-none disabled:opacity-[0.5] w-fit min-w-[102px] font-philosopher bg-primaryGradient transition-all duration-700 ease-in-out hover:transform hover:scale-110 hover:shadow-lg hover:-translate-y-1 text-white font-normal text-body md:text-[18px] rounded-[65px] py-[12px] px-[10px] md:px-[30px]"
                    >
                      Pay now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* card here */}
          <CardSubSection cardValue={parseFloat(card.price)} />
        </motion.div>
      </div>
    </>
  );
};

const GiftCardScreen: React.FC<GiftCardScreenProps> = ({}) => {
  return (
    <div className="w-full pt-[130px] lg:pt-[144px]">
      <PageBar
        {...{
          ...dummyPageBarProps,
          sectionDetails: {
            ...dummyPageBarProps.sectionDetails,
            pageTitle: "Gift Card",
            barIcon: {
              url: "/uploads/Gift_Card_removebg_preview_30d61cfa6e.png",
            },
            breadCrumbs: [
              {
                text: "Home",
                url: "/",
              },
              {
                text: "Gift Card",
                url: "",
              },
            ],
          },
        }}
        className="!mt-[10px] md:!mt-[15px]"
      />
      <GiftCardForm />
    </div>
  );
};

export default GiftCardScreen;
