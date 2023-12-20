'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

import * as Icon from 'react-feather'

export const BannerComponent = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    
    <section className="relative table w-full py-36 lg:py-64  bg-no-repeat sm:bg-left bg-right overflow-hidden bg-cover" style={{backgroundImage:"url('/images/it/bg.jpg')"}}>
    <div className="container relative z-1">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="md:col-span-7">
                <div className="md:me-6">
                    <span className="text-xl font-semibold">IT Company</span>
                    <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5 text-black dark:text-white"><span className="after:absolute after:end-0 after:start-0 after:bottom-2 after:h-1.5 after:w-auto after:bg-gradient-to-l after:to-indigo-600 after:from-green-600 relative">Consultant</span> & <br /> Find Bright <span className="after:absolute after:end-0 after:start-0 after:bottom-2 after:h-1.5 after:w-auto after:bg-gradient-to-l after:to-indigo-600 after:from-green-600 relative">Solutions</span></h4>
                    <p className="text-slate-400 text-lg max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                    <div className="mt-6">
                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact Us</Link>
                        <Link href="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white m-1 lightbox"><Icon.Video className="h-4 w-4"></Icon.Video></Link><span className="font-semibold ms-1 align-middle"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ModalVideo channel='youtube' isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

    <div className="absolute md:w-3/4 w-full top-1/2 -translate-y-1/2">
        <div className="absolute w-full h-[5000px] bg-slate-50 dark:bg-slate-800 md:opacity-100 opacity-90 top-1/2 -translate-y-1/2 md:-start-[10%] -start-[25%] ltr:rotate-12 rtl:-rotate-12"></div>
        <div className="absolute md:w-48 w-20 h-[5000px] bg-indigo-600 top-1/2 -translate-y-1/2 md:end-[10%] -end-[1%] ltr:rotate-12 rtl:-rotate-12"></div>
    </div>
</section>
  );
};
