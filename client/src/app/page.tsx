import HeroSection from "@/components/blocks/HeroSection";
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
      <HeroSection {...blocks[0]} />
  );
}
