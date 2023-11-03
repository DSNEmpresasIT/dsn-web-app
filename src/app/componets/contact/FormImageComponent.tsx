import Image from 'next/image'
import React from 'react'

export const FormImageComponent = () => {
  return (
    <div className="lg:col-span-7 md:col-span-6">
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        src="/images/contact.svg"
        alt=""
      />
    </div>
  )
}
