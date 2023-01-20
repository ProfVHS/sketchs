import React, { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import HeadSelector from "../components/AvatarCreator/HeadSelector";

import HeadAvatar from "../components/AvatarCreator/HeadAvatar";
import TopAvatar from "../components/AvatarCreator/TopAvatar";
import TopSelector from "../components/AvatarCreator/TopSelector";
import PantsAvatar from "../components/AvatarCreator/PantsAvatar";
import PantsSelector from "../components/AvatarCreator/PantsSelector";

function AvatarCreator() {
  //   const width = 512;
  //   const height = 512;
  //   const canvas = createCanvas(width, height);
  //   const context = canvas.getContext("2d");

  //   context.fillStyle = "#764abc";
  //   context.fillRect(0, 0, width, height);

  //   const buffer = canvas.toDataURL("image/png");

  const [bgColor, setBgColor] = useState("#424242");
  const [skinColor, setSkinColor] = useState("#FFF");
  const [topColor, setTopColor] = useState("#FFF");
  const [pantsColor, setPantsColor] = useState("#FFF");

  const [editMenu, setEditMenu] = useState(1);

  const [headType, setHeadType] = useState(1);
  const [topType, setTopType] = useState(1);
  const [pantsType, setPantsType] = useState(1);

  const avatar = useRef(null);
  const test = async () => {
    console.log(bgColor);

    const dataUrl = await htmlToImage.toSvg(avatar.current);

    console.log(dataUrl);

    const link = document.createElement("a");
    link.download = "avatar.png";
    link.href = dataUrl;
    link.click();
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
              {/* <SkullEye1 className="relative -translate-y-20 -bottom-1 -translate-x-2 z-30" /> */}

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
            <button onClick={test}>test</button>
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
