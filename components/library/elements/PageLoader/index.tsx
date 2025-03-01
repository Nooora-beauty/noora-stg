"use client";
import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import loadingWomanAnimation from "@/app/static/loaders/loadingWoman.json";
import loadingTextAnimation from "@/app/static/loaders/loadingText.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { LottieRefCurrentProps } from "lottie-react";

const PageLoader = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    if (animationRef?.current) {
      (animationRef?.current as LottieRefCurrentProps).setSpeed(5); // Set the speed (1.5x faster)
    }
  }, []);
  return (
    <div className="fixed w-full h-full bg-white z-[999999999] overflow-hidden">
      <div className="relative w-full h-full flex flex-col justify-center overflow-hidden">
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="w-[200px] h-auto">
            <Lottie
              animationData={loadingWomanAnimation}
              lottieRef={animationRef}
              loop={false}
            />
          </div>
          <Lottie animationData={loadingTextAnimation} />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
