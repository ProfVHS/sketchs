import React from "react";
import defProfIcon from "../assets/blank.png";

function UserCard({ user }) {
  return (
    <div className="bg-white h-20 flex justify-center items-center rounded-lg drop-shadow-md p-5">
      <img
        src={!user.profileIcon ? defProfIcon : user.profileIcon}
        className="rounded-full h-16 w-16"
      ></img>
      <div className="flex flex-col ml-4">
        <span className="text-2xl font-bold">@{user.username}</span>
        <span className="text-sm ml-1 text-gray-500">
          {user.firstname + " " + user.lastname}
        </span>
      </div>
    </div>
  );
}

export default UserCard;
