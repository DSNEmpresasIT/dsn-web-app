import dynamic from "next/dynamic";
import React from "react";

import { AiOutlineFire, AiOutlineGitlab } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineChartPie } from "react-icons/hi";
import { PiBookOpenText } from "react-icons/pi";
import { RiPresentationFill } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";

import TinySlider from "tiny-slider-react";
import "../../../../node_modules/tiny-slider/dist/tiny-slider.css";
import Link from "next/link";

export const CardsCarouselComponent = () => {
  const services = [
    {
      icon: AiOutlineGitlab,
      course: "UI / UX Design",
      lesson: "35",
    },
    {
      icon: PiBookOpenText,
      course: "Web Development",
      lesson: "20",
    },
    {
      icon: HiOutlineChartPie,
      course: "Graphic Design",
      lesson: "35",
    },
    {
      icon: VscFeedback,
      course: "PHP Development",
      lesson: "46",
    },
    {
      icon: RiPresentationFill,
      course: "Data Science",
      lesson: "60",
    },
    {
      icon: AiOutlineFire,
      course: "Digital Marketing",
      lesson: "05",
    },
  ];
  const settings = {
    container: ".tiny-five-item",
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: [
      '<i class="mdi mdi-chevron-left "></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
      1025: {
        items: 5,
      },

      992: {
        items: 4,
      },

      767: {
        items: 3,
      },

      425: {
        items: 1,
      },
    },
  };
  return (
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
          <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Browse Online Cource Categories
            </h3>
            <p className="text-slate-400 max-w-xl">
              Search your future opportunity with our categories
            </p>
          </div>

          <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
            <Link
              href="#"
              className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
            >
              All Categories <FaArrowRight className="ms-2 text-[10px]" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container relative">
        <div className="grid grid-cols-1 relative">
          <div className="tiny-five-item">
            <TinySlider settings={settings}>
              {services.map((item, index) => {
                let Icons = item.icon;
                return (
                  <div className="tiny-slide" key={index}>
                    <div className="px-3 py-10 rounded-md shadow dark:shadow-gray-800 group text-center bg-white dark:bg-slate-900 hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 transition duration-500 m-2">
                      <div className="w-[84px] h-[84px] bg-indigo-600/5 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition duration-500 mx-auto">
                        <Icons className="w-7 h-7" />
                      </div>

                      <div className="content mt-6">
                        <Link
                          href="#"
                          className="title h5 text-lg font-medium hover:text-indigo-600"
                        >
                          {item.course}
                        </Link>
                        <p className="text-slate-400 mt-3">
                          {item.lesson} Lesson
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </TinySlider>
          </div>
        </div>

        <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
          <div className="md:col-span-12 text-center">
            <Link
              href="#"
              className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
            >
              All Categories <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
