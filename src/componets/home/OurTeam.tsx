import React from "react";
import TeamData from "../children/TeamData";

export const OurTeam = () => {
  return (
    <section className="relative md:py-24 py-16 overflow-hidden">
      <div className="container relative md:mt-22 mt-12">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            Our Instructor
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Start working with Tailwind CSS that can provide everything you need
            to generate awareness, drive traffic, connect.
          </p>
        </div>
        <TeamData />
      </div>
    </section>
  );
};
