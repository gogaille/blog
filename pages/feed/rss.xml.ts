import { GetServerSidePropsContext } from "next";
import { Feed as FeedBuilder } from "feed";
import { getAllPosts } from "../../lib/api";
import { BLOG_TITLE, META_DESCRIPTION } from "../../lib/constants";
import { postRoute } from "../../components/routes";

const publicPath = process.env.PUBLIC_PATH || "";
if (!publicPath) {
  throw new Error("The PUBLIC_PATH path environment variable is missing.");
}

export const getServerSideProps = ({ res }: GetServerSidePropsContext) => {
  const feed = new FeedBuilder({
    id: publicPath,
    link: publicPath,
    title: BLOG_TITLE,
    description: META_DESCRIPTION,
    copyright: "© Gogaille",
  });

  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  allPosts.forEach(({ title, excerpt, date, coverImage, slug, author }) => {
    feed.addItem({
      id: slug,
      link: postRoute(slug),
      title: title,
      description: excerpt,
      image: `${publicPath}${coverImage}`,
      date: new Date(date),
      // @ts-ignore: TODO: The return type of getAllPosts is broken
      author: [{ name: author.name }],
    });
  });

  res.setHeader("Content-Type", "text/xml");
  res.write(feed.rss2());
  res.end();

  return { props: {} };
};

export default function RssFeed() {}
