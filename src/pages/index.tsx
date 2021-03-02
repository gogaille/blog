import fs from "fs";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostSummaries } from "../lib/api";
import Head from "next/head";
import { BLOG_TITLE } from "../lib/constants";
import { PostSummary } from "../domain/post";
import { generateFeed } from "../lib/feed";

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

  const feed = await generateFeed(allPosts, process.env.PUBLIC_PATH || "");
  fs.writeFileSync("./public/feed/rss.xml", feed.rss2());

  return {
    props: { allPosts },
  };
};
