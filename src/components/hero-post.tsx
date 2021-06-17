import React from "react";
import Authors from "./author";
import DateFormatter from "./date-formatter";
import { PreviewImage } from "./cover-image";
import Link from "next/link";
import { postRoute } from "../routes";
import ReadingTime from "./reading-time";
import { AuthorNode, CoverImage } from "../../src/types";

type HeroPostProps = {
  lang: string;
  title: string;
  coverImage: CoverImage;
  date: string;
  excerpt: string;
  authors: AuthorNode[];
  slug: string;
  readingTime: string;
};

const HeroPost = ({
  lang,
  title,
  coverImage,
  date,
  excerpt,
  authors,
  slug,
  readingTime,
}: HeroPostProps) => {
  return (
    <section lang={lang}>
      <div className="mb-8 md:mb-16">
        <PreviewImage
          blogPostTitle={title}
          imageSrc={coverImage.src}
          imageAlt={coverImage.alt}
          imageWidth={coverImage.width}
          imageHeight={coverImage.height}
          imageBlurDataUrl={coverImage.blurDataUrl}
          blogPostUrl={slug}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight font-belly-display">
            <Link href={postRoute(slug)}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg prose max-w-none text-secondary">
            <DateFormatter dateString={date} />
            <ReadingTime text={readingTime} />
          </div>
        </div>

        <div>
          <p className="text-lg leading-relaxed mb-4 prose max-w-none text-primary">
            {excerpt}
          </p>
          <Authors authors={authors} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
