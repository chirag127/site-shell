import { z } from 'zod'

/**
 * OKF v0.2 frontmatter Zod schema.
 *
 * Per Google OKF SPEC.md — `type` is the only required field.
 * v0.2 additive: `confidence`, `durability` optional (see GH issue #172).
 *
 * Every field passes through — schema is permissive on unknowns per
 * OKF spec §4.1 "Producers MAY include any additional keys."
 */
export const okfSchema = z.object({
  // required
  type: z.string(),

  // v0.1 recommended
  title: z.string().optional(),
  description: z.string().optional(),
  resource: z.string().optional(),
  tags: z.array(z.string()).optional(),
  timestamp: z.union([z.string(), z.date()]).optional(),

  // oriz v0.2 additive (see okf-v0.2-upstream-to-google-2026-07-03)
  format_version: z.string().optional(),
  status: z.enum(['active', 'draft', 'deprecated']).optional(),
  confidence: z.enum(['high', 'medium', 'low']).optional(),
  durability: z.enum(['durable', 'volatile']).optional(),

  // relationships
  supersedes: z.array(z.string()).optional(),
  related: z.array(z.string()).optional(),
}).passthrough()

export type OkfFrontmatter = z.infer<typeof okfSchema>

/** Extend schema with site-specific fields. */
export function extendOkf<T extends z.ZodRawShape>(extra: T) {
  return okfSchema.extend(extra)
}
