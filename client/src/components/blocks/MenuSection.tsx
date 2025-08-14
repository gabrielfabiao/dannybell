// MenuSection.tsx
import React from "react";
import FadeInSection from "../FadeInSection";
import type { InfoBlockProps } from "@/types";
import { getStrapiURL } from "@/utils/get-strapi-url";

const MenuSection = ({
  reversed,
  image,
  content,
  cta,
  theme,
  heading,
}: Readonly<InfoBlockProps>) => {
  return (
    <FadeInSection>
      <div
        className="group w-full h-[300px] flex overflow-hidden bg-center bg-no-repeat bg-cover relative lg:rounded-md"
        style={{ backgroundImage: `url(${getStrapiURL()}${image?.url})` }}
      >
        {heading && (
          <div
            className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black/100 to-transparent px-4 py-2 flex justify-end flex-col lg:transform lg:translate-y-40 lg:group-hover:translate-y-0 lg:transition lg:duration-300"
          >
            <span className="text-white text-md opacity-90 lg:transform lg:translate-y-40 lg:group-hover:translate-y-0 lg:transition lg:duration-300">
              {heading}
            </span>
            <p className="text-sm text-white opacity-80 lg:transform lg:translate-y-40 lg:group-hover:translate-y-0 lg:transition lg:duration-300 lg:delay-75">
              {content}
            </p>
          </div>
        )}
      </div>
    </FadeInSection>
  );
};

export default MenuSection;
