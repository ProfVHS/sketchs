import React, { useEffect, useState } from "react";
import defProfIcon from "../assets/blank.png";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserCard({ user }) {
  const [profile, setProfile] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${user._id}`).then((response) => {
      setProfile(response.data.profileIcon);
    });
  }, []);

  return (
    <div className="bg-white h-20 flex justify-center items-center rounded-lg drop-shadow-md p-5">
      <img
        src={!profile ? defProfIcon : profile}
        className="rounded-full h-16 w-16 object-cover object-top cursor-pointer"
        onClick={() => {
          navigate("/avatarcreator");
        }}
      ></img>
      <div className="flex flex-col ml-4">
        <span
          onClick={() => {
            navigate(`/user/${user._id}`);
          }}
          className="text-2xl font-bold cursor-pointer"
        >
          @{user.username}
        </span>
        <span className="text-sm ml-1 text-gray-500">
          {user.firstname + " " + user.lastname}
        </span>
      </div>
    </div>
  );
}

export default UserCard;
