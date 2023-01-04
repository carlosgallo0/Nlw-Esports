import { useState } from "react";
import "./styles/main.css";
import logoImg from "./assets/logo-nlw-esports.svg";

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return <button>{props.title}</button>;
}

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu
        <span className=" text-transparent bg-nlw-gradient bg-clip-text  ">
          {" "}
          duo{" "}
        </span>
        está aqui
      </h1>

      <div className=" grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative">
          <img src="/game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 bg-game-gradient"></div>
        </a>
        <a href="" className="relative">
          <img src="/game-2.png" alt="" />
        </a>
        <a href="" className="relative">
          <img src="/game-1.png" alt="" />
        </a>
        <a href="" className="relative">
          <img src="/game-2.png" alt="" />
        </a>
        <a href="" className="relative">
          <img src="/game-1.png" alt="" />
        </a>
        <a href="" className="relative">
          <img src="/game-2.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default App;
