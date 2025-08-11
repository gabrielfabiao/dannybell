'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';  // <-- Import Autoplay
import { LeftArrow, RightArrow } from "./ArrowIcons"
import { carouselProps } from "@/types"

import 'swiper/css';
import 'swiper/css/navigation';


export default function Carousel({ images }: Readonly<carouselProps>) {

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Navigation, Autoplay]}
      className="relative w-auto h-fit lg:w-[450px] lg:!m-0 overflow-hidden max-w-[100%]"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image?.url}
            alt={image?.alternativeText || ""}
            className='rounded-lg max-w-[100vw] w-full'
          />
        </SwiperSlide>
      ))}
      <LeftArrow />
      <RightArrow />
    </Swiper>
  );
}

