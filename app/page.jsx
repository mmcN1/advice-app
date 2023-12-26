"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [item, setItem] = useState("");
  const [times, setTimes] = useState("");

  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setTimes(data.slip.id);
    setItem(data.slip.advice);
    console.log(item);
  };

  return (
    <main  className="flex min-h-screen flex-col items-center justify-evenly p-12 ">
      <section key={`${times}`} className="flex flex-col  border-solid border-2 border-y-blue-50 text-white h-full font-mono w-4/5 md:h-80 bg-gray-700 md:w-6/12 rounded-2xl">
        <h1 className="w-full flex justify-center text-green-400 p-6 animate-[wiggle_4s_ease-in-out]">
          Advice #{times}
        </h1>
        <p  className=" flex content-start h-1/2 animate-[wiggle_4s_ease-in-out] p-6 ">
         `` {item}
        </p>
        <div className="w-full flex items-center justify-center">
        <button
          className="flex justify-center items-center w-2/12 animate-[wiggle_4s_ease-in-out] h-12 mt-7 "
          onClick={handleClick}
        >
          <img className="transition-all hover:scale-75" src="./images/icon-dice.svg" />
        </button>
        </div>
      </section>
    </main>
  );
}
