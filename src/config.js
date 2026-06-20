// ───────────────────────────────────────────────────────────────────────────
//  EDIT ME  ✏️   —  this is the only file you need to touch for normal updates.
//  After changing something here: save, `git commit`, `git push`, and
//  Cloudflare Pages redeploys the site for you automatically.
// ───────────────────────────────────────────────────────────────────────────

export const config = {
  // ── The camera you're saving toward ──────────────────────────────────────
  // Shows up in the headline and under the goal. Make it specific if you want
  // (e.g. 'Sony a7 IV' or 'Fujifilm X-T5') — specific goals get more support.
  cameraName: 'a real camera',

  // ── The money ────────────────────────────────────────────────────────────
  // `goal`   = how much the camera (+ a lens / card / etc.) costs.
  // `raised` = how much you've gotten so far. The camera fills up on its own
  //            based on these two numbers. Just bump `raised` as support comes
  //            in. Whole dollars, no $ sign.
  goal: 1500,
  raised: 300, //  ← PLACEHOLDER. set this to your real total (0 is totally fine).

  // ── Where people chip in ─────────────────────────────────────────────────
  // Your Ko-fi / Buy Me a Coffee page. The big "support me" button links here.
  kofiUrl: 'https://ko-fi.com/yourname', //  ← REPLACE with your real link

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
