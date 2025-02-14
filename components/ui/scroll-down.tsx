"use client"
import scrollDown from "./scrollDown.json"
import Lottie from "lottie-react";

export function ScrollDown () {
  return (
    <div className=" w-full flex justify-center relative bottom-28" >
      <Lottie loop={true} animationData={scrollDown} className="!max-h-[60px]"/>
    </div>
  );
};
