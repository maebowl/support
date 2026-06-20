import { config } from '../config'

export default function Navbar() {
  return (
    <nav className="bg-slate-dark shadow-lg">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href={config.siteUrl} className="flex items-center">
          <span className="text-xl font-bold text-amber-400 sm:text-2xl">mabel wallin</span>
        </a>
        <a
          href={config.siteUrl}
          className="text-sm font-medium text-gray-300 transition-colors hover:text-amber-400"
        >
          ← back to my site
        </a>
      </div>
    </nav>
  )
}
