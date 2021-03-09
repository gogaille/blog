import { NextSeo } from "next-seo";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPostSummaries } from "../../lib/api";
import { BLOG_URL } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import { Post as PostType } from "../../domain/post";
import { postRoute } from "../../lib/routes";

import "highlight.js/styles/hybrid.css";
import Utterances from "../../components/utterances";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  return (
    <Layout>
      <Container>
        <Header />

        <NextSeo
          title={post.title}
          description={post.excerpt}
          canonical={`${BLOG_URL}${postRoute(post.slug)}`}
          openGraph={{
            type: "article",
            title: post.title,
            description: post.excerpt,
            url: `${BLOG_URL}${postRoute(post.slug)}`,
            article: {
              publishedTime: post.date,
            },
            images: [
              {
                url: `${BLOG_URL}${post.coverImage}`,
                alt: post.coverImageAlt,
              },
            ],
          }}
          twitter={{
            cardType: "summary_large_image",
            handle: post.author.twitterHandle,
          }}
        />

        <article className="mb-16" lang={post.lang}>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            readingTime={post.readingTime}
          />
          <PostBody content={post.content} />
        </article>

        <div className="max-w-2xl mx-auto mb-32">
          <p className="text-3xl text-primary mt-12 mb-4 font-extrabold">
            Comments
          </p>

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

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPostSummaries();

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
