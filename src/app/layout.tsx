import "../app/assets/css/tailwind.css"
import './assets/css/material.css'
import dynamic from "next/dynamic";
import { Nunito, Work_Sans, EB_Garamond, Kaushan_Script, Alex_Brush } from 'next/font/google'

const Navbar = dynamic(() => import("./componets/Navbar/navbar"));
const Footer = dynamic(() => import("./componets/Footer/smallFooter"));
const Switcher = dynamic(() => import("./componets/commons/switcher"));

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300','400','500','600', '700'],
  display: 'swap',
})
const work_sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['300','400','500','600', '700'],
  display: 'swap',
})
const eb_garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  weight: ['400'],
  display: 'swap',
})


const kaushan = Kaushan_Script({
  subsets: ['latin'],
  variable: '--font-kaushan',
  weight: ['400'],
  display: 'swap',
})


const alex = Alex_Brush({
  subsets: ['latin'],
  variable: '--font-alex',
  weight: ['400'],
  display: 'swap',
})


export const metadata = {
  title: 'DSN Empresas',
  description: 'DSN Empresas es la combinación perfecta entre marketing y tecnología dentro de Concordia, Entre Ríos y en el resto de las provincias de Argentina.',
}

export default function RootLayout({ children }) {
  return (
    <html className="dark" lang="en" dir="LTR">
      <body className={`${nunito.variable} ${work_sans.variable} ${eb_garamond.variable} ${kaushan.variable} ${alex.variable} font-nunito text-base text-black dark:text-white dark:bg-slate-900`}>
        <Navbar navClass="nav-light" />
        {children}
        <Footer />
        <Switcher />
        {/* <CookieModal /> */}
      </body>
    </html>
  )
}
