import React from 'react'
import FadeInSection from "../FadeInSection"
import { AboutUsProps, ImageProps } from '@/types'
import Carousel from '../Carousel'
import "../../app/aboutus.css"

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
    <section className='!bg-[#ebddd3] relative pb-20 pt-30 z-0 bg-white p-0 flex-col lg:py-6 lg:flex items-center' id='about'>
      <div className="w-full h-[60px] bg-[#4d1313] absolute top-0 left-0 grainy-bg"></div>
      <h1 className='text-3xl mb-2 text-center font-[400] lg:mt-30'>{title}</h1>
      <h2 className='text-center text-xl px-6 mb-10 text-[#4d1313] font-[500]'>{subtitle}</h2>
      <div className='bg-[rgba(77,19,19,0.2)] items-center flex w-full py-4'>
        <div className='lg:justify-around mx:auto max-w-[100%] lg:max-w-[70%] lg:flex-row lg:flex mx-auto'>
          <Carousel images={transformedImages} />
          <p className='px-4 mt-4 w-100 lg:mt-0 lg:p-0 max-w-[100vw]'>{description}</p>
        </div>
      </div>
    </section>
    </FadeInSection>
  )
}

export default AboutUs