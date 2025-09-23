import { useState } from "react";
import { Task } from "./Container";

interface InputBoxProps {
  toDo: Task[];
  setToDo: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function InputBox({ toDo, setToDo }: InputBoxProps) {
  const [text, setText] = useState<string>("");

  function handleText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleAddTask() {
    const task: Task = {
      id: Date.now(),
      task: text,
      completed: false,
    };
    if (task.task.trim() !== "") {
      setToDo([...toDo, task]);
    }
    setText("");
  }

  function handleEnterKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleAddTask();
    }
  }

  return (
    <div className="inputWrapper">
      <input
        className="taskStyle"
        value={text}
        onKeyDown={handleEnterKey}
        onChange={handleText}
        id="inputBox"
      ></input>
      <button className="taskStyle taskBtn" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
}
