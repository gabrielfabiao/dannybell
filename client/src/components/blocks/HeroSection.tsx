"use client";

import React, { useEffect } from "react";

import { StrapiImage } from "../blocks/StrapiImage";
import { getStrapiURL } from "@/utils/get-strapi-url";
import type { HeroSectionProps } from "@/types";
import FadeInSection from "../FadeInSection";
import WeeklyMenu from "../WeeklyMenu";

import "../../app/aboutus.css";

const HeroSection = ({
  heading,
  cta,
  image,
  logo,
  menu = [],
  date,
  description,
  price,
  subheading,
}: Readonly<HeroSectionProps>) => {
  const transformedMenu =
    menu?.map((item) => ({
      text: item.title,
      description: item.note,
    })) || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, "0")}/${String(
    today.getMonth() + 1
  ).padStart(2, "0")}/${String(today.getFullYear())}`;
  const formattedPropDate = new Date(date!)
    .toLocaleDateString("en-GB")
    .slice(0, 10);

  console.log("formattedDate", formattedDate);
  console.log("date object", formattedPropDate);

  return (
    <FadeInSection>
      <section
        className="max-w-[100vw] h-[100vh] z-50 flex justify-center items-center relative top-0 bg-black"
        id="reservar"
      >
        <StrapiImage
          src={image?.url}
          alt={image?.alternativeText || "Hero Image"}
          className="w-full h-full max-w-[100vw] max-h-[full] object-cover block opacity-50"
          width={1920}
          height={1080}
          priority
        />
        <button className="absolute bottom-15 left-1/2 -translate-x-1/2 bg-[#842020] text-sxl text-white hover:text-black py-4 px-8 rounded-lg hover:!bg-red-100 transition-colors grainy-bg lg:hidden">
          <a href="tel:+351917464719">{cta?.text}</a>
        </button>
        <div className="absolute top-0 flex w-full h-full justify-center items-center max-w-[1440px]">
          <div className="absolute top-45 lg:top-[50%] lg:-translate-y-1/2 lg:left-40 text-[#dddddd] z-20 font-light mb-4 p-6 text-center lg:text-left lg:w-[50%]">
            <h1 className="text-6xl italic font-[garamond] mb-4 lg:mb-8">{heading}</h1>
            <h2 className="text-xl max-[380px]:hidden lg:max-w-[50%] lg:mb-8">
              {subheading}
            </h2>
            <button className="bg-[#842020] text-sxl text-white hover:text-black py-4 px-8 rounded-lg hover:!bg-red-100 transition-colors grainy-bg lg:flex hidden">
              <a href="tel:+351917464719">{cta?.text}</a>
            </button>
          </div>
          <StrapiImage
            className="w-30 h-30 absolute left-1/2 -translate-x-1/2 top-12 lg:left-0 lg:translate-x-1/2 lg:w-25 lg:h-25"
            src={`${getStrapiURL()}${logo?.image.url}`}
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
