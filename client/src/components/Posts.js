import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

import axios from "axios";

function Posts({ setCurrentId, userId, onProfileId, filter }) {
  const [posts, setPosts] = useState();
  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((response) => {
      setPosts(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      {posts &&
        posts.map((post) => {
          return onProfileId ? (
            post.creator == onProfileId && (
              <>
                <Post
                  post={post}
                  creatorId={post.creator}
                  setCurrentId={setCurrentId}
                  userId={userId}
                />
              </>
            )
          ) : filter ? (
            filter.charAt(0) == "#" ? (
              post.tags.includes(filter.substring(1, filter.lenght - 1)) && (
                <>
                  <Post
                    post={post}
                    creatorId={post.creator}
                    setCurrentId={setCurrentId}
                    userId={userId}
                  />
                </>
              )
            ) : (
              <>
                <Post
                  post={post}
                  creatorId={post.creator}
                  setCurrentId={setCurrentId}
                  userId={userId}
                />
              </>
            )
          ) : (
            <>
              <Post
                post={post}
                creatorId={post.creator}
                setCurrentId={setCurrentId}
                userId={userId}
              />
            </>
          );
        })}
    </>
  );
}

export default Posts;
