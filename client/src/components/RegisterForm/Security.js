import React, { useState } from "react";

function Security({ value, onChange, onNext, onPrev }) {
  const [passError, setPassError] = useState();
  const [repassError, setRePassError] = useState();
  const validate = () => {
    const pass = value.pass;
    const repass = value.repass;

    const newPassError = !pass
      ? "Musisz podać hasło!"
      : pass.length < 6
      ? "Hasło musi posiadać przynajmniej 6 znaków"
      : "";

    const newRePassError = !repass
      ? "Musisz wpisać ponownie hasło"
      : repass !== pass
      ? "Pola nie są identyczne"
      : "";

    setPassError(newPassError);
    setRePassError(newRePassError);

    if (!newPassError && !newRePassError) {
      //submit form
    }
  };
  return (
    <>
      <input
        className={`mt-6 mb-2 p-2 drop-shadow-md rounded ${
          passError && "border-red-500 border-2"
        }`}
        placeholder="Hasło"
        type={"password"}
        name="pass"
        value={value.pass}
        onChange={(event) => {
          onChange({
            pass: event.target.value,
            username: value.username,
            email: value.email,
            firstname: value.firstname,
            lastname: value.lastname,
            repass: value.repass,
          });
        }}
      />
      <span className="text-xs mx-1 text-red-500 font-semibold">
        {passError}
      </span>
      <input
        className={`my-2 p-2 drop-shadow-md rounded ${
          repassError && "border-red-500 border-2"
        }`}
        placeholder="Powtórz hasło"
        type={"password"}
        name="repass"
        value={value.repass}
        onChange={(event) => {
          onChange({
            repass: event.target.value,
            username: value.username,
            email: value.email,
            firstname: value.firstname,
            lastname: value.lastname,
            pass: value.pass,
          });
        }}
      />
      <span className="text-xs mx-1 text-red-500 font-semibold">
        {repassError}
      </span>
      <div className="flex gap-2">
        <button
          onClick={onPrev}
          className="self-start font-poppins font-bold w-1/2 text-lg text-white uppercase bg-accent1 drop-shadow-md rounded-lg my-2 p-1 transition ease-in-out duration-150 hover:shadow-hover"
        >
          Wstecz
        </button>
        <button
          onClick={validate}
          className="self-end font-poppins font-bold w-1/2 text-lg text-white uppercase bg-accent1 drop-shadow-md rounded-lg my-2 p-1 transition ease-in-out duration-150 hover:shadow-hover"
        >
          Dalej
        </button>
      </div>
    </>
  );
}

export default Security;
