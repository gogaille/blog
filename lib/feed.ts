import { Feed as FeedBuilder } from "feed";
import { BLOG_TITLE, META_DESCRIPTION } from "./constants";
import { postRoute } from "../components/routes";

export function generateFeed(
  allPosts: Array<{
    title: string;
    date: string;
    slug: string;
    author: { name: string };
    coverImage: string;
    excerpt: string;
  }>,
  publicPath: string,
): FeedBuilder {
  const feed = new FeedBuilder({
    id: publicPath,
    link: publicPath,
    title: BLOG_TITLE,
    description: META_DESCRIPTION,
    copyright: "© Gogaille",
  });

  allPosts.forEach(({ title, excerpt, date, coverImage, slug, author }) => {
    feed.addItem({
      id: slug,
      link: postRoute(slug),
      title: title,
      description: excerpt,
      image: `${publicPath}${coverImage}`,
      date: new Date(date),
      author: [{ name: author.name }],
    });
  });
  return feed;
}
