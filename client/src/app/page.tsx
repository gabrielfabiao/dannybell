import AboutUs from "@/components/blocks/AboutUs";
import HeroSection from "@/components/blocks/HeroSection";
import MenuSectionWrapper from "@/components/MenuSectionWrapper";
import StickyHeader from "@/components/StickyHeader";
import EventsSection from "@/components/blocks/EventsSection";
import MenuInfoSection from "@/components/blocks/MenuInfoSection";
import Footer from "@/components/blocks/Footer";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
import { HeaderProps } from "@/types";
import { HeroSectionProps } from "@/types";
import { AboutUsProps } from "@/types";
import { EventsSectionProps } from "@/types"
import { MenuInfoSectionProps } from "@/types"
import { FooterProps } from "@/types";
import type { Block, InfoBlockProps } from "@/types";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();

  return { ...data.data }
}


function isMenuBlock(block: Block): block is InfoBlockProps {
  return block.__component === "blocks.info-block"
}


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

function isMenuInfoSection(block: Block): block is MenuInfoSectionProps {
  return block.__component === "blocks.menu-info-section"
}

function isFooterSection(block: Block): block is FooterProps {
  return block.__component === "blocks.footer"
}

export default async function HomeRoute() {
  const data = await loader();
  const blocks: Block[] = data.blocks || [];

  const headerBlock = blocks.find(isHeaderBlock);
  const heroBlock = blocks.find(isHeroBlock);
  const aboutUsBlock = blocks.find(isAboutUsBlock);
  const eventsSectionBlock = blocks.find(isEventsSectionBlock)
  const menuInfoSectionBlock = blocks.find(isMenuInfoSection)
  const footerBlock = blocks.find(isFooterSection)
  const menuBlock = blocks.filter(isMenuBlock)
  
  console.log("menuBlock:", menuBlock);


  return (
    <div className="relative">
      {headerBlock && <StickyHeader {...headerBlock} />}
      {heroBlock && <HeroSection {...heroBlock} />}
      {menuBlock.length > 0 && <MenuSectionWrapper blocks={menuBlock} />}
      {menuInfoSectionBlock && <MenuInfoSection {...menuInfoSectionBlock} />}
      {aboutUsBlock && <AboutUs {...aboutUsBlock} />}
      {eventsSectionBlock && <EventsSection {...eventsSectionBlock} />}
      {footerBlock && <Footer {...footerBlock} />}
    </div>
  );
}


