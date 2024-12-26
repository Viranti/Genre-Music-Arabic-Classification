import React from "react"

import Image from "next/image"

import East from "../assets/img/East.png"
import Poems from "../assets/img/Poems.png"
import Rai from "../assets/img/Rai.png"

const Genre = () => {
  return (
    <div className="mb-5 px-6">
      <p className="text-center text-2xl font-bold">GENRE MUSIC ARABIC</p>
      <div className="mt-20 grid md:grid-cols-3 place-items-center gap-8">
        {/* 1 */}
        <div className="flex h-80 w-[70%] flex-col gap-5 rounded-xl bg-[#fff1da] p-6">
          <div className="flex items-center justify-center gap-5">
            <div className="w-10">
              <Image src={Poems} />
            </div>
            <p className="text-xl font-bold">Genre Poems</p>
          </div>
          <p className="text-center">
            Jenis musik yang menggabungkan puisi (poetry) dengan melodi dalam
            tradisi musik Arab. Ditulis saling terpaut setiap katanya tersaji
            secara teratur dan terikat,
          </p>
        </div>
        {/* 2 */}
        <div className="flex h-80 w-[90%] flex-col gap-5 rounded-xl bg-[#fff1da] p-6">
          <div className="flex items-center justify-center gap-5">
            <div className="w-10">
              <Image src={East} />
            </div>
            <p className="text-xl font-bold">Genre East</p>
          </div>
          <p className="text-center">
            Jenis musik yang berasal dari wilayah Timur Tengah (Arab Timur) yang
            mencakup negara-negara seperti Mesir, Lebanon, Suriah, Yordania yang
            menggambarkan ciri khas budaya dan tradisi musik Timur Tengah dengan
            elemen-elemen tertentu seperti oud, qanun, dan ney.
          </p>
        </div>
        {/* 3 */}
        <div className="flex h-80 w-[70%] flex-col gap-5 rounded-xl bg-[#fff1da] p-6">
          <div className="flex items-center justify-center gap-5">
            <div className="w-8">
              <Image src={Rai} />
            </div>
            <p className="text-xl font-bold">Genre Rai</p>
          </div>
          <p className="text-center">
            Kata "Rai" dalam bahasa Arab berarti "pendapat" atau "pandangan,"
            dan genre ini awalnya digunakan sebagai media untuk mengekspresikan
            pandangan sosial, politik, dan emosional masyarakat kelas pekerja.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Genre
