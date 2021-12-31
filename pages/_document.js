import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <title>Avogg</title>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
        <body className="font-montserrat overflow-hidden transition-colors duration-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument