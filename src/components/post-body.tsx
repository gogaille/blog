import classnames from "classnames";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto prose max-w-none prose-2xl">
      <div
        className={classnames(
          markdownStyles["markdown"],
          "prose max-w-none prose-2xl",
        )}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
