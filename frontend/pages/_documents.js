/* eslint-disable react/jsx-props-no-spreading */
import Document, { Html, Head, NextScripts, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class Mydocument extends Document {
  // waits for this method to be resolved before sending the data from the server to the browser
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

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

/* Notes:
Fixing styling problem:
The server side was rendering the styles with random ids and the client side was doing same with a different id. So the two were no matching, hence causing flicker and styling errors
To fix it, there is the need for consistent id matches
*/
