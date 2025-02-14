"use client";

import dynamic from "next/dynamic";

import animationData from "../../../public/images/tla_default_loader.json";

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

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
    return null; // or a fallback component
  }

  return <Lottie options={defaultOptions} width={width} height={height} />;
};
