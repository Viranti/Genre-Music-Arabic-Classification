"use client"

import React from "react"

import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MainSection from "./_components/MainSection"
import Header from "./_components/Header"
import Label from "./_components/Label"
import DeepLearning from "./_components/DeepLearning"
import Team from "./_components/Team"
import Footer from "./_components/Footer"
import Home from "./_components/Home"
import AudioClassification from "./_components/audio-classification"

export default function Page() {
  return (
    <div className="bg-white h-fit py-4 flex flex-col gap-20">
      <Header />
      <MainSection />
      <DeepLearning />
      <Label />
      <AudioClassification />
      <Team />
      <Footer />
    </div>
    // <div className="flex h-dvh flex-col items-center justify-center p-4">
    //   <Header />
    //   <div className="flex flex-col items-center gap-5">
    //     <div className="space-y-1">
    //       <h1 className="text-xl font-semibold text-primary">Deep Learning</h1>
    //       <p className="text-muted-foreground">
    //         Text Sentiment Analysis and Audio Classifications.
    //       </p>
    //     </div>
    //     <Tabs
    //       defaultValue="text"
    //       className="flex w-full flex-col gap-3 md:w-96"
    //     >
    //       <div className="flex items-center gap-2">
    //         <TabsList className="flex h-10 flex-auto *:flex-auto">
    //           <TabsTrigger value="text">Text Sentiment</TabsTrigger>
    //           <TabsTrigger value="audio">Audio Classification</TabsTrigger>
    //         </TabsList>
    //         <ThemeToggle />
    //       </div>
    //       <Separator />
    //       <TabsContent value="text" tabIndex={-1}>
    //         <TextSentiment />
    //       </TabsContent>
    //       <TabsContent value="audio" tabIndex={-1}>
    //         <AudioClassification />
    //       </TabsContent>
    //     </Tabs>
    //   </div>
    // </div>
  )
}
