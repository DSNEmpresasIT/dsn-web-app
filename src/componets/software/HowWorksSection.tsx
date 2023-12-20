import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const HowWorksSection = () => {
  return (
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid md:grid-cols-3 grid-cols-1 shadow shadow-gray-300 dark:shadow-gray-500 rounded-lg md:divide-x-[1px] divide-y-[1px] divide-gray-200 dark:divide-gray-700">
          <div className="relative p-6 md:p-8">
            <i className="mdi mdi-account-search-outline bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text text-[45px]"></i>

            <h5 className="text-xl font-semibold my-5">
              Hosting
            </h5>

            <p className="text-slate-400">
              If the distribution of letters and words is random, the reader
              will not be distracted from making.
            </p>

            <MdKeyboardArrowRight className="h-8 w-8 p-1 bg-indigo-600 text-white rounded-full flex justify-center items-center absolute md:top-2/4 md:-translate-y-2/4 -bottom-4 md:-end-0 end-2/4 ltr:translate-x-2/4 rtl:-translate-x-2/4 rtl:rotate-180 z-1" />
          </div>

          <div className="relative p-6 md:p-8">
            <i className="mdi mdi-wallet-bifold-outline bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text text-[45px]"></i>

            <h5 className="text-xl font-semibold my-5">Página Web</h5>

            <p className="text-slate-400">
              If the distribution of letters and words is random, the reader
              will not be distracted from making.
            </p>

            <MdKeyboardArrowLeft className="h-8 w-8 p-1 bg-indigo-600 text-white rounded-full flex justify-center items-center absolute md:top-2/4 md:-translate-y-2/4 -bottom-4 md:-end-0 end-2/4 ltr:translate-x-2/4 rtl:-translate-x-2/4 rtl:rotate-180 z-1" />
          </div>

          <div className="relative p-6 md:p-8">
            <i className="mdi mdi-home-plus-outline bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text text-[45px]"></i>

            <h5 className="text-xl font-semibold my-5">Base de datos</h5>

            <p className="text-slate-400">
              If the distribution of letters and words is random, the reader
              will not be distracted from making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
