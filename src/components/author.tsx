import { Author as AuthorType, AuthorNode } from "../../src/types";
import Image from "next/image";

export const Author = ({
  name,
  picture,
}: Pick<AuthorType, "name" | "picture">) => {
  return (
    <div className="flex items-center">
      <div className="mr-4">
        <Image
          src={picture}
          className="rounded-full"
          alt={name}
          width={48}
          height={48}
        />
      </div>
      <div className="text-xl font-public-sans font-bold text-secondary">
        {name}
      </div>
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
    <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0">
      {authors.map((oneAuthorNode) => {
        if (!oneAuthorNode || !oneAuthorNode.frontMatter) {
          throw new Error("Invalid AuthorNode: missing frontMatter entry");
        }
        const author = oneAuthorNode.frontMatter;

        return (
          <Author
            name={author.name}
            picture={author.picture}
            key={author.name}
          />
        );
      })}
    </div>
  );
};

export default Authors;
