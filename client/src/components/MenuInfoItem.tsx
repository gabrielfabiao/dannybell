import React from 'react'
import { menuInfoProps } from '@/types'
import { getStrapiURL } from '@/utils/get-strapi-url';
import Image from 'next/image';

interface MenuInfoProps {
  block: menuInfoProps;
}

const MenuInfoItem = ({block}: MenuInfoProps ) => {
  return (
    <div className='lg:bg-transparent bg-[rgba(77,19,19,0.2)] lg:w-[230px] flex items-center flex-col hover:shadow-lg transition-shadow duration-300 rounded-2xl py-4 mb-6'>
      <Image
        src={`${getStrapiURL()}${block.icon.url}`} 
        alt={block.icon?.alternativeText || "Event image"}
        className='opacity-20 mb-4'
        width={70}
        height={70}
      />
      <p className='max-w-[70%] text-center opacity-80 text-sm'>{block.info}</p>
    </div>
  )
}

export default MenuInfoItem