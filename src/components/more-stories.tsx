import React from "react";
import { PostNode } from "../types";
import PostPreview from "./post-preview";
import readingTime from "reading-time";

type Props = {
  postNodes: Array<PostNode>;
};

const MoreStories = ({ postNodes }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight font-belly-display">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {postNodes.map((onePostNode) => {
          if (onePostNode.frontMatter === undefined) {
            throw new Error("Invalid PostNode: missing frontMatter entry");
          }

          const onePost = onePostNode.frontMatter;

          return (
            <PostPreview
              key={onePostNode.slug}
              lang={onePost.lang}
              title={onePost.title}
              coverImage={onePost.coverImage}
              date={onePost.date}
              authors={onePostNode.relationships?.author ?? []}
              slug={onePostNode.slug}
              excerpt={onePost.excerpt}
              readingTime={readingTime(onePostNode.content ?? "").text}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MoreStories;
