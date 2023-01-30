import React, { useState } from "react";

import { GithubPicker } from "react-color";

function TopSelector({ setColor, setHeadType, topType, color }) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <>
      <div className="flex justify-center my-2 flex-col max-w-xs max-h-2 px-8 py-12 bg-accent3 shadow-md rounded-lg p-6">
        Wybór bluzy
        <div className="flex justify-center gap-x-3">
          <div
            className={`flex justify-center items-center w-1 h-1 ${
              topType === 1 ? "bg-green-100" : "bg-accent2"
            }  shadow-md rounded-lg p-6 cursor-pointer select-none`}
            onClick={() => {
              setHeadType(1);
            }}
          >
            1
          </div>
          <div
            className={`flex justify-center items-center w-1 h-1 ${
              topType === 2 ? "bg-green-100" : "bg-accent2"
            }  shadow-md rounded-lg p-6 cursor-pointer select-none`}
            onClick={() => {
              setHeadType(2);
            }}
          >
            2
          </div>
          <button
            className={`flex justify-center items-center w-1 h-1 ${
              topType === 3 ? "bg-green-100" : "bg-accent2"
            }  shadow-md rounded-lg p-6 cursor-pointer select-none`}
            onClick={() => {
              setHeadType(3);
            }}
          >
            3
          </button>
          <div
            className="w-1 h-1 p-6 shadow-md rounded-lg cursor-pointer select-none transition ease-in-out duration-200"
            style={{ backgroundColor: color }}
            onClick={() => {
              setShowColorPicker(true);
            }}
          />
        </div>
      </div>
      {showColorPicker && (
        <GithubPicker
          colors={[
            "#f3f3f3",
            "#FCB900",
            "#ff6900",
            "#7b1fa2",
            "#1273de",
            "#4caf50",
            "#955353",
          ]}
          triangle="top-right"
          onChangeComplete={(target) => {
            setColor(target.hex);
            setShowColorPicker(false);
          }}
          className="absolute left-2 top-0"
        />
      )}
    </>
  );
}

export default TopSelector;
