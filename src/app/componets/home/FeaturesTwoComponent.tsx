import React from 'react'
import { AiOutlineFire } from 'react-icons/ai';
import { MdKeyboardArrowRight, MdOutlineJoinInner, MdOutlineSelectAll } from 'react-icons/md';
import * as Icon from "react-feather";
import Link from 'next/link';
import Image from 'next/image';
import { BsCheckCircle } from 'react-icons/bs';

export const FeaturesTwoComponent = () => {
  const featuresTwoComponentData = {
    title: 'Features',
    subTitle: 'Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.',
    features: [
      {
          icon: MdOutlineJoinInner,
          title:"Grow Your Business",
          desc:"If the distribution of letters and words is random, the reader will not be distracted from making.",
      },
      {
          icon: MdOutlineSelectAll,
          title:"Drive More Sales",
          desc:"If the distribution of letters and words is random, the reader will not be distracted from making.",
      },
      {
          icon: AiOutlineFire,
          title:"Handled By Expert",
          desc:"If the distribution of letters and words is random, the reader will not be distracted from making.",
      },
    ],
    panel_one: {
      img: '/images/saas/about.jpg',
      title: 'Manage all your tasks on this one plateform',
      description: 'Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.',
      textButton: 'Find Out More',
      subCard: {
        title: 'Helpcenter Software',
        description: 'If the distribution of letters and words is random',
        workInProgress: 84
      }
    },
    panel_two: {
      img: '/images/saas/classic03.png',
      title: 'Get Notified About Importent Email',
      description: 'Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.',
      textButton: 'Find Out More',
      features: [          
        'Digital Marketing Solutions for Tomorrow',
        'Our Talented & Experienced Marketing Agency',
        'Create your own skin to match your brand',
      ]
    },
  }
  const featuresData = [
    {
        icon: MdOutlineJoinInner,
        title:"Grow Your Business",
        desc:"If the distribution of letters and words is random, the reader will not be distracted from making.",
    },
    {
        icon: MdOutlineSelectAll,
        title:"Drive More Sales",
        desc:"If the distribution of letters and words is random, the reader will not be distracted from making.",
    },
    {
        icon: AiOutlineFire,
        title:"Handled By Expert",
        desc:"If the distribution of letters and words is random, the reader will not be distracted from making.",
    },
  ]
  return (
    <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
        id="features"
      >
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              {featuresTwoComponentData.title}
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              {featuresTwoComponentData.subTitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
            {featuresTwoComponentData.features.map((item, index) => {
              let Icons = item.icon;
              return (
                <div
                  key={index}
                  className="group relative lg:px-6 mt-4 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center"
                >
                  <div className="relative overflow-hidden text-transparent -m-3">
                    <Icon.Hexagon className="h-28 w-28 fill-indigo-600/5 mx-auto rotate-[30deg]"></Icon.Hexagon>
                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                      <Icons />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="#"
                      className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out"
                    >
                      {item.title}
                    </Link>
                    <p className="text-slate-400 transition duration-500 ease-in-out mt-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
            <div className="relative">
              <div className="md:me-10">
                <Image
                  src={featuresTwoComponentData.panel_one.img}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  placeholder="blur"
                  blurDataURL={featuresTwoComponentData.panel_one.img}
                  className="rounded-lg shadow-md dark:shadow-gray-800"
                  alt=""
                />
              </div>
              <div className="absolute -bottom-10 end-0 p-6 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 md:w-80 w-60">
                <h5 className="text-lg font-semibold mb-3">
                  {featuresTwoComponentData.panel_one.subCard.title}
                </h5>
                <p className="text-slate-400">
                  {featuresTwoComponentData.panel_one.subCard.description}
                </p>
                <div className="flex justify-between mt-3 mb-2">
                  <span className="text-slate-400">Work in progress</span>
                  <span className="text-slate-400">{featuresTwoComponentData.panel_one.subCard.workInProgress}%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                  <div
                    className="bg-indigo-600 h-[6px] rounded-full"
                    style={{ width: `${featuresTwoComponentData.panel_one.subCard.workInProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="lg:ms-8 mt-8 md:mt-0">
              <h4 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                {featuresTwoComponentData.panel_one.title}
              </h4>
              <p className="text-slate-400">
                {featuresTwoComponentData.panel_one.description}
              </p>

              <div className="mt-4">
                <Link
                  href="/page-aboutus"
                  className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                >
                  {featuresTwoComponentData.panel_one.textButton}{" "}
                  <MdKeyboardArrowRight className="text-xl ms-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="relative order-1 md:order-2">
              <Image
                src={featuresTwoComponentData.panel_two.img}
                placeholder="blur"
                blurDataURL={featuresTwoComponentData.panel_two.img}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-lg shadow-md dark:shadow-gray-800"
                alt=""
              />
            </div>

            <div className="lg:me-8 order-2 md:order-1">
              <h4 className="mb-4 text-2xl leading-normal font-medium">
              {featuresTwoComponentData.panel_two.title}
              </h4>
              <p className="text-slate-400">
                {featuresTwoComponentData.panel_two.description}
              </p>
              <ul className="list-none text-slate-400 mt-4">
                {featuresTwoComponentData.panel_two.features.map((text: string, index: number) => (
                  <li className="mb-1 flex items-center" key={index}>
                    <BsCheckCircle className="text-indigo-600 text-base me-2" />{" "}
                    {text}
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <Link
                  href="/page-aboutus"
                  className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                >
                  {featuresTwoComponentData.panel_two.textButton}{" "}
                  <MdKeyboardArrowRight className="text-xl ms-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
