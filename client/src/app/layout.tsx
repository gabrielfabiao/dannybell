
import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'
 
export const metadata: Metadata = {
  title: 'Dannybell Restaurante',
  description: 'Generated by create next app',
}

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}