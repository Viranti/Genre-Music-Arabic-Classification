import React from "react"

import Image from "next/image"

import L1 from "../assets/element/2.png"
import L2 from "../assets/element/8.png"
import L3 from "../assets/element/9.png"
import Grafis2 from "../assets/img/1.png"
import Grafis1 from "../assets/img/3.png"
import Grafis3 from "../assets/img/5.png"

const MainSection = () => {
  return (
    <div className="relative flex flex-col gap-6 px-6">
      {/* element */}
      <div className="hidden md:block">
        <Image
          src={L1}
          className="absolute right-40 top-20 h-16 w-16 rotate-12 drop-shadow-xl"
          alt="L1"
        />
        <Image
          src={L2}
          className="absolute left-40 top-20 h-16 w-16 -rotate-12 drop-shadow-xl"
          alt="L2"
        />
        <Image
          src={L3}
          className="absolute right-72 top-32 h-16 w-16 -rotate-12 drop-shadow-xl"
          alt="L3"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-center font-montserrat text-3xl font-bold">
          Setiap senar yang dipetik adalah cerita yang tak terucapkan <br /> dan
          kami di sini untuk mendengarkan kisah itu
        </p>
        <p className="texs text-center text-sm">
          Biarkan setiap petikan senar membawa pesan dari hatimu
        </p>
      </div>
      <div className="mb-10 flex justify-center">
        <button className="flex w-fit cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#d7c6ff] px-4 py-2 font-semibold text-black">
          <p>Mulai Sekarang</p>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right size-5"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
      <div className="grid place-items-center gap-12 md:grid-cols-3 ">
        <div className="relative flex h-72 w-52 items-center justify-center rounded-xl border bg-[#ffabde]">
          <div className="absolute h-80 w-auto">
            <Image
              className="max-h-full max-w-full object-contain"
              src={Grafis1}
              alt="Gitar Acoustic"
            />
          </div>
        </div>
        <div className="relative flex h-56 w-[85%] items-center justify-center rounded-xl border bg-[#d7c6ff] pb-8">
          <div className="h-72 w-auto">
            <Image
              className="max-h-full max-w-full object-contain"
              src={Grafis2}
              alt="Gitar Acoustic"
            />
          </div>
        </div>
        <div className="relative flex h-72 w-52 items-center justify-center rounded-xl border bg-[#fae180]">
          <div className=" h-80 w-auto">
            <Image
              className="max-h-full max-w-full object-contain"
              src={Grafis3}
              alt="Gitar Acoustic"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection
