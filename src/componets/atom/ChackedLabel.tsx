import { ERROR } from "../../constents/errorMessage";
import { TEXTSTYLE } from "../../styles/textStyle";

export type ChackedLabel = {
  isChecked?: boolean;
  contents?: string;
};

const Label = ({
  isChecked = false,
  contents = ERROR.NOCONTENT,
}: ChackedLabel) => {
  return (
    <span className={isChecked ? TEXTSTYLE.DONE : TEXTSTYLE.TODO}>
      {contents}
    </span>
  );
};
export default Label;
