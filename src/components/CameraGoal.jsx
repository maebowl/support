import { useEffect, useState } from 'react'
import { config } from '../config'

const usd = (n) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n)

// A camera drawn as flat shapes. We render it twice (a dim "empty" version and
// a bright amber "filled" version); the filled one gets clipped from the bottom
// so the camera literally fills up with amber as money comes in.
function CameraArt({ body, accent, detail, glass, highlight }) {
  return (
    <svg viewBox="0 0 220 210" className="h-full w-full" aria-hidden="true">
      {/* strap lugs */}
      <rect x="22" y="62" width="16" height="16" rx="4" fill={body} />
      <rect x="182" y="62" width="16" height="16" rx="4" fill={body} />
      {/* top hump (viewfinder) + shutter button */}
      <rect x="62" y="48" width="66" height="28" rx="8" fill={body} />
      <rect x="150" y="50" width="30" height="22" rx="6" fill={body} />
      <rect x="156" y="42" width="18" height="12" rx="4" fill={accent} />
      {/* main body */}
      <rect x="14" y="70" width="192" height="118" rx="22" fill={body} />
      {/* viewfinder window */}
      <rect x="32" y="86" width="32" height="18" rx="5" fill={detail} opacity="0.55" />
      {/* flash */}
      <circle cx="182" cy="94" r="8" fill={accent} />
      {/* lens */}
      <circle cx="110" cy="134" r="48" fill={detail} opacity="0.22" />
      <circle cx="110" cy="134" r="48" fill="none" stroke={detail} strokeWidth="5" />
      <circle cx="110" cy="134" r="34" fill="none" stroke={detail} strokeWidth="3" />
      <circle cx="110" cy="134" r="23" fill={glass} />
      <circle cx="99" cy="123" r="8" fill={highlight} opacity="0.55" />
    </svg>
  )
}

export default function CameraGoal() {
  const goal = Math.max(0, Number(config.goal) || 0)
  const raised = Math.max(0, Number(config.raised) || 0)
  const pct = goal > 0 ? Math.min(100, Math.round((raised / goal) * 100)) : 0
  const funded = raised >= goal && goal > 0

  // Animate the fill from 0 → pct on first paint.
  const [shown, setShown] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setShown(pct), 200)
    return () => clearTimeout(t)
  }, [pct])

  const status = funded
    ? '🎉 the camera is FUNDED — thank you, seriously. now i make stuff.'
    : pct >= 85
    ? 'so close i can almost hear the shutter click 📸'
    : pct >= 60
    ? 'over halfway there — let’s bring it home 🙌'
    : pct >= 30
    ? 'we’re picking up speed!'
    : pct > 0
    ? 'it’s started — every little bit fills the frame.'
    : 'an empty camera. let’s change that 🎬'

  return (
    <section className="rounded-2xl border border-amber-400/30 bg-slate-dark p-6 sm:p-10">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        {/* The filling camera */}
        <div className="flex flex-col items-center">
          <div className="relative h-56 w-56 animate-float sm:h-72 sm:w-72">
            {/* empty / dim camera underneath */}
            <div className="absolute inset-0">
              <CameraArt
                body="#2b2b2b"
                accent="#3d3d3d"
                detail="#5a5a5a"
                glass="#333333"
                highlight="#5a5a5a"
              />
            </div>

            {/* amber camera on top, clipped to reveal only the bottom `shown` % */}
            <div
              className="absolute inset-0 transition-[clip-path] duration-[1400ms] ease-out"
              style={{ clipPath: `inset(${100 - shown}% 0 0 0)` }}
            >
              <CameraArt
                body="#fbbf24"
                accent="#fde68a"
                detail="#1a1a1a"
                glass="#b45309"
                highlight="#fffbeb"
              />
            </div>

            {/* glowing fill line at the water level */}
            {shown > 0 && shown < 100 && (
              <div
                className="pointer-events-none absolute inset-x-3 h-[3px] rounded-full bg-amber-300 transition-all duration-[1400ms] ease-out"
                style={{
                  top: `${100 - shown}%`,
                  boxShadow: '0 0 12px 2px rgba(251,191,36,0.7)',
                }}
              />
            )}
          </div>
          <p className="mt-3 text-5xl font-extrabold tabular-nums text-amber-400">
            {pct}%
          </p>
        </div>

        {/* The numbers + call to action */}
        <div className="w-full max-w-md text-center lg:text-left">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
            how close we are to {config.cameraName}
          </p>
          <p className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            {usd(raised)}
            <span className="text-xl font-medium text-gray-400 sm:text-2xl">
              {' '}
              of {usd(goal)}
            </span>
          </p>

          {/* slim bar as a second read on progress */}
          <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-charcoal-300">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-[1400ms] ease-out"
              style={{ width: `${shown}%` }}
            />
          </div>

          <p className="mt-4 text-base text-amber-200">{status}</p>

          <a
            href={config.kofiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-7 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-amber-500"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            chip in on ko-fi
          </a>
          <p className="mt-3 text-xs text-gray-500">
            every dollar goes straight to gear. thank you 🤍
          </p>
        </div>
      </div>
    </section>
  )
}
