import { useState } from 'react'
import { config } from '../config'

// Self-hosted MP4 player. If the file isn't in /public yet (or fails to load),
// we show a tidy placeholder instead of a broken video element.
export default function VideoHero() {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = failed || !config.videoSrc

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-amber-400/60 bg-black shadow-2xl shadow-black/40">
      <div className="relative aspect-video w-full">
        {showPlaceholder ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-dark px-6 text-center">
            <div className="text-5xl">🎥</div>
            <p className="text-lg font-semibold text-white">my video is coming soon</p>
            <p className="max-w-sm text-sm text-gray-400">
              drop your <code className="text-amber-300">.mp4</code> into the{' '}
              <code className="text-amber-300">public/</code> folder and point{' '}
              <code className="text-amber-300">videoSrc</code> at it in{' '}
              <code className="text-amber-300">src/config.js</code>.
            </p>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  )
}
