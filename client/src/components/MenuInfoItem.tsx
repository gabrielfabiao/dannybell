import React from 'react'
import { menuInfoProps } from '@/types'
import { getStrapiURL } from '@/utils/get-strapi-url';

interface MenuInfoProps {
  block: menuInfoProps;
}

const MenuInfoItem = ({block}: MenuInfoProps ) => {
  return (
    <div className='bg-[rgba(77,19,19,0.2)] lg:w-[300px] flex items-center flex-col mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl py-4'>
      <img
        src={`${getStrapiURL()}${block.icon.url}`} 
        alt={block.icon?.alternativeText || "Event image"}
        className='opacity-20 mb-4'
      />
      <p className='max-w-[70%] text-center opacity-80 text-md'>{block.info}</p>
    </div>
  )
}

export default MenuInfoItem