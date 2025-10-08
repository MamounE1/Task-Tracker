import "../index.css"

export default function TaskList({ toDo, deleteTask, completeTask }){
    return (
        <ul className="listStyle">
            {toDo?.map(item => (
                <li className="listItemBox" key={item.id}><input checked={item.completed} 
                onChange={() => completeTask(item.id)} type="checkbox"></input><span className={item.completed ? "completedStyle" : ""}>
                {item.task}</span><button className="deleteBtn" onClick={() => deleteTask(item.id)}>X</button></li>
            ))}
        </ul>
    )
}