import React, { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import defAvatar from "../assets/blank.png";

import { useNavigate } from "react-router-dom";

function Post({ post, setCurrentId, creatorId, userId }) {
  const [postCreator, setPostCreator] = useState();

  const selectedFileType = post.selectedFile.charAt(5);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${creatorId}`).then((response) => {
      setPostCreator(response.data);
    });
  }, []);
  return (
    <div className="drop-shadow-md bg-white rounded-2xl my-5 p-6 w-1/2 flex flex-col items-center ">
      <div className="flex w-full justify-start items-center">
        <img
          onClick={() => {
            navigate(`/user/${creatorId}`);
          }}
          src={
            postCreator && postCreator.profileIcon
              ? postCreator.profileIcon
              : defAvatar
          }
          className="w-14 h-14 mx-2 rounded-full object-cover object-top cursor-pointer"
        ></img>
        <div className="flex flex-col items-start ">
          <span
            onClick={() => {
              navigate(`/user/${creatorId}`);
            }}
            className="text-2xl cursor-pointer"
          >
            @{postCreator && postCreator.username}
          </span>
          <span></span>
          <span className="text-sm">{moment(post.createdAt).fromNow()}</span>
        </div>
      </div>
      <div className="self-start ml-2 flex gap-2">
        {post.tags.length > 0 &&
          post.tags[0] != "" &&
          post.tags.map((tag) => (
            <div className="bg-accent1 drop-shadow-sm px-2 py-1 mt-2 rounded-lg font-bold">
              #{tag}
            </div>
          ))}
      </div>
      {selectedFileType === "i" ? (
        <img height={150} src={post.selectedFile} className="mt-4" />
      ) : selectedFileType === "v" ? (
        <video height={150} controls={true} className="mt-4">
          <source src={post.selectedFile} />
        </video>
      ) : (
        selectedFileType === "a" && (
          <audio controls={true} className="mt-4">
            <source src={post.selectedFile} />
          </audio>
        )
      )}
      <span className="self-start whitespace-normal w-full">
        {post.message}
      </span>
      <div className="flex justify-between w-full px-2 mt-5">
        <button onClick={() => {}}>Like - {post.likeCount}</button>
        {userId == creatorId && (
          <div className="flex justify-center gap-4">
            <button
              className="py-2 px-6 rounded-md bg-gray-300"
              onClick={() => setCurrentId(post._id)}
            >
              Edit
            </button>
            <button
              className="py-2 px-6 rounded-md bg-red-300"
              onClick={() => {
                axios.delete(`http://localhost:5000/posts/${post._id}`);
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
