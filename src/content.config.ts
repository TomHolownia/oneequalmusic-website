import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const concerts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/concerts' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    month: z.string(),
    series: z.string().optional(),
    summary: z.string().optional(),
    image: z.string(),
    imageAlt: z.string().default(''),
    imagePosition: z.string().default('50% 35%'),
    inSeasonPass: z.boolean().default(false),
    hidden: z.boolean().default(false),
    note: z.string().optional(),
    performances: z.array(z.object({
      date: z.coerce.date(),
      city: z.string(),
      time: z.string().optional(),
      bookingUrl: z.string().optional(),
      bookingLabel: z.string().optional(),
    })).min(1),
  }),
});

// Pages are built from a list of sections ("blocks"). Each block's `type` picks its component.
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    sections: z.array(z.looseObject({ type: z.string() })).default([]),
  }),
});

export const collections = { concerts, pages };
