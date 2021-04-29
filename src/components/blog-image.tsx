import Image from "next/image";

type BlogImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export const BlogImage = ({
  src,
  alt,
  width,
  height,
  className = "",
}: BlogImageProps) => {
  if (width === undefined || height === undefined) {
    throw new Error("The image width and height are mandatory");
  }
  return (
    <div className={`sm:mx-0 ${className}`}>
      <div className="relative w-full h-auto">
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

export default BlogImage;
