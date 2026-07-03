# @chirag127/site-shell

Shared Astro shell for [oriz.in](https://oriz.in) fleet sites.

- `knowledge.oriz.in` — [chirag127/knowledge-site](https://github.com/chirag127/knowledge-site)
- `skills.oriz.in` — [chirag127/skills-site](https://github.com/chirag127/skills-site)
- `links.oriz.in` — [chirag127/links-site](https://github.com/chirag127/links-site)

## What's shared

- OKF v0.2 Zod schema (`content-schema.ts`)
- Wordmark + Footer components (family voice)
- Typography scale + reset CSS
- Bunny Fonts loader (GDPR-safe, no Google)
- Health / robots / humans routes
- `SiteConfig` virtual module (`@chirag127/site-shell:config`)

## What's per-site

Palette, headline typeface, hero motif, dark-mode palette. See [per-app-distinctive-frontend-design](https://knowledge.oriz.in/rules/design/per-app-distinctive-frontend-design.html).

## Install

```bash
pnpm add @chirag127/site-shell
```

```ts
// astro.config.mjs
import siteShell from '@chirag127/site-shell/astro'

export default {
  integrations: [
    siteShell({
      name: 'knowledge',
      tagline: 'The library',
      palette: { fg: '#1a1817', bg: '#f4f1ea', accent: '#b8860b' },
      fonts: { head: 'Charter', body: 'Inter Tight', mono: 'JetBrains Mono' },
      githubUrl: 'https://github.com/chirag127/knowledge-site',
    }),
  ],
}
```

## License

MIT. See [LICENSE](./LICENSE).
