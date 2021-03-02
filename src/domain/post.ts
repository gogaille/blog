import Joi from "joi";
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

const postSchema = Joi.object({
  lang: Joi.string().allow("en", "fr"),
  slug: Joi.string()
    .pattern(/^[a-zA-Z0-9\-]+$/)
    .min(5),
  title: Joi.string(),
  content: Joi.string(),
  excerpt: Joi.string(),
  coverImage: Joi.string(),
  coverImageAlt: Joi.string(),
  date: Joi.string().isoDate(),
  author: Joi.object({
    name: Joi.string(),
    picture: Joi.string(),
    twitterHandle: Joi.string().pattern(/^@[a-zA-Z0-9\-]+$/),
  })
    .options({ presence: "required" })
    .unknown(false),
  readingTime: Joi.string(),
})
  .options({ presence: "required" })
  .unknown(false);

export function guardPostPayload(
  postPayload: any,
): asserts postPayload is Post {
  Joi.assert(postPayload, postSchema);
}
