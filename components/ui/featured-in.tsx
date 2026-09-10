"use client";
import { motion } from "framer-motion";
import MySwiper from "./swiper";

export function FeaturedIn() {
  return (
    <motion.div 
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 0.3,
    }}
    whileHover={{
      opacity: 1,
      transition: {
      duration: 0.5, 
      },
    }}
    transition={{
      duration: 1, 
      ease: "easeInOut",
    }}
      className="rounded-md flex-1 flex flex-col antialiased items-center relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
      <h1 className="text-center text-sm md2:text-xl tracking-[2.2px] font-semibold">
      AVAILABLE ON
      </h1>
      <MySwiper />
    </motion.div>
  );
}
