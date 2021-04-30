import React from "react";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { BLOG_TITLE, BLOG_URL, META_DESCRIPTION } from "../src/globals";

import "../src/styles/index.css";
import "../src/styles/font.css";

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
        canonical={BLOG_URL}
        openGraph={{
          type: "website",
          url: `${BLOG_URL}${router.asPath}`,
          title: BLOG_TITLE,
          description: META_DESCRIPTION,
          images: [
            {
              url: `${BLOG_URL}/assets/gogaille-logo.png`,
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
