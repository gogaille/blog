import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-primary text-primary">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
