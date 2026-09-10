"use client";
import { motion } from "framer-motion";
import { roboto } from "@/app/fonts";

export function MyName() {
  return (
    <>
      <h1 className="text-5xl md2:text-[5rem] md:text-[9rem] font-bold text-center tracking-[2.2px] pb-6 leading-none px-10 md:px-40">
        UTKU BORA EFIL
      </h1>
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <p className={` text-xl md2:text-[22px] ${roboto.className}`}>
          COMPUTER ENGINEER, FULL STACK WEB DEVELOPER.
        </p>
      </motion.div>
    </>
  );
}
