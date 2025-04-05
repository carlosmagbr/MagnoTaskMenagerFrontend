import { useState } from "react"
import TaskItem from "./components/TaskItem"
// import logo from './logo.svg';
// import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      descripition: 'Estudar programação',
      isCompleted: false,
    },
    {
      id: '2',
      descripition: 'Ler',
      isCompleted: true,
    },
  ])
  

  return (
    <>
        {tasks.map(task =>(
          <TaskItem key={task.id} task={task}/>
        ))}
    </>
  )
}

export default App;
