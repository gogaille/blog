import { BLOG_TITLE, BLOG_SUBTITLE } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {BLOG_TITLE}.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {BLOG_SUBTITLE}
      </h4>
    </section>
  );
};

export default Intro;
