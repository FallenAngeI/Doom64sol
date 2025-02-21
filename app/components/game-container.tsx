"use client"

import { useRef, useEffect } from "react"

export default function GameContainer() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const requestPointerLock = () => {
      if (iframe.requestPointerLock) {
        iframe.requestPointerLock()
      } else if (iframe.mozRequestPointerLock) {
        iframe.mozRequestPointerLock()
      }
    }

    iframe.addEventListener("click", requestPointerLock)

    return () => {
      iframe.removeEventListener("click", requestPointerLock)
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-6xl font-bold text-orange-500 text-center mb-8 tracking-wider">DOOM 64 COIN</h1>
      <h2 className="text-4xl font-bold text-orange-500 text-center mb-8 tracking-wider">Real Adress coin: /////</h2>
      <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden border-2 border-orange-900/50 shadow-2xl">
        <iframe
          ref={iframeRef}
          src="https://ustymukhman.github.io/webDOOM/public/"
          className="w-full h-full"
          allow="autoplay; fullscreen; pointer-lock"
        />
      </div>
      <div className="mt-8 text-center text-orange-400/80 space-y-2">
        <p>Use WASD or arrow keys to move</p>
        <p>Mouse to look around</p>
        <p>Click to shoot</p>
        <p>Use the game's fullscreen button for fullscreen mode</p>
        <p>Press ESC to exit fullscreen</p>
        <p>If u cant move ur camera more than 180 degrees change sensivity in Settings</p>
      </div>
    </div>
  )
}

