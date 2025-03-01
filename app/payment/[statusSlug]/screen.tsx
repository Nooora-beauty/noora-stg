"use client";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import paymentSuccess from "@/app/static/animatedIcons/paymentSuccess.json";
import paymentFail from "@/app/static/animatedIcons/paymentFail.json";
import paymentCancel from "@/app/static/animatedIcons/paymentCancel.json";
import { useRouter, useSearchParams } from "next/navigation";
import { saveGiftCardDetails } from "@/services/mailService";

interface PaymentStatusScreenProps {
  status: "success" | "failed" | "canceled";
}

const PaymentStatusScreen: React.FC<PaymentStatusScreenProps> = ({
  status,
}) => {
  const router = useRouter();
  const query = useSearchParams();

  console.log({ query });

  useEffect(() => {
    if (status === "success") {
      const fromName = query.get("fromName");
      const fromEmail = query.get("fromEmail");
      const toName = query.get("toName");
      const toEmail = query.get("toEmail");
      const toCountryCode = query.get("toCountryCode");
      const toPhoneNumber = query.get("toPhoneNumber");
      const instructions = query.get("instructions");
      const price = query.get("price");
      if (
        fromName &&
        fromEmail &&
        toName &&
        toEmail &&
        toCountryCode &&
        toPhoneNumber &&
        instructions &&
        price
      ) {
        console.log("RUNNING DATA SAVE ----------------------");
        saveGiftCardDetails({
          fromName,
          fromEmail,
          toName,
          toEmail,
          toCountryCode,
          toPhoneNumber,
          instructions,
          price,
        });
      }
    }
  }, [status]);

  const handleAnimationComplete = () => {
    router.push("/gift-a-friend");
  };

  return (
    <>
      <div className="w-full pt-[130px] lg:pt-[144px]">
        <div className="h-[80vh] flex flex-col justify-center items-center">
          <div className="bg-[#fff] flex flex-col justify-center items-center rounded-[20px] card-shadow w-[90%] md:w-[400px] h-[300px] md:h-[400px]">
            <div className="flex flex-col justify-center items-center gap-y-[20px]">
              {status === "success" && (
                <>
                  <div className="w-[100px] md:w-[200px] h-auto min-h-[100px] md:min-h-[200px]">
                    <Lottie
                      animationData={paymentSuccess}
                      loop={false}
                      onComplete={() => handleAnimationComplete()}
                    />
                  </div>
                  <div className="text-lg md:text-xlg leading-[28px] md:leading-[52px] text-[#212529]  font-philosopher">
                    Payment Successful
                  </div>
                </>
              )}
              {status === "failed" && (
                <>
                  <div className="w-[100px] md:w-[200px] h-auto min-h-[100px] md:min-h-[200px]">
                    <Lottie
                      animationData={paymentFail}
                      loop={false}
                      onComplete={() => handleAnimationComplete()}
                    />
                  </div>
                  <div className="text-lg md:text-xlg leading-[28px] md:leading-[52px] text-[#212529]  font-philosopher">
                    Payment Failed!
                  </div>
                </>
              )}
              {status === "canceled" && (
                <>
                  <div className="w-[100px] md:w-[200px] h-auto min-h-[100px] md:min-h-[200px]">
                    <Lottie
                      animationData={paymentCancel}
                      loop={false}
                      onComplete={() => handleAnimationComplete()}
                    />
                  </div>
                  <div className="text-lg md:text-xlg leading-[28px] md:leading-[52px] text-[#212529]  font-philosopher">
                    Payment Canceled!
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentStatusScreen;
