// MenuSection.tsx
import React from "react";
import FadeInSection from "../FadeInSection";
import type { InfoBlockProps } from "@/types";
import { getStrapiURL } from "@/utils/get-strapi-url";

const MenuSection = ({
  image,
  content,
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
            <div className="absolute w-full h-2/3 bottom-0 left-0 bg-gradient-to-t from-black/100 to-transparent xl:opacity-0 group-hover:opacity-100 transition duration-700" />
            <div className="absolute w-full h-1/2 bottom-0 left-0 px-4 py-6 flex justify-end flex-col">
              <span className="text-[#ebddd3] text-md xl:opacity-0 group-hover:opacity-100 transition duration-700 mb-2 tracking-wide">
                {heading}
              </span>
              <p className="text-sm text-[#ebddd3] xl:opacity-0 group-hover:opacity-100 transition duration-700 delay-75">
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

