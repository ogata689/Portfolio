import Head from "next/head";
import Image from "next/image";
import Entry from "../conpoments/Entry";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  console.log(props.entries);
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Portfolio</h1>
      </header>

      <main>
        {props.entries.contents.map((entry) => {
          return <Entry entry={entry}></Entry>;
        })}
      </main>

      <footer>
        <p>
          <small>&copy; ogata</small>
        </p>
      </footer>
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
