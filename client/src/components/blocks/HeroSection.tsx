"use client"

import  React, { useEffect } from "react";

import { StrapiImage } from "../blocks/StrapiImage";
import type { HeroSectionProps } from "@/types";
import FadeInSection from "../FadeInSection";

import TodaysMenu from "../TodaysMenu";

const HeroSection = ({
  heading,
  cta,
  image,
  logo,
  menu = [],
  date,
  description,
  price,
}: Readonly<HeroSectionProps>) => {

  console.log("menu", menu)

  const transformedMenu = menu?.map((item) => ({
    text: item.title,
    description: item.note,
  })) || [];

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <FadeInSection>
    <section 
      className="w-[100vw] h-[100vh] z-50 flex justify-center items-center relative top-0 bg-black"
      id="reservar"
    >
      <StrapiImage
          src={image?.url}
          alt={image?.alternativeText || "Hero Image"}
          className="h-full min-w-full min-h-full object-cover block opacity-60"
          width={1920}
          height={1080}
          priority
        />
      <div className="absolute top-0 flex w-full h-full justify-center items-center max-w-[1440px]">
      <h1 className="absolute top-60 text-white z-20 text-6xl font-light mb-4 p-6 text-center lg:top-1/2 lg:-translate-y-1/2 lg:left-0">
        {heading}
      </h1>
      <button className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-[#842020] text-sxl text-white hover:text-black py-4 px-8 rounded-lg hover:bg-red-100 transition-colors">
        <a href="tel:+351917464719">{cta?.text}</a>
      </button>
      <img
        className="w-40 h-40 absolute left-1/2 -translate-x-1/2 top-12 lg:left-0 lg:translate-x-1/2 lg:w-25 lg:h-25"
        src={`http://localhost:1337${logo?.image.url}`}
        alt={logo?.alternativeText || "Logo"}
        width={100}
        height={100}
      />
      {menu.length > 0 &&
      <TodaysMenu
      menu={transformedMenu || []}
      date={date || ""}
      description={description || ""}
      price={price || 10}
      />}
      </div>
    </section>
    </FadeInSection>
  );
};

export default HeroSection;
