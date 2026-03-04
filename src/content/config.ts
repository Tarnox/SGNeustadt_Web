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
description: z.string().optional(),
    date: z.coerce.date(),
    cover: z.string().optional(),
  }),
});

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
   // slug: z.string(),
  }),
});

const galleries = defineCollection({
  schema: z.object({
    title: z.string(),
description: z.string().optional(),
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

const downloads = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string().default("Allgemein"),
    file: z.string(), // URL-Pfad z.B. /uploads/downloads/xyz.pdf
    description: z.string().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = {
  events,
  news,
  pages,
  galleries,
  downloads
};

