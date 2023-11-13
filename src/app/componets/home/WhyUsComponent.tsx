import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { KeyFeature } from '../commons/keyFeatures';
import { BsCheckCircle } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const FirstCard = ({ img, title, description, checkList, textButton, href }) => (
  <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
    <div
      className="relative wow animate__animated animate__fadeInLeft"
      data-wow-delay=".3s"
    >
      <Image
        src={img}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="rounded-lg shadow-md dark:shadow-gray-800"
        alt=""
      />
      <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 start-0 rotate-45 -z-1 rounded-3xl"></div>
    </div>

    <div
      className="lg:ms-8 wow animate__animated animate__fadeInRight"
      data-wow-delay=".3s"
    >
      <h4 className="mb-4 text-2xl leading-normal font-medium">
        {title}
      </h4>
      <p className="text-slate-400">
        {description}
      </p>
      <ul className="list-none text-slate-400 mt-4">
        {checkList.map((text, key) => (
          <li className="mb-1 flex" key={`first-card-key-${key}`}>
            <BsCheckCircle className="text-indigo-600 text-base me-2" />
            <i></i> {text}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <Link
          href={href}
          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
        >
          {textButton}{" "}
          <MdKeyboardArrowRight className="text-xl ms-1" />
        </Link>
      </div>
    </div>
  </div>
)

const SecondCard = ({ img, title, description, checkList, textButton, href }) => (
  <div className="container relative md:mt-24 mt-16">
    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
      <div
        className="relative order-1 md:order-2 wow animate__animated animate__fadeInRight"
        data-wow-delay=".5s"
      >
        <Image
          src={img}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-lg shadow-md dark:shadow-gray-800"
          alt=""
        />
        <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 end-0 rotate-45 -z-1 rounded-3xl"></div>
      </div>

      <div
        className="lg:me-8 order-2 md:order-1 wow animate__animated animate__fadeInLeft"
        data-wow-delay=".5s"
      >
        <h4 className="mb-4 text-2xl leading-normal font-medium">
          {title}
        </h4>
        <p className="text-slate-400">
          {description}
        </p>
        <ul className="list-none text-slate-400 mt-4">
        {checkList.map((text, key) => (
          <li className="mb-1 flex" key={`first-card-key-${key}`}>
            <BsCheckCircle className="text-indigo-600 text-base me-2" />
            <i></i> {text}
          </li>
        ))}
        </ul>

        <div className="mt-4">
          <Link
            href="/page-aboutus"
            className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
          >
            Find Out More{" "}
            <MdKeyboardArrowRight className="text-xl ms-1" />
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export const WhyUsComponent = () => {
  const whyUsComponentData = {
    title: '',
    description: '',
    firstCard: {
      img: '/images/saas/classic02.png',
      title: "Great Product Analytics With Real Problem",
      description: `Due to its widespread use as filler text for layouts,
      non-readability is of great importance: human perception is
      tuned to recognize certain patterns and repetitions in texts. If
      the distribution of letters visual impact.`,
      checkList: ['Digital Marketing Solutions for Tomorrow', 'Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand'],
      textButton: 'Find More',
      href: '/contacto'
    },
    secondCard: {
      img: '/images/saas/classic03.png',
      title: "Get Notified About Importent Email",
      description: `Due to its widespread use as filler text for layouts,
      non-readability is of great importance: human perception is
      tuned to recognize certain patterns and repetitions in texts. If
      the distribution of letters visual impact.`,
      checkList: ['Digital Marketing Solutions for Tomorrow', 'Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand'],
      textButton: 'Find Out More',
      href: '/contacto'  
    }
  }
  return (
    <section className="relative md:py-24 py-16 overflow-hidden">
      <div className="container relative md:mt-24 mt-16">
        <div
          className="grid grid-cols-1 pb-8 text-center wow animate__animated animate__fadeInUp"
          data-wow-delay=".1s"
        >
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            Why Everyone Loves Techwind
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Start working with Tailwind CSS that can provide everything you
            need to generate awareness, drive traffic, connect.
          </p>
        </div>
      </div>
      <FirstCard {...whyUsComponentData.firstCard} />
      <SecondCard {...whyUsComponentData.secondCard}/>
    </section>
  )
}
