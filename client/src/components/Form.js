import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

function Form({ currentId, setCurrentId, setOpenForm, creator }) {
  const [postData, setPostData] = useState({
    creator: creator._id,
    message: "",
    tags: "",
    selectedFile: "",
    createdAt: new Date(),
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) {
      console.log(post);
      setPostData(post);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      console.log(postData);
      axios.post(
        `http://localhost:5000/posts/${currentId}`,
        currentId,
        postData
      );
    } else {
      axios.post("http://localhost:5000/posts", postData);
    }

    setOpenForm(false);
  };
  return (
    <>
      <div className="backdrop-blur-sm top-0 w-screen h-screen fixed z-10"></div>
      <div className="bg-white drop-shadow-md w-1/3 p-4 rounded-lg top-1/4 fixed z-10">
        <div className="flex justify-between items-center">
          <span className="self-center text-lg font-semibold">Napisz post</span>
          <div
            onClick={() => {
              setOpenForm(false);
              setCurrentId(null);
            }}
            className="self-end bg-gray-200 w-6 h-6 flex justify-center items-center p-4 rounded-full mb-3 cursor-pointer"
          >
            X
          </div>
        </div>
        <form
          className="flex flex-col"
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
        >
          <textarea
            name="message"
            placeholder="Message"
            className="bg-gray-100 p-2 drop-shadow-md rounded-md my-2 h-36"
            value={postData.message}
            onChange={(event) => {
              setPostData({ ...postData, message: event.target.value });
            }}
          ></textarea>

          <input
            name="tags"
            placeholder="Tags (np. film, śmieszne)"
            className="bg-gray-100 p-2 drop-shadow-md rounded-md my-2"
            value={postData.tags}
            onChange={(event) => {
              setPostData({
                ...postData,
                tags: event.target.value.replace(/\s/g, "").split(","),
              });
            }}
          ></input>

          <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            ></FileBase>
          </div>
          <input
            className="p-2 bg-gray-300 rounded-lg drop-shadow my-2"
            type={"submit"}
            value={"Napisz Post"}
          />
        </form>
      </div>
    </>
  );
}

export default Form;
