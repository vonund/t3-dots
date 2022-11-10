import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>T3 App - Dots</title>
        <meta name="description" content="T3 App - Dots" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="mt-12 text-white">
          Click anywhere on screen to place a dot
        </h1>
        <div className="mx-auto mt-4 flex w-80 flex-nowrap">
          <button
            className="inline-block w-full rounded bg-violet-600 px-6 py-3 leading-6 text-white hover:bg-violet-500"
            type="button"
          >
            {"Remove"}
          </button>
          <button
            className="ml-2 inline-block w-full rounded  bg-violet-600 px-6 py-3 leading-6 text-white hover:bg-violet-500"
            type="button"
          >
            {"Add"}
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
