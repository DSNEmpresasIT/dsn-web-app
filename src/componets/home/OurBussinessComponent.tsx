import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const OurBussinessComponent = () => {
  const servecies = [
    {
      image: "/images/consulting/1.jpg",
      title: "Profitable Marketing",
      desc: "We develop digital strategies, products and services appreciated by clients.",
    },
    {
      image: "/images/consulting/2.jpg",
      title: "SEO Specialists",
      desc: "We develop digital strategies, products and services appreciated by clients.",
    },
    {
      image: "/images/consulting/3.jpg",
      title: "SEO Specialists",
      desc: "We develop digital strategies, products and services appreciated by clients.",
    },
    {
      image: "/images/consulting/3.jpg",
      title: "SEO Specialists",
      desc: "We develop digital strategies, products and services appreciated by clients.",
    },
  ];
  return (
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Business Consulting Services
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Start working with Tailwind CSS that can provide everything you need
            to generate awareness, drive traffic, connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {servecies.map((item, index) => {
            return (
              <div className="group relative" key={index}>
                <div className="relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                  <Image
                    src={item.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className=""
                    alt=""
                  />
                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                </div>

                <div className="mt-6">
                  <Link
                    href=""
                    className="text-xl font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out"
                  >
                    {item.title}
                  </Link>

                  <p className="text-slate-400 mt-4">{item.desc}</p>

                  <div className="mt-4">
                    <Link
                      href="#"
                      className="hover:text-indigo-600 duration-500 ease-in-out font-semibold flex items-center"
                    >
                      <span className="hidden group-hover:inline-block">
                        Read More
                      </span>
                      <FaArrowRight className="ms-2 text-[10px]" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
