import PostPreview from "./post-preview";
import { PostSummary } from "../types/post";

type Props = {
  posts: Array<PostSummary>;
};

const MoreStories = ({ posts: postSummaries }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {postSummaries.map((onePostSummary) => (
          <PostPreview
            key={onePostSummary.slug}
            title={onePostSummary.title}
            coverImage={onePostSummary.coverImage}
            date={onePostSummary.date}
            author={onePostSummary.author}
            slug={onePostSummary.slug}
            excerpt={onePostSummary.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
