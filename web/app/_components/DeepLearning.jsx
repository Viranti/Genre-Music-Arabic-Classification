import React from "react"

import { Brain, CNN, Shape, Guitar } from "./Svg"

const DeepLearning = () => {
  return (
    <div className="grid md:grid-cols-4 place-items-center gap-5 bg-[#f2edff] px-6 py-10">
      {/* 1 */}
      <div className="flex h-80 w-[80%] flex-col items-center gap-5 rounded-xl bg-white px-4 py-8">
        <div className="p-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#ff68c3]">
          <Brain className="h-full w-full" />
        </div>
        <p className="text-xl font-bold">Deep Learning</p>
        <p className="text-center text-slate-400">
          Deep learning adalah metode kecerdasan buatan yang menggunakan
          jaringan saraf tiruan untuk memproses data kompleks dan membuat
          prediksi.
        </p>
      </div>
      {/* 2 */}
      <div className="flex h-80 w-[80%] flex-col items-center gap-5 rounded-xl bg-white px-4 py-8">
        <div className="p-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#fde895]">
          <CNN lassName="h-full w-full" />
        </div>
        <p className="text-xl font-bold text-center">CNN</p>
        <p className="text-center text-slate-400">
          Convolutional Neural Network (CNN) adalah algoritma deep learning
          untuk menganalisis data gambar, mendeteksi pola, dan ekstraksi fitur.
        </p>
      </div>
      {/* 3 */}
      <div className="flex h-80 w-[80%] flex-col items-center gap-5 rounded-xl bg-white px-4 py-8">
        <div className="p-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#9a70ff]">
          <Shape lassName="h-full w-full" />
        </div>
        <p className="text-xl font-bold text-center">Klasifikasi</p>
        <p className="text-center text-slate-400">
        Klasifikasi dalam deep learning menggunakan jaringan saraf mendalam seperti CNN, untuk mengelompokkan data berdasarkan fitur kompleks
        </p>
      </div>
      {/* 4 */}
      <div className="flex h-80 w-[80%] flex-col items-center gap-5 rounded-xl bg-white px-4 py-8">
        <div className="p-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#ff68c3]">
          <Guitar className="h-full w-full" />
        </div>
        <p className="text-xl font-bold">Gitar</p>
        <p className="text-center text-slate-400">
        Gitar adalah alat musik berdawai yang dipetik, akustik, bass dan ukulele adalah salah satu jenis gitar yang sering digunakan dalam musik
        </p>
      </div>
    </div>
  )
}

export default DeepLearning
