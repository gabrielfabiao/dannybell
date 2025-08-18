import React from 'react'
import { FooterProps, LinkProps, SocialLinkProps } from '@/types'
import { getStrapiURL } from '@/utils/get-strapi-url'
import { FooterNavigationProps } from '@/types'
import { a } from 'framer-motion/client'

const Footer = ({
    footerNavigation,
    footerInfo,
    socials,
    frase,
    follow
}: Readonly<FooterProps>) => {

    console.log("FOOTER PROPS:", footerNavigation, footerInfo, socials)

  return (
    <footer className='bg-[rgba(77,19,19,0.2)]'>
        <div className='flex px-8 py-4 justify-between relative'>
            <div>
                <p className='text-[#4d1313] text-2xl'>{footerInfo?.contact}</p>
                <p>{footerInfo?.email}</p>
                <p>{footerInfo?.address}</p>
                {socials?.map((block: SocialLinkProps, index) => {
                return  <a>
                            <img
                                src={`${getStrapiURL()}${block?.logo?.url}`}
                                alt={block?.logo?.alternativeText || "Logo"}
                                className='w-10 h-10'
                            />
                        </a>
            })}
            </div>
            <img
            src={footerInfo?.logo?.image?.url ? `${getStrapiURL()}${footerInfo?.logo?.image?.url}` : "/placeholder.jpg"}
            alt={footerInfo?.logo?.image?.alternativeText || "Event image"}
            className="w-1/5 h-1/5 aspect-square"
            />
            
            <div className='w-[90%] h-[1px] absolute bottom-0 left-[50%] -translate-x-1/2 bg-[#4d1313] opacity-30'></div>
        </div>
        <div className='flex px-8 py-4 flex-col relative'>
            <p className='text-xl mb-2 hidden lg:block'>{footerNavigation?.title}</p>
            <ul className='flex lg:flex-col justify-between'>
                {footerNavigation?.footerLink.map((block: LinkProps, index) => (
                <a 
                    href={`${block.href}`}
                    className='text-[#4d1313] hover:text-white'
                >
                    {block.text}
                </a>
                ))}  
            </ul>
            <div className='w-[90%] h-[1px] absolute bottom-0 left-[50%] -translate-x-1/2 bg-[#4d1313] opacity-30'></div>
        </div>
        <p className='text-center text-[#4d1313]'>{frase}</p>
    </footer>
  )
}

export default Footer