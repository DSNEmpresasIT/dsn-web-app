'use client'
import Link from "next/link";
import React, { useState } from "react";

export const AccordionSectionComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: "How does it work ?",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      title: "Do I need a designer to use Techwind ?",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      title: "What do I need to do to start selling ?",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
  ];
  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div className="container relative">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
        <div className="lg:ms-8 md:mt-0 mt-8">
          <div id="accordion-collapseone" data-accordion="collapse">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4"
              >
                <h2
                  className="text-base font-semibold"
                  id="accordion-collapse-heading-1"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className={`flex justify-between items-center p-5 w-full font-medium text-start ${
                      activeIndex === index
                        ? "bg-gray-50 dark:bg-slate-800 text-indigo-600"
                        : ""
                    }`}
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                  >
                    <span>{item.title}</span>
                    <svg
                      data-accordion-icon
                      className={`${
                        activeIndex === index ? "rotate-180" : "rotate-270"
                      } w-4 h-4 shrink-01`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                {activeIndex === index && (
                  <div>
                    <div className="p-5">
                      <p className="text-slate-400 dark:text-gray-400">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            <span className="text-indigo-600">Insurance</span> for your <br />{" "}
            everyday needs
          </h3>
          <p className="text-slate-400 max-w-xl">
            Explore and learn more about everything from machine learning and
            global payments to scaling your team.
          </p>

          <div className="mt-6">
            <Link
              href="#"
              className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
