import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import { Author } from "../domain/author";
import { postRoute } from "../lib/routes";
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

const HeroPost = ({
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
    <section lang={lang}>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
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
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
