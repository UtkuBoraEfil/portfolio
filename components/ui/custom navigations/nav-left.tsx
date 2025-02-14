"use client";
import { ArrowLeft } from "lucide-react";
import { useSwiper } from "swiper/react";

export function Navigate_left() {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slidePrev()} className="">
      <ArrowLeft className="w-[50px]" />
    </button>
  );
}
