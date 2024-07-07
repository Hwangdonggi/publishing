import React from "react";

type RoundCheckBoxProps = {
  isChecked: boolean;
  handleCheck: () => void;
};

const RoundCheckBox = ({ isChecked, handleCheck }: RoundCheckBoxProps) => {
  return (
    <input
      type="checkbox"
      className="rounded-full"
      checked={isChecked}
      onChange={handleCheck}
    />
  );
};

export default RoundCheckBox;
