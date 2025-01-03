import React from "react"

import Image from "next/image"

import Ornament from "../assets/img/Dot Ornament.png"
import Hasna from "../assets/img/Foto Hasna.png"
import Vira from "../assets/img/vira.png"

const OurTeam = () => {
  return (
    <div className="relative mb-5 flex flex-col gap-10 px-12">
      <Image src={Ornament} className="absolute top-60 left-16 w-14" />
      <p className="text-4xl">Our Team</p>
      <div className="grid grid-cols-2 gap-5">
        {/* Vira */}
        <div className="flex flex-col items-center gap-5">
          <div className="h-[550px] w-[70%] overflow-hidden rounded-t-full">
            <Image
              src={Vira}
              alt
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-center text-2xl font-bold">Viranti Sukarelawan</p>
        </div>
        {/* Hasna */}
        <div className="flex flex-col items-center gap-5">
          <div className="h-[550px] w-[70%] overflow-hidden rounded-t-full">
            <Image
              src={Hasna}
              alt
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-center text-2xl font-bold">
            Hasna Fikriyah Dwinas
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
