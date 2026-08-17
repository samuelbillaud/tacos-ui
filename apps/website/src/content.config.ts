import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const components = defineCollection({
  loader: glob({ base: './src/content/components', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    category: z.string(),
    description: z.string(),
    ark: z.object({ link: z.string() }).optional(),
  }),
});

const overview = defineCollection({
  loader: glob({ base: './src/content/overview', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

const props = defineCollection({
  loader: glob({ base: './src/content/props', pattern: '**/*.json' }),
  schema: z.record(
    z.string(),
    z.object({
      options: z.array(z.string()).optional(),
      defaultValue: z.string().optional(),
    })
  ),
});

export const collections = {
  components,
  overview,
  props,
};
