import React from "react"

import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

import { Akurasi, Database, Pause, Play, Tags } from "../_components/Svg"
import Guitar from "../assets/img/image3.jpg"

import { CircleAlertIcon, LoaderCircleIcon } from "lucide-react"

function LoadingCard() {
  return (
    <div className="flex w-full items-center justify-center">
      <span className="loading loading-infinity loading-md"></span>
    </div>
  )
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

export default function AudioClassification() {
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
    <div>
      <p className="mb-5 text-center text-3xl font-bold text-black">
        Prediksi
      </p>
      <div className="grid md:grid-cols-2 place-items-center gap-4 px-6">
        <div className="flex h-40 w-full flex-col justify-center gap-5 rounded-xl">
          <p className="text-slate-500 text-lg md:w-[90%] text-center md:text-start">
            Bisakah Anda mengenali suara akustik, bass, atau ukulele? Rasakan
            harmoninya dan tebak jenis gitar dari setiap petikan.
          </p>
          <div className="flex gap-2">
            {/* 1 */}
            <div className="flex items-center justify-center gap-1 bg-white px-2 py-1 rounded-xl shadow-xl">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9a70ff] p-2">
                <Tags />
              </div>
              <div>
                <p className="text-sm font-semibold">3</p>
                <p className="text-slate-400 text-[12px]">Label Audio</p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex items-center justify-center gap-1 bg-white px-2 py-1 rounded-xl shadow-xl">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ffabde] p-2">
                <Database />
              </div>
              <div>
                <p className="text-sm font-semibold">1000+</p>
                <p className="text-slate-400 text-[12px]">Dataset Audio</p>
              </div>
            </div>
            {/* 3 */}
            <div className="flex items-center justify-center gap-1 bg-white px-2 py-1 rounded-xl shadow-xl">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fde895] p-2">
                <Akurasi />
              </div>
              <div>
                <p className="text-sm font-semibold">99%</p>
                <p className="text-slate-400 text-[12px]">Akurasi Model</p>
              </div>
            </div>
          </div>
          {/* <div className="h-full w-full">
            <Image
              className="h-full w-full rounded-xl object-cover"
              src={Guitar}
              alt=""
            />
          </div> */}
        </div>
        <div className="flex w-full flex-col gap-4">
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
              className="bg-[#d7c6ff] text-black hover:bg-[#d7c6ff]"
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
          {status !== "idle" && (
            <>
              <Separator />
              <div className="flex w-full items-center gap-4 overflow-hidden rounded-lg border border-border p-4">
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
                        <p className="text-xs text-muted-foreground">
                          Suara diprediksi sebagai gitar
                          <span className="ms-1 font-bold text-black">
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