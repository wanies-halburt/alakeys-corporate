"use client";

import Lottie from "react-lottie";

import animationData from "../../../public/images/tla_default_loader.json";

export const Loader = ({ width, height, animation }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation ?? animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} width={width} height={height} />;
};
