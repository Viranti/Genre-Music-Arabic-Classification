import React from "react"
import Image from "next/image"
import FlowchartImg from "../assets/img/flowchart.png"
const Flowchart = () => {
  return (
    <div className="flex px-24 gap-40 items-center justify-center pt-5" id="flowchart">
      <div class="flex flex-col items-center bg-[#fff1da] px-8 py-6 font-bold text-xl rounded-3xl w-40 justify-center gap-6 shadow-xl">
        <span>F</span>
        <span>L</span>
        <span>O</span>
        <span>W</span>
        <span>C</span>
        <span>H</span>
        <span>A</span>
        <span>R</span>
        <span>T</span>
      </div>
      <div className="h-[500px] overflow-hidden">
        <Image src={FlowchartImg} alt="Flowchart" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default Flowchart
