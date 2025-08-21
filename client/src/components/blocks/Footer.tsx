import React from "react";
import { FooterProps, LinkProps, SocialLinkProps } from "@/types";
import { getStrapiURL } from "@/utils/get-strapi-url";
import Image from "next/image";

const Footer = ({
  footerNavigation,
  footerInfo,
  socials,
  frase,
  follow,
}: Readonly<FooterProps>) => {
  const date = new Date();
  const year = date.getFullYear();

  console.log("FOOTER PROPS:", footerNavigation, footerInfo, socials);

  return (
    <footer className="bg-[rgba(77,19,19,0.2)]">
      <div className="lg:flex lg:flex-row lg:justify-center">
        <div className="flex px-8 py-4 justify-between relative items-center lg:gap-6">
         <Image
          src={`${getStrapiURL()}${footerInfo?.logo?.image?.url}`}
          alt={footerInfo?.logo?.image?.alternativeText || "Logo"}
          className="w-1/4 h-1/4 aspect-square lg:w-25 lg:h-25"
          width={1000}
          height={1000}
        />
          <div>
            <p className="text-[#4d1313] text-2xl">{footerInfo?.contact}</p>
            <p>{footerInfo?.email}</p>
            <p>{footerInfo?.address}</p>
            <div className="flex gap-4 items-center">
              <span>
                <p>{follow}</p>
              </span>
              {socials?.map((block: SocialLinkProps, index) => {
                return (
                  <a
                    key={index}
                    href={block?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={`${getStrapiURL()}${block?.logo?.url}`}
                      alt={block?.logo?.alternativeText || "Logo"}
                      className="w-6 h-6 mt-2"
                      width={100}
                      height={100}
                    />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="w-[90%] h-[1px] absolute bottom-0 left-[50%] -translate-x-1/2 bg-[#4d1313] opacity-30 lg:hidden block"></div>
        </div>
        <div className="flex px-8 py-4 flex-col relative">
          <p className="text-xl mb-2 hidden lg:block">
            {footerNavigation?.title}
          </p>
          <ul className="flex lg:flex-col justify-between">
            {footerNavigation?.footerLink.map((block: LinkProps, index) => (
              <li key={index}>
                <a
                href={`${block.href}`}
                className="text-[#4d1313] hover:text-white"
                >
                  {block.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="w-[90%] h-[1px] absolute bottom-0 left-[50%] -translate-x-1/2 bg-[#4d1313] opacity-30 lg:hidden block"></div>
        </div>
      </div>
      <p className="text-center text-[#4d1313] py-4 pb-6 px-8">{frase}</p>
      <p className="text-[rgba(77,19,19,0.6)] text-sm text-center px-8">
        © {year} Dannybell. All rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
