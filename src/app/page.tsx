"use client";
import React, { useEffect } from "react";

import { CarouselComponent } from "@/componets/home/CarouselComponent";
import { OurTeam } from "@/componets/home/OurTeam";
import { WorkExperienceTree } from "@/componets/home/WorkExperienceTree";
import { PortfolioComponent } from "@/componets/home/PortfolioComponent";
import { OurBussinessComponent } from "@/componets/home/OurBussinessComponent";
import { AboutUsComponent } from "@/componets/software/AboutUsComponent";
import { GoContactComponent } from "@/componets/commons/GoContactComponent";

export default function Business() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, []);

  return (
    <>
      <CarouselComponent />
      <OurBussinessComponent />
      <AboutUsComponent />
      <WorkExperienceTree />
      <PortfolioComponent />
      <OurTeam /> 
      <GoContactComponent />
    </>
  );
}
