import React from "react";
import FadeInSection from "../FadeInSection";
import { AboutUsProps, ImageProps } from "@/types";
import { getStrapiURL } from "@/utils/get-strapi-url";
import Carousel from "../Carousel";
import "../../app/aboutus.css";

const AboutUs = ({
  title,
  description,
  image,
  subtitle,
}: Readonly<AboutUsProps>) => {
  const transformedImages: ImageProps[] =
    image?.map((item) => ({
      id: item.id,
      url: `${getStrapiURL()}${item.url}`,
      alternativeText: item.alternativeText || "",
      documentId: item.documentId || "",
    })) || [];

  return (
    <FadeInSection>
      <section
        className="!bg-[#ebddd3] relative pb-20 pt-30 z-0 bg-white p-0 flex-col lg:pt-25 lg:flex items-center"
        id="about"
      >
        <h1
          className="relative text-4xl mx-auto w-fit mb-4 font-[garamond] text-[#4d1313] before:absolute before:top-0 before:left-0 before:w-full before:border-t before:border-[#4d1313] after:absolute after:bottom-0 after:left-0 after:w-full after:border-b after:border-[#4d1313]"
        >
          {title}
        </h1>
        <h2 className="text-center text-xl px-6 mb-10 text-[#4d1313] font-[500]">
          {subtitle}
        </h2>
        <div className="bg-[rgba(77,19,19,0.2)] items-center flex w-full py-4">
          <div className="lg:justify-around mx:auto max-w-[100%] lg:max-w-[70%] lg:flex-row lg:flex mx-auto items-center py-4">
            <Carousel images={transformedImages} />
            <p className="px-4 mt-4 w-full lg:mt-0 max-w-[100vw] lg:!max-w-[500px] text-md text-center lg:text-left mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default AboutUs;
