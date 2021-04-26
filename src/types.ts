import { MdxNode, Node } from "next-mdx/server";

export type Author = {
  name: string;
  picture: string;
  twitterHandle: string;
};

export interface AuthorMdxNode extends MdxNode<Author> {}

export interface AuthorNode extends Node<Author> {}

export type Post = {
  lang: "en" | "fr";
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  coverImageAlt: string;
  date: string;
  readingTime: string;
};

export interface PostMdxNode extends MdxNode<Post> {
  relationships?: {
    author: AuthorMdxNode[];
  };
}

export interface PostNode extends Node<Post> {
  relationships?: {
    author: AuthorNode[];
  };
}
