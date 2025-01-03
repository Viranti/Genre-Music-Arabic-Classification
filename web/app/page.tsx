"use client"

import React from "react"

import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Classification from "./_components/Classification"
import Hero from "./_components/Hero"
import ArsitekturSistem from "./_components/ArsitekturSistems"
import Genre from "./_components/Genre"
export default function Page() {
  return (
    <div className="bg-white h-fit flex flex-col gap-20">
      <Hero />
      <Genre />
      <ArsitekturSistem />
      <Classification />
    </div>
  )
}
