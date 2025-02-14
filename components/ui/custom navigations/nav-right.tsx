"use client";
import { ArrowRight } from "lucide-react";
import { useSwiper } from "swiper/react";

export function Navigate_right() {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext()} className="">
      <ArrowRight className="w-[50px]" />
    </button>
  );
}
