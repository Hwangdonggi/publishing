import React from "react";
import { FaBars } from "react-icons/fa";
import { alarm } from "../../Utlits/Util";

type SiteHeadType = {
  onClick?: () => void;
};

const SiteHead: React.FC<SiteHeadType> = ({ onClick = alarm }) => {
  return (
    <span
      onClick={onClick}
      aria-label="Menu Icon"
      style={{ cursor: "pointer" }}
    >
      <FaBars />
    </span>
  );
};

export default SiteHead;
