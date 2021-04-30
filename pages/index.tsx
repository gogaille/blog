import React from "react";
import fs from "fs";
import { getAllNodes } from "next-mdx/server";
import readingTime from "reading-time";
import Container from "../src/components/container";
import MoreStories from "../src/components/more-stories";
import HeroPost from "../src/components/hero-post";
import Intro from "../src/components/intro";
import Layout from "../src/components/layout";
import { BLOG_URL } from "../src/globals";
import { generateFeed } from "../src/feed";
import { PostNode } from "../src/types";

type IndexPageProps = {
  allPosts: Array<PostNode>;
};

const IndexPage = ({ allPosts }: IndexPageProps) => {
  const heroPostNode = allPosts[0];
  const morePostNodes = allPosts.slice(1);

  if (heroPostNode && !heroPostNode.frontMatter) {
    throw new Error("Invalid PostNode: missing frontMatter entry");
  }

  const heroPost = heroPostNode.frontMatter;

  return (
    <Layout>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            lang={heroPost.lang}
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            authors={heroPostNode.relationships?.author ?? []}
            slug={heroPostNode.slug}
            excerpt={heroPost.excerpt}
            readingTime={readingTime(heroPostNode.content ?? "").text}
          />
        )}
        {morePostNodes.length > 0 && <MoreStories postNodes={morePostNodes} />}
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const getStaticProps = async () => {
  const allPosts = await getAllNodes<PostNode>("post");

  const feed = await generateFeed(allPosts, BLOG_URL || "");
  fs.writeFileSync("./public/feed/rss.xml", feed.rss2());

  return {
    props: { allPosts },
  };
};
