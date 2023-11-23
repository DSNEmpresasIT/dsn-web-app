'use client'
import React from "react";
import { BannerComponent } from "@/componets/consulting/BannerComponent";
import { AccordionSectionComponent } from "@/componets/consulting/AccordionSectionComponent";
import { GallerySectionComponent } from "@/componets/consulting/GallerySectionComponent";
import Link from "next/link";
import { MdOutlineEventNote } from "react-icons/md";
import CountUp from "react-countup";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <BannerComponent />
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            <div>
              <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
                Services
              </h6>
              <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold mb-4 md:mb-0">
                It was a very common
                <br /> question that What IT Service
                <br /> We Provide now!
              </h3>
            </div>
            <p className="text-slate-400 max-w-xl">
              Explore and learn more about everything from machine learning and
              global payments to scaling your team.
            </p>
          </div>
        </div>
        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="md:col-span-6">
              <div className="lg:me-8">
                <div className="relative">
                  <Image
                    src="/images/it/about.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-full shadow-lg dark:shadow-gray-800"
                    alt=""
                  />

                  <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto lg:w-72 w-56 lg:h-72 h-56 flex justify-center items-center bg-white dark:bg-slate-900 rounded-full shadow-lg dark:shadow-gray-800">
                    <div className="text-center">
                      <span className="text-indigo-600 text-2xl font-bold mb-0 block">
                        <CountUp
                          className="counter-value text-6xl font-bold"
                          end={15}
                          start={1}
                        />
                        +
                      </span>
                      <span className="font-semibold block mt-2">
                        Years <br /> Experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="lg:ms-8">
                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
                  Fast & Effective
                </h6>
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                  we are a global stakeholder <br /> relations and partnership{" "}
                  <br /> building consultancy.
                </h3>

                <p className="text-slate-400 max-w-xl mb-6">
                  Get instant helpful resources about anything on the go, easily
                  implement secure money transfer solutions, boost your daily
                  efficiency, connect to other app users and create your own
                  Techwind network, and much more with just a few taps. commodo
                  consequat. Duis aute irure.
                </p>

                <Link
                  href="/page-services"
                  className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                >
                  <MdOutlineEventNote className="me-2 text-lg" /> Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:pt-26 pt-14 md:pb-23 pb-16">
        <AccordionSectionComponent />
        {/* <GallerySectionComponent /> */}
      </section>
    </>
  );
};

export default Page;
