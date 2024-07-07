import { useState } from "react";
import Label from "../atom/ChackedLabel";
import RoundCheckBox from "../atom/RoundChaeckBox";
import TrashIcon from "../atom/TrashIcon";

export type TodoItemProps = {
  id: number;
  contents: string;
  onDelete?: () => void;
};

const TodoItem = ({ contents, onDelete }: TodoItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheck = () => setIsChecked((prev) => !prev);

  const obj = {
    roundCheckBox: {
      isChecked,
      handleCheck,
    },
    ChackedLabel: {
      isChecked,
      contents,
    },
    trashIcon: {
      onDelete,
    },
  };

  return (
    <div className="flex items-center gap-1">
      <RoundCheckBox {...obj.roundCheckBox} />
      <Label {...obj.ChackedLabel} />
      {isChecked && <TrashIcon {...obj.trashIcon} />}
    </div>
  );
};

export default TodoItem;
