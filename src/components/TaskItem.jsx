import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

import "./TaskItem.scss";
import { toast } from "react-toastify";

const TaskItem = ({ task, fetchTasks }) => {
    const handleTaskDeletion = async () => {
        try {
            await axios.delete(`http://localhost:8000/tasks/${task._id}`);
            await fetchTasks();
            toast.success(`A tarefa ${task.description} foi deletada`);
        } catch (_error) {
            toast.error("Falha ao excluir a tarefa");
        }
    };

    const handleTaskCompletionChange = async (e) => {
        try {
            await axios.patch(`http://localhost:8000/tasks/${task._id}`,{
                isCompleted: e.target.checked,
            });
            await fetchTasks();
            toast.success(`A tarefa ${task.description} foi atualizada`);
        } catch (_error) {
            toast.error('Falha ao atualizar a tarefa')
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
                    <input
                        type="checkbox"
                        defaultChecked={task.isCompleted}
                        onChange={(e) => handleTaskCompletionChange(e)}
                    />
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
                <AiFillDelete
                    size={18}
                    color="#f97474"
                    onClick={handleTaskDeletion}
                />
            </div>
        </div>
    );
};

export default TaskItem;
