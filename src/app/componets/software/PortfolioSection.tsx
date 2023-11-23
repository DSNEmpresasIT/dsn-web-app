import Image from "next/image";
import Link from "next/link";
import React from "react";

export const PortfolioSection = () => {
  const productData = [
    {
      image: "/images/portfolio/pro1.jpg",
      title: "Techwind Personal Portfolio",
      name: "Creative",
    },
    {
      image: "/images/portfolio/pro2.jpg",
      title: "Techwind Minimal Portfolio",
      name: "Minimal",
    },
    {
      image: "/images/portfolio/pro3.jpg",
      title: "Techwind NFT Market",
      name: "Crypto",
    }
  ];
  return (
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid grid-cols-1">
          <div className="section-title mb-8">
            <h6 className="text-indigo-600 text-sm font-bold mb-2">
              Portfolio
            </h6>
            <h4 className="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold mb-4">
              Read some amazing <br /> case studies.
            </h4>
            <p className="text-slate-400 max-w-xl mb-0">
              Start working with Techwind that can provide everything you need
              to generate awareness, drive traffic, connect.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-2">
          {productData.map((item, index) => {
            return (
              <div className="picture-item p-4 rounded-md" key={index}>
                <div className="">
                  <div className="relative">
                    <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                      <Image
                        src={item.image}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="rounded-t-md shadow"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="pt-4 px-3">
                    <h5 className="mb-1 font-semibold text-lg">
                      <Link
                        href="#"
                        className="hover:text-indigo-600 transition-all duration-500 ease-in-out"
                      >
                        Techwind Personal Portfolio
                      </Link>
                    </h5>
                    <span className="text-slate-400">Creative</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
