"use client";
import React, { useState } from "react";
import Image from "next/image";
import locationMap from "@/app/static/images/locationMap.png";
import locationPointer from "@/app/static/icons/locationPointer.svg";
import { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { sendContactEmail } from "@/services/mailService";
import Link from "next/link";
import { motion } from "motion/react";
import ReCAPTCHA from "react-google-recaptcha";

interface ContactFormSectionProps {
  title: string;
}

interface Inputs {
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  location: string;
  message: string;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({ title }) => {
  const [formDisabled, setFormDisabled] = useState(false);
  const [solvedCaptcha, setSolvedCaptcha] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setFormDisabled(true);
    await sendContactEmail(data)
      .then(() => {
        reset();
        setFormDisabled(false);
        setSuccessMessage(
          "Thank you for reaching out! We’ll get back to you soon."
        );
      })
      .catch(() => {
        setFormDisabled(false);
      });
  };

  return (
    <>
      <div className="common-container !w-[90%] !max-w-[1242px] !mt-[32px] md:!mt-[65px] !mb-[67px] md:!mb-[133px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.4,
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row gap-y-[50px] justify-between items-center"
        >
          <div className="w-full">
            <div className="flex flex-col w-full md:max-w-[548px] mb-[13px] md:mb-[26px]">
              <h3
                className="text-md md:text-[45px] text-[#212529] leading-[28px] md:leading-[52px]  mb-[13px] md:mb-[26px] font-philosopher"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <div
                className="flex flex-col gap-y-[10px] md:gap-y-[20px] text-[#C67C71] text-mobileBody md:text-[20px] leading-[18px] md:leading-[25px] font-philosopher font-normal"
                // dangerouslySetInnerHTML={{ __html: sectionDetails.description }}
              >
                Please fill the form
              </div>
            </div>
            <div className="w-full">
              {/* form */}
              <div className="flex flex-col w-full md:max-w-[466px]">
                <form
                  className="flex flex-col gap-y-[20px]"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex gap-[20px]">
                    <div className="w-[50%] relative">
                      <input
                        type="text"
                        id="name"
                        {...register("name", { required: true })}
                        className="disabled:opacity-[0.5] w-full border-b border-[#C67C71] rounded-[10px] rounded-bl-none py-[10px] focus:outline-none  placeholder:text-[#212529b3] text-[#212529] font-philosopher"
                        placeholder="Enter your name"
                        disabled={formDisabled}
                      />
                      {errors.name && (
                        <span className="absolute -bottom-1 right-0 md:left-0 translate-y-full text-xs text-[red]">
                          * required
                        </span>
                      )}
                    </div>
                    <div className="w-[50%] relative">
                      <input
                        type="email"
                        id="email"
                        {...register("email", { required: true })}
                        className="disabled:opacity-[0.5] w-full border-b border-[#C67C71] rounded-[10px] rounded-bl-none py-[10px] focus:outline-none  placeholder:text-[#212529b3] text-[#212529] font-philosopher"
                        placeholder="Enter your email"
                        disabled={formDisabled}
                      />
                      {errors.email && (
                        <span className="absolute -bottom-1 right-0 md:left-0 translate-y-full text-xs text-[red]">
                          * required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-[15px]">
                      <select
                        {...register("countryCode")}
                        disabled={formDisabled}
                        className="disabled:opacity-[0.5] w-[109px] border-b border-[#C67C71] rounded-[10px] rounded-bl-none py-[10px] focus:outline-none placeholder:text-[#212529b3] text-[#212529] font-philosopher"
                      >
                        <option value="+971">+971</option>
                        {/* Add more country codes as needed */}
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        {...register("phoneNumber", { required: true })}
                        className="disabled:opacity-[0.5] border-b border-[#C67C71] rounded-[10px] rounded-bl-none py-[10px] focus:outline-none placeholder:text-[#212529b3] text-[#212529] font-philosopher w-full"
                        placeholder="1234567890"
                        disabled={formDisabled}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-full relative">
                      <input
                        type="text"
                        id="location"
                        {...register("location", { required: true })}
                        className="disabled:opacity-[0.5] w-full border-b border-[#C67C71] rounded-[10px] rounded-bl-none py-[10px] focus:outline-none placeholder:text-[#212529b3] text-[#212529] font-philosopher"
                        placeholder="Enter your location"
                        disabled={formDisabled}
                      />
                      {errors.location && (
                        <span className="absolute -bottom-1 right-0 md:left-0 translate-y-full text-xs text-[red]">
                          * required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col mb-[13px] md:mb-[26px]">
                    <div className="w-full relative">
                      <textarea
                        id="message"
                        {...register("message", { required: true })}
                        className="disabled:opacity-[0.5] w-full border-b border-[#C67C71] rounded-[10px] rounded-bl-none py-[10px] focus:outline-none placeholder:text-[#212529b3] text-[#212529] font-philosopher"
                        placeholder="Type your message"
                        style={{ resize: "none" }}
                        rows={2}
                        disabled={formDisabled}
                      />
                      {errors.message && (
                        <span className="absolute -bottom-1 right-0 md:left-0 translate-y-full text-xs text-[red]">
                          * required
                        </span>
                      )}
                    </div>
                  </div>
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY || ""}
                    onChange={(value) => {
                      if (value) {
                        setSolvedCaptcha(true);
                      } else {
                        setSolvedCaptcha(false);
                      }
                    }}
                  />
                  <button
                    type="submit"
                    disabled={formDisabled || !solvedCaptcha}
                    className="disabled:pointer-events-none disabled:opacity-[0.5] font-philosopher bg-primaryGradient transition-all duration-700 ease-in-out hover:transform hover:scale-110 hover:shadow-lg hover:-translate-y-1 text-white font-normal text-xs md:text-[16px] rounded-[65px] py-[16px] px-[10px] md:px-[12px]"
                  >
                    {formDisabled ? "Sending..." : "SUBMIT"}
                  </button>
                  {successMessage && (
                    <p className="font-philosopher text-[16px] text-center text-[#008000]">
                      {successMessage}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
          <div className="w-full md:w-fit">
            <Link
              href={"https://g.co/kgs/uob2n7h"}
              target="_blank"
              className="block relative w-full h-auto min-w-full md:min-w-[545px] min-h-[180px] md:min-h-[785px] overflow-hidden rounded-[320px]"
            >
              <Image
                src={locationMap}
                width={545}
                height={785}
                alt="category details image"
                className="h-[785px] w-[545px] absolute top-0 -translate-y-[35%] md:translate-y-[unset]"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] md:-translate-y-[80%] w-[33px] md:w-[67px] h-auto">
                <Image
                  src={locationPointer}
                  alt="call icon"
                  className="w-full h-full"
                />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactFormSection;
