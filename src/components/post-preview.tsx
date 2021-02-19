import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import { Author } from "../domain/author";
import { postRoute } from "./routes";
import ReadingTime from "./reading-time";

type Props = {
  lang: string;
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  readingTime: string;
};

const PostPreview = ({
  lang,
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  readingTime,
}: Props) => {
  return (
    <div lang={lang}>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={postRoute(slug)}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4 prose max-w-none">
        <DateFormatter dateString={date} />
        <ReadingTime text={readingTime} />
      </div>
      <p className="text-lg leading-relaxed mb-4 prose max-w-none">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
