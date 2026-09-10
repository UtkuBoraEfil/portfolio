"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

import { featured } from "@/lib/data";

export default function MySwiper() {
  return (
    <div className="w-full max-w-[850px] pt-5 px-10 flex items-center justify-center">
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 5,
          },
        }}
        modules={[Autoplay, Navigation]}
      >
        {featured.map((referance, idx) => (
          <SwiperSlide
            className="h-[50px] grid justify-items-center self-center  "
            key={idx}
          >
            <a href={referance.link} className="object-contain w-auto max-h-[50px] max-w-[98px] text-white">

            <img
              src={referance.img}
              className="object-contain w-auto max-h-[50px] max-w-[98px] text-white"
              alt="references"
              width={98}
              height={50}
            />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
