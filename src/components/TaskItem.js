const TaskItem = ({task}) =>{
    return(
        <>
            <h1>{task.descripition}</h1>
            <p>{task.isCompleted ? "Completa" : "Não completa"}</p>
        </>
    )
}

export default TaskItem