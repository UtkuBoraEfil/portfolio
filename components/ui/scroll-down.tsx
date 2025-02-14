"use client";

import Lottie from "lottie-react";
import json from "./scrollDown.json";

export default function ScrollDown() {
  return (
    <div className=" w-full flex justify-center relative bottom-28">
      <Lottie loop={true} animationData={json} className="!max-h-[60px]" />
    </div>
  );
}
