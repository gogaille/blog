import Authors from "./author";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import { AuthorNode } from "../../src/types";
import ReadingTime from "./reading-time";

type Props = {
  title: string;
  coverImage: string;
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
        <CoverImage title={title} src={coverImage} />
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
