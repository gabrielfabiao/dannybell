// MenuSectionsWrapper.tsx
import React from "react";
import MenuSection from "../components/blocks/MenuSection";
import type { InfoBlockProps } from "@/types";

interface WrapperProps {
  blocks: any[];
}

const MenuSectionsWrapper = ({ 
  blocks
}: WrapperProps) => {
  const infoBlocks = blocks.filter(
    (block) => block.__component === "blocks.info-block"
  );

  return (
    <section className="bg-[#ebddd3] pt-10 lg:pt-25 lg:px-10" id="menu-section">
      <h1
        className="relative text-4xl mx-auto w-fit mb-10 font-[garamond] text-[#4d1313] 
  before:absolute before:top-0 before:left-0 before:w-full before:border-t before:border-[#4d1313]
  after:absolute after:bottom-0 after:left-0 after:w-full after:border-b after:border-[#4d1313]"
      >
        Os nossos pratos
      </h1>
      <div className="grid lg:grid-cols-4 items-center lg:gap-4">
        {infoBlocks.map((block: InfoBlockProps) => (
          <MenuSection key={block.id} {...block} />
        ))}
      </div>
    </section>
  );
};

export default MenuSectionsWrapper;

{
  /*        <div className="w-full md:max-w-1/4">
          {heading && <h1 className="text-3xl font-bold mb-4">{heading}</h1>}
          <p className="text-gray-700 mb-4">{content}</p>
        </div>*/
}
