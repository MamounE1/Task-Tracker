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
        if(task.task != ""){
            setToDo([...toDo, task])
        }
        setText("")
    }
    
    function handleEnterKey(e){
        if(e.key === "Enter"){
            handleAddTask()
        }
    }
    
    return (
        <div className="inputWrapper">
            <input className="taskStyle"value={text} onKeyDown={handleEnterKey} onChange={handleText} id="inputBox"></input>
            <button className="taskStyle taskBtn" onClick={handleAddTask}>Add Task</button>
        </div>
    )
}