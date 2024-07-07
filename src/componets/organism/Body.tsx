import { useEffect, useState } from "react";
import AddButton from "../atom/AddButton";
import TodoItem, { TodoItemProps } from "../molecule/TodoItem";
import {
  initializeTodolist,
  localGet,
  localSet,
  userInput,
} from "../../Utlits/Util";
import { INFO } from "../../constents/infoMessage";
import APIKEY from "../../constents/apiKey";

const Body = () => {
  const [id, setId] = useState<number>(0);
  const [todoitems, setTodoitems] = useState<TodoItemProps[]>([]);

  const addItem = () => {
    const newData = { id, contents: userInput(INFO.TODO) };
    setTodoitems((prev) => {
      const updatedDate = [...prev, newData];
      localSet(updatedDate);
      localStorage.setItem(APIKEY.LOCAL, JSON.stringify(updatedDate));
      return [...prev, newData];
    });
    setId((prev) => prev + 1);
  };
  const deleteItem = (index: number) => {
    setTodoitems((prev) => {
      const updatedData = prev.filter((_, i) => i !== index);
      localStorage.setItem(APIKEY.LOCAL, JSON.stringify(updatedData));
      return updatedData;
    });
  };

  useEffect(() => {
    //initializeTodolistData()
    initializeTodolist({ setTodoitems, setId });
  }, []);

  return (
    <div className="flex flex-col items-center max-w-lg">
      <div className="bg-white p-16 shadow-lg w-full">
        {todoitems.map((v, i) => (
          <TodoItem key={v.id} {...v} onDelete={() => deleteItem(i)} />
        ))}
      </div>
      <div className="relative bottom-8">
        <AddButton handleClick={addItem} />
      </div>
    </div>
  );
};
export default Body;
