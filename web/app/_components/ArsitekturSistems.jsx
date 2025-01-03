import React from "react"

import Image from "next/image"

import ArsitekturSistem from "../assets/img/Arsitektur_sistem.png"

const ArsitekturSistems = () => {
  return (
    <div className="flex flex-col items-center gap-5 px-12">
      <p className="text-center text-2xl font-bold">Arsitektur Sistem</p>
      <div className="grid place-items-center overflow-hidden">
        <Image
          src={ArsitekturSistem}
          alt=""
          className=""
        />
      </div>
    </div>
  )
}

export default ArsitekturSistems
