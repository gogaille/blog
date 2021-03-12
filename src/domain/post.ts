import * as z from "zod";
import { Author } from "./author";

export interface PostSummary {
  lang: "en" | "fr";
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  coverImageAlt: string;
  date: string;
  author: Author;
  readingTime: string;
}

export interface Post extends PostSummary {
  content: string;
}

const postSchema = z
  .object({
    lang: z.enum(["en", "fr"]),
    slug: z
      .string()
      .regex(/^[a-zA-Z0-9\-]+$/)
      .min(5),
    title: z.string(),
    content: z.string(),
    excerpt: z.string(),
    coverImage: z.string(),
    coverImageAlt: z.string(),
    date: z.string(), // TODO: validate date shape
    author: z.object({
      name: z.string(),
      picture: z.string(),
      twitterHandle: z.string().regex(/^@[a-zA-Z0-9\-]+$/),
    }),
    readingTime: z.string(),
  })
  .strict();

export function validatePostPayload(maybePostPayload: unknown): Post {
  return postSchema.parse(maybePostPayload);
}
