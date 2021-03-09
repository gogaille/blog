import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-primary text-primary">
          <Main />
          <NextScript />

          <script src="https://getinsights.io/js/insights.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `insights.init("nKQvSs_BBESe7Jbn", { disabled: "${process.env.NODE_ENV}" !== "production" }); insights.trackPages();`,
            }}
          />
        </body>
      </Html>
    );
  }
}
