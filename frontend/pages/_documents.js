import Document, { Html, Head, NextScripts, Main } from 'next/document';

export default class Mydocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScripts />
        </body>
      </Html>
    );
  }
}
