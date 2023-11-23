import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

export const BannerComponent = () => {
  return (
    <section
      className="relative table w-full py-36  bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/company/aboutus.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="container relative">
        <div className="grid grid-cols-1 pb-8 text-center mt-10">
          <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
            Contáctenos
          </h3>
        </div>
      </div>

      <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
        <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
          <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
            <MdKeyboardArrowRight className="text-xl" />
          </li>
          <li
            className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
            aria-current="page"
          >
            Contacto
          </li>
        </ul>
      </div>
    </section>
  )
}
