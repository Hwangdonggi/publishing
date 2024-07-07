import React from "react";
import { ERROR } from "../../constents/errorMessage";

// Label1Props 타입 정의
export type Label1Props = {
  isChecked?: boolean;
  contents?: string;
};

// PurelLabel 컴포넌트 정의
const PurelLabel: React.FC<Label1Props> = ({ contents = ERROR.NOCONTENT }) => {
  return <span className="text-white font-bold text-lg">{contents}</span>;
};

export default PurelLabel;
