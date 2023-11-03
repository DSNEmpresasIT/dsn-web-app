"use client";
import React, { useEffect } from "react";

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

  return (
    <>
      <CarouselComponent />      
      <PartnersComponent />
      {/* <section className="relative md:pt-24 pt-16">
        <KeyFeature btnFill={false} />
      </section> */}
      <WhyUsComponent />
      <WeAreComponent />
      <FeaturesTwoComponent />
    </>
  );
}
