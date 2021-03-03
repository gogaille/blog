import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { BLOG_TITLE, BLOG_URL, META_DESCRIPTION } from "../lib/constants";

import "../styles/index.css";

export default function GogailleBlogApp({
  Component,
  pageProps,
  router,
}: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | ${BLOG_TITLE}`}
        defaultTitle={BLOG_TITLE}
        description={META_DESCRIPTION}
        openGraph={{
          type: "website",
          url: `${BLOG_URL}${router.asPath}`,
          title: BLOG_TITLE,
          description: META_DESCRIPTION,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
