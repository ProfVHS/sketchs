import React, { useState } from "react";

function UserDetails({ value, onChange, onNext }) {
  const [emailError, setEmailError] = useState();
  const [usernameError, setUsernameError] = useState();
  const validate = () => {
    const email = value.email.toLowerCase();
    const username = value.username;

    const newEmailError = !email
      ? "Email jest wymagany!"
      : !email.includes("@") ||
        !email.includes(".") ||
        email.lastIndexOf(".") == email.length
      ? "Nieprawidłowy adres email"
      : "";

    const newUsernameError = !username
      ? "Nazwa użytkownika jest wymagana!"
      : username.length < 6
      ? "Nazwa użytkownika musi mieć przynajmniej 6 znaków"
      : "";

    setUsernameError(newUsernameError);
    setEmailError(newEmailError);

    if (!newUsernameError && !newEmailError) {
      onNext();
    }
  };
  return (
    <>
      <span className="text-lg font-poppins">Dane użytkownika</span>
      <input
        className={`mt-6 mb-2 p-2 drop-shadow-md rounded ${
          emailError ? "border-red-500 border-2" : ""
        }`}
        placeholder="E-mail"
        type={"email"}
        name="email"
        value={value.email}
        onChange={(event) => {
          onChange({
            email: event.target.value,
            username: value.username,
            firstname: value.firstname,
            lastname: value.lastname,
            pass: value.pass,
            repass: value.repass,
          });
        }}
      />
      <span className="text-xs mx-1 text-red-500 font-semibold">
        {emailError}
      </span>
      <input
        className={`my-2 p-2 drop-shadow-md rounded ${
          usernameError ? "border-red-500 border-2" : ""
        }`}
        placeholder="Nazwa użytkownika"
        type={"text"}
        name="username"
        value={value.username}
        onChange={(event) => {
          onChange({
            username: event.target.value,
            email: value.email,
            firstname: value.firstname,
            lastname: value.lastname,
            pass: value.pass,
            repass: value.repass,
          });
        }}
      />
      <span className="text-xs mx-1 text-red-500 font-semibold">
        {usernameError}
      </span>
      <button
        onClick={validate}
        className="self-end font-poppins font-bold w-1/2 text-lg text-white uppercase bg-accent1 drop-shadow-md rounded-lg my-2 p-1 transition ease-in-out duration-150 hover:shadow-hover"
      >
        Dalej
      </button>
    </>
  );
}

export default UserDetails;
