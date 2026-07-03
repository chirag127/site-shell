export interface SiteConfig {
  name: 'knowledge' | 'skills' | 'links'
  tagline: string
  palette: Record<string, string>
  fonts: { head: string; body: string; mono: string }
  githubUrl: string
}
