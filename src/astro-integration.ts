import type { AstroIntegration } from 'astro'
import type { SiteConfig } from './types'

/**
 * @chirag127/site-shell Astro integration.
 *
 * Exposes SiteConfig as a virtual module `@chirag127/site-shell:config`.
 * Sites can define their own /health route if desired.
 */
export default function siteShell(config: SiteConfig): AstroIntegration {
  return {
    name: '@chirag127/site-shell',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
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
      },
    },
  }
}
