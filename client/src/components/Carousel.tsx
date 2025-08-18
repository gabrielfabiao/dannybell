"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // <-- Import Autoplay
import { LeftArrow, RightArrow } from "./ArrowIcons";
import { carouselProps } from "@/types";
import { getStrapiURL } from "@/utils/get-strapi-url";

import "swiper/css";
import "swiper/css/navigation";

export default function Carousel({
  images,
  width,
  height,
}: Readonly<carouselProps>) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Navigation, Autoplay]}
      className="relative w-auto h-fit lg:!m-0 overflow-hidden"
      style={{ width: width || "100%", height: height || "auto" }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={
              image?.url ? `${getStrapiURL()}${image.url}` : "/placeholder.jpg"
            }
            alt={image?.alternativeText || "Event image"}
            className="rounded-lg max-w-[100vw] w-full"
          />
        </SwiperSlide>
      ))}
      <LeftArrow />
      <RightArrow />
    </Swiper>
  );
}
