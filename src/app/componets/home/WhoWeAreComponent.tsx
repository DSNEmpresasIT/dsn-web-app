import Link from 'next/link';
import React from 'react'

import * as Icon from "react-feather";
import { FaArrowRight } from 'react-icons/fa';


export const ItemComponent = ({ Icons, index, item }) => (
  <div className="group text-center" key={index}>
    <Icons className="h-10 w-10 stroke-1 group-hover:stroke-[1.5px] group-hover:text-indigo-600 transition-all duration-500 ease-in-out mx-auto" />
    <div className="mt-6">
      <Link
        href="#"
        className="text-xl font-semibold group-hover:text-indigo-600 transition-all duration-500 ease-in-out"
      >
        {item.title}
      </Link>
      <p className="text-slate-400 mt-4">
        {item.desc}
      </p>
      <div className="mt-4">
        <Link
          href="#"
          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
        >
          Read More <FaArrowRight className="ms-2 text-[10px]" />{" "}
        </Link>
      </div>
    </div>
  </div>
);

export const WhoWeAreComponent = () => {
  const whoWeAreComponentData = {
    aboutData: [
      {
        icon: Icon.PieChart,
        title: "Profitable Marketing",
        desc: "We develop digital strategies, products and services appreciated by clients.",
      },
      {
        icon: Icon.Briefcase,
        title: "SEO Specialists",
        desc: "We develop digital strategies, products and services appreciated by clients.",
      },
      {
        icon: Icon.Target,
        title: "Audience Analysis",
        desc: "We develop digital strategies, products and services appreciated by clients.",
      },
    ],
    title: "Who We Are?",
    subTitle: () => (<>Business strategies and top <br /> permormance ideas</>),
    description: `Start working with Tailwind CSS that can provide everything you
    need to generate awareness, drive traffic, connect.`
  }

  return (
    <div className="container relative md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
          {whoWeAreComponentData.title}
        </h6>
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          <whoWeAreComponentData.subTitle />
        </h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          {whoWeAreComponentData.description}
        </p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
        {whoWeAreComponentData.aboutData.map((item, index) => {
          let Icons = item.icon;
          return (
            <ItemComponent Icons={Icons} item={item} index={index} />
          );
        })}
      </div>
    </div>
  )
}
