import Header from "./components/Header";
import { useState } from "react"
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors',
        day: 'Feb 5th at 2:30pm',
        reminder: true,

    },
    {
        id: 2,
        text: 'lunch',
        day: 'Feb 10th at 5:30pm',
        reminder: true,

    },
    {
        id: 3,
        text: 'Call',
        day: 'Feb 11h at 7:30pm',
        reminder: false,

    },
])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() *10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  //Task reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}
      />
       : 'No Tasks'}
    </div>
  );
}


export default App;
