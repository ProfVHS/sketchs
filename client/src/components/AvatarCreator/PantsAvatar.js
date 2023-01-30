import React from "react";

import { ReactComponent as Pants } from "../../assets/avatarcreator/pants/pants.svg";
import { ReactComponent as Pants2 } from "../../assets/avatarcreator/pants/pants2.svg";
import { ReactComponent as Pants3 } from "../../assets/avatarcreator/pants/pants3.svg";

function PantsAvatar({ pantsType, pantsColor, skinColor }) {
  return (
    <>
      {pantsType === 1 ? (
        <Pants
          color={pantsColor}
          className="relative -translate-y-16 bottom-1 -translate-x-1 z-10 hood"
        />
      ) : pantsType === 2 ? (
        <Pants2
          color={pantsColor}
          className="relative -translate-y-16 bottom-1 -translate-x-0 z-10 hood"
        />
      ) : (
        <Pants3
          color={pantsColor}
          fill={skinColor}
          className="relative -translate-y-16 bottom-1 -translate-x-1 z-10 hood"
        />
      )}
    </>
  );
}

export default PantsAvatar;
