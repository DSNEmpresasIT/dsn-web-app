import React from 'react'
import dynamic from "next/dynamic";

const CompanyLogo = dynamic(() => import("../../componets/commons/companyLogo"));

export const PartnersComponent = () => {
  return (
    <section className="relative py-8 bg-indigo-600">
      <div className="container relative">
        <CompanyLogo />
      </div>
    </section>
  )
}
