"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

const featured = [
  "/images/featured/WeAreDevelopers-logo.svg",
  "/images/featured/careerfoundry-logo.svg",
  "/images/featured/colorlib-logo.svg",
  "/images/featured/featured.com-logo.svg",
  "/images/featured/frontend-mentor-logo.svg",
  "/images/featured/masai-logo.svg",
  "/images/featured/hostinger-logo.svg",
  "/images/featured/logo-bdwd.png",
  "/images/featured/upwork-logo.svg",
];

export function MySwiper() {
  return (
    <div className="w-full max-w-[850px] pt-5 flex items-center justify-center">
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
            className=" h-[50px] grid justify-items-center self-center  "
            key={idx}
          >
            <Image
              src={referance}
              className="object-contain  w-auto max-h-[50px] max-w-[98px]"
              alt="references"
              width={98}
              height={50}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
