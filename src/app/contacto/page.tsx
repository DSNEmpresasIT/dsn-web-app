"use client";
import React, { useEffect } from "react";

import { BannerComponent } from "@/componets/contact/BannerComponent";
import { ContactMethodsComponent } from "@/componets/contact/ContactMethodsComponent";
import { FormImageComponent } from "@/componets/contact/FormImageComponent";
import { FormComponent } from "@/componets/contact/FormComponent";
import { MapComponent } from "@/componets/contact/MapComponent";

export default function ContactOne() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.classList.add("light");
    }
  }, []);

  return (
    <>
      <BannerComponent />
      {/* CURVE EFFECT STARTS */}
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      {/* CURVE EFFECT ENDS */}
      <section className="relative md:py-24 py-16">
        <ContactMethodsComponent />
        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <FormImageComponent />
            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:ms-5">
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-medium">
                    Contáctenos!
                  </h3>
                  <FormComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MapComponent />
    </>
  );
}
