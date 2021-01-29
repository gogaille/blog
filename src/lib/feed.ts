import { Feed as FeedBuilder } from "feed";
import { BLOG_TITLE, META_DESCRIPTION } from "./constants";
import { postRoute } from "../components/routes";
import { PostSummary } from "../domain/post";

export function generateFeed(
  allPosts: Array<PostSummary>,
  publicPath: string,
): FeedBuilder {
  const feed = new FeedBuilder({
    id: publicPath,
    link: publicPath,
    title: BLOG_TITLE,
    description: META_DESCRIPTION,
    copyright: "© Gogaille",
    ttl: 24,
  });

  allPosts.forEach(({ title, excerpt, date, coverImage, slug, author }) => {
    const postLink = publicPath + postRoute(slug);

    feed.addItem({
      guid: postLink,
      link: postLink,
      title: title,
      description: excerpt,
      image: `${publicPath}${coverImage}`,
      date: new Date(date),
      author: [{ name: author.name }],
    });
  });
  return feed;
}
