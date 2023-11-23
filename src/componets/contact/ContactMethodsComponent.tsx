import Link from 'next/link';
import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { RiMapPinLine } from 'react-icons/ri';

export const ContactMethodsComponent = () => {
  const contactData = [
    {
      icon: FiPhone,
      title: "Phone",
      desc: "The phrasal sequence of the is now so that many campaign and benefit",
      contact: "+152 534-468-854",
    },
    {
      icon: FaRegEnvelope,
      title: "Email",
      desc: "The phrasal sequence of the is now so that many campaign and benefit",
      contact: "contact@example.com",
    },
    {
      icon: RiMapPinLine,
      title: "Location",
      desc: "The phrasal sequence of the is now so that many campaign and benefit",
      contact: "View on Google map",
    },
  ];
  return (
    <div className="container relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
        {contactData.map((item, index) => {
          let Icons = item.icon;
          return (
            <div key={index} className="text-center px-6 mt-6">
              <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <Icons className="w-7 h-7" />
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">
                  {item.title}
                </h5>
                <p className="text-slate-400 mt-3">{item.desc}</p>

                <div className="mt-5">
                  <Link
                    href="/tel:+152534-468-854"
                    className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                  >
                    {item.contact}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
