import Document, { Html, Head, NextScripts, Main } from 'next/document';

export default class Mydocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScripts />
        </body>
      </Html>
    );
  }
}
