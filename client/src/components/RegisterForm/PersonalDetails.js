import React, { useState } from "react";

function PersonalDetails({ value, onChange, onNext, onPrev }) {
  const [firstnameError, setFirstnameError] = useState();
  const [lastnameError, setLastnameError] = useState();
  const validate = () => {
    const firstname = value.firstname.toLowerCase();
    const lastname = value.lastname.toLowerCase();

    const newFirstnameError = !firstname
      ? "Imie jest wymagane!"
      : firstname < 3
      ? "Imie jest za krótkie"
      : "";
    const newLastnameError = !lastname
      ? "Imie jest wymagane!"
      : lastname < 3
      ? "Imie jest za krótkie"
      : "";

    setFirstnameError(newFirstnameError);
    setLastnameError(newLastnameError);

    if (!newFirstnameError && !newLastnameError) {
      onNext();
    }
  };
  return (
    <>
      <span className="text-lg font-poppins">Dane Osobowe</span>
      <input
        className={`mt-6 mb-2 p-2 drop-shadow-md rounded ${
          firstnameError && "border-red-500 border-2"
        }`}
        placeholder="Imie"
        type={"text"}
        name="firstname"
        value={value.firstname}
        onChange={(event) => {
          onChange({
            firstname: event.target.value,
            username: value.username,
            email: value.email,
            lastname: value.lastname,
            pass: value.pass,
            repass: value.repass,
          });
        }}
      />
      <span className="text-xs mx-1 text-red-500 font-semibold">
        {firstnameError}
      </span>
      <input
        className={`my-2 mb-2 p-2 drop-shadow-md rounded ${
          firstnameError && "border-red-500 border-2"
        }`}
        placeholder="Nazwisko"
        type={"text"}
        name="lastname"
        value={value.lastname}
        onChange={(event) => {
          onChange({
            lastname: event.target.value,
            username: value.username,
            email: value.email,
            firstname: value.firstname,
            pass: value.pass,
            repass: value.repass,
          });
        }}
      />
      <span className="text-xs mx-1 text-red-500 font-semibold">
        {lastnameError}
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

export default PersonalDetails;
