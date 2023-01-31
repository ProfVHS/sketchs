import React, { useState } from "react";
import { ChromePicker } from "react-color";

function PantsSelector({ setColor, setPantsType, pantsType, color }) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <>
      <div className="flex justify-center my-2 flex-col max-w-xs max-h-2 px-8 py-12 bg-accent3 shadow-md rounded-lg p-6">
        Wybór spodni
        <div className="flex justify-center gap-x-3">
          <div
            className={`flex justify-center items-center w-1 h-1 ${
              pantsType === 1 ? "bg-green-100" : "bg-accent2"
            }  shadow-md rounded-lg p-6 cursor-pointer select-none`}
            onClick={() => {
              setPantsType(1);
            }}
          >
            1
          </div>
          <div
            className={`flex justify-center items-center w-1 h-1 ${
              pantsType === 2 ? "bg-green-100" : "bg-accent2"
            }  shadow-md rounded-lg p-6 cursor-pointer select-none`}
            onClick={() => {
              setPantsType(2);
            }}
          >
            2
          </div>
          <button
            className={`flex justify-center items-center w-1 h-1 ${
              pantsType === 3 ? "bg-green-100" : "bg-accent2"
            }  shadow-md rounded-lg p-6 cursor-pointer select-none`}
            onClick={() => {
              setPantsType(3);
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
        <ChromePicker
          disableAlpha={true}
          color={color}
          className="absolute top-44 left-80"
          onChange={(target) => {
            setColor(target.hex);
          }}
        />
      )}
    </>
  );
}

export default PantsSelector;
