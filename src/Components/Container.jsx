import { useState , useEffect } from "react"
import InputBox from "./InputBox"
import TaskList from "./TaskList"
import "../index.css"

export default function Container(){
    const [toDo, setToDo] = useState(() => {
        const saved = localStorage.getItem("toDo")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("toDo", JSON.stringify(toDo))
    }, [toDo])

    function deleteTask(id){
        const newArray = toDo.filter(item => item.id != id)
        setToDo(newArray)
    }

    function completeTask(id){
        const newArray = toDo.map(item => {
            const task = {
                id: item.id,
                task: item.task,
                completed: item.completed
            }
            
            if(item.id === id){
                task.completed = !task.completed
                return task
            }
            else{
                return item
            }
        })
        setToDo(newArray)
    }
    
    return (
        <>
            <InputBox toDo={toDo} setToDo={setToDo}/>
            <TaskList toDo={toDo} deleteTask={deleteTask} completeTask={completeTask}/>
        </>
    )
}