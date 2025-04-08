import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

import "./TaskItem.scss";
import { toast } from "react-toastify";

const TaskItem = ({ task }) => {
    const  handleTaskDeletion = async () => {
        try {
            await axios.delete(`http://localhost:8000/tasks/${task._id}`)           
            toast.success(`A tarefa ${task.description} foi deletada`)
        } catch (error) {
            toast.error('Falha ao excluir a tarefa')
        }
    };
    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    className={
                        task.isCompleted
                            ? "checkbox-container-completed"
                            : "checkbox-container"
                    }
                >
                    {task.description}
                    <input type="checkbox" defaultChecked={task.isCompleted} />
                    <span
                        className={
                            task.isCompleted
                                ? "checkmark completed"
                                : "checkmark"
                        }
                    ></span>
                </label>
            </div>
            <div className="delete">
                <AiFillDelete size={18} color="#f97474"  onClick={handleTaskDeletion}/>
            </div>
        </div>
    );
};

export default TaskItem;
