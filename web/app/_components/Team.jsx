import React from "react"
import Image from "next/image"
import Raul from "../assets/img/Raul.jpg"
import Regina from "../assets/img/Regina.jpg"

const Team = () => {
  return (
    <div className="px-6 py-10">
      <p className="text-center text-3xl font-bold text-black mb-8">Team</p>
      {/* Raul */}
      <div className="flex items-center gap-5">
        <div className="avatar">
          <div className="w-36 h-52 rounded-full">
            <Image src={Raul} />
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">Miftahul Huda</p>
          <p className="text-slate-500 font-semibold">Frontend Developer</p>
          <p className="text-sm text-slate-400 italic md:w-72">"Belajar itu penting, tapi jangan lupa makan. Mahasiswa yang lapar nggak bisa mikir!"</p>
        </div>
      </div>
      {/* Regina */}
      <div className="flex items-center justify-end gap-5">
        <div>
          <p className="text-end text-xl font-bold">Reghina Hafizah</p>
          <p className="text-end text-slate-500 font-semibold">Backend Developer</p>
          <p className="text-sm text-slate-400 italic md:w-72 text-end">"Santai, kalau nilai jelek bisa diperbaiki, kalau kebahagiaan hilang, siapa yang balikin?"</p>
        </div>
        <div className="avatar">
          <div className="w-36 h-52 rounded-full">
            <Image src={Regina} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
