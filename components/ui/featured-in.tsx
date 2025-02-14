"use client";
 
//import React, { useEffect, useState } from "react";
import { MySwiper } from "@/components/ui/swiper";

export function FeaturedIn () {
  return (
    <div className=" rounded-md flex-1 flex flex-col antialiased items-center  relative overflow-hidden opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
      <h1 className="text-center text-sm md2:text-xl tracking-[2.2px] font-semibold">AS FEATURED IN</h1>
      <MySwiper />
    </div>
  );
}