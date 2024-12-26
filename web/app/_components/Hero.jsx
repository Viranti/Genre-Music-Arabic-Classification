import React from "react"

import Image from "next/image"

import heroImage from "../assets/img/Hero.png"

const Hero = () => {
  return (
    <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
      <div className="text-center sm:ml-20 sm:text-left pt-20">
        <p className="text-lg font-bold text-[#DF6951]">KLASIFIKASI AUDIO</p>
        <p className="text-4xl font-bold">
          Klasifikasi <br />
          Genre Music Arabic
        </p>
        <p className="mt-5 text-[#5E6282] sm:px-6 md:px-0">
          Website klasifikasi audio ini digunakan untuk mengunggah,
          menganalisis, dan mengklasifikasikan file audio berdasarkan kategori
          atau label data
        </p>
      </div>
      <div className="hidden w-[40%] sm:block sm:w-auto">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero
