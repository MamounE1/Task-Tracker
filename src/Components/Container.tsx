import { useState, useEffect } from "react";
import InputBox from "./InputBox";
import TaskList from "./TaskList";
import "../index.css";

export interface Task {
  id: number;
  task: string;
  completed: boolean;
}

export default function Container() {
  const [toDo, setToDo] = useState<Task[]>(() => {
    const saved = localStorage.getItem("toDo");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDo));
  }, [toDo]);

  function deleteTask(id: number) {
    const newArray = toDo.filter((item) => item.id != id);
    setToDo(newArray);
  }

  function completeTask(id: number) {
    setToDo(
      toDo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <>
      <InputBox toDo={toDo} setToDo={setToDo} />
      <TaskList
        toDo={toDo}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </>
  );
}
