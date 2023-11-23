import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import ModalVideo from "react-modal-video";
import "../../../../node_modules/react-modal-video/css/modal-video.css";

import { WhoWeAreComponent } from './WhoWeAreComponent';

export const WeAreComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const weAreComponentData = {  
    mainImg: "/images/business/about01.jpg",
    previewVideoImg: "/images/business/about01.jpg",
    title: () => (<>We are the largest <br /> Business expert{" "}</>),
    description: `Start working with Tailwind CSS that can provide everything
    you need to generate awareness, drive traffic, connect. Dummy
    text is text that is used in the publishing industry or by web
    designers to occupy the space which will later be filled with
    real content. This is required when, for example, the final
    text is not yet available. Dummy texts have been in use by
    typesetters since the 16th century.`,
    textButton: 'Buy Now',
    youtubeIdVideo: 'A7ULWD9HuFc',
    href: '#',
  }
  
  return (
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="md:col-span-5">
            <div className="relative">
              <Image
                src={weAreComponentData.mainImg}
                width={400}
                height={500}
                className="rounded-md"
                alt=""
              />
              <div className="absolute bottom-24 end-0">
                <Image
                  src={weAreComponentData.previewVideoImg}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-md shadow-md w-48 h-48"
                  alt=""
                />
                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                  <Link
                    href=""
                    onClick={() => setIsOpen(true)}
                    data-type="youtube"
                    data-id={weAreComponentData.youtubeIdVideo}
                    className="lightbox h-14 w-14 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600"
                  >
                    <i className="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId={weAreComponentData.youtubeIdVideo}
            onClose={() => setIsOpen(false)}
          />
          <div className="md:col-span-7">
            <div className="lg:ms-4">
              <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">
                <weAreComponentData.title />
              </h4>
              <p className="text-slate-400 max-w-xl">
                {weAreComponentData.description}
              </p>
              <Link
                href={weAreComponentData.href}
                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3"
              >
                {weAreComponentData.textButton} <i className="mdi mdi-chevron-right align-middle"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <WhoWeAreComponent />
    </section>
  )
}
