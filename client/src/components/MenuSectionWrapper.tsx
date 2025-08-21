// MenuSectionsWrapper.tsx
import React from "react";
import MenuSection from "../components/blocks/MenuSection";
import type { InfoBlockProps } from "@/types";


const MenuSectionsWrapper = ({ blocks }: { blocks: InfoBlockProps[] }) => {
  return (
    <section className="bg-[#ebddd3] pt-10 lg:pt-16 lg:px-10" id="menu-section">
      <h1
        className="relative text-4xl mx-auto w-fit mb-10 font-[garamond] text-[#4d1313] 
  before:absolute before:top-0 before:left-0 before:w-full before:border-t before:border-[#4d1313]
  after:absolute after:bottom-0 after:left-0 after:w-full after:border-b after:border-[#4d1313]"
      >
        Os nossos pratos
      </h1>
      <div className="grid lg:grid-cols-4 items-center lg:gap-4">
        {blocks.map((block: InfoBlockProps) => (
          <MenuSection key={block.id} {...block} />
        ))}
      </div>
    </section>
  );
};

export default MenuSectionsWrapper;