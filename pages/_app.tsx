import React from "react";
import Head from "next/head";
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
      <Head>
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://gogaille-fonts.vercel.app/bely-display-400.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://gogaille-fonts.vercel.app/public-sans-700.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://gogaille-fonts.vercel.app/public-sans-400.woff2"
          crossOrigin="anonymous"
        />
      </Head>
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
