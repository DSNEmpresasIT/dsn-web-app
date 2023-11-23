'use client'
import React, { useEffect } from 'react'
import { BannerComponent } from '../componets/software/BannerComponent';
import { AboutUsComponent } from '../componets/software/AboutUsComponent';
import { CardsCarouselComponent } from '../componets/software/CardsCarouselComponent';
import { PortfolioSection } from '../componets/software/PortfolioSection';
import { TechnologiesSection } from '../componets/software/TechnologiesSection';
import { HowWorksSection } from '../componets/software/HowWorksSection';

const Page = () => {
  useEffect(() => {
    if (typeof window !== "undefined"){
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.classList.add('dark');
    }
  }, []);
  return (
    <>
      <BannerComponent />
      <HowWorksSection />
      {/* <AboutUsComponent /> */}
      <TechnologiesSection />
      <CardsCarouselComponent />
      <PortfolioSection />
    </>
  )
}

export default Page;
