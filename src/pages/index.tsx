import { type NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";

enum BUTTON_ACTIONS {
  PREV,
  NEXT,
}

interface Dot {
  x: number;
  y: number;
}

const Home: NextPage = () => {
  const dotsRef = useRef<Dot[]>([]);
  const [dots, setDots] = useState<Dot[]>([]);

  const handleButtonClick = (action: BUTTON_ACTIONS) => {
    if (action === BUTTON_ACTIONS.PREV) {
      const newDots = [...dots];
      newDots.pop();
      setDots(newDots);
    } else {
      const nextDot = dotsRef.current[dots.length];
      nextDot && setDots([...dots, nextDot]);
    }
  };

  const handleDocumentClick = ({ x, y }: Dot) => {
    dotsRef.current = [
      ...dots,
      {
        x,
        y,
      },
    ];

    setDots(dotsRef.current);
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
              return handleButtonClick(BUTTON_ACTIONS.PREV);
            }}
            type="button"
          >
            {"Remove"}
          </button>
          <button
            className="ml-2 inline-block w-full rounded  bg-violet-600 px-6 py-3 leading-6 text-white hover:bg-violet-500"
            onClick={(event) => {
              event.stopPropagation();
              return handleButtonClick(BUTTON_ACTIONS.NEXT);
            }}
            type="button"
          >
            {"Add"}
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
