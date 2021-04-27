import { Author as AuthorType, AuthorNode } from "../../src/types";

export const Author = ({
  name,
  picture,
}: Pick<AuthorType, "name" | "picture">) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold text-secondary">{name}</div>
    </div>
  );
};

const Authors = ({ authors }: { authors: AuthorNode[] }) => {
  if (authors.length === 0) {
    return (
      <Author name={"John Doe"} picture={"/assets/blog/authors/johndoe.svg"} />
    );
  }

  return (
    <div className="flex items-center space-x-8">
      {authors.map((oneAuthorNode) => {
        if (!oneAuthorNode || !oneAuthorNode.frontMatter) {
          throw new Error("Invalid AuthorNode: missing frontMatter entry");
        }
        const author = oneAuthorNode.frontMatter;

        return <Author name={author.name} picture={author.picture} />;
      })}
    </div>
  );
};

export default Authors;
