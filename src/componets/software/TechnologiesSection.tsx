import Image from "next/image";
import React from "react";

export const TechnologiesSection = () => {
  const crypto = [
    "/images/crypto/coin/auroracoin.png",
    "/images/crypto/coin/avalanche.png",
    "/images/crypto/coin/binance.png",
    "/images/crypto/coin/bitcoin-cash.png",
    "/images/crypto/coin/bitcoin.png",
    "/images/crypto/coin/bittorrent.png",
    "/images/crypto/coin/blocknet.png",
    "/images/crypto/coin/coinye.png",
    "/images/crypto/coin/ethereum.png",
    "/images/crypto/coin/kucoin.png",
    "/images/crypto/coin/litecoin.png",
    "/images/crypto/coin/monero.png",
    "/images/crypto/coin/potcoin.png",
    "/images/crypto/coin/primecoin.png",
    "/images/crypto/coin/zcash.png",
  ];

  return (
    <section className="relative md:py-20 py-12">
      <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            All your crypto and NFTs in one place
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            With Techwind Trade, you can be sure your trading skills are matched
            with excellent service.
          </p>
        </div>

        <div className="grid grid-cols-1 justify-center mt-2">
          <ul className="list-none text-center">
            {crypto.map((item, index) => {
              return (
                <li className="inline-block md:m-6 my-6 mx-2" key={index}>
                  <Image
                    src={item}
                    width={80}
                    height={80}
                    className="shadow-md dark:shadow-gray-800 rounded-full h-20 w-20 p-4"
                    alt=""
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
