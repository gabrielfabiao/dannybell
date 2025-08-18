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
          <>
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black/100 to-transparent lg:opacity-0 group-hover:opacity-100 transition duration-700" />
            <div className="absolute w-full h-1/2 bottom-0 left-0 px-4 py-2 flex justify-end flex-col">
              <span className="text-[#ebddd3] text-md lg:opacity-0 group-hover:opacity-100 transition duration-700">
                {heading}
              </span>
              <p className="text-sm text-[#ebddd3] lg:opacity-0 group-hover:opacity-100 transition duration-700 delay-75">
                {content}
              </p>
            </div>
          </>
        )}
      </div>
    </FadeInSection>
  );
};

export default MenuSection;

