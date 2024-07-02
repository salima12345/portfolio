import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Welcome to my portfolio! Enjoy your visit" />
        <meta name="keywords" content="Salima El Khalidi, front-end developer, React.js, Next.js, web development" />
        <meta name="author" content="Salima El Khalidi" />
        <meta property="og:title" content="Salima El Khalidi" />
        <meta property="og:description" content="Welcome to my portfolio! Enjoy your visit" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-salima-el-khalidis-projects.vercel.app/" />
        <title>Salima El Khalidi</title>
      </Head>
      <body className="font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
