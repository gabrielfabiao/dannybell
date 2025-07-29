import React from "react";
import { StrapiImage } from "../blocks/StrapiImage";
import type { HeroSectionProps } from "@/types";
import "../../styles/button.css"; // Importing button styles
import TodaysMenu from "../TodaysMenu";

const HeroSection = ({
  theme,
  heading,
  cta,
  image,
  logo,
  author,
  publishedAt,
  darken = false,
  Menu,
  date,
  description,
}: Readonly<HeroSectionProps>) => {


  return (
    <section className="w-[100vw] h-[100vh]">
      <div className="relative flex w-full h-full justify-center items-center p-4">
        <StrapiImage
          src={image?.url}
          alt={image?.alternativeText || "Hero Image"}
          className="h-full min-w-full min-h-full object-cover block opacity-60"
          width={1920}
          height={1080}
          priority
        />
      </div>
      <div className="text-xl absolute top-0 left-0 flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-7xl font-light mb-4 p-6 mt-40 text-left">
          {heading}
        </h1>
      </div>
      <button className="absolute bottom-40 left-1/2 -translate-x-1/2 bg-[#9e3333] text-sxl text-white hover:text-black py-4 px-8 rounded-lg hover:bg-red-100 transition-colors">
        {cta?.text}
      </button>
      <img
        className="w-24 h-24 absolute left-1/2 -translate-x-1/2 top-12"
        src={`http://localhost:1337${logo?.image.url}`}
        alt={logo?.alternativeText || "Logo"}
        width={100}
        height={100}
      />
      <TodaysMenu
        menu={Menu || []}
        date={date || ""}
        description={description || ""}
      />
    </section>
  );
};

export default HeroSection;
