import type { AstroIntegration } from 'astro'
import type { SiteConfig } from './types'

/**
 * @chirag127/site-shell Astro integration.
 *
 * Registers /health, /robots.txt, /humans.txt, and exposes SiteConfig
 * as a virtual module `@chirag127/site-shell:config`.
 */
export default function siteShell(config: SiteConfig): AstroIntegration {
  return {
    name: '@chirag127/site-shell',
    hooks: {
      'astro:config:setup': ({ injectRoute, updateConfig }) => {
        updateConfig({
          vite: {
            plugins: [
              {
                name: 'site-shell-virtual',
                resolveId(id) {
                  if (id === '@chirag127/site-shell:config') return '\0site-shell-config'
                },
                load(id) {
                  if (id === '\0site-shell-config') return `export default ${JSON.stringify(config)}`
                },
              },
            ],
          },
        })

        injectRoute({ pattern: '/health', entrypoint: '@chirag127/site-shell/routes/health.ts' } as any)
      },
    },
  }
}
