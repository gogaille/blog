import Head from "next/head";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPostSummaries } from "../../lib/api";
import { BLOG_TITLE } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import { Post as PostType } from "../../types/post";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  return (
    <Layout>
      <Container>
        <Header />
        <article className="mb-32" lang={post.lang}>
          <Head>
            <title>
              {post.title} | {BLOG_TITLE}
            </title>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={post.content} />
        </article>
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
