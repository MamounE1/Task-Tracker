import { useState } from "react"

export default function InputBox({ toDo, setToDo }){
    const [text, setText] = useState("")

    function handleText(e){
        setText(e.target.value)
    }

    function handleAddTask(e){
        const task = {
            id: Date.now(),
            task: text,
            completed: false
        }
        setToDo([...toDo, task])
        setText("")
    }

    return (
        <>
            <input className="taskBox"value={text} onChange={handleText} id="inputBox"></input>
            <button className="taskBtn" onClick={handleAddTask}>Add Task</button>
        </>
    )
}