import "../index.css";
import { Task } from "./Container";

interface TaskListProps {
  toDo: Task[];
  deleteTask: (id: number) => void;
  completeTask: (id: number) => void;
}

export default function TaskList({
  toDo,
  deleteTask,
  completeTask,
}: TaskListProps) {
  return (
    <ul className="listStyle">
      {toDo.map(({ id, task, completed }) => (
        <li className="listItemBox" key={id}>
          <input
            checked={completed}
            onChange={() => completeTask(id)}
            type="checkbox"
          />
          <span className={completed ? "completedStyle" : ""}>{task}</span>
          <button className="deleteBtn" onClick={() => deleteTask(id)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
