import React from "react"

import Image from "next/image"

import heroImage from "../assets/img/Hero.png"
import Decoration from "../assets/img/Decore.png"
const Hero = () => {
  return (
    <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between relative">
      <Image src={Decoration} className="absolute top-0 left-0 w-40" />
      <nav className="absolute top-0 right-0 mt-5 mr-5">
        <ul className="flex gap-5">
          <a className="font-bold" href="Home">Home</a>
          <a className="font-bold" href="Home">Label</a>
          <a className="font-bold" href="Home">Arsitektur Sistem</a>
          <a className="font-bold" href="Home">Flowchart</a>
          <a className="font-bold" href="Home">Prediksi</a>
          <a className="font-bold" href="Home">Team</a>
        </ul>
      </nav>
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
