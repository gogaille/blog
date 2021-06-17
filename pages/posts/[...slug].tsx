import React from "react";
import { NextSeo } from "next-seo";
import { useHydrate } from "next-mdx/client";
import { getMdxNode, getMdxPaths } from "next-mdx/server";
import { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import readingTime from "reading-time";
import Container from "../../src/components/container";
import PostBody from "../../src/components/post-body";
import Header from "../../src/components/header";
import PostHeader from "../../src/components/post-header";
import Layout from "../../src/components/layout";
import { BLOG_URL } from "../../src/globals";
import { postRoute } from "../../src/routes";
import Utterances from "../../src/components/utterances";
import { PostMdxNode } from "../../src/types";
import "highlight.js/styles/hybrid.css";
import { components } from "../../src/MdxComponentBinding";
import { getPlaiceholder } from "plaiceholder";

type PostPageProps = { postNode: PostMdxNode };

const PostPage: NextPage<PostPageProps> = ({ postNode }: PostPageProps) => {
  const content = useHydrate(postNode, {
    components,
  });

  if (postNode && !postNode.frontMatter) {
    throw new Error("Invalid PostNode: missing frontMatter entry");
  }

  const post = postNode.frontMatter;
  const authors = postNode.relationships?.author;

  if (!post) {
    throw new Error("No Post");
  }

  return (
    <Layout>
      <Container>
        <Header />

        <NextSeo
          title={post.title}
          description={post.excerpt}
          canonical={`${BLOG_URL}${postRoute(postNode.slug)}`}
          openGraph={{
            type: "article",
            title: post.title,
            description: post.excerpt,
            url: `${BLOG_URL}${postRoute(postNode.slug)}`,
            article: {
              publishedTime: post.date,
            },
            images: [
              {
                url: `${BLOG_URL}${post.coverImage.src}`,
                alt: post.coverImage.alt,
              },
            ],
          }}
          twitter={{
            cardType: "summary_large_image",
          }}
        />

        <article className="mb-16" lang={post.lang}>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            authors={authors || []}
            readingTime={readingTime(postNode.content ?? "").text}
          />
          <PostBody content={content} />
        </article>

        <div className="max-w-2xl mx-auto mb-32">
          <p className="text-3xl text-primary mt-12 mb-4 font-bold">Comments</p>

          <Utterances
            repo="gogaille/blog"
            issueTerm="pathname"
            theme="github-light"
            label="discussions"
          />
        </div>
      </Container>
    </Layout>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getMdxPaths("post"),
    fallback: false,
  };
};

type Params = NodeJS.Dict<string[]>;
export const getStaticProps: GetStaticProps<PostPageProps, Params> = async (
  context,
) => {
  const mdxParams = {
    components,
    mdxOptions: {
      rehypePlugins: [require("rehype-highlight")],
    },
  };

  const postNode = await getMdxNode<PostMdxNode>("post", context, mdxParams);

  if (!postNode) {
    return {
      notFound: true,
    };
  }

  const { base64 } = await getPlaiceholder(
    postNode.frontMatter?.coverImage.src,
  );

  return {
    props: {
      postNode: {
        ...postNode,
        frontMatter: {
          ...postNode.frontMatter,
          coverImage: {
            ...postNode.frontMatter?.coverImage,
            blurDataUrl: base64,
          },
        },
      },
    },
  };
};
