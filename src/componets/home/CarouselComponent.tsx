import React from 'react'
import Link from 'next/link';
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

interface CarouselData {
  img: string;
  title: string;
  description: string;
  textButton?: string;
}

export const CarouselComponent = () => {

  const carouselComponentData: CarouselData[] = [
    {
      img: '/images/business/bg01.jpg',
      title: 'Take Care of Your Future',
      description: 'Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.',
      textButton: 'Contact us'
    },
    {
      img: '/images/business/bg02.jpg',
      title: 'Lets Start With Techwind',
      description: 'Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.',
      textButton: 'See Services'
    },
    {
      img: '/images/business/bg03.jpg',
      title: 'Build and Grow Your Business',
      description: 'Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.',
    },
  ] 

  return (
    <section className="relative">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={55}
          totalSlides={3}
          infinite={true}
          interval={5000}
          isPlaying={true}
          // className="h-screen"
        >
          <Slider className="h-full careHeight">
            {carouselComponentData.map((data: CarouselData, index: number) => (
              <Slide index={index} key={`${index}-keys-slider-component`} className="h-full">
                <div className="flex items-center justify-center transition-all duration-700 ease-in-out h-full overflow-hidden">
                  <div
                    className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover "
                    style={{
                      backgroundImage: `url('${data.img}')`,
                    }}
                  ></div>
                  <div className="absolute inset-0 ltr:md:bg-gradient-to-r rtl:md:bg-gradient-to-l md:from-black md:via-black/80 md:bg-black/20 bg-black/70 z-2"></div>
                  <div className="container relative z-3 flex items-center ">
                    <div className="grid grid-cols-1 md:mt-10 mt-14">
                      <div className="md:text-start text-center">
                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl md:mb-6 mb-2">
                          {data.title}
                        </h1>
                        <p className="text-white/70 text-lg max-w-xl">
                          {data.description}
                        </p>

                        <div className="md:mt-8 mt-4">
                          {
                            data.textButton && (
                              <Link
                                href="/contacto"
                                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                              >
                                {data.textButton}
                              </Link>
                            )
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </section>
  )
}
