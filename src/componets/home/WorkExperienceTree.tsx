import Image from "next/image";
import React from "react";

export const WorkExperienceTree = () => {
  return (
    <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
            Experience
          </h6>
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Work Experience
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Obviously I am a Web Designer. Experienced with all stages of the
            development cycle for dynamic web projects.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-8">
          <div className="relative after:content-[''] after:absolute after:top-0 md:after:end-0 md:after:start-0 after:w-px after:h-full md:after:m-auto after:border-s-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ms-3 md:ms-0">
            <div className="ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:end-0 md:after:start-0 after:-start-9 before:content-[''] before:absolute md:before:mx-auto md:before:end-0 md:before:start-0 before:-start-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="md:text-end md:me-8 relative">
                  <Image
                    src="/images/client/shree-logo.png"
                    width={36}
                    height={36}
                    className="rounded-full h-9 w-9 md:ms-auto"
                    alt=""
                  />
                  <h5 className="my-2 font-semibold text-lg">Self Employed</h5>
                  <h6 className="text-slate text-sm mb-0">2019-21</h6>
                </div>

                <div className="ltr:float-left rtl:float-right text-start ms-8 mt-6 md:mt-0">
                  <h5 className="title mb-1 font-semibold">UX / UI Designer</h5>
                  <p className="mt-3 mb-0 text-slate-400">
                    The generated injected humour, or non-characteristic words
                    etc. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Donec quam felis,
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:end-0 md:after:start-0 after:-start-9 before:content-[''] before:absolute md:before:mx-auto md:before:end-0 md:before:start-0 before:-start-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="text-start ms-8 relative md:order-2">
                  <Image
                    src="/images/client/google-logo.png"
                    width={36}
                    height={36}
                    className="rounded-full h-9 w-9 md:me-auto"
                    alt=""
                  />
                  <h5 className="my-2 font-semibold text-lg">Google Tech.</h5>
                  <h6 className="text-slate text-sm mb-0">2018-19</h6>
                </div>

                <div className="ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1">
                  <h5 className="title mb-1 font-semibold">
                    Sr. UX / UI Designer
                  </h5>
                  <p className="mt-3 mb-0 text-slate-400">
                    The generated injected humour, or non-characteristic words
                    etc. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Donec quam felis,
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:end-0 md:after:start-0 after:-start-9 before:content-[''] before:absolute md:before:mx-auto md:before:end-0 md:before:start-0 before:-start-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="md:text-end md:me-8 relative">
                  <Image
                    src="/images/client/lenovo-logo.png"
                    width={36}
                    height={36}
                    className="rounded-full h-9 w-9 md:ms-auto"
                    alt=""
                  />
                  <h5 className="my-2 font-semibold text-lg">Lenovo Ltd.</h5>
                  <h6 className="text-slate text-sm mb-0">2016-18</h6>
                </div>

                <div className="ltr:float-left rtl:float-right text-start ms-8 mt-6 md:mt-0">
                  <h5 className="title mb-1 font-semibold">
                    Jr. UX / UI Designer
                  </h5>
                  <p className="mt-3 mb-0 text-slate-400">
                    The generated injected humour, or non-characteristic words
                    etc. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Donec quam felis,
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:end-0 md:after:start-0 after:-start-9 before:content-[''] before:absolute md:before:mx-auto md:before:end-0 md:before:start-0 before:-start-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="text-start ms-8 relative md:order-2">
                  <Image
                    src="/images/client/circle-logo.png"
                    width={36}
                    height={36}
                    className="rounded-full h-9 w-9 md:me-auto"
                    alt=""
                  />
                  <h5 className="my-2 font-semibold text-lg">Circle CI</h5>
                  <h6 className="text-slate text-sm mb-0">2015-16</h6>
                </div>

                <div className="ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1">
                  <h5 className="title mb-1 font-semibold">
                    Front-end Web Designer
                  </h5>
                  <p className="mt-3 mb-0 text-slate-400">
                    The generated injected humour, or non-characteristic words
                    etc. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Donec quam felis,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
