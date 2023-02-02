import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import Form from "../components/Form";
import Posts from "../components/Posts";

import sketchs from "../assets/sketchS.svg";
import logo from "../assets/logo.svg";
import UserCard from "../components/UserCard";
import { useNavigate, useParams } from "react-router-dom";
import UserProfile from "../components/UserProfile";

function UserPage() {
  const [currentId, setCurrentId] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    currentId && setOpenForm(true);
  }, [currentId]);

  const user = JSON.parse(localStorage.getItem("profile"));

  console.log(user);

  return (
    <>
      <div className="flex items-center w-screen h-14 py-5 bg-white sticky top-0 z-50">
        <div
          className="flex justify-center items-center h-full absolute cursor-pointer"
          onClick={() => {
            navigate("/posts");
          }}
        >
          <img src={logo} className="w-12 h-12" />
          <img src={sketchs} className="w-24 h-24" />
        </div>
        <div className="flex justify-center items-center w-screen">
          <input
            className="bg-gray-100 drop-shadow-md pl-4 p-2 rounded-md w-1/4"
            placeholder="Szukaj"
            name="search"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-1/4 pt-20 fixed">
        <UserCard user={user.result} />
        <button
          onClick={() => {
            setOpenForm(true);
          }}
          className="bg-gray-200 my-5 mx-2 py-3 px-2 w-52 rounded-lg font-semibold text-lg"
        >
          Napisz Post
        </button>
      </div>
      <div className="flex flex-col items-center bg-gray-50">
        <UserProfile id={id} />
        {openForm && (
          <Form
            currentId={currentId}
            setCurrentId={setCurrentId}
            setOpenForm={setOpenForm}
            creator={user.result}
          />
        )}

        <Posts
          setCurrentId={setCurrentId}
          userId={user.result._id}
          onProfileId={id}
        />
      </div>
    </>
  );
}

export default UserPage;
