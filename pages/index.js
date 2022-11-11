import { Link, animateScroll as scroll } from "react-scroll";
import Head from "next/head";
import Image from "next/image";
import Entry from "../conpoments/Entry";
import Header from "../conpoments/Header";
import Introduction from "../conpoments/Introduction";
import About from "../conpoments/About";
import Works from "../conpoments/Works";
import Profile from "../conpoments/Profile";
import Contact from "../conpoments/Contact";
import GoTop from "../conpoments/GoTop";
import Footer from "../conpoments/Footer";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="" />
        <link rel="icon" href="favicon.icon" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;1,100;1,300&family=Noto+Sans+JP:wght@100;300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main>
        <Introduction />

        <About />

        <Works>{props.entries.contents}</Works>

        <Profile />

        <Contact />
      </main>

      <GoTop />

      <Footer />
    </div>
  );
}

import { client } from "../utils/client";
export const getStaticProps = async () => {
  const [entries] = await Promise.all([
    client.get({
      endpoint: "entries",
      queries: {
        orders: "-publishedAt",
        offset: 0,
        limit: 10,
        // fields: 'id,title,categories,tags,publishedAt,image,description'
      },
    }),
  ]);

  return {
    props: {
      entries,
    },
  };
};
