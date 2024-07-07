import { IoTrashOutline } from "react-icons/io5";
import { alarm } from "../../Utlits/Util";

export type TrashIconProps = {
  onDelete?: () => void;
};

const TrashIcon = ({ onDelete = alarm }: TrashIconProps) => {
  return (
    <div onClick={onDelete} style={{ display: "inline-block" }}>
      <IoTrashOutline />
    </div>
  );
};
export default TrashIcon;
