import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import Form from "../components/Form";
import Posts from "../components/Posts";

import { getPosts } from "../actions/posts";
import { getUser } from "../actions/user";

import sketchs from "../assets/sketchS.svg";
import logo from "../assets/logo.svg";
import UserCard from "../components/UserCard";

function PostPage() {
  const [currentId, setCurrentId] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    currentId && setOpenForm(true);
  }, [currentId]);

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(getUser());
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <div className="flex items-center w-screen h-14 py-5 bg-white sticky top-0 z-50">
        <div className="flex justify-center items-center h-full absolute">
          <img src={logo} className="w-12 h-12" />
          <img src={sketchs} className="w-24 h-24" />
          <button
            onClick={() => {
              setOpenForm(true);
            }}
            className="bg-gray-200 m-2 p-2 w-40 rounded-lg font-semibold"
          >
            Napisz Post
          </button>
        </div>
        <div className="flex justify-center items-center w-screen">
          <input
            className="bg-gray-100 drop-shadow-md pl-4 p-2 rounded-md w-1/4"
            placeholder="Szukaj"
            name="search"
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-1/4 pt-20 absolute">
        <UserCard user={user.result} />
      </div>
      <div className="flex flex-col items-center bg-gray-50">
        {openForm && (
          <Form
            currentId={currentId}
            setCurrentId={setCurrentId}
            setOpenForm={setOpenForm}
            creator={user.result}
          />
        )}

        <Posts setCurrentId={setCurrentId} userId={user.result._id} />
      </div>
    </>
  );
}

export default PostPage;
