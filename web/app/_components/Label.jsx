import React from "react"

import Image from "next/image"

// import AccousticAudio from "../assets/audio/61.wav"
import Bass from "../assets/img/Bass2.jpg"
import Ukulele from "../assets/img/UkueleImage.jpeg"
import Acoustic from "../assets/img/accousticPantai.jpg"


const Label = () => {
  return (
    <div className="flex flex-col gap-6 px-6">
      <p className="text-center text-3xl font-bold text-black mb-5">Label</p>
      <div className="grid grid-cols-1 md:h-[500px] md:grid-cols-2 md:grid-rows-2 gap-5">
        {/* Accoustic */}
        <div className="relative size-full">
          <Image
            className="rotate- max-h-full max-w-full object-cover rounded-xl"
            src={Acoustic}
            alt="Gitar Acoustic"
          />
          <div className="absolute bottom-0 left-3 w-[50%] py-2">
            <p className="text-xl font-semibold text-white">Acoustic</p>
            <p className="text-white">
              Gitar akustik menghasilkan suara alami melalui resonansi tanpa
              listrik.
            </p>
            {/* <audio src={AccousticAudio}></audio>
            <Button
              size="sm"
              variant="secondary"
              onClick={togglePlayPause}
              className="ms-auto h-8 rounded-full text-xs text-primary"
            >
              {isPlay ? "Playing..." : "Play audio"}
            </Button> */}
          </div>
        </div>
        {/* Ukulele */}
        <div className="relative row-span-2 size-full rounded-xl">
          <Image
            className="max-h-full max-w-full object-cover rounded-xl"
            src={Ukulele}
            alt="Gitar Acoustic"
          />
          <div className="absolute bottom-0 left-3 py-2 w-[50%]">
            <p className="text-xl font-semibold text-white">Ukulele</p>
            <p className="text-white">
              Ukulele adalah gitar kecil bernada ceria, populer dalam musik
              santai
            </p>
            {/* {/* <audio src={AccousticAudio}></audio> */}
            {/* <Button
              size="sm"
              variant="secondary"
              onClick={togglePlayPause}
              className="ms-auto h-8 rounded-full text-xs text-primary"
            >
              {isPlay ? "Playing..." : "Play audio"}
            </Button> */}
          </div>
        </div>
        {/* Bass */}
        <div className="relative size-full rounded-xl">
          <Image
            className=" max-h-full max-w-full object-cover rounded-xl"
            src={Bass}
            alt="Gitar Bass"
          />
          <div className="absolute bottom-0 left-3 w-[50%] py-2">
            <p className="text-xl font-semibold text-white">Bass</p>
            <p className="text-white">
              Gitar bass menghasilkan nada rendah, mendukung ritme dan harmoni.
            </p>
            {/* {/* <audio src={AccousticAudio}></audio> */}
            {/* <Button
              size="sm"
              variant="secondary"
              onClick={togglePlayPause}
              className="ms-auto h-8 rounded-full text-xs text-primary"
            >
              {isPlay ? "Playing..." : "Play audio"}
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Label
