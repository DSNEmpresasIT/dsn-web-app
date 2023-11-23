import Image from "next/image";
import React from "react";

export const AboutUsComponent2 = () => {
  return (
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 md:col-span-6">
            <Image
              src="/images/food/about.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-md shadow dark:shadow-gray-800"
              alt=""
            />
          </div>

          <div className="lg:col-span-7 md:col-span-6">
            <div className="ms-6">

              <h4 className="my-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                Food is our common ground, <br /> a universal experience.
              </h4>

              <p className="text-slate-400">
                Fortunately, the phrase Lorem Ipsum is now recognized by
                electronic pre-press systems and, when found, an alarm can be
                raised. This avoids a publication going to print with overlooked
                dummy text.
              </p>

              <p className="mt-4 text-slate-400 text-lg mb-0">
                The phrasal sequence of the Lorem Ipsum text is now so
                widespread and commonplace that many DTP programmes can generate
                dummy text using the starting sequence Lorem ipsum.
              </p>

              <div className="mt-6">
                <Image src="/images/sign.png" width={128} height={32} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
