import Image from "next/image";
import React from "react";

import * as Icon from "react-feather";

export const BannerSection = () => {
  return (
    <section className="relative md:py-[2%] py-36 items-center max-h-[100%]">
      <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/JsNvHJsufhI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
          className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"
          title="Embedded YouTube Video"
        ></iframe>
      </div>
      <div
        className="absolute inset-0 opacity-20  bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/images/map.svg')" }}
      ></div>
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="container relative">
        <div className="grid grid-cols-1 pb-8 text-center mt-10">
          <Image
            src="/images/logo-icon-64.png"
            width={82}
            height={80}
            className="block mx-auto animate-[spin_10s_linear_infinite]"
            alt=""
          />
          <h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 mt-10 text-white">
            Coworking Just Feels Right
          </h3>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Coworking spaces offer a wealth of advantages for self starters,
            including networking opportunities, daily structure, and increased
            productivity.
          </p>

          <div className="subcribe-form z-1 mt-8">
            <form className="relative mx-auto max-w-xl">
              <Icon.MapPin className="w-5 h-5 absolute top-[48%] -translate-y-1/2 start-4"></Icon.MapPin>
              <input
                type="text"
                id="search_name"
                name="name"
                className="pt-4 pe-40 pb-4 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ps-12"
                placeholder="Washington, D.C."
              />
              <button
                type="submit"
                className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full"
              >
                Find A Space
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
