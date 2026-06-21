import { useState } from 'react'
import { config } from '../config'

// Self-hosted MP4 player that fills its container (the parent decides the size).
// If the file isn't in /public yet (or fails to load), shows a tidy placeholder
// instead of a broken video element.
export default function VideoHero() {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = failed || !config.videoSrc

  if (showPlaceholder) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-black px-6 text-center">
        <svg
          className="h-14 w-14 text-amber-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5l4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
        <p className="font-display text-xl font-bold text-white">my video is coming soon</p>
        <p className="max-w-sm text-sm text-gray-400">
          drop your <code className="text-amber-300">.mp4</code> into the{' '}
          <code className="text-amber-300">public/</code> folder and point{' '}
          <code className="text-amber-300">videoSrc</code> at it in{' '}
          <code className="text-amber-300">src/config.js</code>.
        </p>
      </div>
    )
  }

  return (
    <video
      className="h-full w-full bg-black object-contain"
      controls
      playsInline
      preload="metadata"
      poster={config.videoPoster || undefined}
      onError={() => setFailed(true)}
    >
      <source src={config.videoSrc} type="video/mp4" />
      your browser can’t play this video.
    </video>
  )
}
