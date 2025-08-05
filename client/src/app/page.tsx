import AboutUs from "@/components/blocks/AboutUs";
import HeroSection from "@/components/blocks/HeroSection";
import MenuSection from "@/components/blocks/MenuSection";
import StickyHeader from "@/components/StickyHeader";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  console.log("Home page data:", data);

  return { ...data.data }
}

export default async function HomeRoute() {
  const data = await loader()
  const blocks = data.blocks || [];
  console.log(data)

  return (
    <div className="relative">
      <StickyHeader {...blocks[1]}/>
      <HeroSection id='reservar' {...blocks[0]} />
      <AboutUs {...blocks[2]} />
      <MenuSection id='menu-section' {...blocks[3]} />
    </div>
  );
}
