"use client"

import * as React from "react"
import { useRef, useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Play, Pause, Volume2, VolumeX, Maximize, X } from "lucide-react"

export function VideoPlayer({
  src,
  poster,
  aspectRatio = "9:16",
  className = "",
}: {
  src: string
  poster?: string
  aspectRatio?: "9:16" | "4:5" | "1:1"
  className?: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const togglePlayModal = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!modalVideoRef.current) return
    if (isPlaying) {
      modalVideoRef.current.pause()
    } else {
      modalVideoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    const nextMute = !isMuted
    videoRef.current.muted = nextMute
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = nextMute
    }
    setIsMuted(nextMute)
  }

  const handleExpand = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsFullscreen(true)
  }

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsFullscreen(false)
  }

  const aspectClass =
    aspectRatio === "9:16"
      ? "aspect-[9/16]"
      : aspectRatio === "4:5"
        ? "aspect-[4/5]"
        : "aspect-square"

  return (
    <>
      <div className={`relative group overflow-hidden rounded-[var(--radius-media)] bg-black/5 ${aspectClass} ${className}`.trim()}>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="h-full w-full object-cover cursor-pointer"
          onClick={togglePlay}
        />

        {/* Controls Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />

        {/* Floating Controls Overlay */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2 pointer-events-auto z-10">
          {/* noth.in Style Sound Toggle Switch */}
          <button
            type="button"
            onClick={toggleMute}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono text-white/90 hover:bg-black/95 hover:border-white/40 transition-all duration-300 shadow-xl active:scale-95"
            aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          >
            <span className="font-semibold tracking-wider text-[0.7rem] uppercase">
              {isMuted ? "Sound Off" : "Sound On"}
            </span>

            {/* Toggle Track */}
            <div className={`relative w-7 h-4 rounded-full transition-colors duration-300 ${!isMuted ? "bg-amber-400" : "bg-white/20"}`}>
              <div className={`absolute top-0.5 w-3 h-3 rounded-full transition-transform duration-300 ${!isMuted ? "translate-x-3.5 bg-black" : "translate-x-0.5 bg-white"}`} />
            </div>

            {/* Equalizer animation when active */}
            {!isMuted && (
              <div className="flex items-end gap-0.5 h-3 ml-0.5">
                <span className="w-0.5 h-full bg-amber-400 animate-pulse" />
                <span className="w-0.5 h-2/3 bg-amber-400 animate-pulse delay-75" />
                <span className="w-0.5 h-4/5 bg-amber-400 animate-pulse delay-150" />
              </div>
            )}
          </button>

          <button
            type="button"
            onClick={handleExpand}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-black/90 transition-transform active:scale-95"
            aria-label="Expand video"
          >
            <Maximize className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            onClick={togglePlay}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition-transform active:scale-95"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="h-3.5 w-3.5" />
            ) : (
              <Play className="h-3.5 w-3.5 ml-0.5" />
            )}
          </button>
        </div>
      </div>

      {/* Global Expanded Fullscreen Modal via Portal */}
      {isFullscreen && isMounted && createPortal(
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-xl p-4 sm:p-8 transition-opacity duration-300 animate-in fade-in"
          onClick={handleClose}
        >
          <div
            className={`relative overflow-hidden rounded-[var(--radius-media)] max-h-[85vh] max-w-[90vw] ${aspectClass} shadow-2xl bg-black border border-white/20 group`}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalVideoRef}
              src={src}
              poster={poster}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="h-full w-full object-contain cursor-pointer"
              onClick={togglePlayModal}
            />

            {/* Modal Custom Controls Overlay */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 pointer-events-auto z-20">
              <button
                type="button"
                onClick={toggleMute}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-black/90 transition-transform active:scale-95"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>

              <button
                type="button"
                onClick={togglePlayModal}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition-transform active:scale-95"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
              </button>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-black/90 transition-transform active:scale-95 z-20"
              aria-label="Close expanded view"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
