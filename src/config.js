// ───────────────────────────────────────────────────────────────────────────
//  EDIT ME: the only file you need to touch for normal updates.
//  After changing something here: save, `git commit`, `git push`, and
//  Cloudflare Workers redeploys the site for you automatically.
// ───────────────────────────────────────────────────────────────────────────

export const config = {
  // ── The camera you're saving toward ──────────────────────────────────────
  // Shows up in the headline and under the goal. Make it specific if you want
  // (e.g. 'Sony a7 IV' or 'Fujifilm X-T5'). specific goals get more support.
  cameraName: 'Fujifilm X-S10',

  // ── The money ────────────────────────────────────────────────────────────
  // `goal`   = how much the camera (+ a lens / card / etc.) costs.
  // `raised` = FALLBACK only. The live total now comes from Ko-fi via the Worker
  //            (GET /api/total, backed by the `ko-fi-camera-donations` KV). This
  //            number is only shown in local dev or if that API is unreachable,
  //            so keep it roughly current as a backup. Whole dollars, no $ sign.
  goal: 975, // fujifilm x-s10 (~$700) + xf 35mm f/2 r wr lens (~$275)
  raised: 62, // fallback baseline (the real live number lives in KV)

  // ── Where people chip in ─────────────────────────────────────────────────
  // Your Ko-fi / Buy Me a Coffee page. The big "support me" button links here.
  kofiUrl: 'https://ko-fi.com/mabelwallin', //  ← REPLACE with your real link

  // ── Your intro video ─────────────────────────────────────────────────────
  // 1. Drop your .mp4 into the `public/` folder.
  // 2. Put its filename here with a leading slash.
  //    e.g. file `public/my-pitch.mp4`  →  videoSrc: '/my-pitch.mp4'
  // Until the file exists, the page shows a tidy "coming soon" placeholder.
  videoSrc: '/support-video.mp4',
  videoPoster: '', // optional: a still frame, e.g. '/poster.jpg' (also in public/)

  // ── Link back to your main site ──────────────────────────────────────────
  siteUrl: 'https://mabelwallin.com',
  youtubeUrl: 'https://youtube.com/@MabelWallin',
}
