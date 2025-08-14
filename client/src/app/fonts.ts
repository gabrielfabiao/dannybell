
import { EB_Garamond } from 'next/font/google'
import { Lato } from 'next/font/google'

/*Lora, Imbue*/ 


export const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
})
