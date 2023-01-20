import React from "react";

import { ReactComponent as Hood } from "../../assets/avatarcreator/top/hood1.svg";
import { ReactComponent as Hood2 } from "../../assets/avatarcreator/top/hood2.svg";
import { ReactComponent as Top } from "../../assets/avatarcreator/top/top.svg";

function TopAvatar({ topType, skinColor, topColor }) {
  return (
    <>
      {topType === 1 ? (
        <Hood
          color={skinColor}
          fill={topColor}
          className="relative -translate-y-16 -bottom-3 -translate-x-2 z-10 hood"
        />
      ) : topType === 2 ? (
        <Hood2
          color={skinColor}
          fill={topColor}
          className="relative -translate-y-16 -bottom-3 -translate-x-2 z-10 hood"
        />
      ) : (
        <Top
          color={skinColor}
          fill={topColor}
          className="relative -translate-y-16 -bottom-3 -translate-x-2 z-10 hood"
        />
      )}
    </>
  );
}

export default TopAvatar;
