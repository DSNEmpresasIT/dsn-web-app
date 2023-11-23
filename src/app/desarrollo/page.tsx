'use client'
import React, { useEffect } from 'react'
import { BannerComponent } from '@/componets/consulting/BannerComponent';
import { HowWorksSection } from '@/componets/software/HowWorksSection';
import { TechnologiesSection } from '@/componets/software/TechnologiesSection';
import { CardsCarouselComponent } from '@/componets/software/CardsCarouselComponent';
import { PortfolioSection } from '@/componets/software/PortfolioSection';

const Page = () => {
  useEffect(() => {
    if(typeof window !== 'undefined') {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  return (
    <>
      <BannerComponent />
      <HowWorksSection />
      <TechnologiesSection />
      <CardsCarouselComponent />
      <PortfolioSection />
    </>
  )
}

export default Page;
