/**
 * support.mabelwallin.com — Worker backend.
 *
 * Two API routes; everything else is the static site (the built `dist/` folder,
 * served through the ASSETS binding).
 *
 *   GET  /api/total  ->  { "raised": <number> }   the camera reads this live
 *   POST /api/kofi   ->  Ko-fi webhook; adds each payment to the running total
 *
 * Ko-fi has no "read my total" API, so the running total lives in KV under the
 * key "total". It's seeded once with the amount already raised before the
 * webhook existed (the baseline), and the webhook just adds to it from there.
 */

const TOTAL_KEY = 'total'

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url)

    if (pathname === '/api/total') {
      return json({ raised: await readTotal(env) }, { 'cache-control': 'no-store' })
    }
    if (pathname === '/api/kofi') {
      return handleKofi(request, env)
    }

    // Not an API route -> serve the static site.
    return env.ASSETS.fetch(request)
  },
}

async function readTotal(env) {
  const n = parseFloat(await env.DONATIONS.get(TOTAL_KEY))
  return Number.isFinite(n) ? n : 0
}

async function handleKofi(request, env) {
  if (request.method !== 'POST') {
    return new Response('method not allowed', { status: 405 })
  }

  let data
  try {
    const form = await request.formData()
    data = JSON.parse(form.get('data'))
  } catch {
    return new Response('bad request', { status: 400 })
  }

  // Only trust webhooks carrying our Ko-fi verification token.
  if (!env.KOFI_VERIFICATION_TOKEN || data.verification_token !== env.KOFI_VERIFICATION_TOKEN) {
    return new Response('unauthorized', { status: 401 })
  }

  // Skip duplicates — Ko-fi may retry the same event.
  const txId = data.kofi_transaction_id || data.message_id
  if (txId && (await env.DONATIONS.get('tx:' + txId))) {
    return new Response('ok (duplicate)', { status: 200 })
  }

  // Count every positive amount toward the camera — Tip, Subscription,
  // Commission, Shop Order; it all helps. (Ko-fi's one-off donation type is
  // "Tip"; to count only those, gate on `data.type === 'Tip'`.)
  //
  // We only ever sum amounts into an anonymous total — we never show donor
  // names or messages — so there's nothing to hide for `is_public: false`
  // payments, and they're counted too. (If you later show a public donor feed,
  // that's when you must honor `is_public`.)
  const amount = parseFloat(data.amount)
  if (Number.isFinite(amount) && amount > 0) {
    const next = Math.round((await readTotal(env) + amount) * 100) / 100
    await env.DONATIONS.put(TOTAL_KEY, String(next))
  }
  if (txId) await env.DONATIONS.put('tx:' + txId, '1')

  return new Response('ok', { status: 200 })
}

function json(obj, headers = {}) {
  return new Response(JSON.stringify(obj), {
    headers: { 'content-type': 'application/json', ...headers },
  })
}
