import { Dispatch, SetStateAction } from "react";
import { TodoItemProps } from "../componets/molecule/TodoItem";
import APIKEY from "../constents/apiKey";
import { ERROR } from "../constents/errorMessage";

export const alarm = () => alert(ERROR.NOFUNCION);
export const userInput = (msg: string) => prompt(msg) || ERROR.NOCONTENT;
export const localSet = (value: any) =>
  localStorage.setItem(APIKEY.LOCAL, JSON.stringify(value));
export const localGet = () => localStorage.getItem(APIKEY.LOCAL) || "[]";

type initializeTodolistParams = {
  setTodoitems: Dispatch<SetStateAction<TodoItemProps[]>>;
  setId: Dispatch<SetStateAction<number>>;
};

export const initializeTodolist = ({
  setTodoitems,
  setId,
}: initializeTodolistParams) => {
  const mappedArray = JSON.parse(localGet()).map((v: any, i: number) => ({
    id: i,
    contents: v.contents,
  }));
  localSet(mappedArray);
  setTodoitems(mappedArray);
  setId(mappedArray.length);
};
