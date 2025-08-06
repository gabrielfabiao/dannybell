"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { HeaderProps } from "@/types";
import HamburguerMenu from "../components/HamburguerMenu";
import LogoBlack from "../assets/dannybell-logo.png";
import useScrollDirection from '@/utils/scroll-tracker';

const StickyHeader = ({
  logo,
  navbarLink = [],
}: Readonly<HeaderProps>) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isUserActive, setIsUserActive] = useState(true); // New state for activity
  const inactivityTimeout = useRef<NodeJS.Timeout | null>(null);

  const isScrollingDown = useScrollDirection();

  const transformedNavbar = navbarLink?.map((item) => ({
    title: item.title,
    href: item.href,
    isExternal: item.isExternal,
  })) || [];

  useEffect(() => {
    const handleScroll = () => {

      const triggerPoint = window.innerHeight * 0.8;
      if (window.scrollY > triggerPoint) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      setIsUserActive(true);

      if (inactivityTimeout.current) {
        clearTimeout(inactivityTimeout.current);
      }

      inactivityTimeout.current = setTimeout(() => {
        setIsUserActive(false);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (inactivityTimeout.current) {
        clearTimeout(inactivityTimeout.current);
      }
    };
  }, []);

  const shouldShowHeader = isSticky && isUserActive;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={shouldShowHeader ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrollingDown ? 'bg-[#842020]' : 'bg-transparent'
      } transition-all duration-500 ease-in-out`}
    >
      <div className="max-w-6xl mx-auto px-4 flex h-fit justify-between items-center py-2 lg:py-0">
        <img
          className="w-30 h-auto lg:w-25 hidden lg:block"
          src={`http://localhost:1337${logo?.image?.url}`}
          alt={logo?.alternativeText || "Logo"}
          width={100}
          height={100}
        />
        <img
          className="w-30 h-auto lg:w-25 block lg:hidden"
          src={LogoBlack.src}
          alt={logo?.alternativeText || "Logo"}
          width={100}
          height={100}
        />
        <HamburguerMenu navbar={transformedNavbar || []} />
      </div>
    </motion.header>
  );
};

export default StickyHeader;
