import Link from "next/link";
import { BLOG_TITLE } from "../globals";

const Header = () => {
  return (
    <p className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">{BLOG_TITLE}</a>
      </Link>
      .
    </p>
  );
};

export default Header;
