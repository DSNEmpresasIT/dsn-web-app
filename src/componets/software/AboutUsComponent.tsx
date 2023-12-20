import Image from "next/image";
import Link from "next/link";
import React from "react";

export const AboutUsComponent = () => {
  return (
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="md:col-span-6">
            <div className="lg:me-8">
              <Image
                src="/images/charity/about.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="shadow-lg dark:shadow-gray-800"
                alt=""
              />
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="lg:ms-8">
              <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
                About Us
              </h6>
              <h3 className="mb-3 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                Our Highest Ambition <br /> is to Help People
              </h3>
              <h3 className="mb-4 text-lg leading-normal font-semibold">
                Our programs contribute to peace and development through
                volunteerism worldwide. Take part in changing the lives of young
                people across the world.
              </h3>

              <p className="text-slate-400 max-w-xl mb-6">
                We’re focused on providing affordable volunteer travel
                experiences that are responsible. Our programs heighten global
                awareness and cultural understanding through the skills and
                expertise taken by volunteers to their host communities, and
                through the experiences and lessons that volunteers take back to
                their own countries and cultures.
              </p>

              <Link
                href="#"
                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
