import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import { FiCamera } from "react-icons/fi";

export const PortfolioComponent = () => {
  const [isImage, setIsImage] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/portfolio/1.jpg",
    "/images/portfolio/2.jpg",
    "/images/portfolio/3.jpg",
    "/images/portfolio/4.jpg",
    "/images/portfolio/5.jpg",
    "/images/portfolio/6.jpg",
    "/images/portfolio/7.jpg",
    "/images/portfolio/8.jpg",
  ];
  const currentImage = images[currentImageIndex];

  const handleMovePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + images.length - 1) % images.length
    );
  };

  const handleMoveNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsImage(true);
  };
  const portfolioData = [
    {
      id: 1,
      image: "/images/portfolio/1.jpg",
      name: "Mockup Collection",
      title: "Abstract",
    },
    {
      id: 2,
      image: "/images/portfolio/2.jpg",
      name: "Mockup Collection",
      title: "Abstract",
    },
    {
      id: 3,
      image: "/images/portfolio/3.jpg",
      name: "Mockup Collection",
      title: "Abstract",
    },
    {
      id: 4,
      image: "/images/portfolio/4.jpg",
      name: "Mockup Collection",
      title: "Abstract",
    },
    {
      id: 5,
      image: "/images/portfolio/5.jpg",
      name: "Mockup Collection",
      title: "Abstract",
    },
    {
      id: 6,
      image: "/images/portfolio/6.jpg",
      name: "Mockup Collection",
      title: "Abstract",
    },
    {
      id: 7,
      image: "/images/portfolio/7.jpg",
      name: "Mockup Collection",
      title: "Abstract",
    },
    {
      id: 8,
      image: "/images/portfolio/8.jpg",
      name: "Mockup Collection",
      title: "Abstract",
    },
  ];
  return (
    <section className="container relative md:py-24 py-16" id="portfolio">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
          Portfolio
        </h6>
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          Our Works & Projects
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          Obviously I am a Web Designer. Experienced with all stages of the
          development cycle for dynamic web projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
        {portfolioData.map((item, index) => {
          return (
            <div
              key={index}
              className="group relative block overflow-hidden rounded-md transition-all duration-500"
            >
              <Image
                src={item.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                alt=""
              />
              <div className="absolute inset-0 group-hover:bg-dark opacity-50 transition duration-500 z-0"></div>

              <div className="content">
                <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 transition-all duration-500">
                  <Link
                    href="#"
                    onClick={() => handleImageClick(index)}
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"
                  >
                    <FiCamera className="w-4 h-4" />
                  </Link>
                </div>

                <div className="title absolute z-10 opacity-0 group-hover:opacity-100 bottom-4 start-4 transition-all duration-500">
                  <Link
                    href="/portfolio-detail-one"
                    className="h6 text-md font-medium text-white hover:text-indigo-600 duration-500 ease-in-out"
                  >
                    {item.name}
                  </Link>
                  <p className="text-slate-100 tag mb-0">{item.title}</p>
                </div>
              </div>
            </div>
          );
        })}

        {isImage && (
          <Lightbox
            mainSrc={currentImage}
            prevSrc={
              images[(currentImageIndex + images.length - 1) % images.length]
            }
            nextSrc={images[(currentImageIndex + 1) % images.length]}
            onCloseRequest={() => setIsImage(false)}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </div>
    </section>
  );
};
