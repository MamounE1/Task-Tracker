export default function TaskList({toDo}){
    return (
        <ul>
            {toDo?.map(item => (
                <li key={item.id}>{item.task}</li>
            ))}
        </ul>
    )
}