"use client";
import { ArrowLeft } from "lucide-react";
import { useSwiper } from "swiper/react";

export function NavigateLeft() {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slidePrev()} className="">
      <ArrowLeft className="w-[50px]" />
    </button>
  );
}
