import React, { useEffect, useState } from "react";

import axios from "axios";

function UserProfile({ id }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}`).then((response) => {
      setUser(response.data);
    });
  }, []);
  return (
    <div className="bg-white w-1/2 mt-4 flex items-center rounded-lg drop-shadow-md p-5">
      <img src={user.profileIcon} className="w-1/6" />
      <div className="flex flex-col ml-4">
        <span className="text-3xl font-bold">@{user.username}</span>
        <span className=" ml-1 text-gray-500">
          {user.firstname + " " + user.lastname}
        </span>
      </div>
    </div>
  );
}

export default UserProfile;
