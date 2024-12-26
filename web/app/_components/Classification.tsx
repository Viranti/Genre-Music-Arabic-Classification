import React from "react"

import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

import Rectangle from "../assets/img/selection 1.png"
import Taxi from "../assets/img/taxi 1.png"
import Swim from "../assets/img/water-sport 1.png"
import { Akurasi, Database, Pause, Play, Tags } from "./Svg"

import { CircleAlertIcon, LoaderCircleIcon } from "lucide-react"

function LoadingCard() {
  return <progress className="progress w-56"></progress>
}

export type AudioPrediction = {
  classes: string
  accuracy: string
}

export type AudioFile = {
  name: string
  file: string
}

export type Status = "success" | "failed" | "idle"

export default function Classification() {
  const [isPending, startTransition] = React.useTransition()
  const [prediction, setPrediction] = React.useState<AudioPrediction>()
  const [audioSrc, setAudioSrc] = React.useState<AudioFile>()
  const [audioFile, setAudioFile] = React.useState<File | null>(null)
  const [isPlay, setIsPlay] = React.useState<boolean>(false)
  const [status, setStatus] = React.useState<Status>("idle")
  const previousAudioSrc = React.useRef<string | null>(null)
  const audioRef = React.useRef<HTMLAudioElement | null>(null)

  const predict = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const audio = form.get("audio") as File

    const formData = new FormData()
    formData.append("audio", audioFile as Blob)

    const fetchPrediction = async () => {
      try {
        const response = await fetch("http://localhost:8000/predict/audio", {
          method: "POST",
          body: formData,
        })
        const result = await response.json()
        setStatus("success")
        setPrediction({
          classes: result.prediction,
          accuracy: result.accuracy,
        })
      } catch (error) {
        setStatus("failed")
        console.error("Error:", error)
      }
    }

    startTransition(() => {
      fetchPrediction()
      addAudioToPlayer(audio)
    })
  }

  const addAudioToPlayer = (file: File) => {
    if (file && file.type === "audio/wav") {
      if (previousAudioSrc.current)
        URL.revokeObjectURL(previousAudioSrc.current)

      const audioURL = URL.createObjectURL(file)
      setAudioSrc({
        name: file.name,
        file: audioURL,
      })
      previousAudioSrc.current = audioURL
    }

    startTransition(() => {
      if (audioRef.current) {
        audioRef.current.load()
      }
    })
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setAudioFile(event.target.files[0])
    }
  }

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play()
        setIsPlay(true)
      } else {
        audioRef.current.pause()
        setIsPlay(false)
      }
    }
  }

  React.useEffect(() => {
    const audio = audioRef.current

    if (audio) {
      const handleAudioEnd = () => setIsPlay(false)
      audio.addEventListener("ended", handleAudioEnd)

      return () => {
        audio.removeEventListener("ended", handleAudioEnd)
      }
    }
  }, [audioRef.current])

  return (
    <div className="mb-10 px-12">
      <div className="grid place-items-center px-6 md:grid-cols-2 md:gap-14">
        {/* Kiri */}
        <div className="flex w-full flex-col items-start">
          <p className="text-start text-lg font-bold text-[#5E6282]">
            Easy and Fast
          </p>
          <p className="text-2xl font-bold text-[#14183E]">KLASIFIKASI AUDIO</p>
          {/* 1 */}
          <div className="mt-5 flex items-center justify-center gap-4">
            <div className="hidden h-10 w-10 items-center justify-center rounded-lg bg-[#f0bb1f] p-2 md:flex">
              <Image
                src={Rectangle}
                alt="Rectangle"
              />
            </div>
            <div>
              <p className="font-bold text-[#5E6282]">Choose Data</p>
              <p className="text-[#5E6282]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="mt-5 flex items-center justify-center gap-4">
            <div className="hidden h-10 w-10 items-center justify-center rounded-lg bg-[#006380] p-2 md:flex">
              <Image
                src={Swim}
                alt="Rectangle"
              />
            </div>
            <div>
              <p className="font-bold text-[#5E6282]">Waiting Prediction</p>
              <p className="text-[#5E6282]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="mt-5 flex items-center justify-center gap-4">
            <div className="hidden h-10 w-10 items-center justify-center rounded-lg bg-[#f15a2b] p-2 md:flex">
              <Image
                src={Taxi}
                alt="Rectangle"
              />
            </div>
            <div>
              <p className="font-bold text-[#5E6282]">Classification Audio</p>
              <p className="text-[#5E6282]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
        </div>
        {/* Kanan */}
        <div className="flex w-full flex-col gap-4 rounded-xl p-4 shadow-xl md:w-[80%] shadow-[#dbedf8]">
          <form
            onSubmit={predict}
            className="flex w-full flex-col gap-3"
          >
            {/* <div className="block space-y-1">
              <p className="text-sm text-black font-semibold text-xl">
                Membedah Suara: Identifikasi Suara Unik dari Tiga Jenis Gitar.
              </p>
            </div> */}
            <div className="block space-y-1">
              <Label
                htmlFor="audio"
                className="text-muted-foreground"
              >
                <span>Upload File Audio</span>
                <span className="ms-1 rounded bg-secondary px-1 text-xs text-zinc-600 dark:text-zinc-400">
                  {".wav"}
                </span>
              </Label>
              <Input
                type="file"
                id="audio"
                name="audio"
                accept="audio/wav"
                onChange={handleFileChange}
                className="p-1 file:me-3 file:h-full file:cursor-pointer file:rounded file:bg-secondary file:px-2"
                required
              />
            </div>
            <Button
              type="submit"
              className="bg-[#fff1da] text-black hover:bg-[#fff1da]"
            >
              {isPending ? (
                <div className="flex items-center gap-2">
                  <span className="loading loading-bars loading-sm"></span>
                  <span>Memprediksi...</span>
                </div>
              ) : (
                "Prediksi Suara"
              )}
            </Button>
          </form>
          <p className="mt-5 font-semibold">Hasil Klasifikasi Audio</p>
          {status !== "idle" && (
            <>
              <div className="flex w-full items-center gap-4 overflow-hidden">
                {isPending ? (
                  <LoadingCard />
                ) : (
                  <>
                    {!prediction?.classes || status === "failed" ? (
                      <div className="flex items-center gap-3">
                        <CircleAlertIcon className="size-4 text-muted-foreground" />
                        <span className="text-sm text-primary">
                          Gagal Memprediksi
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col leading-tight">
                        <p className="text-muted-foreground text-sm mr-4">
                          Hasil
                          <span className="ms-1 font-bold text-black border-l ml-5 pl-4">
                            {prediction.classes}
                          </span>
                        </p>
                      </div>
                    )}
                    {audioSrc && (
                      <>
                        <audio
                          ref={audioRef}
                          src={audioSrc.file}
                        ></audio>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={togglePlayPause}
                          className="ms-auto h-8 rounded-full text-xs text-primary"
                        >
                          {isPlay ? <Pause /> : <Play />}
                        </Button>
                      </>
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
