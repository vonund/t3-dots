import { type NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";

interface Dot {
  x: number;
  y: number;
}

const Home: NextPage = () => {
  const [dots, setDots] = useState<Dot[]>([]);
  const [undoneDots, setUndoneDots] = useState<Dot[]>([]);

  const handleUndo = () => {
    const newDots = [...dots];
    const undoneDot = newDots.pop();

    if (undoneDot) {
      setUndoneDots([...undoneDots, undoneDot]);
      setDots(newDots);
    }
  };

  const handleRedo = () => {
    const newUndoneDots = [...undoneDots];
    const redoDot = newUndoneDots.pop();

    if (redoDot) {
      setUndoneDots(newUndoneDots);
      setDots([...dots, redoDot]);
    }
  };

  const handleDocumentClick = ({ x, y }: Dot) => {
    setDots([
      ...dots,
      {
        x,
        y,
      },
    ]);
    setUndoneDots([]);
  };

  return (
    <>
      <Head>
        <title>T3 App - Dots</title>
        <meta name="description" content="T3 App - Dots" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="fixed h-full w-full text-center"
        onClick={({ clientX: x, clientY: y }) => handleDocumentClick({ x, y })}
      >
        <h1 className="mt-12 text-white">
          Click anywhere on screen to place a dot
        </h1>
        <div className="mx-auto mt-4 flex w-80 flex-nowrap">
          <button
            className="inline-block w-full rounded bg-violet-600 px-6 py-3 leading-6 text-white hover:bg-violet-500"
            onClick={(event) => {
              event.stopPropagation();
              return handleUndo();
            }}
            type="button"
          >
            {"Undo"}
          </button>
          <button
            className="ml-2 inline-block w-full rounded  bg-violet-600 px-6 py-3 leading-6 text-white hover:bg-violet-500"
            onClick={(event) => {
              event.stopPropagation();
              return handleRedo();
            }}
            type="button"
          >
            {"Redo"}
          </button>
        </div>
        {dots.map(({ x, y }, index) => {
          return (
            <div
              className="fixed -mt-5 -ml-5 h-10 w-10 rounded-full bg-pink-400"
              key={index}
              style={{ top: y, left: x }}
            />
          );
        })}
      </main>
    </>
  );
};

export default Home;
