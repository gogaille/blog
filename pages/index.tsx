import fs from "fs";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { BLOG_TITLE } from "../lib/constants";
import Post from "../types/post";
import { generateFeed } from "../lib/feed";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{BLOG_TITLE}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const publicPath = process.env.PUBLIC_PATH || "";
  if (!publicPath) {
    throw new Error("The PUBLIC_PATH path environment variable is missing.");
  }

  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  // @ts-expect-error: TODO: The return type of getAllPosts is broken
  const feed = await generateFeed(allPosts, publicPath);
  fs.writeFileSync("./public/feed/rss.xml", feed.rss2());

  return {
    props: { allPosts },
  };
};
