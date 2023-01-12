import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

import axios from "axios";

function Posts({ setCurrentId, userId }) {
  const [posts, setPosts] = useState();
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((response) => {
      console.log(response.data);
    });
    axios.get("http://localhost:5000/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      {posts &&
        posts.map((post) => (
          <>
            <Post
              post={post}
              creatorId={post.creator}
              setCurrentId={setCurrentId}
              userId={userId}
            />
          </>
        ))}
    </>
  );
}

export default Posts;
