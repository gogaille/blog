import React from "react";
import Authors from "./author";
import DateFormatter from "./date-formatter";
import { PreviewImage } from "./cover-image";
import Link from "next/link";
import { AuthorNode, CoverImage } from "../../src/types";
import { postRoute } from "../routes";
import ReadingTime from "./reading-time";

type PostPreviewProps = {
  lang: string;
  title: string;
  coverImage: CoverImage;
  date: string;
  excerpt: string;
  authors: AuthorNode[];
  slug: string;
  readingTime: string;
};

const PostPreview = ({
  lang,
  title,
  coverImage,
  date,
  excerpt,
  authors,
  slug,
  readingTime,
}: PostPreviewProps) => {
  return (
    <div lang={lang}>
      <div className="mb-5">
        <PreviewImage
          blogPostUrl={slug}
          blogPostTitle={title}
          imageSrc={coverImage.src}
          imageAlt={coverImage.alt}
          imageWidth={coverImage.width}
          imageHeight={coverImage.height}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug  font-belly-display">
        <Link href={postRoute(slug)}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4 prose max-w-none text-secondary">
        <DateFormatter dateString={date} />
        <ReadingTime text={readingTime} />
      </div>
      <p className="text-lg leading-relaxed mb-4 prose max-w-none">{excerpt}</p>
      <Authors authors={authors} />
    </div>
  );
};

export default PostPreview;
