import { Feed as FeedBuilder } from "feed";
import { BLOG_TITLE, META_DESCRIPTION } from "./globals";
import { postRoute } from "./routes";
import { PostNode } from "../src/types";

export function generateFeed(
  allPostNodes: Array<PostNode>,
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

  allPostNodes.forEach((postNode) => {
    if (postNode.frontMatter === undefined) {
      throw new Error("Invalid PostNost: the `frontMatter` entry is necessary");
    }

    const { title, excerpt, date, coverImage } = postNode.frontMatter;

    const postLink = publicPath + postRoute(postNode.slug);

    feed.addItem({
      guid: postLink,
      link: postLink,
      title: title,
      description: excerpt,
      image: `${publicPath}${coverImage.src}`,
      date: new Date(date),
      // The author is not visible in the RSS feed
      author: postNode.relationships?.author.map((oneAuthor) => ({
        name: oneAuthor.frontMatter?.name,
      })),
    });
  });

  return feed;
}
