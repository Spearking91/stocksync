"use client";

import { useEffect, useRef } from "react";
import { Lottie, type LottieHandle } from "lottie-react";
import animationData from "@/public/lottie/404.json";

const MyLottieComponent = () => {
  const lottieRef = useRef<LottieHandle>(null);

  useEffect(() => {
    lottieRef.current?.play();
  }, []);

  return (
    <div className="w-96 h-96 max-w-full">
      <Lottie
        lottieRef={lottieRef}
        src={animationData}
        autoplay
        loop
      />
    </div>
  );
};

export default MyLottieComponent;
