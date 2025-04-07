import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
// import axios from "axios";
import { toast } from "react-toastify";

import "./AddTask.scss";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import axios from "axios";

const AddTask = ({fetchTasks}) => {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if(task.length === 0){
                return toast.error('A tarefa precisa de uma descrição para ser adicionada.')
            }

            await axios.post('http://localhost:8000/tasks',{
                description:task,
                isCompleted:false,
            })

            toast.success('Tarefa '+ task + ' cadastrada com sucesso')

            await fetchTasks()

            setTask("");

        } catch (error) {
            toast.error("Algo deu errado")
        }
    };


    return (
        <div className="add-task-container">
            <CustomInput
                label={"Adicionar Tarefa..."}
                value={task}
                onChange={onChange}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="#ffffff" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
