import Container from "./container";
import { rssFeedRoute } from "./routes";

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Follow our journey while we build the best customer & operations experiences of hospitality world.
          </h3>
          <div className="flex flex-col lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2">
            <a href={rssFeedRoute()} className="mx-3 font-bold hover:underline">
              RSS Feed
            </a>
            <a
              href="https://github.com/gogaille"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Our GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
