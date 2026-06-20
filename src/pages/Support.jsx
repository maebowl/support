import { config } from '../config'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VideoHero from '../components/VideoHero'
import CameraGoal from '../components/CameraGoal'

export default function Support() {
  return (
    <div className="flex min-h-screen flex-col bg-charcoal">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl flex-grow px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="animate-fade-in space-y-14 sm:space-y-20">
          {/* ── Intro ──────────────────────────────────────────────────── */}
          <section className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-amber-400">
              invest in what i make next
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              help me get {config.cameraName}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
              hi, i’m mabel — 16, in san diego, and kind of obsessed with photo +
              video. right now my gear is the one thing holding me back. here’s the
              whole situation ↓
            </p>
          </section>

          {/* ── The video ──────────────────────────────────────────────── */}
          <section>
            <VideoHero />
            <p className="mt-4 text-center text-sm text-gray-500">
              press play — i explain everything in about a minute.
            </p>
          </section>

          {/* ── The situation, in text ─────────────────────────────────── */}
          <section className="mx-auto max-w-2xl space-y-4 text-center text-gray-300">
            <h2 className="text-2xl font-bold text-white">the short version</h2>
            <p>
              i love shooting — videos, photos, all of it. but i’ve hit the ceiling
              of what my current setup can do. better gear means sharper photos,
              smoother footage, and a lot more of the stuff i actually want to make.
            </p>
            <p>
              so i’m asking the people who believe in me to{' '}
              <span className="font-semibold text-amber-300">invest in my future</span>{' '}
              as a videographer and photographer. think of it less like a donation
              and more like backing chapter one. every contribution gets me closer to
              the camera — watch it fill up below.
            </p>
          </section>

          {/* ── The goal visual ────────────────────────────────────────── */}
          <CameraGoal />

          {/* ── What it unlocks ────────────────────────────────────────── */}
          <section className="grid gap-4 sm:grid-cols-3">
            {[
              {
                emoji: '📸',
                title: 'sharper photos',
                body: 'real glass + a real sensor means shots i can’t get right now.',
              },
              {
                emoji: '🎬',
                title: 'better videos',
                body: 'smoother, cleaner footage for the channel and beyond.',
              },
              {
                emoji: '🚀',
                title: 'more of it',
                body: 'less fighting my gear, more time actually creating.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-charcoal-300 bg-slate-dark p-6 text-center"
              >
                <div className="text-3xl">{card.emoji}</div>
                <h3 className="mt-3 text-lg font-semibold text-amber-400">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{card.body}</p>
              </div>
            ))}
          </section>

          {/* ── Closing CTA ────────────────────────────────────────────── */}
          <section className="rounded-2xl bg-gradient-to-br from-slate-dark to-charcoal-300 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              want to be part of it?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-300">
              any amount helps, and i’ll never forget who backed me early. thank you
              for believing in the work 🤍
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={config.kofiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-amber-400 px-8 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-amber-500"
              >
                support me on ko-fi
              </a>
              <a
                href={config.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-amber-400/40 px-8 py-3 text-base font-semibold text-amber-300 transition-colors hover:bg-amber-400/10"
              >
                see what i make
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
