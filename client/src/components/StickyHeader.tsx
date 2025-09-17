// StickyHeader.tsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeaderProps } from "@/types";
import { getStrapiURL } from "@/utils/get-strapi-url";
import Image from "next/image";
import HamburguerMenu from "../components/HamburguerMenu";
import LogoBlack from "../assets/dannybell-logo.png";
import useScrollDirection from "@/utils/scroll-tracker"; // returns boolea
import { StrapiImage } from "./blocks/StrapiImage";
import "../app/aboutus.css";

const StickyHeader = ({ logo, navbarLink = [] }: Readonly<HeaderProps>) => {
  const [isSticky, setIsSticky] = useState(false);
  const isScrollingDown = useScrollDirection(); // <-- boolean

  const transformedNavbar =
    navbarLink?.map((item) => ({
      title: item.title,
      href: item.href,
      isExternal: item.isExternal,
    })) || [];

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: "-100%", opacity: 0 }}
      animate={isSticky && isScrollingDown ? { y: "0%", opacity: 1 } : { y: "-100%", opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrollingDown ? "grainy-bg" : "bg-transparent"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="max-w-6xl mx-auto px-4 flex h-fit justify-between items-center py-2 lg:py-0">
        <StrapiImage
          className="w-30 h-auto lg:w-25 hidden lg:block"
          src={`${getStrapiURL()}${logo?.image?.url}`}
          alt={logo?.alternativeText || "Logo"}
          width={100}
          height={100}
        />
        <StrapiImage
          className="w-30 h-auto lg:w-25 block lg:hidden"
          src={LogoBlack.src}
          alt={logo?.alternativeText || "Logo"}
          width={100}
          height={100}
        />
        <HamburguerMenu navbar={transformedNavbar} />
      </div>
    </motion.header>
  );
};

export default StickyHeader;
