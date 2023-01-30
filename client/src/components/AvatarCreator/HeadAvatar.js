import React from "react";

import { ReactComponent as Skull } from "../../assets/avatarcreator/skull/skull.svg";
import { ReactComponent as Paper } from "../../assets/avatarcreator/paper/head.svg";
import { ReactComponent as Pumpkin } from "../../assets/avatarcreator/pumpkin/head.svg";

function HeadAvatar({ headType, skinColor }) {
  return (
    <>
      {headType === 1 ? (
        <Skull color={skinColor} className="relative z-20 bottom-12" />
      ) : headType === 2 ? (
        <Paper color={skinColor} className="relative z-20 bottom-9 right-1" />
      ) : (
        <Pumpkin
          color={skinColor}
          className="relative z-20 bottom-11 right-2"
        />
      )}
    </>
  );
}

export default HeadAvatar;
