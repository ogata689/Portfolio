import Head from "next/head";
import Image from "next/image";
import Entry from "../conpoments/Entry";
import Header from "../conpoments/Header";
import Introduction from "../conpoments/Introduction";
import About from "../conpoments/About";
import Service from "../conpoments/Service";
import Footer from "../conpoments/Footer";

export default function Home(props) {
  console.log(props.entries);
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Introduction />

        <About />

        <Service />

        {/* 所得した記事ぶん回してEnptyコンポーネント表示する */}
        {props.entries.contents.map((entry) => {
          return <Entry key={entry.id} entry={entry}></Entry>;
        })}
      </main>

      <Footer></Footer>
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
