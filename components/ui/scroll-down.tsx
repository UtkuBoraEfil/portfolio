"use client";
import { motion } from "framer-motion";

import Lottie from "lottie-react";
import json from "./scrollDown.json";
import Link from "next/link";

export default function ScrollDown() {
  return (
    <motion.div
    initial={{
      opacity: 0,
      y: 50,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 0.5,
      delay: 1,
    }}
    className=" w-full flex justify-center relative bottom-24">
      <Link href="#contact">
        <Lottie loop={true} animationData={json} className="!max-h-[60px]" />
      </Link>
    </motion.div>
  );
}
