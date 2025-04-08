import axios from "axios";
import { useEffect, useState } from "react";

import "./Tasks.scss";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

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
    const fetchTasks = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/tasks");
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="tasks-container">
            <h2>Minhas Tarefas</h2>
            <div className="last-tasks">
                <h3>Últimas tarefas</h3>
                <AddTask fetchTasks={fetchTasks}/>
                <div className="tasks-list">
                    {tasks
                        .filter((tasks) => tasks.isCompleted === false)
                        .map((lastTask) => (
                            <TaskItem task={lastTask} fetchTasks={fetchTasks}/>
                        ))}
                </div>
            </div>
            <div className="completed-tasks">
                <h3>Tarefas concluidas</h3>
                <div className="tasks-list">
                    {tasks
                        .filter((tasks) => tasks.isCompleted)
                        .map((completedTask) => (
                            <TaskItem task={completedTask} fetchTasks={fetchTasks}/>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
