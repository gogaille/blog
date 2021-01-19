import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post, PostSummary, guardPostPayload } from "../types/post";

const postsDirectory = join(process.cwd(), "_posts");

function convertFileNameToSlug(filename: string): string {
  return filename.replace(/\.md$/, "");
}

export function getAllPostFilenames() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post {
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data: headers, content: contentInMarkdown } = matter(fileContents);

  const postPayload = {
    slug,
    lang: headers.lang,
    title: headers.title,
    excerpt: headers.excerpt,
    coverImage: headers.coverImage,
    ogImage: headers.ogImage,
    date: headers.date,
    author: headers.author,
    content: contentInMarkdown,
  };

  guardPostPayload(postPayload);

  return postPayload;
}

export function getPostByFilename(filename: string): Post {
  return getPostBySlug(convertFileNameToSlug(filename));
}

export function getPostSummaryByFilename(filename: string): PostSummary {
  const {
    lang,
    slug,
    title,
    excerpt,
    coverImage,
    ogImage,
    date,
    author,
  } = getPostByFilename(filename);

  const postSummary = {
    lang,
    slug,
    title,
    excerpt,
    coverImage,
    ogImage,
    date,
    author,
  };

  return postSummary;
}

export function getAllPostSummaries(): Array<PostSummary> {
  const postFilenames = getAllPostFilenames();

  const posts = postFilenames
    .map((onePostFilename) => getPostByFilename(onePostFilename))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
