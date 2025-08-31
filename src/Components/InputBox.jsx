import { useState } from "react"

export default function InputBox(){
    const [toDo, setToDo] = useState([])
    const [text, setText] = useState("")

    function handleText(e){
        setText(e.target.value)
    }

    return (
        <>
            <input className="taskBox"value={text} onChange={handleText} id="inputBox"></input>
            <button className="taskBtn">Add Task</button>
        </>
    )
}