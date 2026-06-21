import { config } from '../config'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VideoHero from '../components/VideoHero'
import CameraGoal from '../components/CameraGoal'

export default function Support() {
  return (
    <div className="flex min-h-screen flex-col bg-charcoal">
      <Navbar />

      {/* ── Full-screen video hero ───────────────────────────────────────── */}
      {/* Fills the viewport (minus the 4rem navbar) so the video is all you see
          on first load. 100dvh keeps it right on mobile browsers. */}
      <section className="relative h-[calc(100dvh-4rem)] w-full border-b-2 border-amber-400/30 bg-black">
        <VideoHero />

        {/* subtle "scroll down" cue */}
        <a
          href="#more"
          aria-label="scroll down to read more"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 text-amber-300/80 transition-colors hover:text-amber-300"
        >
          <svg
            className="h-7 w-7 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </section>

      <main
        id="more"
        className="mx-auto w-full max-w-5xl flex-grow px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="animate-fade-in space-y-14 sm:space-y-20">
          {/* ── ok so, here's the deal ─────────────────────────────────── */}
          <section className="mx-auto max-w-2xl space-y-4 text-center text-gray-300">
            <h2 className="font-display text-2xl font-bold text-white">ok so here’s the deal</h2>
            <p>
              for the last year i’ve been shooting on a 20 year old canon i love to
              pieces. but it’s got two problems: a) it literally can’t shoot video, and
              2) the lens isn’t even mine, it’s on loan from my aunt jane. so the second
              i wanna make something that moves, i’m stuck filming on my phone. which,
              yeah, isn’t optimal.
            </p>
            <p>
              here’s the thing though: i’m not trying to do anything new. i already
              shoot all sorts of shit. music videos, horror movies, photoshoots,
              travel logs, you name it. a real camera doesn’t magically let me do stuff
              i can’t already do (besides, you know, video). it just means everything
              i’m already making comes out{' '}
              <span className="font-semibold text-amber-300">way, way better</span>. it’s
              a quality thing.
            </p>
            <p>
              so here’s the dream: a fujifilm x-s10 (~$700) plus a little xf 35mm f/2
              lens (~$275) that would, crucially, be mine. (no offense, aunt jane.)
              about $975 all in, to finally make the stuff in my head come out the way i
              actually see it.
            </p>
          </section>

          {/* ── The goal visual ────────────────────────────────────────── */}
          <CameraGoal />

          {/* ── What you get if you chip in ────────────────────────────── */}
          <section className="space-y-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-bold text-white">oh, and you get stuff</h2>
              <p className="mt-3 text-gray-300">
                you don’t walk away empty-handed (unless you want to). chip in and i’ve
                got you. take your pick:
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: (
                    <>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.5V9.25" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-2.2 1.6-3.8 3.8-3.8 0 2.2-1.6 3.8-3.8 3.8z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-2.2-1.6-3.8-3.8-3.8 0 2.2 1.6 3.8 3.8 3.8z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 14.5h12l-1.15 5a1 1 0 0 1-1 .77H8.15a1 1 0 0 1-1-.77L6 14.5z" />
                    </>
                  ),
                  title: 'a planter box',
                  body: 'homemade, wooden, built by me. yeah, i make those too.',
                },
                {
                  icon: (
                    <>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
                    </>
                  ),
                  title: 'a photoshoot',
                  body: 'amateur photography, shot by yours truly.',
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5l4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  ),
                  title: 'or a video',
                  body: 'amateur videography, if that’s more your vibe.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-charcoal-300 bg-slate-dark p-6 text-center"
                >
                  <svg
                    className="mx-auto h-8 w-8 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {card.icon}
                  </svg>
                  <h3 className="mt-3 font-display text-lg font-bold text-amber-400">{card.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{card.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── No pressure, closing ───────────────────────────────────── */}
          <section className="rounded-2xl bg-gradient-to-br from-slate-dark to-charcoal-300 p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              no pressure. like, genuinely.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-300">
              okay, the actual important part. do i want this camera? egregiously, yes.
              but not even slightly at the cost of you feeling any pressure. if chipping
              in would bring you a bit of joy, amazing, and literally anything helps. if
              it wouldn’t, also completely amazing, and please don’t feel bad or weird
              about it for even a second. i just like making things, and i like making
              them for people. either way, i’m really glad you’re here.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={config.kofiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-amber-400 px-8 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-amber-500"
              >
                chip in on ko-fi
              </a>
              <a
                href={config.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-amber-400/40 px-8 py-3 text-base font-semibold text-amber-300 transition-colors hover:bg-amber-400/10"
              >
                watch my stuff
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
