"use client";

import Lottie from "lottie-react";
import json from "./scrollDown.json";
import Link from "next/link";

export default function ScrollDown() {
  return (
    <div className=" w-full flex justify-center relative bottom-24">
      <Link href="#contact">
        <Lottie loop={true} animationData={json} className="!max-h-[60px]" />
      </Link>
    </div>
  );
}
