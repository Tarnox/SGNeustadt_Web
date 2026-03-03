import { defineCollection, z } from "astro:content";

const events = defineCollection({
  schema: z.object({
    title: z.string(),
    start: z.string(),
    end: z.string().optional(),
    location: z.string().optional(),
  }),
});

export const collections = {
  events,
};
