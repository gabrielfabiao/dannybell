import React from 'react'
import FadeInSection from "../FadeInSection"
import { AboutUsProps } from '@/types'

const AboutUs = ({
  title,
  description,
  image,
}: Readonly<AboutUsProps>) => {
  return (
    <FadeInSection>
    <section className='relative z-0 bg-white p-4' id='about'>
        <h1>{title}</h1>
    </section>
    </FadeInSection>
  )
}

export default AboutUs