
import { useState, useEffect } from "react"
import axios from "axios"

import './index.scss'

import TaskItem from "./components/TaskItem"
// import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      description: 'Estudar programação',
      isCompleted: false,
    },
    {
      id: '2',
      description: 'Ler',
      isCompleted: true,
    },
  ])
  const fetchTask = async () => {
    try {
      const {data} = await axios.get('http://localhost:8000/tasks')
      setTasks(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTask()
  }, [])




  return (
    <>
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} />
      ))}
    </>
  )
}

export default App;
