import { useState } from "react"
import InputBox from "./inputBox"
import TaskList from "./TaskList"
import "../index.css"

export default function Container(){
    const [toDo, setToDo] = useState([]);

    return (
        <>
            <InputBox toDo={toDo} setToDo={setToDo}/>
            <TaskList toDo={toDo}/>
        </>
    )
}