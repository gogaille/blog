import { Author } from "./author";

export interface PostSummary {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  ogImage: {
    url: string;
  };
  date: string;
  author: Author;
}

export interface Post extends PostSummary {
  content: string;
}
