import React from "react"
import { placeholderGroups } from "@/data/work"
import { CarouselOptionA } from "@/components/ui/CarouselOptionA"
import { CarouselOptionB } from "@/components/ui/CarouselOptionB"

export default function ScrollingPage() {
  const group = placeholderGroups[0]
  
  return (
    <main className="w-full bg-zinc-900 min-h-screen">
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Scroll Down to Test Options</h1>
      </div>

      <CarouselOptionA group={group} />
      
      <div className="h-screen flex items-center justify-center border-y border-white/10">
        <h1 className="text-3xl font-bold text-white/50">Next Option Below</h1>
      </div>

      <CarouselOptionB group={group} />

      <div className="h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white/50">End of Test Page</h1>
      </div>
    </main>
  )
}
