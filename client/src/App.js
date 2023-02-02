import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { ReactComponent as Logo } from "./assets/napis.svg";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <Logo />
        <span className="text-3xl font-poppins font-semibold text-center">
          Twórz, dziel się pasją, komentuj, rozmawiaj, poznawaj, dyskutuj.
          <br />
          Wszystko w jednym miejscu dzięki sketchS!
        </span>
        <button
          onClick={() => {
            navigate("/register");
          }}
          className="font-poppins font-bold text-xl text-white uppercase bg-secondary drop-shadow-md rounded-lg my-2 px-6 py-2 transition ease-in-out duration-150 hover:shadow-hover"
        >
          Zacznij teraz
        </button>
        <a href="/login" className="text-indigo-500 underline">
          Masz już konto? Zaloguj się tutaj!
        </a>
      </div>
      <div className="bg-[url('./assets/bg175x.png')] w-full h-screen opacity-20 absolute top-0 -z-10"></div>
    </div>
  );
}

export default App;
