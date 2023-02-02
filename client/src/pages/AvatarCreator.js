import React, { useRef, useState, useEffect } from "react";
import * as htmlToImage from "html-to-image";
import HeadSelector from "../components/AvatarCreator/HeadSelector";

import HeadAvatar from "../components/AvatarCreator/HeadAvatar";
import TopAvatar from "../components/AvatarCreator/TopAvatar";
import TopSelector from "../components/AvatarCreator/TopSelector";
import PantsAvatar from "../components/AvatarCreator/PantsAvatar";
import PantsSelector from "../components/AvatarCreator/PantsSelector";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function AvatarCreator() {
  const [bgColor, setBgColor] = useState("#424242");
  const [skinColor, setSkinColor] = useState("#FFF");
  const [topColor, setTopColor] = useState("#FFF");
  const [pantsColor, setPantsColor] = useState("#FFF");

  const [editMenu, setEditMenu] = useState(1);

  const [headType, setHeadType] = useState(1);
  const [topType, setTopType] = useState(1);
  const [pantsType, setPantsType] = useState(1);
  const avatar = useRef(null);

  const activeUser = JSON.parse(localStorage.getItem("profile"));

  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log(bgColor);

    const dataUrl = await htmlToImage.toSvg(avatar.current);

    const avatarData = { dataUrl };

    axios.post(
      `http://localhost:5000/users/edit/${activeUser.result._id}`,
      avatarData
    );

    navigate("/posts");
  };

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex flex-col">
          <div className="flex justify-center flex-col max-w-xs bg-accent3 shadow-md rounded-lg p-6">
            <span className="text-2xl font-poppins">
              Naszkicuj swojego avatara!
            </span>
            <div
              id="avatar"
              ref={avatar}
              className={`flex flex-col items-center pt-28`}
              style={{ backgroundColor: `${bgColor}` }}
            >
              <HeadAvatar headType={headType} skinColor={skinColor} />

              <TopAvatar
                topType={topType}
                topColor={topColor}
                skinColor={skinColor}
              />
              <PantsAvatar
                pantsType={pantsType}
                pantsColor={pantsColor}
                skinColor={skinColor}
              />
            </div>
            <div className="flex gap-2">
              <button
                className="self-start font-poppins font-bold w-1/2 text-lg text-white uppercase bg-accent1 drop-shadow-md rounded-lg my-2 p-1 transition ease-in-out duration-150 hover:shadow-hover"
                onClick={() => {
                  navigate("/posts");
                }}
              >
                Anuluj
              </button>
              <button
                className="self-end font-poppins font-bold w-1/2 text-lg text-white uppercase bg-accent1 drop-shadow-md rounded-lg my-2 p-1 transition ease-in-out duration-150 hover:shadow-hover"
                onClick={handleSubmit}
              >
                Zapisz
              </button>
            </div>
          </div>
          {editMenu === 1 && (
            <HeadSelector
              setColor={setSkinColor}
              color={skinColor}
              setHeadType={setHeadType}
              headType={headType}
            />
          )}

          {editMenu === 2 && (
            <TopSelector
              setColor={setTopColor}
              color={topColor}
              setHeadType={setTopType}
              topType={topType}
            />
          )}

          {editMenu === 3 && (
            <PantsSelector
              setColor={setPantsColor}
              color={pantsColor}
              setPantsType={setPantsType}
              pantsType={pantsType}
            />
          )}
        </div>
        <div className="m-2 flex flex-col gap-2">
          <div
            onClick={() => {
              setEditMenu(1);
            }}
            className={`flex justify-center items-center w-2 h-2 ${
              editMenu === 1 ? "bg-green-100" : "bg-accent2"
            } shadow-md rounded-lg p-8 cursor-pointer select-none`}
          >
            😐
          </div>
          <div
            onClick={() => {
              setEditMenu(2);
            }}
            className={`flex justify-center items-center w-2 h-2 ${
              editMenu === 2 ? "bg-green-100" : "bg-accent2"
            } shadow-md rounded-lg p-8 cursor-pointer select-none`}
          >
            👔
          </div>
          <div
            onClick={() => {
              setEditMenu(3);
            }}
            className={`flex justify-center items-center w-2 h-2 ${
              editMenu === 3 ? "bg-green-100" : "bg-accent2"
            } shadow-md rounded-lg p-8 cursor-pointer select-none`}
          >
            🩳
          </div>
        </div>
      </div>
      <div className="bg-[url('./assets/bg175x.png')] w-full h-screen opacity-20 absolute top-0 -z-10"></div>
    </>
  );
}

export default AvatarCreator;
