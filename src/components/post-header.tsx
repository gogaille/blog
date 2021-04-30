import React from "react";
import Authors from "./author";
import DateFormatter from "./date-formatter";
import { PostHeaderImage } from "./cover-image";
import PostTitle from "./post-title";
import { AuthorNode, CoverImage } from "../../src/types";
import ReadingTime from "./reading-time";

type Props = {
  title: string;
  coverImage: CoverImage;
  date: string;
  authors: AuthorNode[];
  readingTime: string;
};

const PostHeader = ({
  title,
  coverImage,
  date,
  authors,
  readingTime,
}: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Authors authors={authors} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <PostHeaderImage
          src={coverImage.src}
          alt={coverImage.alt}
          width={coverImage.width}
          height={coverImage.height}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Authors authors={authors} />
        </div>
        <div className="mb-6 text-lg text-tertiary prose max-w-none">
          <DateFormatter dateString={date} />
          <ReadingTime text={readingTime} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
