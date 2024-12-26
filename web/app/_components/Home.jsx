import React from "react"

import Image from "next/image"

import L2 from "../assets/img/image2.jpg"

const Home = () => {
  return (
    <div className="flex justify-start items-center gap-5">
      <div className="flex-auto gap-10">
        <p className="font-montserrat text-3xl font-bold italic">
          Setiap senar yang dipetik adalah cerita yang tak terucapkan dan
          kami di sini untuk mendengarkan kisah itu
        </p>
        <p className="text-sm mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio.
        </p>
        <div className="mt-8">
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
      </div>
      <div className="h-[500px] w-[40%] flex-none rounded-3xl bg-slate-400">
        <Image
          src={L2}
          className="h-full w-full rounded-3xl object-cover"
        />
      </div>
    </div>
  )
}

export default Home
