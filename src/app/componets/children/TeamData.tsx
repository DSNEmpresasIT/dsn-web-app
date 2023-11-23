"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Icon from "react-feather";

export default function TeamData() {
  const teamData = [
    {
      image: "/images/client/01.jpg",
      name: "Ronny Jofra",
      title: "C.E.O.",
      desc: "If the distribution of letters and words is random",
      background: "bg-indigo-600/10 dark:bg-indigo-600/30 ",
    },
    {
      image: "/images/client/02.jpg",
      name: "Aliana Rosy",
      title: "HR",
      desc: "If the distribution of letters and words is random",
      background: "bg-emerald-600/10 dark:bg-emerald-600/30 ",
    },
    {
      image: "/images/client/03.jpg",
      name: "Sofia Razaq",
      title: "C.O.O.",
      desc: "If the distribution of letters and words is random",
      background: "bg-red-600/10 dark:bg-red-600/30  ",
    },
    {
      image: "/images/client/04.jpg",
      name: "Micheal Carlo",
      title: "Director",
      desc: "If the distribution of letters and words is random",
      background: "bg-sky-600/10 dark:bg-sky-600/30  ",
    },
    {
      image: "/images/client/05.jpg",
      name: "Ronny Jofra",
      title: "C.E.O.",
      desc: "If the distribution of letters and words is random",
      background: "bg-indigo-600/10 dark:bg-indigo-600/30  ",
    },
    {
      image: "/images/client/06.jpg",
      name: "Aliana Rosy",
      title: "HR",
      desc: "If the distribution of letters and words is random",
      background: "bg-emerald-600/10 dark:bg-emerald-600/30 ",
    },
    {
      image: "/images/client/07.jpg",
      name: "Sofia Razaq",
      title: "C.O.O.",
      desc: "If the distribution of letters and words is random",
      background: "bg-red-600/10 dark:bg-red-600/30 ",
    },
    {
      image: "/images/client/08.jpg",
      name: "Micheal Carlo",
      title: "Director",
      desc: "If the distribution of letters and words is random",
      background: "bg-sky-600/10 dark:bg-sky-600/30",
    },
  ];

  return (
    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
      {teamData.slice(0, 4).map((data, index) => {
        return (
          <div className="lg:col-span-3 md:col-span-6" key={index}>
            <div className="group text-center">
              <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                <Image
                  src={data.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ height: "auto", width: "100%" }}
                  className=""
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out space-x-1">
                  <li className="inline">
                    <Link
                      href="#"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                    >
                      <Icon.Facebook className="h-4 w-4"></Icon.Facebook>
                    </Link>
                  </li>
                  <li className="inline">
                    <Link
                      href="#"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                    >
                      <Icon.Instagram className="h-4 w-4"></Icon.Instagram>
                    </Link>
                  </li>
                  <li className="inline">
                    <Link
                      href="#"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                    >
                      <Icon.Linkedin className="h-4 w-4"></Icon.Linkedin>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="content mt-3">
                <Link
                  href="#"
                  className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out"
                >
                  {data.name}
                </Link>
                <p className="text-slate-400">{data.title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
