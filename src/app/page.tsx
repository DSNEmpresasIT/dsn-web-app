"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../node_modules/react-modal-video/css/modal-video.css";

import { BsCheckCircle } from "react-icons/bs";

import { MdKeyboardArrowRight, MdOutlineJoinInner, MdOutlineSelectAll } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";
import { CarouselComponent } from "./componets/home/CarouselComponent";
import { PartnersComponent } from "./componets/home/PartnersComponent";
import { WhyUsComponent } from "./componets/home/WhyUsComponent";
import { WeAreComponent } from "./componets/home/WeAreComponent";
import { KeyFeature } from "./componets/commons/keyFeatures";
import { FeaturesTwoComponent } from "./componets/home/FeaturesTwoComponent";


export default function Business() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.classList.add("dark");
    }
  }, []);


  const PricingData = [
    {
      title: "STARTER",
      amount: "39",
      subData: [
        "Full Access",
        "Source Files",
        "Free Appointments",
        "Enhanced Security",
      ],
    },
    {
      title: "BUSINESS",
      amount: "49",
      subData: [
        "Full Access",
        "Source Files",
        "Free Appointments",
        "Enhanced Security",
      ],
    },
    {
      title: "PROFESSIONAL",
      amount: "59",
      subData: [
        "Full Access",
        "Source Files",
        "Free Appointments",
        "Enhanced Security",
      ],
    },
  ];
  return (
    <>
      <CarouselComponent />      
      <PartnersComponent />
      <section className="relative md:pt-24 pt-16">
        <KeyFeature btnFill={false} />
      </section>
      <WhyUsComponent />
      <WeAreComponent />
      <FeaturesTwoComponent />
    </>
  );
}
