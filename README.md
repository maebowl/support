# support.mabelwallin.com

A little one-page site asking people to invest in my future as a videographer +
photographer. It opens with my intro video and shows a camera that **fills up
with amber** as money comes in toward the goal.

Built with React + Vite + Tailwind — same stack and colors as
[mabelwallin.com](https://mabelwallin.com), so it feels like part of the family.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## The only file you normally edit: `src/config.js`

Everything you'll want to change lives there:

| Setting        | What it does                                                  |
| -------------- | ------------------------------------------------------------ |
| `cameraName`   | The camera you're saving toward (shows in the headline).     |
| `goal`         | How much the camera costs (whole dollars).                   |
| `raised`       | How much you've gotten so far — bump this as support arrives. |
| `kofiUrl`      | Your Ko-fi / Buy Me a Coffee page (the "support me" button). |
| `videoSrc`     | Path to your intro video (see below).                        |

The camera and progress bar fill themselves based on `raised` ÷ `goal`.

## Adding your video

1. Put your `.mp4` in the **`public/`** folder.
2. In `src/config.js`, set `videoSrc` to `/your-file-name.mp4`.

Until you do, the page shows a tidy "video coming soon" placeholder — so it
never looks broken. (See `public/PUT-YOUR-VIDEO-HERE.txt`.)

## Deploying to Cloudflare Workers (support.mabelwallin.com)

This deploys as a **static-assets Worker** (config in `wrangler.jsonc`). No
server code runs today — but living on Workers means you can add backend logic
later without switching platforms. SPA routing is handled by
`not_found_handling: "single-page-application"` in `wrangler.jsonc`.

### Option A — push to deploy (recommended)

1. Push this repo to GitHub (already at `github.com/maebowl/support`).
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Workers** →
   **Connect to Git** (this is "Workers Builds"), pick the repo.
3. Build settings:
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler deploy`
4. Every `git push` then builds and redeploys automatically.

### Option B — deploy from your machine

```bash
npx wrangler login   # one time
npm run deploy        # builds, then wrangler deploy
```

### Custom domain

After the first deploy, in the Worker's **Settings → Domains & Routes → Add**,
add `support.mabelwallin.com`. (If mabelwallin.com's DNS is in this same
Cloudflare account, you can instead uncomment the `routes` block in
`wrangler.jsonc` and deploys will set it up automatically.)

## Update the amount raised (the part you'll do most)

1. Open `src/config.js`, change `raised`.
2. `git commit -am "raised: $X"` then `git push`.
3. Cloudflare redeploys in ~1 minute and the camera fills up a little more. 📸
