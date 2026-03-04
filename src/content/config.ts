import { defineCollection, z } from "astro:content";

const events = defineCollection({
  schema: z.object({
    title: z.string(),
    start: z.string(),
    end: z.string().optional(),
    location: z.string().optional(),
  }),
});

const news = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
  }),
});

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
   // slug: z.string(),
  }),
});

const galleries = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().optional(),
        })
      )
      .default([]),
  }),
});

export const collections = {
  events,
  news,
  pages,
  galleries,
};

