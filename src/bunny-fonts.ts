/**
 * Bunny Fonts loader — GDPR-safe alternative to Google Fonts.
 *
 * Emits @font-face CSS pointing at fonts.bunny.net. Font-display: swap.
 * For production, fetch WOFF2 files to /public/fonts/ at build time
 * (deferred — first ship with hosted CDN, self-host after).
 */
export function bunnyFontsCss(families: Record<string, number[]>): string {
  const parts: string[] = []
  for (const [family, weights] of Object.entries(families)) {
    const slug = family.toLowerCase().replace(/\s+/g, '-')
    parts.push(`family=${slug}:${weights.join(',')}`)
  }
  return `https://fonts.bunny.net/css?${parts.join('&')}&display=swap`
}
