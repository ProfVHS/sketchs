import React, { Component, useState } from "react";
import PersonalDetails from "../components/RegisterForm/PersonalDetails";
import Security from "../components/RegisterForm/Security";
import UserDetails from "../components/RegisterForm/UserDetails";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signup } from "../actions/auth";
import axios from "axios";

function Register() {
  const [step, setStep] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const [registerData, setRegisterData] = useState({
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    pass: "",
    repass: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/signup`, registerData);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="flex justify-center flex-col max-w-xs bg-accent3 shadow-md rounded-lg p-6">
          <span className="text-2xl font-poppins">Etap {step}/3</span>
          {step === 1 ? (
            <UserDetails
              value={registerData}
              onChange={setRegisterData}
              onNext={nextStep}
            />
          ) : step === 2 ? (
            <PersonalDetails
              value={registerData}
              onNext={nextStep}
              onPrev={prevStep}
              onChange={setRegisterData}
            />
          ) : (
            <Security value={registerData} onChange={setRegisterData} />
          )}
          <a className="text-xs text-indigo-600 underline" href="/login">
            Masz już konto? Zaloguj się tutaj!
          </a>
          <button onClick={handleSubmit}>TEST</button>
        </div>
      </div>
      <div className="bg-[url('./assets/bg175x.png')] w-full h-screen opacity-20 absolute top-0 -z-10"></div>
    </>
  );
}

export default Register;
