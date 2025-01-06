import React from "react"

import Image from "next/image"

import ArsitekturSistem from "../assets/img/Untitled design (3).png"


const ArsitekturSistems = () => {
  return (
    <div className="flex flex-col items-center gap-5 px-12 pt-5" id="arsitektursistem">
      <p className="text-center text-2xl font-bold">Arsitektur Sistem</p>
      <div className="overflow-hidden bg-[#fff1da] w-full h-[500px] px-5 py-2 rounded-xl shadow-xl">
        <Image
          src={ArsitekturSistem}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default ArsitekturSistems
