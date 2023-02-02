import React, { Component, useState } from "react";
import PersonalDetails from "../components/RegisterForm/PersonalDetails";
import Security from "../components/RegisterForm/Security";
import UserDetails from "../components/RegisterForm/UserDetails";

import { useNavigate } from "react-router-dom";

import axios from "axios";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const { data } = await axios.post(`http://localhost:5000/signin`, {
      username,
      password,
    });
    const response = JSON.stringify(data);
    if (!response) {
      console.log("test");
      return;
    }
    localStorage.setItem("profile", JSON.stringify(data));
    navigate("/posts");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="flex justify-center flex-col max-w-xs bg-accent3 shadow-md rounded-lg p-6">
          <span className="text-2xl font-poppins">Login</span>
          <span className="mt-6 text-lg font-poppins">Nazwa użytkownika</span>
          <input
            className={`mb-2 p-2 drop-shadow-md rounded `}
            placeholder="Nazwa użytkownika"
            type={"email"}
            name="username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <span className="text-lg font-poppins">Hasło</span>
          <input
            className={`mb-2 p-2 drop-shadow-md rounded `}
            placeholder="Hasło"
            type={"password"}
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          <button
            onClick={handleSubmit}
            className="font-poppins font-bold text-lg text-white uppercase bg-accent1 drop-shadow-md rounded-lg my-2 p-1 transition ease-in-out duration-150 hover:shadow-hover"
          >
            Login
          </button>
          <a className="text-xs text-indigo-600 underline" href="/login">
            Masz już konto? Zaloguj się tutaj!
          </a>
        </div>
      </div>
      <div className="bg-[url('./assets/bg175x.png')] w-full h-screen opacity-20 absolute top-0 -z-10"></div>
    </>
  );
}

export default Login;
