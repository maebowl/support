import { config } from '../config'

export default function VideoHero() {
  if (!config.youtubeId) {
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
      </div>
    )
  }

  return (
    <iframe
      className="h-full w-full bg-black"
      src={`https://www.youtube.com/embed/${config.youtubeId}?rel=0&playsinline=1`}
      title="support mabel wallin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}
