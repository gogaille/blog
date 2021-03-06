import React from "react";
import Link from "next/link";
import Image from "next/image";
import { postRoute } from "../routes";

type PostHeaderImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const PostHeaderImage = ({
  src,
  alt,
  width,
  height,
}: PostHeaderImageProps) => {
  return (
    <div className="sm:mx-0">
      <div className="relative w-full">
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={width}
          height={height}
        />
      </div>
    </div>
  );
};

type PreviewImageProps = {
  blogPostTitle: string;
  blogPostUrl: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  heroPostImage?: boolean;
};

export const PreviewImage = ({
  blogPostTitle,
  blogPostUrl,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
}: PreviewImageProps) => {
  return (
    <div className="sm:mx-0">
      <div className="relative w-full hover:shadow-medium transition-shadow duration-200 shadow-small">
        <Link href={postRoute(blogPostUrl)}>
          <a aria-label={blogPostTitle}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              layout="responsive"
              width={imageWidth}
              height={imageHeight}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};
