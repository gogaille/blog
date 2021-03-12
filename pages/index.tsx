import fs from "fs";
import Container from "../src/components/container";
import MoreStories from "../src/components/more-stories";
import HeroPost from "../src/components/hero-post";
import Intro from "../src/components/intro";
import Layout from "../src/components/layout";
import { getAllPostSummaries } from "../src/api";
import Head from "next/head";
import { BLOG_TITLE, BLOG_URL } from "../src/globals";
import { PostSummary } from "../src/domain/post";
import { generateFeed } from "../src/feed";

type Props = {
  allPosts: Array<PostSummary>;
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              lang={heroPost.lang}
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              readingTime={heroPost.readingTime}
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
  const allPosts = getAllPostSummaries();

  const feed = await generateFeed(allPosts, BLOG_URL || "");
  fs.writeFileSync("./public/feed/rss.xml", feed.rss2());

  return {
    props: { allPosts },
  };
};
