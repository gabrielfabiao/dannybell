import { menuInfoProps, MenuInfoSectionProps } from '@/types'
import React from 'react'
import MenuInfoItem from '../MenuInfoItem'

const MenuInfoSection = ({
    title,
    subtitle,
    MenuInfo
}: Readonly<MenuInfoSectionProps>) => {

    if (MenuInfo.length <= 0) return

    console.log("menu info props", title, subtitle, MenuInfo)

  return (
    <section className='pt-30 lg:px-10 lg:px-60'>
        <h1
        className="relative text-4xl mx-auto w-fit mb-4 font-[garamond] text-[#4d1313] 
  before:absolute before:top-0 before:left-0 before:w-full before:border-t before:border-[#4d1313]
  after:absolute after:bottom-0 after:left-0 after:w-full after:border-b after:border-[#4d1313]"
      >
        {title}
      </h1>
      <p className='text-center text-xl px-6 mb-15 text-[#4d1313] font-[500]'>{subtitle}</p>
      <div className='w-full px-4 lg:justify-center flex-wrap lg:flex lg:flex-row lg:gap-6'>
          {MenuInfo.map((block: menuInfoProps, index) => (
            <MenuInfoItem key={block.id ?? index} block={block} />
          ))}
      </div>
    </section>
  )
}

export default MenuInfoSection