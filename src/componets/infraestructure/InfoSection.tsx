import Image from "next/image";
import Link from "next/link";
import React from "react";

import * as Icon from "react-feather";

import { BiTachometer } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbUserCheck } from "react-icons/tb";
import { GoContactComponent } from "../commons/GoContactComponent";

export const InfoSection = () => {
  const aboutData = [
    {
      icon: LiaSwatchbookSolid,
      title: "Enhance Security",
      desc: "There are many variations of passages of Lorem Ipsum available",
    },
    {
      icon: BiTachometer,
      title: "High Performance",
      desc: "There are many variations of passages of Lorem Ipsum available",
    },
    {
      icon: TbUserCheck,
      title: "Unbeatable Support",
      desc: "There are many variations of passages of Lorem Ipsum available",
    },
  ];
  return (
    <>
      <section className="relative md:py-[2%] py-16 pt-5">
        <div className="container relative md:mt-24 mt-16">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="lg:col-span-6 md:order-2 order-1">
              <div className="lg:ms-8">
                <Image
                  src="/images/hosting/2.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </div>
            </div>
            <div className="lg:col-span-6 md:order-1 order-2">
              <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                Quick Responce <br /> and Secure Server
              </h3>
              <p className="text-slate-400 max-w-xl">
                You can combine all the Techwind templates into a single one,
                you can take a component from the Application theme and use it
                in the Website.
              </p>

              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />{" "}
                  Digital Marketing Solutions for Tomorrow
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />{" "}
                  Our Talented & Experienced Marketing Agency
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />{" "}
                  Create your own skin to match your brand
                </li>
              </ul>

              <div className="mt-4">
                <Link
                  href="/page-aboutus"
                  className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                >
                  Find Out More
                  <MdKeyboardArrowRight className="text-xl ms-1" />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="flex">
              <Icon.HelpCircle className="fea icon-ex-md text-indigo-600 me-3"></Icon.HelpCircle>
              <div className="flex-1">
                <h5 className="mb-2 text-xl font-semibold">
                  How our <span className="text-indigo-600">Techwind</span> work
                  ?
                </h5>
                <p className="text-slate-400">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance: human perception is
                  tuned to recognize certain patterns and repetitions in texts.
                </p>
              </div>
            </div>

            <div className="flex">
              <Icon.HelpCircle className="fea icon-ex-md text-indigo-600 me-3"></Icon.HelpCircle>
              <div className="flex-1">
                <h5 className="mb-2 text-xl font-semibold">
                  {" "}
                  What is the main process open account ?
                </h5>
                <p className="text-slate-400">
                  If the distribution of letters and words is random, the reader
                  will not be distracted from making a neutral judgement on the
                  visual impact
                </p>
              </div>
            </div>

            <div className="flex">
              <Icon.HelpCircle className="fea icon-ex-md text-indigo-600 me-3"></Icon.HelpCircle>
              <div className="flex-1">
                <h5 className="mb-2 text-xl font-semibold">
                  {" "}
                  How to make unlimited data entry ?
                </h5>
                <p className="text-slate-400">
                  Furthermore, it is advantageous when the dummy text is
                  relatively realistic so that the layout impression of the
                  final publication is not compromised.
                </p>
              </div>
            </div>

            <div className="flex">
              <Icon.HelpCircle className="fea icon-ex-md text-indigo-600 me-3"></Icon.HelpCircle>
              <div className="flex-1">
                <h5 className="mb-2 text-xl font-semibold">
                  {" "}
                  Is <span className="text-indigo-600">Techwind</span> safer to
                  use with my account ?
                </h5>
                <p className="text-slate-400">
                  The most well-known dummy text is the Lorem Ipsum, which is
                  said to have originated in the 16th century. Lorem Ipsum is
                  composed in a pseudo-Latin language which more or less
                  corresponds to proper Latin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative md:py-[2%] py-16 pt-5">
        <div className="container relative md:mt-24 mt-16">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="lg:col-span-6">
              <div className="lg:me-8">
                <Image
                  src="/images/hosting/1.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 gap-[30px]">
                {aboutData.map((item, index) => {
                  let Icons = item.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-center relative overflow-hidden p-6 rounded-md shadow dark:shadow-gray-800 bg-gray-50 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out"
                    >
                      <span className="text-indigo-600 group-hover:text-white text-5xl font-semibold transition-all duration-500 ease-in-out">
                        <Icons className="h-10 w-10" />
                      </span>
                      <div className="flex-1 ms-3">
                        <h5 className="group-hover:text-white text-xl font-semibold transition-all duration-500 ease-in-out">
                          {item.title}
                        </h5>
                        <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-2">
                          {item.desc}
                        </p>
                      </div>
                      <div className="absolute start-1 top-5 text-dark/[0.03] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.04] transition-all duration-500 ease-in-out">
                        <Icons className="w-20 h-20" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <GoContactComponent />
    </>
  );
};
