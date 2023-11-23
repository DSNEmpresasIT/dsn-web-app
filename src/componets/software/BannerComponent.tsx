import Image from "next/image";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export const BannerComponent = () => {
  return (
    <section className="relative table w-full lg:py-40 md:py-36 pt-36 pb-24 overflow-hidden bg-white dark:bg-slate-900">
      <div
        className="absolute inset-0  bg-repeat opacity-10 dark:opacity-60"
        style={{ backgroundImage: "url('/images/overlay.png')" }}
      ></div>
      <div className="container relative z-1">
        <div className="relative grid lg:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
          <div className="lg:col-span-7">
            <div className="lg:me-6 lg:text-start text-center">
              <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5">
                Access powerful AI <br />
                For
                <TypeAnimation
                  sequence={[
                    " Ai Content",
                    2000,
                    " Blog Writing",
                    2000,
                    " Technical Writing",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="typewrite bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"
                  repeat={Infinity}
                />
              </h1>
              <p className="text-lg max-w-xl lg:ms-0 mx-auto">
                Beatae cum eius, animi itaque aliquid ducimus facere dicta,
                vitae ipsam maiores nam sit blanditiis, quisquam expedita?
              </p>

              <div className="subcribe-form mt-6 mb-3">
                <form className="relative max-w-md mx-auto lg:ms-0">
                  <div className="relative">
                    <FaRegEnvelope className="me-2 text-base  absolute top-4 left-5" />
                    <input
                      type="email"
                      id="aiemail"
                      name="email"
                      className="py-4 pe-40 ps-12 w-full h-[50px] outline-none text-black dark:text-white rounded-md bg-white/60 dark:bg-slate-900/60 shadow dark:shadow-gray-800"
                      placeholder="support@techwind.com"
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative after:content-[''] after:absolute lg:after:-top-0 after:-top-10 after:-right-32 after:w-[36rem] after:h-[36rem] after:border-2 after:border-dashed after:border-slate-200 dark:after:border-slate-700 after:rounded-full after:animate-[spin_120s_linear_infinite] after:-z-1 before:content-[''] before:absolute lg:before:-top-24 before:-top-36 before:-right-56 before:w-[48rem] before:h-[48rem] before:border-2 before:border-dashed before:border-slate-200 dark:before:border-slate-700 before:rounded-full before:animate-[spin_240s_linear_infinite] before:-z-1">
              <div className="relative after:content-[''] after:absolute lg:after:-top-0 after:-top-10 after:-right-40 after:w-[36rem] after:h-[36rem] after:bg-gradient-to-tl after:to-indigo-600/30  after:from-red-600/30 dark:after:to-indigo-600/50 dark:after:from-red-600/50 after: after:blur-[200px] after:rounded-full after:-z-1">
                <Image
                  src="/images/saas/light-dash.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  blurDataURL="/images/saas/light-dash.png"
                  style={{ width: "1175px", height: "auto" }}
                  className="lg:max-w-none lg:ms-14"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
