"use client";

import Lottie from "react-lottie";

import animationData from "../../../public/images/tla_default_loader.json";

// const Lottie = dynamic(() => import("react-lottie"), {
//   ssr: false,
// });

export const Loader = ({ width, height, animation }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation ?? animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (!defaultOptions.animationData) {
    return <div>Loading...</div>; // or a fallback component
  }

  return <Lottie options={defaultOptions} width={width} height={height} />;
};
