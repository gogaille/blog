import classnames from "classnames";
import React from "react";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: React.ReactNode;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto prose max-w-none prose-2xl font-public-sans">
      <div
        className={classnames(
          markdownStyles["markdown"],
          "prose max-w-none prose-2xl",
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default PostBody;
