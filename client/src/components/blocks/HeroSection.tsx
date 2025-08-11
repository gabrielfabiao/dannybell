"use client"

import  React, { useEffect } from "react";

import { StrapiImage } from "../blocks/StrapiImage";
import type { HeroSectionProps } from "@/types";
import FadeInSection from "../FadeInSection";
import WeeklyMenu from "../WeeklyMenu";

import "../../app/aboutus.css"

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

  const transformedMenu = menu?.map((item) => ({
    text: item.title,
    description: item.note,
  })) || [];

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getFullYear())}`;
  const formattedPropDate = new Date(date!).toLocaleDateString('en-GB').slice(0, 10);


  console.log("formattedDate", formattedDate)
  console.log('date object', formattedPropDate)



  return (
    <FadeInSection>
    <section 
      className="max-w-[100vw] h-[100vh] z-50 flex justify-center items-center relative top-0 bg-black"
      id="reservar"
    >
      <StrapiImage
        src={image?.url}
        alt={image?.alternativeText || "Hero Image"}
        className="w-full h-full max-w-[100vw] max-h-[full] object-cover block opacity-60"
        width={1920}
        height={1080}
        priority
      />
      <div className="absolute top-0 flex w-full h-full justify-center items-center max-w-[1440px]">
      <h1 className="absolute top-60 text-white z-20 text-6xl font-light mb-4 p-6 text-center lg:top-1/2 lg:-translate-y-1/2 lg:left-0">
        {heading}
      </h1>
      <button className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-[#842020] text-sxl text-white hover:text-black py-4 px-8 rounded-lg hover:!bg-red-100 transition-colors grainy-bg">
        <a href="tel:+351917464719">{cta?.text}</a>
      </button>
      <img
        className="w-40 h-40 absolute left-1/2 -translate-x-1/2 top-12 lg:left-0 lg:translate-x-1/2 lg:w-25 lg:h-25"
        src={`http://localhost:1337${logo?.image.url}`}
        alt={logo?.alternativeText || "Logo"}
        width={100}
        height={100}
      />
      <WeeklyMenu
        menu={transformedMenu || []}
        date={formattedPropDate || ""}
        description={description || ""}
        price={price || 11}
      />
      </div>
    </section>
    </FadeInSection>
  );
};

export default HeroSection;
