import AboutUs from "@/components/blocks/AboutUs";
import HeroSection from "@/components/blocks/HeroSection";
import MenuSectionWrapper from "@/components/MenuSectionWrapper";
import StickyHeader from "@/components/StickyHeader";
import EventsSection from "@/components/blocks/EventsSection";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
import { HeaderProps } from "@/types";
import { HeroSectionProps } from "@/types";
import { AboutUsProps } from "@/types";
import { EventsSectionProps } from "@/types"


async function loader() {
  const data = await getHomePage();
  if (!data) notFound();

  return { ...data.data }
}

import type { Block } from "@/types";

function isHeaderBlock(block: Block): block is HeaderProps {
  return block.__component === "blocks.header";
}

function isHeroBlock(block: Block): block is HeroSectionProps {
  return block.__component === "blocks.hero-section";
}

function isAboutUsBlock(block: Block): block is AboutUsProps {
  return block.__component === "blocks.about-us";
}

function isEventsSectionBlock(block: Block): block is EventsSectionProps {
  return block.__component === "blocks.events-section"
}


export default async function HomeRoute() {
  const data = await loader();
  const blocks: Block[] = data.blocks || [];

  const headerBlock = blocks.find(isHeaderBlock);
  const heroBlock = blocks.find(isHeroBlock);
  const aboutUsBlock = blocks.find(isAboutUsBlock);
  const eventsSectionBlock = blocks.find(isEventsSectionBlock)

  return (
    <div className="relative">
      {headerBlock && <StickyHeader {...headerBlock} />}
      {heroBlock && <HeroSection {...heroBlock} />}
      <MenuSectionWrapper blocks={blocks} />
      {aboutUsBlock && <AboutUs {...aboutUsBlock} />}
      {eventsSectionBlock && <EventsSection {...eventsSectionBlock} />}
    </div>
  );
}


