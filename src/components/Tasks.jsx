import axios from "axios";
import { useEffect, useState } from "react";

import "./Tasks.scss";
import TaskItem from "./TaskItem";

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: "1",
            description: "Estudar programação",
            isCompleted: false,
        },
        {
            id: "2",
            description: "Ler",
            isCompleted: true,
        },
    ]);
    const fetchTask = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/tasks");
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTask();
    }, []);

    return (
        <div className="tasks-container">
            <h2>Minhas Tarefas</h2>
            <div className="last-tasks">
                <h3>Últimas tarefas</h3>
                <div className="tasks-list">
                    {tasks
                        .filter((tasks) => tasks.isCompleted === false)
                        .map((lastTask) => (
                            <TaskItem task={lastTask}/>
                        ))}
                </div>
            </div>
            <div className="completed-tasks">
                <h3>Tarefas concluidas</h3>
                <div className="tasks-list">
                    {tasks
                        .filter((tasks) => tasks.isCompleted)
                        .map((completedTask) => (
                            <TaskItem task={completedTask}/>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
