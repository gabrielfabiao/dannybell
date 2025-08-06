import React from 'react'
import FadeInSection from "../FadeInSection"
import { AboutUsProps, ImageProps } from '@/types'
import Carousel from '../Carousel'

const AboutUs = ({
  title,
  description,
  image,
  subtitle
}: Readonly<AboutUsProps>) => {

const transformedImages: ImageProps[] = image?.map((item) => ({
  id: item.id,
  url: `http://localhost:1337${item.url}`,
  alternativeText: item.alternativeText || "",
  documentId: item.documentId || "",
})) || [];

  return (
    <FadeInSection>
    <section className='!bg-[#DBDBDB] relative pb-20 pt-30 z-0 bg-white p-0 flex-col lg:p-6 lg:flex' id='about'>
      <div className='w-full h-8 bg-[#842020] absolute top-0 left-0'></div>
      <h1 className='text-3xl mb-2 text-center font-[400] lg:mt-30'>{title}</h1>
      <h2 className='text-center text-xl px-6 mb-20 text-[#4d1313] font-[500]'>{subtitle}</h2>
      <div className='lg:justify-around mx:auto lg:flex-row lg:flex'>
        <Carousel images={transformedImages} />
        <p className='px-4 mt-4 lg:max-w-[50%] lg:mt-0 lg:p-0'>{description}</p>
      </div>
    </section>
    </FadeInSection>
  )
}

export default AboutUs